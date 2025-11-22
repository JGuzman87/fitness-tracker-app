"use client";
import { useState, useRef } from "react";

const Foods = () => {
  const [foodItem, setFoodItem] = useState("");
  const [grams, setGrams] = useState("");
  const [nutrition, setNutrition] = useState(null);

  const handleFetch = (e) => {
    e.preventDefault();

    const fetchData = async () => {

      const query = `${grams}g ${foodItem}`
      try {
        const response = await fetch(
          `/api/foods?query=${encodeURIComponent(query)}`,
     
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.items[0]);
        setNutrition(data.items[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    setFoodItem("");
    setGrams("")
  };

  const modalRef = useRef(null);
  console.log(modalRef)

  const openModal = () => {
    modalRef.current.showModal();
  }

  return (
    <div className="grid md:grid-cols-2 gap-4 p-2">
      <button className="btn" onClick={openModal}>
        Add Food
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => modalRef.current.close()}
          >
            X
          </button>
          <p>Add Food:</p>
          <form
            className="flex flex-col gap-2 p-2 shadow-2xl"
            onSubmit={handleFetch}
          >
            <label htmlFor="food">Enter food item here: </label>
            <input
              type="text"
              name="food"
              value={foodItem}
              placeholder="food item goes here"
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
            <label htmlFor="grams">How many grams: </label>
            <input
              type="text"
              name="grams"
              value={grams}
              placeholder="food item goes here"
              onChange={(e) => setGrams(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </dialog>

      {nutrition && (
        <div className="card bg-white shadow-2xl p-2 rounded-2xl">
          <div className="card-body">
            <p className=" card-title capitalize text-center">
              {" "}
              {nutrition.name}
            </p>
            <p>Grams: {nutrition.serving_size_g} g</p>
            <p>Calories: {nutrition.calories}</p>
            <p>Protein: {nutrition.protein_g} g</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Foods;
