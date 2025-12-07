import { create } from "zustand";

export const useFetchStore = create((set) => ({
    data: [],
    loading: false,

    postFetch: async (workouts) => {
        const res = await fetch('/api/workouts', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(workouts)
        })

        if (!res.ok) {
        console.log("failed to fetch");
        }

        set({ data: await res.json()});
    },

    getFetch: async () => {
     
        console.log(
        "FETCH CALLED"
        )
        await new Promise((resolve) => setTimeout(resolve, 1200)); 
          try{
          const res = await fetch("/api/workouts");
            if (!res.ok) {
              
              return console.log('failed to get');
            }

            set({ data: await res.json()});
       
          } catch (error) {
            console.error("Failed to fetch data:",error);
       

        
        };

      }
    

    
}));





     














