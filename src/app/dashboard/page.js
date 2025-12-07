"use client";
import { useSession } from "next-auth/react";
import MotionWrapper from "@/components/MotionWrapper";
import Calendar from "@/components/Calendar";
import { useModalStore } from "@/store/useModalStore";



const DashBoard = () => {





  const openModal = useModalStore((state) => state.openModal);
 

const { data: session } = useSession();

if (session) {
  console.log(session.user);
}

  
  return (
    <MotionWrapper>
      {session && (
        <div className="flex flex-col gap-2 p-4">

         <button className="btn btn-ghost w-xs" onClick={() => openModal('workout')}>Add Workout</button>
          <Calendar />
        </div>
      )}
    </MotionWrapper>
  );
   
 
}

  


export default DashBoard;