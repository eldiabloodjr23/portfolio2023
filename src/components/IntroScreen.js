import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const greetings = ["Hello", "Bonjour", "Ahoj", "你好", "Hola!"];
const duration = 0.7; // Duration for each greeting in seconds
const introDuration = 3.3; // Total intro duration in seconds

const IntroScreen = () => {
  const router = useRouter();
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
   
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, duration * 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsIntroComplete(true);

    
      document.body.style.overflow = "auto";
    }, introDuration * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    router.push("/");
  }, []);

  const navigateToMainContent = () => {
    router.push("/");
  };

  return (
    <AnimatePresence mode="wait">
      {!isIntroComplete && (
        <motion.div
          className="intro-screen min-w-screem min-h-screen bg-black flex justify-center items-center"
          key="greeting-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration }}
        >
          <motion.h1
            className="text-white text-7xl cursor-pointer"
            key={greetings[currentGreetingIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration }}
          >
            {greetings[currentGreetingIndex]}
          </motion.h1>
          <div ></div>
        </motion.div>
      )}
      {isIntroComplete && (
        <motion.div
          key="main-content"
          className="flex justify-center items-center h-full"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration }}
          onAnimationComplete={navigateToMainContent}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;