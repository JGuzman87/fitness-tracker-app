"use client";
import { useState } from "react";

const Foods = () => {
  const [foodItem, setFoodItem] = useState("");
  const [nutrition, setNutrition] = useState(null);

  const handleFetch = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "R9ySqtgc2BEIeEtS9uk72A==4y2ggWBSl6VoOQjD",
            },
          }
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
  };

  return (
    <div className="grid grid-cols-2">
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
        />
        <button type="submit" className="btn btn-success" onClick={handleFetch}>
          Submit
        </button>
      </form>

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
