
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Form = ({ btnTitle, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className={style} onClick={() => setIsOpen(true)}>
        {btnTitle}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex flex-col justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
        
            <motion.div
              className=" backdrop-blur-xs p-6 rounded-xl shadow-xl w-[90%] max-w-md flex flex-col gap-4"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="email"
                placeholder="enter email..."
                className="input input-success w-full text-black text-2xl p-1 bg-white/80"
                required
              />
              <input
                type="password"
                placeholder="enter password..."
                className="input input-success w-full text-black text-2xl p-1 bg-white/80"
                required
              />
            </motion.div>
            <Link href="/dashboard" className="hover:text-purple-400 text-3xl font-thin font-stretch-10%" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Form