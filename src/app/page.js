"use client";
import Link from 'next/link';
import MotionWrapper from '@/components/MotionWrapper';
import Form from '@/components/Form';

const Home = () => {
  return (
   
      <div className='flex flex-col justify-center items-center'>
      <MotionWrapper>
         <div className="w-fit h-50 flex flex-col justify-around items-center p-4 mt-20 bg-black/30 font-stretch-condensed rounded-2xl  shadow-2xl text-3xl  font-light  ">
        <p>Welcome to the Fitness Tracker!</p>
        <p>
          Where you can track your workouts and nutrition on a daily basis.
        </p>{" "}
        <Form btnTitle="Get Started" style="btn btn-ghost hover:btn-primary" />
      </div>
      </MotionWrapper>
</div>
  );
}

export default Home;
