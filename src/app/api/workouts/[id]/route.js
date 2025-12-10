import { connectDB } from "@/lib/mongodb";
import Workouts from "@/models/Workouts";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";

export async function DELETE(_, { params }) {
  try {
  await connectDB();
  const session = await getServerSession(authOptions);

      const { id } = await params;
      const userId = new mongoose.Types.ObjectId(session.user.id);

      if (!session) {
        return Response.json({ error: "Not authenticated" }, { status: 401 });
      }
  
      


    const deleteItem = await Workouts.findOneAndDelete({ _id: id, userId: userId });
    if (!deleteItem) {
      return Response.json({ error: "Workout not found or unauthorized" }, { status: 404 });
    }
    return Response.json({ message: "Workout deleted" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
