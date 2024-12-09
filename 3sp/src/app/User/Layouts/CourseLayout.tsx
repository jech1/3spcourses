"use client";

import "../../global.css"; // Adjust the path if necessary
import { Inter } from "next/font/google"; // Centralized font configuration

const inter = Inter({ subsets: ["latin"] });

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
}
