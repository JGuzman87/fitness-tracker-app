"use client"
import { useEffect, useState} from 'react';
import Foods from '@/components/Foods';

const FoodPage = () => {

  const [foodItem, setFoodItem] = useState("");
    const [grams, setGrams] = useState("");
    const [nutrition, setNutrition] = useState([]);
  
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

      if (name === 'grams') {
        setGrams(value)
      } else if(name === 'food') {
        setFoodItem(value)
      }
    }
  
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
  return (
    <div className='grid grid-cols-3 mt-4 '>
      <Foods foodFetch={handleFetch} nutrition={nutrition} foodItem={foodItem} grams={grams} formHandle={handleChange}/>
    </div>
  )
}

export default FoodPage;