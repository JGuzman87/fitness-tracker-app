"use client";
import { useEffect } from "react";
import { useFetchStore } from "@/store/useFetchStore";
import { useModalStore } from "@/store/useModalStore";

const Calendar = () => {
  const getFetch = useFetchStore((state) => state.getFetch);
  const item = useFetchStore((state) => state.item);
  const loading = useFetchStore((state) => state.loading);
  const openModal = useModalStore((state) => state.openModal);
  const deleteFetch = useFetchStore((state) => state.deleteFetch);
  const showSkeleton = useFetchStore((state) => state.showSkeleton);
  const setShowSkeleton = useFetchStore((state) => state.setShowSkeleton);


  

  useEffect(() => {
      setShowSkeleton(true);
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1000);
       getFetch();
      return () => clearTimeout(timer);
     
    }, []);

  const skeleton = <span className="skeleton skeleton-text">Loading...</span>;

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center font-stretch-40%">
          Monthly Tracker
        </h2>
        <p className="text-center font-thin italic text-lg">
          Click on button below to get started.
        </p>
        <button className="btn" onClick={() => openModal("workout")}>
          Add Workout
        </button>
      </div>

      <div className=" grid md:grid-cols-7 md:grid-rows-4 gap-2 p-2 overflow-y-auto  text-2xl text-black shadow-2xl bg-purple-500/20">
        {Array.from({ length: 31 }).map((_, index) => (
          <div
            key={index}
            className="duration-300 ease-in bg-white shadow-2xl  rounded-md p-2"
          >
            {index + 1}
            {!loading &&
              item &&
              item
                .filter((workouts) => Number(workouts.day) === index)
                .map((workouts) => (
                  <div
                    key={workouts._id}
                    className="flex flex-col-reverse gap-2 bg-purple-300/30 p-2 rounded-md mt-1 text-sm"
                  >
                    {showSkeleton ? (
                      <p>{skeleton}</p>
                    ) : (
                      <>
                        <ul >
                          <li>{workouts.name}</li>
                          <li>{workouts.weight} lbs</li>
                        </ul>
                        <button
                          className="btn bg-red-700 hover:bg-red-900  self-end border-0 text-white"
                          onClick={() => deleteFetch(workouts._id)}
                        >
                          x
                        </button>
                      </>
                    )}
                  </div>
                ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
