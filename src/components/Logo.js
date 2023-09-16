import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className=" flex-items-center justify-between mt-3 ">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-cyan-800 text-light flex items-center justify-center rounded-full text-2xl font-bold "
        whileHover={{
          backgroundColor: [
            "#00BCD4",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        K
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
