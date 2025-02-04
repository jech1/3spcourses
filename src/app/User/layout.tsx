"use client";

// this layout is used for the user pages
// what it does is that it checks if the user is authenticated
// if not, it redirects to the login page

import { useSession } from "next-auth/react";
import HeaderUser from "./Components/HeaderUser";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession(); // Get session status

  // Handle unauthenticated users
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") {
      window.location.href = "/Login"; // Redirect to login
    }
    return null; // Prevent rendering
  }

  return (
    <>
      {/* Render the user-specific header */}
      <HeaderUser />
      <main className="min-h-screen flex flex-col">{children}</main>
    </>
  );
}
