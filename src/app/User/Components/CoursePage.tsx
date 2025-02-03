"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useCourseLogic } from "../hooks/useCourseLogic";
import ProgressBar from "./progressBar";
import Quiz from "./Quiz";
import NavigationButtons from "./NavigationButtons";
import { CourseData } from "../types/courseTypes";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// ----------------------
// Helper functions for progress calculation
// ----------------------
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

// ----------------------
// Main Course Component
// ----------------------
export default function CoursePage({ courseData }: { courseData: CourseData }) {
  const { data: session } = useSession();

  // The custom hook provides our currentWeek/currentChapter logic
  const { currentWeek, currentChapter, navigateToChapter } = useCourseLogic(courseData);

  // Track the user's quiz state
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Identify the current chapter data (content, quiz, video, etc.)
  const currentChapterData =
    courseData.weeks[currentWeek]?.chapters[currentChapter];
  const currentQuiz = currentChapterData?.quiz;

  // Figure out if we are at the first or last chapter
  const isFirstChapter = currentWeek === 0 && currentChapter === 0;
  const isLastChapter =
    currentWeek === courseData.weeks.length - 1 &&
    currentChapter === courseData.weeks[currentWeek].chapters.length - 1;

  // Navigation handlers
  const previousChapter = () => {
    // Scroll to the top
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
    // Scroll to the top
    window.scrollTo(0, 0);

    const currentWeekData = courseData.weeks[currentWeek];
    if (currentWeekData && currentChapter < currentWeekData.chapters.length - 1) {
      navigateToChapter(currentWeek, currentChapter + 1);
    } else if (currentWeek < courseData.weeks.length - 1) {
      navigateToChapter(currentWeek + 1, 0);
    }
  };

  // Compute overall course progress
  const progress = calculateProgress(courseData, currentWeek, currentChapter);

  // If the user is not signed in, block access
  if (!session) {
    return <div>Please sign in to view this course.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top progress bar remains the same */}
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

          {/* Watch Video button (only if videoUrl is present) */}
          {currentChapterData?.videoUrl && (
            <Button
              variant="outline"
              className="mb-6 bg-gray-200 text-black hover:bg-gray-300"
              onClick={() =>
                window.open(currentChapterData?.videoUrl ?? "", "_blank")
              }
            >
              <Play className="h-4 w-4 mr-2" /> Watch Video
            </Button>
          )}

          {/* Chapter content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: currentChapterData?.content ?? "",
            }}
          />

          {/* Optional Quiz */}
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

      {/* Navigation buttons at the bottom */}
      <NavigationButtons
        isFirstChapter={isFirstChapter}
        isLastChapter={isLastChapter}
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    </div>
  );
}
