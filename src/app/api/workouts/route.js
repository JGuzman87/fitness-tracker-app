import { connectDB } from "@/lib/mongodb";
import Workouts from "@/models/Workouts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  try {
    await connectDB();


    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }
console.log("SESSION USER ID:", session.user.id);
    const workouts = await Workouts.find({ userId: session.user.id });
    return Response.json(workouts);
  } catch (error) {
    console.error("WORKOUTS GET ERROR:", error);
    return Response.json(
      { error: "Failed to fetch workouts" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = await request.json();
    body.userId = session.user.id; // 

     const workouts = await Workouts.find({ userId: session.user.id });


    await Workouts.create(body);
    return Response.json(workouts);
  } catch (error) {
    console.error("WORKOUTS POST ERROR:", error);
    return Response.json(
      { error: "Failed to create workout" },
      { status: 500 }
    );
  }
}
