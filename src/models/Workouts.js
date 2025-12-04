import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    day: String,
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// If model exists, use it. Otherwise create it.
export default mongoose.models.Workouts ||
  mongoose.model("Workouts", WorkoutSchema);
