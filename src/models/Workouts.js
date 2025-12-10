import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    day: Number,
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// If model exists, use it. Otherwise create it.
export default mongoose.models.Workouts ||
  mongoose.model("Workouts", WorkoutSchema);
