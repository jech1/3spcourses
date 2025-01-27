"use client";
import { useState, useEffect } from "react";
import ProfileField from "../Components/ProfileField";
import CourseCard from "../Components/CourseCard";
import {
  saveUserProfile,
  //fetchUserData,
  updateCourseProgress,
} from "../../../helpers/dynamoHelpers"; // Import helpers
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react"; // For user session
import { UserRecord } from "../types/courseTypes";

// Function to format labels for profile fields
const formatLabel = (label: string) => {
  return label
    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
    .toLowerCase() // Convert all to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
    .trim(); // Remove any unnecessary whitespace
};

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

export default function Dashboard() {
  const { data: session } = useSession();
  const userId = session?.user?.email;
  // debugging session and userId
  console.log("Session Data:", session);
  console.log("Extracted userId:", userId);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    school: "",
    major: "",
    studentId: "",
    graduationDate: "",
  });
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);
  const [coursesProgress, setCoursesProgress] = useState<{
    [slug: string]: number;
  }>({});
  const [displayCourses, setDisplayCourses] = useState(courses);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async () => {
    if (!userId) {
      console.warn("No user ID found, cannot save profile.");
      return;
    }
    try {
      await saveUserProfile(userId, profile);
      console.log("Profile successfully saved.");
      setIsProfileSubmitted(true);
    } catch (error) {
      console.error("Failed to save profile:", error);
      alert("Could not save profile. Please try again.");
    }
  };

  const handleProgressUpdate = async (
    courseSlug: string,
    newProgress: number
  ) => {
    if (!userId) return;

    try {
      await updateCourseProgress(userId, courseSlug, newProgress);
      setCoursesProgress((prev) => ({ ...prev, [courseSlug]: newProgress }));
    } catch (error) {
      console.error(`Failed to update progress for ${courseSlug}:`, error);
    }
  };

  useEffect(() => {
    if (!userId) {
      console.error("No userId provided");
      return;
    }

    async function loadUserData() {
      try {
        // Log the API URL and userId for debugging
        console.log("Fetching user data for userId:", userId);
        const apiUrl = `/api/user/userData?userId=${userId}`;
        console.log("API URL:", apiUrl);

        // Fetch user data via API route
        const res = await fetch(apiUrl);

        // Check for fetch errors
        if (!res.ok) {
          const errorText = await res.text(); // Get server error message if available
          throw new Error(
            `Failed to fetch user data: ${res.status} ${res.statusText} - ${errorText}`
          );
        }

        // Parse response
        const userDataArray = await res.json();
        console.log("Fetched user data:", userDataArray);

        if (userDataArray && userDataArray.length > 0) {
          // Extract profile data
          const profileData = userDataArray.find(
            (record: UserRecord) => record.courseId === "Profile"
          );
          console.log("Extracted Profile data:", profileData);

          if (profileData) {
            console.log("Profile data:", profileData);
            setProfile({
              firstName: profileData.firstName || "",
              lastName: profileData.lastName || "",
              school: profileData.school || "",
              major: profileData.major || "",
              studentId: profileData.studentId || "",
              graduationDate: profileData.graduationDate || "",
            });
            setIsProfileSubmitted(true);
          } else {
            console.log("No profile data found.");
          }

          // Extract course progress data
          const courseProgressData = userDataArray.filter(
            (record: UserRecord) => record.courseId !== "Profile"
          );

          console.log("Course progress data:", courseProgressData);

          const loadedCoursesProgress: { [key: string]: number } =
            courseProgressData.reduce(
              (acc: { [key: string]: number }, record: UserRecord) => {
                acc[record.courseId] = record.progress || 0;
                return acc;
              },
              {}
            );

          console.log("Loaded courses progress:", loadedCoursesProgress);

          const updatedCourses = displayCourses.map((course) => ({
            ...course,
            progress: loadedCoursesProgress[course.slug] || 0,
          }));

          console.log("Updated courses with progress:", updatedCourses);

          setDisplayCourses(updatedCourses);
          setCoursesProgress(loadedCoursesProgress);
        } else {
          console.log("No existing user data found.");
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error loading user data:", error.message);
        } else {
          console.error("Error loading user data:", error);
        }
      }
    }

    loadUserData();
  }, [userId, displayCourses]);

  if (!session) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
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
            {isProfileSubmitted ? "Update Profile" : "Submit Profile"}
          </Button>
        </Card>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              progress={coursesProgress[course.slug] || 0}
              onProgressChange={(newProgress) =>
                handleProgressUpdate(course.slug, newProgress)
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
