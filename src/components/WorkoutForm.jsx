"use client";
import { useState } from "react";
import { useModalStore } from "@/store/useModalStore";
const WorkoutForm = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [workoutData, setWorkoutData] = useState({
    day: "",
    name: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setWorkoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workoutData),
    });
    const data = await res.json();

   
    closeModal();
    console.log(data.day);
  };

  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
      <label htmlFor="calendar day">Calendar Day </label>
      <select
        name="day"
        value={workoutData.day}
        onChange={handleChange}
        className="p-2 rounded-md border border-gray-300 bg-white text-black"
      >
        <option value="" className="text-white bg-black/10">
          -- Select a calenday day --
        </option>
        {Array.from({ length: 31 }).map((_, i) => (
          <option key={i} value={`${i}`}>
            {i + 1}
          </option>
        ))}
        
      </select>
      <label htmlFor="Exercise name">Exercise Name: </label>
      <input
        type="name"
        id="name"
        name="name"
        placeholder="Enter Workout Name"
        onChange={handleChange}
        value={workoutData.name}
        className="border rounded-lg p-1"
        required
      />
      <label htmlFor="weight">Weight (lbs):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        placeholder="Enter weight"
        onChange={handleChange}
        value={workoutData.weight}
        className="border rounded-lg p-1"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkoutForm;
