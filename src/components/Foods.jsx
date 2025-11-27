"use client";
import { useState, useRef, useEffect } from "react";

const Foods = () => {
  const [foodItem, setFoodItem] = useState("");
  const [grams, setGrams] = useState("");
  const [nutrition, setNutrition] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const res = await fetch('/api/foods/db');
      const data = await res.json();
     
        setNutrition(data);
    }
    fetchFoods();
  }, [])


  const handleFetch = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      const query = `${grams}g ${foodItem}`;
      try {
        const response = await fetch(
          `/api/foods?query=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();


        let item = data.items[0];
        setNutrition((prev) =>[...prev, item]);
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

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 p-2">
      <button className="btn" onClick={openModal}>
        Add Food
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box p-4">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => modalRef.current.close()}
          >
            X
          </button>
          <p className="text-center font-bold">Add Food Item</p>
          <form className="flex flex-col gap-2 p-2" onSubmit={handleFetch}>
            <label htmlFor="food">Food Item: </label>
            <input
              type="text"
              name="food"
              value={foodItem}
              placeholder="item.."
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
            <label htmlFor="grams">Grams: </label>
            <input
              type="text"
              name="grams"
              value={grams}
              placeholder="grams.."
              onChange={(e) => setGrams(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </dialog>

     
      {nutrition.length > 0 &&
        nutrition.map((foodItem) => (
          <div className="card bg-white shadow-2xl p-2 rounded-2xl" key={foodItem._id}>
            <div className="card-body">
              <p className=" card-title capitalize text-center">
                {" "}
                {foodItem.name}
              </p>
              <p>Grams: {foodItem.grams} g</p>
              <p>Calories: {foodItem.calories}</p>
              <p>Protein: {foodItem.protein} g</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Foods;
