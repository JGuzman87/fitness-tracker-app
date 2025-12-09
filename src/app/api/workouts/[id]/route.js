import { connectDB } from "@/lib/mongodb";
import Workouts from "@/models/Workouts";

export async function DELETE(_, { params }) {
  await connectDB();

  const { id } = params;

  try {
    await Workouts.findByIdAndDelete(id);
    return Response.json({ message: "Workout deleted" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
