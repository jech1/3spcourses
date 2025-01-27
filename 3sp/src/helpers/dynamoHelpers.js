import { PutCommand, UpdateCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../dynamoconfig/dynamodb"; // Use centralized client

const TABLE_NAME = "UserProgress"; // Replace with your DynamoDB table name

// Helper function to validate required fields
const validateParams = (params) => {
  for (const [key, value] of Object.entries(params)) {
    if (!value) {
      throw new Error(`Missing required parameter: ${key}`);
    }
  }
};

// Function to save or update a user profile
export const saveUserProfile = async (userId, profileData) => {
  try {
    validateParams({ userId, profileData });

    const params = {
      TableName: TABLE_NAME,
      Item: {
        UserID: userId, // Ensure key matches partition key in DynamoDB
        courseId: "Profile", // Fixed identifier for profile items
        ...profileData,
        lastUpdated: new Date().toISOString(),
      },
    };

    await ddbDocClient.send(new PutCommand(params));
    console.log("User profile saved successfully:", params);
  } catch (err) {
    console.error("Error saving user profile:", err.message, {
      userId,
      profileData,
    });
    throw err;
  }
};

// Function to update course progress
export const updateCourseProgress = async (userId, courseId, progress) => {
  try {
    validateParams({ userId, courseId, progress });

    const params = {
      TableName: TABLE_NAME,
      Key: { UserID: userId, courseId }, // Match DynamoDB key schema
      UpdateExpression: "SET progress = :progress, lastUpdated = :lastUpdated",
      ExpressionAttributeValues: {
        ":progress": progress,
        ":lastUpdated": new Date().toISOString(),
      },
    };

    await ddbDocClient.send(new UpdateCommand(params));
    console.log("Course progress updated successfully:", params);
  } catch (err) {
    console.error("Error updating course progress:", err.message, {
      userId,
      courseId,
      progress,
    });
    throw err;
  }
};

// Function to fetch user data
export const fetchUserData = async (userId) => {
  try {
    validateParams({ userId });

    const params = {
      TableName: TABLE_NAME,
      KeyConditionExpression: "UserID = :userId", // Match the partition key
      ExpressionAttributeValues: {
        ":userId": userId, // Match the variable name in ExpressionAttributeValues
      },
    };

    const { Items } = await ddbDocClient.send(new QueryCommand(params));

    if (!Items || Items.length === 0) {
      console.warn("No user data found for UserID:", userId);
      return null; // Return null if no data is found
    }

    console.log("User data fetched successfully:", Items);
    return Items;
  } catch (err) {
    console.error("Error fetching user data:", err.message, { userId });
    throw err;
  }
};
