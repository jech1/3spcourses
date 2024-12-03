// Program to create a progress bar for the user to see how far they are in the process of the form
const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="bg-gray-200 h-2">
    <div
      className="bg-blue-500 h-full transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default ProgressBar;
// This code allows for progress bar to be reusable
