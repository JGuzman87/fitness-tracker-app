"use client";
import { useState, useEffect } from "react";

const Calendar = () => {

    const [storedWorkouts, setStoredWorkouts] = useState([])
    const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {

        const getWorkouts = async () => {
          setIsLoading(true)
          await new Promise((resolve) => setTimeout(resolve, 1200)); 
          const res = await fetch("api/workouts");
          const data = await res.json();
          setStoredWorkouts(data);

        
        };

     
 
        getWorkouts();

      }, []);
       console.log(storedWorkouts);

  return (
    <>
      <p className="text-3xl text-center font-stretch-40%">Monthly Tracker</p>
      <div className=" grid md:grid-cols-7 md:grid-rows-4 gap-4 p-4 h-full overflow-y-auto  text-2xl text-black shadow-2xl bg-purple-500/20">
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={i}
            className="duration-300 ease-in bg-white shadow-2xl rounded-md p-2"
          >
            {i + 1}
            {isLoading &&
              storedWorkouts.map((workouts) => <p>{workouts.name}</p>)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;