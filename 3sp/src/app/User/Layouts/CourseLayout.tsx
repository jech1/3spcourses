"use client";

import "../../global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className} course-page-layout`}>
      <main className="flex-grow px-4 py-8">
        <div className="w-4/5 mx-auto bg-white rounded-md shadow-md p-6 prose prose-lg leading-relaxed custom-spacing">
          {children}
        </div>
      </main>
    </div>
  );
}
