import { connectDB } from "@/lib/mongodb";
import FoodItem from "@/models/Foods";

export async function DELETE(_, { params }) {
  await connectDB();

  const resolved = await params;
  const id = resolved.id;

  try {
    await FoodItem.findByIdAndDelete(id);
    return Response.json({ message: "Food Item deleted" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
