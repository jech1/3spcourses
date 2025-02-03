import { CourseData } from "@/app/User/types/courseTypes";
import { useState, useEffect, useCallback } from "react";

// This is a custom hook that will be used to manage the course progress and navigation.
export interface Progress {
  week: number;
  chapter: number;
  completed: string[];
}

export const useCourseLogic = (courseData: CourseData) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem("courseProgress");
      return savedProgress
        ? JSON.parse(savedProgress)
        : { week: 0, chapter: 0, completed: [] };
    }
    return { week: 0, chapter: 0, completed: [] };
  });
  // This function will be used to update the progress when a chapter is completed.
  const updateProgress = useCallback((week: number, chapter: number) => {
    setProgress((prev) => {
      const newCompleted = [...prev.completed];
      const key = `${week}-${chapter}`;
      if (!newCompleted.includes(key)) {
        newCompleted.push(key);
      }
      const newProgress: Progress = { week, chapter, completed: newCompleted };
      if (typeof window !== "undefined") {
        localStorage.setItem("courseProgress", JSON.stringify(newProgress));
      }
      return newProgress;
    });
  }, []);
  // This function will be used to navigate to a specific chapter.
  const navigateToChapter = useCallback(
    (weekIndex: number, chapterIndex: number) => {
      const week = courseData.weeks[weekIndex];
      if (week && week.chapters[chapterIndex]) {
        setCurrentWeek(weekIndex);
        setCurrentChapter(chapterIndex);
        updateProgress(weekIndex, chapterIndex);
      }
    },
    [courseData.weeks, updateProgress]
  );
  // This effect will navigate to the last completed chapter when the course data is loaded.
  useEffect(() => {
    navigateToChapter(progress.week, progress.chapter);
  }, [navigateToChapter, progress.week, progress.chapter]);

  // This function will calculate the overall progress of the course.
  const calculateOverallProgress = () => {
    const totalChapters = courseData.weeks.reduce(
      (acc, week) => acc + week.chapters.length,
      0
    );
    return (progress.completed.length / totalChapters) * 100;
  };
  // This hook will return the current week, chapter, progress, and navigation functions.
  return {
    currentWeek,
    currentChapter,
    progress,
    navigateToChapter,
    calculateOverallProgress,
  };
};
