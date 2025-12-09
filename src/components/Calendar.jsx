"use client";
import { useEffect } from "react";
import { useFetchStore } from "@/store/useFetchStore";
import { useModalStore } from '@/store/useModalStore';

const Calendar = () => {
  //TODO: try to get data corresponding to the correct box depending on the day
  
    const getFetch = useFetchStore((state) => state.getFetch);
    const item = useFetchStore((state) => state.item );
    const loading = useFetchStore((state) => state.loading);
    const openModal = useModalStore((state) => state.openModal);
    

    

      useEffect(() => {

        getFetch();
        
        const objArr = [
          { name: 'jorge', age: 2 },
          { name: 'joh', age: 88 },
          { name: 'coco', age: 6 },
          { name: 'nasty', age: 50 },
        ];
        

 
      }, []);

      const handleClick = () => {
        if (!item) {
          return;
      } else {
        return () => openModal('workout');
      }
    }

    const handleDelete = (index) => {  
     
      console.log("DELETE CLICKED", index);


    }



  return (
    <>
      <h2 className="text-3xl text-center font-stretch-40%">Monthly Tracker</h2>
      <p className="text-center font-thin italic text-lg">Click on a tile to get started.</p>
      
      <div className=" grid md:grid-cols-7 md:grid-rows-4 gap-4 p-4 h-full overflow-y-auto  text-2xl text-black shadow-2xl bg-purple-500/20">
        {Array.from({ length: 31 }).map((_, index) => (
          <div
            key={index}
            className="duration-300 ease-in bg-white shadow-2xl rounded-md p-2"
            onClick={handleClick}

          >
            {index + 1}
            {!loading &&  item &&
              item.map((workouts, index) => 
                <p key={index}>{workouts.name}</p>

             
              )}
              {!loading &&  item && <button className="btn btn-xs mt-2" onClick={() => handleDelete(index)}>X</button>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;