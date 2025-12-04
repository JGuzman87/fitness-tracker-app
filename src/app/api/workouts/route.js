import { connectDB } from "@/lib/mongodb";
import Workouts from "@/models/Workouts";

export async function GET() {
  try{
    await connectDB(); // Make sure DB is connected

  const workouts = await Workouts.find(); // Fetch all documents

  return Response.json(workouts);
}catch (error) {
  console.error("WORKOUTS GET ERROR:", error);
  return Response.json({ error: "Failed to fetch workouts" }, { status: 500 });
}
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const workout = await Workouts.create(body);
    return Response.json(workout);
  } catch (error) {
    console.error("WORKOUTS POST ERROR:", error);
    return Response.json({ error: "Failed to create workout" }, { status: 500 });
  }
}
