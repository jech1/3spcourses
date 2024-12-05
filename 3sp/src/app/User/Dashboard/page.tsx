"use client";

console.log("Dashboard Loaded");

// generic for testing
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
      {/* <img
        src={session.user?.image || ""}
        alt="Profile Picture"
        className="w-20 h-20 rounded-full"
      /> */}
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
}
