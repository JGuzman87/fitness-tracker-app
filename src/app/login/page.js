"use client"
import MotionWrapper from '@/components/MotionWrapper';

import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <MotionWrapper>
      <div className="self-center mt-30 m-auto w-50">
        <LoginForm
          btnTitle="Login"
          style=" text-7xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-purple-500"
        />
      </div>
    </MotionWrapper>
  );
}

export default LoginPage