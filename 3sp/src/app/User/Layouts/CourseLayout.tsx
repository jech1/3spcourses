"use client";

import "../../global.css"; // Adjust the path if necessary
import Header from "../Components/HeaderUser"; // Import the new Header component
import { Inter } from "next/font/google"; // Centralized font configuration

const inter = Inter({ subsets: ["latin"] });

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Reusable Header Component */}
          <Header
          // additionalLinks={[
          //   { label: "Dashboard", href: "/dashboard" },
          //   { label: "My Courses", href: "/user/courses" },
          // ]}
          />

          {/* Main Content */}
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </>
  );
}
