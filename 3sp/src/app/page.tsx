"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedImageCarousel from "../components/AnimatedImageCarousel";
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
    name: "C++ Coding",
    description:
      "Understand programming concepts and write efficient code using one of the most utilized languages worldwide.",
    image: "/3spc++logo.png?height=100&width=200",
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
      "Master the fundamentals of research in a lab by Extracting Caffeine.",
    image: "/3spCaffinelogo.png?height=100&width=200",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#11001C] text-white py-4 px-6 flex justify-between items-center shadow-md">
        <Link href="/" className="text-2xl font-bold">
          3SP Course Platform
        </Link>
        <Button className="bg-white text-[#11001C] hover:bg-gray-200 px-6 py-2 rounded-md">
          Login
        </Button>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#11001C] to-white text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Image
              src="/3SPLogo (4).png"
              alt="EduPlatform Logo"
              width={300}
              height={300}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to 3SP Courses!</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Empower your future with our cutting-edge online courses. Learn,
              grow, and succeed in the world of technology.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#11001C] hover:bg-gray-100"
            >
              Explore Pathways
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
                      width={150}
                      height={150}
                      className="rounded-md object-cover"
                    />
                    <CardTitle>{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{course.description}</CardDescription>
                    <Link
                      href={`/${course.slug}`}
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

        {/* Footer Section */}
        <footer className="bg-gray-100 text-gray-600 py-12">
          <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Student Handbook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Course Materials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Learning Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@courseplatform.com"
                    className="hover:underline"
                  >
                    info@courseplatform.com
                  </a>
                </li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>
                  Website:{" "}
                  <a
                    href="https://www.courseplatform.com"
                    className="hover:underline"
                  >
                    www.courseplatform.com
                  </a>
                </li>
                <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
                <li>
                  Contact Makers:{" "}
                  <a
                    href="https://www.courseplatform.com"
                    className="hover:underline"
                  >
                    www.courseplatform.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
