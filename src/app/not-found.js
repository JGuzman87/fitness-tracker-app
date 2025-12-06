"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



const NotFound= () => {
    const [bounce, setBounce] = useState("animate-bounce");

    useEffect(() => {
      setTimeout(() => {
        setBounce("animate-none");
      }, 1500);
    }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-9xl text-shadow-secondary ">404</h1>
      <p>Page not found</p>
      <motion.img
        src="/404-notfound.png"
        alt="404 image"
        width={500}
        height={500}
        initial={{ y: 0 }}
        animate={{ y: -40 }}
        transition={{ duration: 1.2, repeat: 2, repeatType: "reverse" }}
      />
    </div>
  );
}

export default NotFound;