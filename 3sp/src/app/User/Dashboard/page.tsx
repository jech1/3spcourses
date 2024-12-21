"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"; // For authentication
import ProfileField from "../Components/ProfileField";
import CourseCard from "../Components/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const API_BASE = "https://jov63tfe7i.execute-api.us-east-1.amazonaws.com/v1";

// Sample courses array. We'll rely on API data for progress.
const courses = [
  {
    id: 1,
    slug: "WritingCourse",
    name: "Scientific Writing & Grant Proposal",
    description: "Enhance your capabilities as a writer.",
    image: "/writinglogo3SP.png?height=200&width=400",
    progress: 0,
  },
  {
    id: 2,
    slug: "ResearchCourse",
    name: "Research Methods & Analytics",
    description: "Master the basics of research.",
    image: "/researchlogo3sp.png?height=100&width=200",
    progress: 0,
  },
  {
    id: 3,
    slug: "CircuitCourse",
    name: "Microcontroller & Circuit Design",
    description: "Learn to build reliable prototypes.",
    image: "/3spcircuitlogo.png?height=100&width=200",
    progress: 0,
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
    progress: 0,
  },
  {
    id: 6,
    slug: "CaffineCourse",
    name: "Caffeine Extraction",
    description: "Master the fundamentals of research in a lab.",
    image: "/3spCaffinelogo.png?height=100&width=200",
    progress: 0,
  },
];

const formatLabel = (label: string) => {
  return label
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

// Load user data from API
async function loadUserData(userId: string) {
  const res = await fetch(`${API_BASE}/user/${userId}`);
  if (res.ok) {
    return await res.json();
  } else if (res.status === 404) {
    // No user data yet
    return null;
  } else {
    console.error("Error loading user data:", await res.text());
    return null;
  }
}

// Save user data via POST /user
async function saveUserData(userId: string, profile: unknown, coursesData: unknown) {
  const payload = {
    userId,
    profile,
    coursesProgress: coursesData,
  };

  const res = await fetch(`${API_BASE}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("Error saving user data:", await res.text());
  } else {
    console.log("User data saved successfully");
  }
}

export default function Dashboard() {
  const { data: session } = useSession();
  const userId = session?.user?.id; // Possibly undefined if user not logged in

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    school: "",
    major: "",
    studentId: "",
    graduationDate: "",
  });
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);
  const [coursesProgress, setCoursesProgress] = useState<{ [slug: string]: number }>({});
  const [displayCourses, setDisplayCourses] = useState(courses);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async () => {
    setIsProfileSubmitted(true);
    console.log("Profile updated:", profile);
    if (!userId) {
      console.warn("No userId, cannot save user data");
      return;
    }
    // Here userId is known to be defined, so we can use userId!:
    await saveUserData(userId!, profile, coursesProgress);
  };

  const isUserRoute = false; // Adjust logic if needed

  useEffect(() => {
    if (!userId) return; // If no user logged in, don't fetch

    async function initUserData() {
      const userData = await loadUserData(userId!);
      if (userData) {
        // Populate profile and courses progress
        if (userData.profile) {
          setProfile(userData.profile);
          setIsProfileSubmitted(true);
        }

        const loadedCoursesProgress = userData.coursesProgress || {};
        const updated = displayCourses.map((course) => {
          const prog = loadedCoursesProgress[course.slug] || course.progress;
          return { ...course, progress: prog };
        });

        setDisplayCourses(updated);
        setCoursesProgress(loadedCoursesProgress);
      } else {
        // No user data found
        console.log("No existing user data, starting fresh.");
      }
    }

    initUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (!session) {
    return <div>Please sign in to view your dashboard.</div>;
  }

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
          <Button onClick={handleProfileSubmit} className="mt-4 w-full">
            {isProfileSubmitted ? "Update" : "Submit"}
          </Button>
        </Card>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>

      {!isUserRoute && (
        <footer className="bg-gray-100 text-gray-600 py-12 mt-20 border-t border-gray-300">
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
                  Contact Makers:{" "}
                  <a
                    href="https://www.courseplatform.com"
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
