import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slight Y-axis offset
    visible: {
      opacity: 1,
      y: 0, // End with the original Y position
      transition: {
        duration: 1, // Adjust the duration as per your preference
      },
    },
  };

  return (
    <div className="h-full">
      <motion.div
        className="flex justify-center"
        initial="hiddn"
        animate="visible"
        variants={fadeInAnimation}
      >
        <h1 className="text-5xl pt-64 capitalize">
          first <span className="text-cyan-500">solve</span> the problem then
          write the <span className="text-cyan-500">code</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroText;
