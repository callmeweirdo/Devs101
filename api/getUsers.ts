// pages/api/getUsers.js (Next.js example)
import { clerkClient } from "@clerk/clerk-expo";

export default async function handler(req, res) {
  try {
    const users = await clerkClient().users.getUserList();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}