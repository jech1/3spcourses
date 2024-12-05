"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation"; // For reading query parameters
import Image from "next/image";
import { Button } from "@/components/ui/button";
//import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  // Read the `error` parameter from the query string
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#632a88] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        {/* Header */}
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image
              src="/3splogowbg (1).png"
              alt="3SP Logo"
              width={125}
              height={100}
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Login to 3SP Courses
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="flex flex-col items-center">
          {/* Display an error message if the error query is 'AccessDenied' */}
          {/* This is where we check if they didnt log in with a bergen email */}
          {error === "AccessDenied" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
              <strong className="font-bold">Access Denied: </strong>
              <span className="block sm:inline">
                You must log in with an @me.bergen.edu email address.
              </span>
            </div>
          )}

          <p className="text-center text-gray-600 mb-6">
            Please log in with your Bergen.edu email to continue.
          </p>
          <Button
            onClick={() => signIn("google", { callbackUrl: "/User/Dashboard" })}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign in with Google
          </Button>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col items-center space-y-2">
          <Button
            variant="link"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
