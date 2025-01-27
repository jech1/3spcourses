"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  progress: number;
  onProgressChange?: (newProgress: number) => void; // Optional prop for progress updates
}

export default function CourseCard({
  slug,
  name,
  description,
  image,
  progress,
  onProgressChange, // Include onProgressChange prop
}: CourseCardProps) {
  // Handles changes to course progress if onProgressChange is provided
  const handleProgress = (newProgress: number) => {
    if (onProgressChange) {
      onProgressChange(newProgress);
    }
  };

  return (
    <Card className="flex flex-col bg-white/80 backdrop-blur-sm">
      <CardHeader className="flex-row gap-4 items-center">
        <div className="relative">
          <Image
            src={image}
            alt={`${name} illustration`}
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
            <div
              className={`w-3 h-3 rounded-full ${
                progress > 0 ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">
              {progress}%
            </span>
          </div>
          <Progress value={progress} className="w-full" />
          <Link
            href={`/User/Courses/${slug}`}
            className="mt-4 inline-block w-full"
          >
            <Button variant="outline" className="w-full">
              {progress > 0 ? "Continue" : "Start"} Course
            </Button>
          </Link>
          {/* Example usage for progress change */}
          {onProgressChange && (
            <Button
              onClick={() => handleProgress(progress + 10)} // Simulate progress update
              className="mt-2"
            >
              Update Progress
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
