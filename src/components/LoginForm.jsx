
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import Image from 'next/image';

const LoginForm = ({ btnTitle, style }) => {


const [isOpen, setIsOpen] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading ] = useState(false)


const router = useRouter()

const handleLogin = async (e) => {
  e.preventDefault();

   setIsLoading(true);

   await new Promise((resolve) => setTimeout(resolve, 1200)); 

  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (!res.error) {
    router.push("/dashboard");
  } else {
       setIsLoading(false);

    alert("Login failed: Please verify your email or password");
  }
}

  const handleGoogleLogin = async (e) => {
       setIsLoading(true);

   await new Promise((resolve) => setTimeout(resolve, 1200)); 

   signIn("google")
  }
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
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="enter email..."
                  className="input input-success w-full text-black text-2xl p-1 bg-white/80"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="enter password..."
                  className="input input-success w-full text-black text-2xl p-1 bg-white/80"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className="hover:text-purple-400  text-3xl font-thin font-stretch-10% transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    {isLoading ? (
                      <div>
                        <span className="loading loading-dots loading-xl"></span>
                      </div>
                    ) : (
                      "Log in"
                    )}
                  </button>
                </div>
              </form>
              <p className="text-center font-thin">or</p>
              <button
                className="btn font-thin text-2xl hover:text-purple-400 "
                onClick={handleGoogleLogin}
              >
                <p>Sign in with</p>
                <Image
                  src="/Google.svg"
                  alt="google image"
                  width={50}
                  height={50}
                  className="w-fit"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoginForm;