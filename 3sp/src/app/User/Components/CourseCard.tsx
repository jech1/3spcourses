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
    // max-w-sm: sets a 24rem (384px) max width, mx-auto centers the card in its grid cell
    <Card className="max-w-sm mx-auto flex flex-col p-4 bg-white/80 backdrop-blur-sm shadow-md">
      <CardHeader className="flex-row gap-4 items-center">
        <div className="relative">
          <Image
            src={image}
            alt={`${name} illustration`}
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          {/* Always green dot in the top-right */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-base text-gray-600">{description}</p>

        {/* Fixed, fully-filled black bar (100% width), no label */}
        <div className="mt-4 h-2 bg-black w-full rounded" />

        <Link href={`/User/Courses/${slug}`} className="mt-4 inline-block w-full">
          <Button variant="outline" className="w-full">
            Start Course
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
