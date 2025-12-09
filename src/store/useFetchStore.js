import { create } from "zustand";

export const useFetchStore = create((set) => ({
    item: [],
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

       const data = await res.json();

       set((state) => ({
        item:[...state.item, data]
       }));
    
    },

    getFetch: async () => {
     
        console.log(
        "FETCH CALLED"
        )
                set({ loading: true });

          try{
          const res = await fetch("/api/workouts");
            if (!res.ok) {
              set({ loading: false})
              return console.log('failed to get');
            }

           const data = await res.json();

  
           set({
            item: data,
            loading: false
           })

           console.log("THIS IS THE ITEM",set.item)
          } catch (error) {
            console.error("Failed to fetch data:",error);
       

        
        };

      },

       deleteFetch: async (id) => { 
      }
    

    
}));





     














