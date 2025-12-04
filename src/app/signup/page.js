"use client";
import MotionWrapper from '@/components/MotionWrapper'; 
import React from 'react'

const Signup = () => {
  return (
    <MotionWrapper>
      <div><form className="flex flex-col justify-center items-center mt-20 gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          required
        />
        <input
          type="password"
          placeholder="Create a password"
          className="input input-bordered input-success w-full max-w-xs text-black text-2xl p-1 bg-white/80"
          required
        />
        <button type="submit" className="btn btn-primary text-2xl font-light w-full max-w-xs">
          Sign Up
        </button>
      </form>
    </div>
    </MotionWrapper>
  )
}

export default Signup;