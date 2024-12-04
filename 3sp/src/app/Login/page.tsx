"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function LoginPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration
  const router = useRouter();

  // Handle input changes for all fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  // Form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, error: "" }));

    if (isLogin) {
      // Simulate login logic
      if (
        formState.email === "user@example.com" &&
        formState.password === "password"
      ) {
        router.push("/User/Dashboard"); // Redirect to dashboard on successful login
      } else {
        setFormState((prev) => ({
          ...prev,
          error: "Invalid email or password. Please try again.",
        }));
      }
    } else {
      // Simulate registration logic
      if (formState.password !== formState.confirmPassword) {
        setFormState((prev) => ({ ...prev, error: "Passwords do not match." }));
        return;
      }
      // Simulate successful registration
      router.push("/User/Dashboard");
    }
  };

  // Toggle between login and registration forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormState({ email: "", password: "", confirmPassword: "", error: "" });
  };

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
            {isLogin ? "Login to 3SP Courses" : "Create an Account"}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin
              ? "Enter your email and password to access your account"
              : "Sign up to start learning with 3SP Courses"}
          </CardDescription>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormField
                id="email"
                label="Email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <FormField
                id="password"
                label="Password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              {!isLogin && (
                <FormField
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                />
              )}
            </div>
            {formState.error && (
              <Alert variant="destructive" className="mt-4">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formState.error}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full mt-4 bg-[#11001C] text-white hover:bg-[#2D0A4E]"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col items-center space-y-2">
          <Button variant="link" onClick={toggleForm}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </Button>
          <Button variant="link" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Reusable form field component
function FormField({
  id,
  label,
  type,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} required value={value} onChange={onChange} />
    </div>
  );
}
