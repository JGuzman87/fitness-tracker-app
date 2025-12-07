import { connectDB } from "@/lib/mongodb";
import FoodItem from "@/models/Foods";

export async function GET() {
  try{
    await connectDB(); // Make sure DB is connected

  const foodItem = await FoodItem.find(); // Fetch all documents

  return Response.json(foodItem);
}catch (error) {
    return new Response("Failed to fetch food items", { status: 500 });
  }
}

export async function POST(request) { 
  try{
    await connectDB();

  const body = await request.json(); // read the incoming JSON

  const foodItem = await FoodItem.create(body); // insert into DB

  return Response.json(foodItem);

} catch (error) {
    return new Response("Failed to create food item", { status: 500 });
  }
}