"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useCourseLogic } from "../hooks/useCourseLogic";
import ProgressBar from "./progressBar";
import Quiz from "./Quiz";
import NavigationButtons from "./NavigationButtons";
import { CourseData } from "../types/courseTypes";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Helper functions for progress calculation
function getTotalChapters(courseData: CourseData): number {
  return courseData.weeks.reduce((sum, week) => sum + week.chapters.length, 0);
}

function getCurrentChapterNumber(
  courseData: CourseData,
  currentWeek: number,
  currentChapter: number
): number {
  let chaptersBefore = 0;
  for (let i = 0; i < currentWeek; i++) {
    chaptersBefore += courseData.weeks[i].chapters.length;
  }
  return chaptersBefore + currentChapter + 1; // 1-based
}

function calculateProgress(
  courseData: CourseData,
  currentWeek: number,
  currentChapter: number
): number {
  const totalChapters = getTotalChapters(courseData);
  const currentChapterNumber = getCurrentChapterNumber(
    courseData,
    currentWeek,
    currentChapter
  );
  return (currentChapterNumber / totalChapters) * 100;
}

// API constants
const API_BASE = "https://jov63tfe7i.execute-api.us-east-1.amazonaws.com";

// Load user data from API
async function loadUserData(userId: string) {
  const res = await fetch(`${API_BASE}/user/${userId}`);
  if (res.ok) {
    return await res.json();
  } else if (res.status === 404) {
    // No user data
    return null;
  } else {
    console.error("Error loading user data:", await res.text());
    return null;
  }
}

// Save user data via POST /user
async function saveUserData(
  userId: string,
  profile: unknown,
  coursesData: unknown
) {
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

export default function CoursePage({ courseData }: { courseData: CourseData }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { currentWeek, currentChapter, navigateToChapter } =
    useCourseLogic(courseData);

  const courseSlug = courseData.title.replace(/\s+/g, "_");

  // We'll store user profile and courses progress from DB
  const [profile, setProfile] = useState({});
  const [coursesProgress, setCoursesProgress] = useState<{
    [slug: string]: { currentWeek: number; currentChapter: number };
  }>({});

  const currentChapterData =
    courseData.weeks[currentWeek]?.chapters[currentChapter];
  const currentQuiz = currentChapterData?.quiz;

  const isFirstChapter = currentWeek === 0 && currentChapter === 0;
  const isLastChapter =
    currentWeek === courseData.weeks.length - 1 &&
    currentChapter === courseData.weeks[currentWeek].chapters.length - 1;

  const previousChapter = () => {
    // Scroll to the top each time the button is clicked
    window.scrollTo(0, 0);

    if (currentChapter > 0) {
      navigateToChapter(currentWeek, currentChapter - 1);
    } else if (currentWeek > 0) {
      const previousWeekIndex = currentWeek - 1;
      const previousWeek = courseData.weeks[previousWeekIndex];
      if (previousWeek) {
        const lastChapterIndex = previousWeek.chapters.length - 1;
        navigateToChapter(previousWeekIndex, lastChapterIndex);
      }
    }
  };

  const nextChapter = () => {
    // Scroll to the top each time the button is clicked
    window.scrollTo(0, 0);

    const currentWeekData = courseData.weeks[currentWeek];
    if (currentWeekData && currentChapter < currentWeekData.chapters.length - 1) {
      navigateToChapter(currentWeek, currentChapter + 1);
    } else if (currentWeek < courseData.weeks.length - 1) {
      navigateToChapter(currentWeek + 1, 0);
    }
  };

  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const progress = calculateProgress(courseData, currentWeek, currentChapter);

  // On mount, load user data from DynamoDB if logged in
  useEffect(() => {
    if (!userId) return;
    async function initUserData() {
      const userData = await loadUserData(userId!);
      if (userData) {
        setProfile(userData.profile || {});
        const loadedCoursesProgress = userData.coursesProgress || {};
        setCoursesProgress(loadedCoursesProgress);

        // If we have saved position for this course, navigate to it
        if (loadedCoursesProgress[courseSlug]) {
          const { currentWeek: savedWeek, currentChapter: savedChapter } =
            loadedCoursesProgress[courseSlug];
          navigateToChapter(savedWeek, savedChapter);
        }
      } else {
        console.log("No existing user data found, starting fresh.");
      }
    }
    initUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, courseSlug]);

  // Whenever currentWeek or currentChapter changes, save updated position to DynamoDB
  useEffect(() => {
    if (!userId) return;
    // Update coursesProgress with the new position for this course
    const updatedCoursesProgress = {
      ...coursesProgress,
      [courseSlug]: { currentWeek, currentChapter },
    };
    setCoursesProgress(updatedCoursesProgress);

    // Save to DynamoDB
    saveUserData(userId!, profile, updatedCoursesProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeek, currentChapter]);

  if (!session) {
    return <div>Please sign in to view this course.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProgressBar progress={progress} />
      <div className="flex-grow">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold mb-6">{courseData.title}</h1>
          <h2 className="text-3xl font-bold mb-4">
            {courseData.weeks[currentWeek]?.title}
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            {currentChapterData?.title}
          </h3>

          {/* Only show button if there is a valid videoUrl */}
          {currentChapterData?.videoUrl && (
            <Button
              variant="outline"
              // Darker styling with a darker hover effect
              className="mb-6 bg-gray-200 text-black hover:bg-gray-300"
              onClick={() =>
                window.open(currentChapterData?.videoUrl ?? "", "_blank")
              }
            >
              <Play className="h-4 w-4 mr-2" /> Watch Video
            </Button>
          )}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: currentChapterData?.content ?? "",
            }}
          />

          {currentQuiz && (
            <Quiz
              quizData={currentQuiz}
              quizAnswer={quizAnswer}
              setQuizAnswer={setQuizAnswer}
              showQuizResult={showQuizResult}
              setShowQuizResult={setShowQuizResult}
            />
          )}
        </div>
      </div>
      <NavigationButtons
        isFirstChapter={isFirstChapter}
        isLastChapter={isLastChapter}
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    </div>
  );
}
