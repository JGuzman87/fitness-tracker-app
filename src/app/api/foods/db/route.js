import { connectDB } from "@/lib/mongodb";
import FoodItem from "@/models/Foods";

export async function GET() {
  await connectDB(); // Make sure DB is connected

  const foodItem = await FoodItem.find(); // Fetch all documents

  return Response.json(foodItem);
}

export async function POST(request) {
  await connectDB();

  const body = await request.json(); // read the incoming JSON

  const foodItem = await FoodItem.create(body); // insert into DB

  return Response.json(foodItem);
}
