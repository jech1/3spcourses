"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
}

export default function CourseCard({
  slug,
  name,
  description,
  image,
}: CourseCardProps) {
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
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-600">{description}</p>
        <Link href={`/User/Courses/${slug}`} className="mt-4 inline-block w-full">
          <Button variant="outline" className="w-full">
            Start Course
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
