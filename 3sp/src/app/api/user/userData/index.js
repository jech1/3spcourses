import { fetchUserData } from "@/helpers/dynamoHelpers";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.query;

  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Invalid or missing User ID" });
  }

  try {
    console.log("Fetching data for UserID:", userId);
    const data = await fetchUserData(userId); // Ensure fetchUserData matches the partition key
    res.status(200).json(data || []);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
}
