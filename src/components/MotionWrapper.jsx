import { motion, AnimatePresence } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default MotionWrapper;