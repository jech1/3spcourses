// These are our interfaces that will be used to define the structure of our course data and progress data.
export interface CourseData {
  title: string;
  weeks: Week[];
}

export interface Week {
  title: string;
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  content: string;
  videoUrl?: string;
  quiz?: Quiz;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Progress {
  week: number;
  chapter: number;
  completed: string[];
}

export interface UserRecord {
  userId: string;
  courseId: string; // This will either be "Profile" or a course identifier
  progress?: number; // Only for course progress records
  firstName?: string; // For profile data
  lastName?: string;
  school?: string;
  major?: string;
  studentId?: string;
  graduationDate?: string;
}
