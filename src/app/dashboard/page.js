"use client";

import Foods from "@/components/Foods";
import WorkoutCards from "@/components/WorkoutCards";
import WorkoutForm from "@/components/WorkoutForm";
import { useState, useEffect } from "react";

const DashBoard = () => {

  const [stored, setStored] = useState([]);
    const [foodItem, setFoodItem] = useState("");
    const [grams, setGrams] = useState("");
    const [nutrition, setNutrition] = useState([]);

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
  const handleWorkoutDelete = async (id) => {
    await fetch(`/api/workouts/${id}`, {
      method: "DELETE",
    });
    fetchWorkouts();
  };



  useEffect(() => {
    const fetchFoods = async () => {
      const res = await fetch("/api/foods/db");
      const data = await res.json();

      setNutrition(data);
    };
    fetchFoods();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "grams") {
      setGrams(value);
    } else if (name === "food") {
      setFoodItem(value);
    }
  };

  const handleFetch = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      // Sanitize dangerous characters before encoding
      const cleanedFood = foodItem.replace(/&/g, "and");

      // Build final query string
      const query = `${grams}g ${cleanedFood}`;
      try {
        const response = await fetch(
          `/api/foods?query=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        const item = data.items?.[0];

        if (!item) {
          alert("No items found");
          return;
        }

        setNutrition((prev) => [...prev, item]);

        await fetch("/api/foods/db", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: item.name,
            grams: item.serving_size_g,
            calories: item.calories,
            protein: item.protein_g,
          }),
        });
        const updated = await fetch("/api/foods/db");
        const updatedList = await updated.json();
        setNutrition(updatedList);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
    setFoodItem("");
    setGrams("");
  };

  const refreshList = async () => {
    const updated = await fetch("/api/foods/db");
    const updatedList = await updated.json();
    setNutrition(updatedList);
  };

  const handleFoodDelete = async (id) => {
    await fetch(`/api/foods/db/${id}`, {
      method: "DELETE",
    });
    refreshList();
  };

  return (
    <div className="grid md:grid-cols-3 gap-4 p-4">
      <WorkoutForm stored={handleStored} />
      <WorkoutCards workouts={stored} deleteHandler={handleWorkoutDelete} />
      <Foods
        foodFetch={handleFetch}
        nutrition={nutrition}
        foodItem={foodItem}
        grams={grams}
        formHandle={handleChange}
        deleteHandler={handleFoodDelete}
      />
    </div>
  )
}


  


export default DashBoard;