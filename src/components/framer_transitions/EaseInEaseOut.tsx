import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ComponentTransitionProps {
  children: ReactNode;
}

const EaseInEaseOut = ({ children }: ComponentTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default EaseInEaseOut;
