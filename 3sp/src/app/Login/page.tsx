"use client";

import { signIn } from "next-auth/react";
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
