import { NextResponse } from "next/server";
import { ddbDocClient } from "@/dynamoconfig/dynamodb"; // Centralized DynamoDB client
import { QueryCommand } from "@aws-sdk/lib-dynamodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId"); // Retrieve userId from query params

  // Log the received userId for debugging
  console.log("Received UserID:", userId);

  // Check if userId is valid
  if (!userId) {
    console.error("Missing or invalid UserID");
    return NextResponse.json(
      { error: "UserID is required in the query parameters" },
      { status: 400 }
    );
  }

  // Define query parameters
  const params = {
    TableName: "UserProgress", // Replace with your table name
    KeyConditionExpression: "UserID = :userId", // Match the partition key in DynamoDB
    ExpressionAttributeValues: {
      ":userId": userId,
    },
  };

  try {
    console.log("Query Parameters:", params);

    // Execute the query
    const { Items } = await ddbDocClient.send(new QueryCommand(params));
    console.log("Query Results:", Items);

    // Return results or an empty array if no data
    return NextResponse.json(Items || [], { status: 200 });
  } catch (error: any) {
    // Log detailed error for debugging
    console.error("Error querying DynamoDB:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch data from DynamoDB",
        details: error.message, // Provide additional error information
      },
      { status: 500 }
    );
  }
}
