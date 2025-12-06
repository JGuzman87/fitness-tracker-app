import React from 'react'

import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="self-center mt-50  ">
      <LoginForm
        btnTitle="Login"
        style="btn btn-ghost text-7xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-purple-500"
      />
    </div>
  );
}

export default LoginPage