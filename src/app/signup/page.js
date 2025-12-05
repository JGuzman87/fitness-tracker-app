"use client";
import MotionWrapper from '@/components/MotionWrapper'; 
import React from 'react'

const Signup = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


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

      if (!res.ok) {
        alert(data.error || "Failed to register");
        return;
      }

      alert("Account created! You can now log in.");

      // OPTIONAL: redirect to login
      window.location.href = "/login";
    };


  return (
    <MotionWrapper>
      <form className="flex flex-col justify-center items-center mt-20 gap-4">
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
        <button type="submit" className="btn bg-purple-900 text-2xl font-light w-full max-w-xs" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
  
    </MotionWrapper>
  )
}

export default Signup;