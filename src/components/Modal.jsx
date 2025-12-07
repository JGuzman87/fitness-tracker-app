"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "@/store/useModalStore";
import LoginForm from "./LoginForm";
import WorkoutForm from "./WorkoutForm";

const Modal = () => {
  const { modalName, isOpen, closeModal } = useModalStore();

  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className=" backdrop-blur-xs p-6 rounded-xl shadow-xl w-[90%] max-w-md flex flex-col gap-4"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {modalName === "login" && <LoginForm />}
              {modalName === "workout" && <WorkoutForm  />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;