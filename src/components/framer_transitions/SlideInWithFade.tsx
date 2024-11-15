import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ComponentTransitionProps {
  children: ReactNode;
}

const SlideInWithFade = ({ children }: ComponentTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Starts with no opacity and slides in from the left
      animate={{ opacity: 1, x: 0 }} // Fades in and slides to its original position
      transition={{
        type: "spring", // Uses a spring animation for a bouncy effect
        stiffness: 100, // Adjusts the bounce level
        damping: 20, // Controls the animation smoothness
        duration: 0.6, // Extends duration to make it smoother
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInWithFade;
