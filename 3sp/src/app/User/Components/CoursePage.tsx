import { useCourseLogic } from "../hooks/useCourseLogic";
import ProgressBar from "./progressBar";
import Quiz from "./Quiz";
import NavigationButtons from "./NavigationButtons";
import { CourseData } from "../types/courseTypes";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
//import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useState } from "react";

export default function CoursePage({ courseData }: { courseData: CourseData }) {
  const {
    currentWeek,
    currentChapter,
    navigateToChapter,
    calculateOverallProgress,
  } = useCourseLogic(courseData);

  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const isFirstChapter = currentWeek === 0 && currentChapter === 0;
  const isLastChapter =
    currentWeek === courseData.weeks.length - 1 &&
    currentChapter === courseData.weeks[currentWeek].chapters.length - 1;

  const previousChapter = () => {
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
    const currentWeekData = courseData.weeks[currentWeek];
    if (
      currentWeekData &&
      currentChapter < currentWeekData.chapters.length - 1
    ) {
      navigateToChapter(currentWeek, currentChapter + 1);
    } else if (currentWeek < courseData.weeks.length - 1) {
      navigateToChapter(currentWeek + 1, 0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ProgressBar progress={calculateOverallProgress()} />
      <div className="flex-grow">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold mb-6">{courseData.title}</h1>
          <h2 className="text-3xl font-bold mb-4">
            {courseData.weeks[currentWeek]?.title}
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            {courseData.weeks[currentWeek]?.chapters[currentChapter]?.title}
          </h3>
          <Button
            variant="outline"
            className="mb-6"
            onClick={() =>
              window.open(
                courseData.weeks[currentWeek]?.chapters[currentChapter]
                  ?.videoUrl ?? "",
                "_blank"
              )
            }
          >
            <Play className="h-4 w-4 mr-2" /> Watch Video
          </Button>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html:
                courseData.weeks[currentWeek]?.chapters[currentChapter]
                  ?.content ?? "",
            }}
          />
          {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz && (
            <Quiz
              quizData={
                courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz
              }
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
