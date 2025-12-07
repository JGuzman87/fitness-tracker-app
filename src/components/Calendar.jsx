"use client";
import { useEffect } from "react";
import { useFetchStore } from "@/store/useFetchStore";

const Calendar = () => {
  //TODO: try to get data corresponding to the correct box depending on the day
  
    const getFetch = useFetchStore((state) => state.getFetch);
    const item = useFetchStore((state) => state.item );
    const loading = useFetchStore((state) => state.loading);

    

      useEffect(() => {

        getFetch();
        
        const objArr = [
          { name: 'jorge', age: 2 },
          { name: 'joh', age: 88 },
          { name: 'coco', age: 6 },
          { name: 'nasty', age: 50 },
        ];
        

 
      }, []);



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
            {!loading &&  item &&
              item.map((workouts, i) => <p key={i}>{workouts.name}</p>)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;