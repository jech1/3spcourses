"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    id: 1,
    slug: "WritingCourse",
    name: "Scientific Writing & Grant Proposal",
    description: "Enhance your capabilities as a writer.",
    image: "/writinglogo3SP.png?height=200&width=400",
    progress: 75,
  },
  {
    id: 2,
    slug: "ResearchCourse",
    name: "Research Methods & Analytics",
    description: "Master the basics of research.",
    image: "/researchlogo3sp.png?height=100&width=200",
    progress: 30,
  },
  {
    id: 3,
    slug: "CircuitCourse",
    name: "Microcontroller & Circuit Design",
    description: "Learn to build reliable prototypes.",
    image: "/3spcircuitlogo.png?height=100&width=200",
    progress: 50,
  },
  {
    id: 4,
    slug: "CppCourse",
    name: "C++ Coding",
    description: "Understand programming concepts and write efficient code.",
    image: "/3spc++logo.png?height=100&width=200",
    progress: 0,
  },
  {
    id: 5,
    slug: "CADCourse",
    name: "3D Modeling CAD",
    description: "Learn the principles of CAD and develop your own models.",
    image: "/3spCADlogo.png?height=100&width=200",
    progress: 10,
  },
  {
    id: 6,
    slug: "caffeineCourse",
    name: "Caffeine Extraction",
    description: "Master the fundamentals of research in a lab.",
    image: "/3spCaffinelogo.png?height=100&width=200",
    progress: 0,
  },
];

export default function Dashboard() {

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    school: "",
    major: "",
    studentId: "",
    graduationDate: "",
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="mb-8 p-4 bg-white/80 backdrop-blur-sm">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleProfileChange}
                  placeholder="Enter your first name"
                  className="shadow-sm"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleProfileChange}
                  placeholder="Enter your last name"
                  className="shadow-sm"
                />
              </div>
              <div>
                <Label htmlFor="school">School</Label>
                <Input
                  id="school"
                  name="school"
                  value={profile.school}
                  onChange={handleProfileChange}
                  placeholder="Enter your school"
                  className="shadow-sm"
                />
              </div>
              <div>
                <Label htmlFor="major">Major</Label>
                <Input
                  id="major"
                  name="major"
                  value={profile.major}
                  onChange={handleProfileChange}
                  placeholder="Enter your major"
                  className="shadow-sm"
                />
              </div>
              <div>
                <Label htmlFor="studentId">BCC Student ID</Label>
                <Input
                  id="studentId"
                  name="studentId"
                  value={profile.studentId}
                  onChange={handleProfileChange}
                  placeholder="Enter your BCC student ID"
                  className="shadow-sm"
                />
              </div>
              <div>
                <Label htmlFor="graduationDate">Graduation Date</Label>
                <Input
                  id="graduationDate"
                  name="graduationDate"
                  type="date"
                  value={profile.graduationDate}
                  onChange={handleProfileChange}
                  className="shadow-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col bg-white/80 backdrop-blur-sm">
              <CardHeader className="flex-row gap-4 items-center">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={`${course.name} illustration`}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${course.progress > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
                <CardTitle className="text-lg">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-gray-600">{course.description}</p>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="w-full" />
                  <Link
                    href={`/User/Courses/${course.slug}`}
                    className="mt-4 inline-block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      {course.progress > 0 ? 'Continue' : 'Start'} Course
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

