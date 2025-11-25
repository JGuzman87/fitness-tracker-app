"use client";
import { useState } from "react";

const WorkoutForm = ({ stored }) => {
  const [formData, setFormData] = useState({ day: "", name: "", pounds: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        day: formData.day,
        name: formData.name,
        weight: Number(formData.pounds)
      }),
    });
    stored(formData);
    console.log(formData);
    setFormData((prev) => ({ ...prev, day: "", name: "", pounds: "" }));
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 p-2 shadow-xl rounded-2xl"
      onSubmit={handleSubmit}
    >
      
      <select value={formData.day} name="day" onChange={handleChange} required>
        <option value={""}>Select a day</option>
        {daysOfWeek.map((day) => (
          <option key={day} value={day.toLocaleLowerCase()}>
            {day}
          </option>
        ))}
      </select>
      <label htmlFor="name">Workout Type: </label>
      <input
        className="bg-gray-100 w-1/2 p-1"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="punds">Weight amount: </label>
      <input
        className="bg-gray-100 w-1/2 p-1"
        type="text"
        name="pounds"
        value={formData.pounds}
        onChange={handleChange}
        required
      />
      <button className="btn btn-ghost" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WorkoutForm;
