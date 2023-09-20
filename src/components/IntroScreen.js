import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const greetings = ["Hello", "Bonjour", "Ahoj", "你好", "Hola!"];
const duration = 0.4; // Duration for each greeting in seconds
const introDuration = 2.0; // Total intro duration in seconds

const IntroScreen = () => {
  const router = useRouter();
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    // Lock scrolling when the component mounts
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

  const navigateToMainContent = () => {
    router.push("/");
  };

  return (
    <AnimatePresence mode="wait">
      {!isIntroComplete && (
        <motion.div
          className="intro-screen min-w-screen min-h-screen bg-sky-800 flex justify-center items-center"
          key="greeting-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration }}
        >
          <motion.h1
            className="text-white text-4xl md:text-7xl cursor-pointer"
            key={greetings[currentGreetingIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration }}
          >
            {greetings[currentGreetingIndex]}
          </motion.h1>
        </motion.div>
      )}
      {isIntroComplete && (
        <motion.div
          key="main-content"
          className="flex justify-center items-center h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration }}
          onAnimationComplete={navigateToMainContent}
        >
          {/* Render your main content here */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
