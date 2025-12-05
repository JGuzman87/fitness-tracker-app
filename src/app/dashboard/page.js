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
        <div className="flex flex-col p-4">
          {" "}
          <p>{`Welcome ${session.user.name}`}</p>
          <Calendar />
        </div>
      )}
    </MotionWrapper>
  );
   
 
}

  


export default DashBoard;