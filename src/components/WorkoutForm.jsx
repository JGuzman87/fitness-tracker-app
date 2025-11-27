"use client";
import { useState, useRef} from "react";

const WorkoutForm = ({ stored }) => {
  const [formData, setFormData] = useState({ day: "", name: "", weight: "" });

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
        weight: Number(formData.weight),
      }),
    });
    stored();
    console.log(formData);
    setFormData({ day: "", name: "", weight: "" });
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

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  }

  return (
    <div>
      <button type="button" className="btn" onClick={openModal}>Add Workout</button>
        <dialog ref={modalRef} className="modal">
        <div className="modal-box p-4">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => modalRef.current.close()}
          >
            X
          </button>
      <form
        className="flex flex-col justify-center items-center gap-2 p-2 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <select
          value={formData.day}
          name="day"
          onChange={handleChange}
          required
        >
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
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        <button className="btn btn-ghost" type="submit">
          Submit
        </button>
      </form>
      </div>
      </dialog>
    </div>
  );
};

export default WorkoutForm;
