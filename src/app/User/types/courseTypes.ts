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