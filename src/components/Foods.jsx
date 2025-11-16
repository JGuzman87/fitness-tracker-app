"use client";
import { useState, useEffect } from "react";

const Foods = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://api.nal.usda.gov/fdc/v1/foods/search?query=avocado&api_key=blMErDQCfcirlTtf6otr5bOEeTQMTBze0Fjm4loR"
        );
        const data = await request.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return <div>Foods</div>;
};

export default Foods;
