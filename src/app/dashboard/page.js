"use client";
import { useSession } from "next-auth/react";
import MotionWrapper from "@/components/MotionWrapper";
import Calendar from "@/components/Calendar";
const DashBoard = () => {



const { data: session } = useSession();

if (session) {
  console.log(session.user);
}
  
  return (
    <MotionWrapper>
      {session && (
        <div className="flex flex-col gap-2 p-4">
          {" "}
          <p className="font-bold text-2xl">{`Welcome ${session.user.name}`}</p>
         
          <Calendar />
        </div>
      )}
    </MotionWrapper>
  );
   
 
}

  


export default DashBoard;