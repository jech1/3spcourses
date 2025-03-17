"use client";

import Head from "next/head";
import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

console.log("Login Page Loaded"); // Debugging: Confirm the page renders

// Child component to handle useSearchParams safely inside Suspense
const LoginPageContent = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  console.log("Error query parameter:", error); // Debugging

  const router = useRouter();

  // Navigate back to home
  const handleBackToHome = () => {
    try {
      console.log("Navigating back to home...");
      router.push("/");
    } catch (err) {
      console.error("Error navigating back to home:", err);
    }
  };

  // Google sign-in handler
  const handleSignIn = () => {
    try {
      console.log("Initiating Google sign-in...");
      signIn("google", { callbackUrl: "/User/Dashboard" });
    } catch (err) {
      console.error("Error during Google sign-in:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#632a88] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Login | 3SP Course Platform</title>
        <meta name="description" content="Sign in to 3SP Course Platform to access your courses and dashboard. Please use your me.bergen.edu email to log in." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Login | 3SP Course Platform" />
        <meta property="og:description" content="Sign in to 3SP Course Platform to access your courses and dashboard. Please use your me.bergen.edu email to log in." />
        <meta property="og:url" content="https://3spcourses.com/login" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login | 3SP Course Platform" />
        <meta name="twitter:description" content="Sign in to 3SP Course Platform to access your courses and dashboard. Please use your me.bergen.edu email to log in." />
      </Head>

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
          {error === "AccessDenied" && (
            <>
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                <strong className="font-bold">Unauthorized Email: </strong>
                <span className="block sm:inline">
                  Please email tsnyder@bergen.edu for further instructions.
                </span>
              </div>
              {console.warn("Access Denied: Non-@me.bergen.edu email used")}
            </>
          )}

          <p className="text-center text-gray-600 mb-6">
            Please log in with your me.bergen.edu email to continue.
          </p>
          <Button
            onClick={handleSignIn}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign in with Google
          </Button>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col items-center space-y-2">
          <Button variant="link" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Wrapper Component to handle Suspense
const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
};

export default LoginPage;
