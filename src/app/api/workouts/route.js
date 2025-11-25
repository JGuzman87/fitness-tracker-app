import { connectDB } from "@/lib/mongodb";
import Workouts from "@/models/Workouts";

export async function GET() {
  await connectDB(); // Make sure DB is connected

  const workouts = await Workouts.find(); // Fetch all documents

  return Response.json(workouts);
}

export async function POST(request) {
  await connectDB();

  const body = await request.json(); // read the incoming JSON

  const workout = await Workouts.create(body); // insert into DB

  return Response.json(workout);
}
