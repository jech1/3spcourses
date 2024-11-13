"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
    name: "Introduction to Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    name: "React Fundamentals",
    description:
      "Master the basics of React and build interactive user interfaces.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    name: "Node.js Backend Development",
    description:
      "Learn to build scalable server-side applications with Node.js and Express.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    name: "Database Design and SQL",
    description:
      "Understand relational database concepts and write efficient SQL queries.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    name: "DevOps and Deployment",
    description:
      "Learn the principles of DevOps and how to deploy applications to the cloud.",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    name: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps using React Native.",
    image: "/placeholder.svg?height=100&width=200",
  },
];

const certificates = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    alt: "Web Development Certificate",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    alt: "React Certificate",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    alt: "Node.js Certificate",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=400",
    alt: "SQL Certificate",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=400",
    alt: "DevOps Certificate",
  },
];

export default function Home() {
  const [currentCertificate, setCurrentCertificate] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#11001C] to-white text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="EduPlatform Logo"
              width={300}
              height={150}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to EduPlatform</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Empower your future with our cutting-edge online courses. Learn,
              grow, and succeed in the world of technology.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#11001C] hover:bg-gray-100"
            >
              Explore Courses
            </Button>
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
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <CardTitle>{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#11001C]">
              Our Certificates
            </h2>
            <div className="relative w-full max-w-2xl mx-auto h-[300px] overflow-hidden rounded-lg shadow-lg">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentCertificate ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={index !== currentCertificate}
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-center mt-4 text-gray-600">
              Slide {currentCertificate + 1} of {certificates.length}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
