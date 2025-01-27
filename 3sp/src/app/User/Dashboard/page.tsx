"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import CourseCard from "../Components/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample courses array
const courses = [
  {
    id: 1,
    slug: "WritingCourse",
    name: "Scientific Writing & Grant Proposal",
    description: "Enhance your capabilities as a writer.",
    image: "/writinglogo3SP.png?height=200&width=400",
  },
  {
    id: 2,
    slug: "ResearchCourse",
    name: "Research Methods & Analytics",
    description: "Master the basics of research.",
    image: "/researchlogo3sp.png?height=100&width=200",
  },
  {
    id: 3,
    slug: "CircuitCourse",
    name: "Microcontroller & Circuit Design",
    description: "Learn to build reliable prototypes.",
    image: "/3spcircuitlogo.png?height=100&width=200",
  },
  {
    id: 4,
    slug: "CppCourse",
    name: "C++ Project Design",
    description: "Understand programming concepts and write efficient code.",
    image: "/3spc++logo.png?height=100&width=200",
  },
  {
    id: 5,
    slug: "CADCourse",
    name: "3D Modeling CAD",
    description: "Learn the principles of CAD and develop your own models.",
    image: "/3spCADlogo.png?height=100&width=200",
  },
  {
    id: 6,
    slug: "CaffineCourse",
    name: "Caffeine Extraction",
    description: "Master the fundamentals of research in a lab.",
    image: "/3spCaffinelogo.png?height=100&width=200",
  },
];

export default function Dashboard() {
  const { data: session } = useSession();
  const isUserRoute = false;

  if (!session) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Subtle background animation */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-20 animate-pulse  z-0 pointer-events-none"
        style={{ animationDuration: "3s" }}
      ></div>

      <main className="container mx-auto px-0 py-8 relative z-10">
        {/* Smaller Welcome Card */}
        <Card className="mb-16 py-9 px-6 bg-white/80 backdrop-blur-sm text-center">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-3xl font-bold">
              Welcome to 3SP Courses, {session.user?.name}!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-lg text-gray-700 mt-2">
              We’re excited to have you here. Explore the courses below to begin!
            </p>
          </CardContent>
        </Card>

        {/* Courses Section */}
        <h1 className="text-4xl font-bold text-gray-800 mt-40 mb-12 text-center">
          Your Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Additional Useful Information Section - increased margin-top */}
        <section className="mt-40 p-6 bg-white/80 backdrop-blur-sm rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Useful Information
          </h2>
          <p className="text-center text-gray-700">
            Here are a few tips and resources to help you succeed in 3SP:
          </p>
          <ul className=" mt-4 list-disc list-inside text-gray-600">
            <li>Check your course pages regularly for new lessons.</li>
            <li>Connect with mentors and peers for group study sessions.</li>
            <li>Use the discussion forums to ask questions or share insights.</li>
            <li>Track your own progress and set personal learning goals.</li>
          </ul>
        </section>
      </main>

      {/* Footer: Show only if not on User routes */}
      {!isUserRoute && (
              <footer className="bg-gray-100 text-gray-600 py-12">
                <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="CoursesPathways.png"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Badges Pathways
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:underline">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link href="Merged_document.png" className="hover:underline">
                        Terms and conditions
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
                          href="mailto:jrodriguez154929@me.bergen.edu"
                          className="hover:underline"
                        >
                          3spSupport@bergen.edu (Press link to email)
                        </a>
                      </li>
                      <li>
                        Website:{" "}
                        <a
                          href="https://www.bergen.edu"
                          className="hover:underline"
                        >
                          www.bergen.edu
                        </a>
                      </li>
                      <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
                      <li>
                        Visit:{" "}
                        <a
                          href="https://bitmedia0.webflow.io"
                          className="hover:underline"
                        >
                          www.JMR-JE.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            )}
    </div>
  );
}
