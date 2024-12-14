"use client";

import { useState } from "react";
import ProfileField from "../Components/ProfileField";
import CourseCard from "../Components/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// this function helps us format the labels for the profile fields
const formatLabel = (label: string) => {
  return label
    .replace(/([A-Z])/g, " $1") // add a space before uppercase letters
    .toLowerCase() // convert all to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()) // capitalize the first letter of each word
    .trim(); // remove any unnecessary leading/trailing whitespace
};

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

  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = () => {
    setIsProfileSubmitted(true);
    // setEditingField(null);
    // setIsEditing(false);
    // here we will send the profile data to a server
    console.log("Profile updated:", profile);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-20 animate-pulse"
        style={{ animationDuration: "3s" }}
      ></div>
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Card className="mb-8 p-4 bg-white/80 backdrop-blur-sm">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(profile).map((key) => (
                <ProfileField
                  key={key}
                  name={key}
                  label={formatLabel(key)}
                  value={profile[key as keyof typeof profile]}
                  isEditable={!isProfileSubmitted}
                  onChange={handleProfileChange}
                  onEdit={() => setIsProfileSubmitted(false)}
                  type={key === "graduationDate" ? "date" : "text"}
                />
              ))}
            </div>
          </CardContent>

          {/* Logic for profile section */}
          <Button onClick={handleProfileSubmit} className="mt-4 w-full">
            {isProfileSubmitted ? "Update" : "Submit"}
          </Button>
        </Card>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
}
