const key = process.env.API_Key

const res = await fetch(
          `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "R9ySqtgc2BEIeEtS9uk72A==4y2ggWBSl6VoOQjD",
            },
          })