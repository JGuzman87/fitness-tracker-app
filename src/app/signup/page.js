"use client";
import MotionWrapper from "@/components/MotionWrapper";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      alert("Failed to register");

      return;
    }

    alert("Account created! You can now log in.");

    //redirect to home
    window.location.href = "/";
  };

  return (
    <MotionWrapper>
      <form
        className="flex flex-col justify-center items-center mt-20 gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create a password"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn bg-purple-900 text-2xl font-light w-full max-w-xs"
        >
          Sign Up
        </button>
      </form>
    </MotionWrapper>
  );
};

export default Signup;
