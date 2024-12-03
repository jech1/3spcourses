// This code allows for the quiz to be answered and submitted by the user.

import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "../../../components/ui/button";
import type { Quiz } from "@/app/User/types/courseTypes";

// This code is a component that can be reused.
const Quiz = ({
  quizData,
  quizAnswer,
  setQuizAnswer,
  showQuizResult,
  setShowQuizResult,
}: {
  quizData: Quiz;
  quizAnswer: number | null;
  setQuizAnswer: (value: number | null) => void;
  showQuizResult: boolean;
  setShowQuizResult: (value: boolean) => void;
}) => (
  <div className="mt-8 p-6 border border-gray-300 rounded-lg">
    <h4 className="text-xl font-semibold mb-4">Quiz</h4>
    <p className="mb-4">{quizData.question}</p>
    <RadioGroup
      value={quizAnswer?.toString() ?? ""}
      onValueChange={(value) => setQuizAnswer(parseInt(value))}
    >
      {quizData.options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2 mb-2">
          <RadioGroupItem
            value={index.toString()}
            id={`option-${index}`}
            className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center outline outline-1 outline-gray-100"
          >
            <div
              className={`w-2 h-2 rounded-full ${
                quizAnswer === index ? "bg-blue-600" : "bg-transparent"
              }`}
            />
          </RadioGroupItem>
          <Label htmlFor={`option-${index}`}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
    <Button
      onClick={() => setShowQuizResult(true)}
      className="mt-6"
      disabled={quizAnswer === null}
    >
      Submit Answer
    </Button>
    {showQuizResult && (
      <p
        className={`mt-4 ${
          quizAnswer === quizData.correctAnswer
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {quizAnswer === quizData.correctAnswer
          ? "Correct!"
          : `Incorrect. The correct answer is: ${
              quizData.options[quizData.correctAnswer]
            }`}
      </p>
    )}
  </div>
);

export default Quiz;
