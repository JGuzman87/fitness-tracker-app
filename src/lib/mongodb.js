import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  // If connection already exists, skip re-connecting
  try {
    //connect to db
    await mongoose.connect(process.env.MONGO_URI);

    isConnected = true; //set Connected to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB error:", error);
  }
};