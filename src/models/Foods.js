import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema(
  {
    name: {type:String, required: true},
    grams: Number,
    calories:Number,
    protein: Number,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// If model exists, use it. Otherwise create it.
export default mongoose.models.FoodItem ||
  mongoose.model("FoodItem", FoodItemSchema);