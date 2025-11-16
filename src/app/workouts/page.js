"use client"
import {useState, useEffect } from 'react'
import WeekCards from '@/components/WeekCards';
import WorkoutForm from '@/components/WorkoutForm';

const WorkoutPage = () => {

  const [stored, setStored] = useState([]);


  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("workout")) || [];
     if(saved) {
      setStored(saved)
     }
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  }, []);

  const handleStored = (savedWorkout) => {

  const dataWithID = { id: crypto.randomUUID(), ...savedWorkout };
    
  const newData = [...stored, dataWithID]

setStored(newData);
localStorage.setItem('workout', JSON.stringify(newData))

  
  };


  return (
    <div className='grid md:grid-cols-3 gap-4 p-4'>
      <WorkoutForm stored={handleStored} />
      <WeekCards workout={stored} />
    </div>
  )
}

export default WorkoutPage;