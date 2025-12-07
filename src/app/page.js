"use client";

import MotionWrapper from '@/components/MotionWrapper';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';



const Home = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const openModal = useModalStore((state) => state.openModal);


  return (
    <div className="flex flex-col justify-center items-center">
      <MotionWrapper>
        {!session ? (
          <div className="w-fit h-50 flex flex-col justify-around items-center p-4 mt-20 bg-black/10 font-stretch-condensed rounded-xl  shadow-2xl text-3xl  font-light  ">
            <p>
              Welcome to the My Fitness Tracker!
              <br /> Where you can track your workouts reps and log your meals
              to get calories and protein data.
            </p>
            <button
              className="btn text-2xl transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 font-thin"
              onClick={() => openModal("login")}
            >
              Long in{" "}
            </button>
          </div>
        ) : (
          <div className="w-fit h-50 flex flex-col justify-around items-center p-4 mt-20 bg-black/10 font-stretch-condensed rounded-xl  shadow-2xl text-3xl  font-light  ">
            <p>
              {`Welcome to your fitness tracker ${session.user.name}!  Begin adding your meals and workouts in your Dashboard`}
            </p>
            <button
              className="btn text-2xl transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 font-thin"
              onClick={() => router.push("/dashboard")}
            >
              Visit Dashoard
            </button>
          </div>
        )}
      </MotionWrapper>
    </div>
  );
}

export default Home;
