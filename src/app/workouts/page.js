"use client";
import { useState, useEffect } from "react";
import WeekCards from "@/components/WeekCards";
import WorkoutForm from "@/components/WorkoutForm";

const WorkoutPage = () => {
  const [stored, setStored] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const res = await fetch("/api/workouts");
    const data = await res.json();
    setStored(data);
  };

  const handleStored = async () => {


    fetchWorkouts();
  };
  const handleDelete = async (id) => {
    await fetch(`/api/workouts/${id}`, {
      method: "DELETE"
    })
    fetchWorkouts()
  };

  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      <WorkoutForm stored={handleStored} />
      <WeekCards workouts={stored} deleteHandler={handleDelete} />
    </div>
  );
};

export default WorkoutPage;
