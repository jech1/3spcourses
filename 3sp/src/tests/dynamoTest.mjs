// Import environment variables
import "dotenv/config";

// Import AWS SDK v3 modules
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

// Validate environment variables
if (
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.AWS_REGION
) {
  console.error(
    "AWS credentials or region are not set in the environment variables."
  );
  process.exit(1); // Exit with an error code
}

// Log environment variables for verification
console.log(
  "AWS_ACCESS_KEY_ID:",
  process.env.AWS_ACCESS_KEY_ID ? "Loaded" : "Not Defined"
);
console.log(
  "AWS_SECRET_ACCESS_KEY:",
  process.env.AWS_SECRET_ACCESS_KEY ? "Loaded" : "Not Defined"
);
console.log("AWS_REGION:", process.env.AWS_REGION ? "Loaded" : "Not Defined");

// Initialize DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Test DynamoDB: List Tables
async function testDynamoDBConnection() {
  try {
    const command = new ListTablesCommand({});
    const response = await client.send(command);
    console.log("DynamoDB Tables:", response.TableNames);
  } catch (error) {
    console.error("Error connecting to DynamoDB:", error.message);
  }
}

// Run the test function
testDynamoDBConnection();
