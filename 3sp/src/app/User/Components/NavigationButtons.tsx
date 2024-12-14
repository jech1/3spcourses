import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

// This is a reusable component that can be used in multiple places as Navigation Buttons
const NavigationButtons = ({
  isFirstChapter,
  isLastChapter,
  previousChapter,
  nextChapter,
}: {
  isFirstChapter: boolean;
  isLastChapter: boolean;
  previousChapter: () => void;
  nextChapter: () => void;
}) => (
  <div className="p-4 bg-gray-100 flex justify-between items-center rounded-md shadow-sm">
    <Button variant="ghost" onClick={previousChapter} disabled={isFirstChapter}>
      <ChevronLeft className="h-4 w-4 mr-2" /> Previous
    </Button>
    <Button variant="ghost" onClick={nextChapter} disabled={isLastChapter}>
      Next <ChevronRight className="h-4 w-4 ml-2" />
    </Button>
  </div>
);

export default NavigationButtons;
