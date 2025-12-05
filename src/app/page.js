"use client";

import MotionWrapper from '@/components/MotionWrapper';
import Form from '@/components/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Calendar from '@/components/Calendar';

const Home = () => {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center">
      <MotionWrapper>
       { !session ? <div className="w-fit h-50 flex flex-col justify-around items-center p-4 mt-20 bg-black/10 font-stretch-condensed rounded-xl  shadow-2xl text-3xl  font-light  ">
          <p>
            Welcome to the My Fitness Tracker!< br /> Where you can track your workouts reps and log your meals to get calories and protein data.
          </p>
 
          <Form
            btnTitle="Get Started"
            style="btn btn-ghost hover:bg-purple-900"
          />
        </div> : <div className="w-fit h-50 flex flex-col justify-around items-center p-4 mt-20 bg-black/10 font-stretch-condensed rounded-xl  shadow-2xl text-3xl  font-light  ">
          <p>
            {`Welcome to your fitness tracker ${session.user.name}!  Begin adding your meals and workouts in your Dashboard`}
            </p>
            <button className='btn btn-ghost' onClick={() => router.push('/dashboard')}>Visit Dashoard</button>
      
        
        </div>}
      </MotionWrapper>
    </div>
  );
}

export default Home;
