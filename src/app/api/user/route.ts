import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const dbClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = "CourseProgress";

// Handle POST request (Save Progress)
export async function POST(req: NextRequest) {
  console.log("Received POST request");

  try {
    const body = await req.json();
    if (!body.userID || !body.courseID || body.progress === undefined) {
      console.error("Missing required fields:", body);
      return NextResponse.json(
        { error: "Missing userID, courseID, or progress" },
        { status: 400 }
      );
    }

    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        userID: body.userID,
        courseID: body.courseID,
        progress: body.progress,
      },
    });

    console.log(" Sending PutCommand to DynamoDB:", command);
    await dbClient.send(command);
    console.log("Progress saved!");

    return NextResponse.json({ message: "Progress saved!" }, { status: 200 });
  } catch (error: unknown) {
    console.error(" DynamoDB POST Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}

// ✅ Handle GET request (Retrieve Progress)
export async function GET(req: NextRequest) {
  console.log("🔹 Received GET request:", req.url);

  try {
    const { searchParams } = new URL(req.url);

    // Trim AND explicitly remove newlines and extra spaces
    const userID = searchParams.get("userID")?.replace(/\s+/g, "").trim();
    const courseID = searchParams.get("courseID")?.replace(/\s+/g, "").trim();

    if (!userID || !courseID) {
      console.error("Missing userID or courseID");
      return NextResponse.json(
        { error: "Missing userID or courseID" },
        { status: 400 }
      );
    }

    console.log("Fetching progress for:", { userID, courseID });

    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: { userID, courseID },
    });

    const response = await dbClient.send(command);
    console.log("Fetched progress:", response.Item);

    return NextResponse.json(response.Item || { progress: 0 }, { status: 200 });
  } catch (error: unknown) {
    console.error("DynamoDB GET Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}

// Handle PUT request (Update Progress)
export async function PUT(req: NextRequest) {
  console.log("Received PUT request");

  try {
    const body = await req.json();
    if (!body.userID || !body.courseID || body.progress === undefined) {
      console.error(" Missing required fields:", body);
      return NextResponse.json(
        { error: "Missing userID, courseID, or progress" },
        { status: 400 }
      );
    }

    const command = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: { userID: body.userID, courseID: body.courseID },
      UpdateExpression: "SET progress = :p",
      ExpressionAttributeValues: { ":p": body.progress },
      ReturnValues: "ALL_NEW", // Ensures we return the updated item
    });

    const response = await dbClient.send(command);
    console.log("DynamoDB Update Response:", response);

    return NextResponse.json(
      { message: "Progress updated!", updatedData: response.Attributes },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("DynamoDB PUT Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}
