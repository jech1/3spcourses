"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TakeCourseButtonProps {
  redirectUrl: string; // The URL to redirect to after login
}

export default function TakeCourseButton({
  redirectUrl,
}: TakeCourseButtonProps) {
  const router = useRouter();

  const handleTakeCourse = () => {
    // Redirect user to login with the course redirect parameter
    router.push(`/Login?redirect=${redirectUrl}`);
  };

  return (
    <Button
      size="lg"
      onClick={handleTakeCourse}
      //className="bg-black hover:bg-blue-600"
    >
      Take Course
    </Button>
  );
}
