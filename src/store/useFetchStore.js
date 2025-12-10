import { create } from "zustand";
import { useState, useEffect } from "react";

export const useFetchStore = create((set) => ({
  item: [],
  loading: false,
  showSkeleton: false,
 
  postFetch: async (workouts) => {
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workouts),
    });

    if (!res.ok) {
      console.log("failed to fetch");
    }

    const data = await res.json();

    set((state) => ({
      item: [...state.item, data],
    }));
  },

  getFetch: async () => {
    console.log("FETCH CALLED");
    set({ loading: true });
    try {
      const res = await fetch("/api/workouts");
      if (!res.ok) {
        set({ loading: false });
        return console.log("failed to get");
      }

      const data = await res.json();

      set({
        item: data,
        loading: false,
      });

    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },

  deleteFetch: async (id) => {
    console.log(id);
    try {
      const res = await fetch(`/api/workouts/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        set((state) => ({
          item: state.item.filter((workout) => workout._id !== id),
        }));
      }
    } catch (error) {
      console.error("Failed to delete workout:", error);
    }
  },

  setShowSkeleton: (value) => set({ showSkeleton: value }),
}));
