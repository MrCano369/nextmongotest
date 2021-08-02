import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const users = await db.collection("Users").find({}).toArray();
  res.json(users);
};
