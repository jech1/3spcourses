"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedImageCarousel from "../components/ui/AnimatedImageCarousel";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  {
    id: 1,
    slug: "WritingOverview",
    name: "Scientific Writing & Grant Proposal",
    description:
      "This certification is designed to enhance your capabilities as a writer.",
    image: "/writinglogo3SP.png?height=200&width=400",
  },
  {
    id: 2,
    slug: "ResearchOverview",
    name: "Research Methods & Analytics",
    description:
      "Master the basics of research from finding credible sources to having professional citations.",
    image: "/researchlogo3sp.png?height=100&width=200",
  },
  {
    id: 3,
    slug: "CircuitOverview",
    name: "Microcontroller & Circuit Design",
    description:
      "Learn to build reliable prototypes with coding in c++, designing circuits, and soldering components.",
    image: "/3spcircuitlogo.png?height=100&width=200",
  },
  {
    id: 4,
    slug: "CppOverview",
    name: "C++ Project Design",
    description:
      "Understand programming concepts and write efficient code using one of the most utilized languages worldwide.",
    image: "/3spC++logo.png?height=100&width=200", 
  },
  {
    id: 5,
    slug: "CADOverview",
    name: "3D Modeling CAD",
    description:
      "Learn the principles of CAD and how to develop your own models through onshape.",
    image: "/3spCADlogo.png?height=100&width=200",
  },
  {
    id: 6,
    slug: "caffeineOverview",
    name: "Caffeine Extraction",
    description:
      "Master the fundamentals of research in a lab by Extracting Caffeine. ",
    image: "/3spCaffinelogo.png?height=100&width=200",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#632a88] to-white text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/3SPLogo (4).png"
              alt="EduPlatform Logo"
              width={300}
              height={300}
              className="mx-auto mb-8"
              priority // Load this image first
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to 3SP Courses!</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Empower your future with our cutting-edge online courses. Learn,
              grow, and succeed in the world of technology as a Stem Student
              Scholar.
            </p>
            <a
              href="CoursesPathways.png"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <Button
                size="lg"
                className="bg-white text-[#11001C] hover:bg-gray-100"
              >
                Explore Pathways
              </Button>
            </a>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#11001C]">
              Our Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader className="flex-row gap-4 items-center">
                    <Image
                      src={course.image}
                      alt={`${course.name} illustration`}
                      width={150}
                      height={150}
                      className="rounded-md object-cover"
                    />
                    <CardTitle>{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{course.description}</CardDescription>
                    <Link
                      href={`/CourseOverviews/${course.slug}`}
                      className="mt-4 inline-block"
                    >
                      <Button variant="outline">View Course</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Image Carousel Section */}
        <div style={{ marginTop: "120px", marginBottom: "0px" }}>
          <AnimatedImageCarousel />
        </div>
      </main>
    </div>
  );
}
