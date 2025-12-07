
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { useModalStore } from '@/store/useModalStore';



const LoginForm = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading ] = useState(false)

  const closeModal = useModalStore((state) => state.closeModal);

const router = useRouter()

const handleLogin = async (e) => {
  e.preventDefault();

   setIsLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 1200)); 
  closeModal();
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

    signIn("google", { callbackUrl: "/dashboard" });
 

  }

  return (
    <>
      <div className="flex flex-col gap-4">
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
          className="btn font-thin text-2xl m-auto max-w-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
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
      </div>
    </>
  );
      }

      
    
  

    

export default LoginForm;