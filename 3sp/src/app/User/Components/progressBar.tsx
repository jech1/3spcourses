// Program to create a progress bar for the user to see how far they are in the process of the form
const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
    <div
      className="bg-blue-500 h-full transition-all duration-300 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default ProgressBar;
// This code allows for the progress bar to be reusable
