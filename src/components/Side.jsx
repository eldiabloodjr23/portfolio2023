import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const closeSide = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      controls.start({ x: 0 }); // Animate to the open position
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ x: '100%' }} // Initial position, off-screen to the right
      animate={{ x: isOpen ? 0 : '100%' }} // Animate to show or hide
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed ${isOpen ? 'bottom-4 end-4' : '-right-64'} z-50 flex items-center justify-center gap-4 rounded-lg bg-cyan-800 px-5 py-3 text-white`}
    >
      <a
        href="https://kamil-fullstackdeveloper.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium hover:opacity-75"
      >
        Check out my 3D portfolio💡👉
      </a>

      <button
        className="rounded bg-white/20 p-1 hover:bg-white/10"
        onClick={closeSide}
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Side;
