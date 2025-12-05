"use client";
import { useSession } from "next-auth/react";
const DashBoard = () => {



const { data: session } = useSession();

if (session) {
  console.log(session.user);
}
  
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      {session && <p>DashBoard Page</p>}
    </div>
  )
}


  


export default DashBoard;