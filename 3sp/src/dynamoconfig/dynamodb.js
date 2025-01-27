import "dotenv/config";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

//Ensure environment variables are loaded
// if (
//   !process.env.AWS_ACCESS_KEY_ID ||
//   !process.env.AWS_SECRET_ACCESS_KEY ||
//   !process.env.AWS_REGION
// ) {
//   throw new Error(
//     "AWS credentials or region are not set in the environment variables."
//   );
// }

// Initialize DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Initialize DynamoDB Document Client
const ddbDocClient = DynamoDBDocumentClient.from(client);

console.log("DynamoDB Document Client initialized successfully.");
console.log("AWS_REGION:", process.env.AWS_REGION);
console.log(
  "AWS_ACCESS_KEY_ID:",
  process.env.AWS_ACCESS_KEY_ID ? "Loaded" : "Not Loaded"
);
console.log(
  "AWS_SECRET_ACCESS_KEY:",
  process.env.AWS_SECRET_ACCESS_KEY ? "Loaded" : "Not Loaded"
);

export { ddbDocClient };
