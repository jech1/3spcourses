"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onProfileClick?: () => void; // Optional custom handler for Profile button
  additionalLinks?: { label: string; href: string }[]; // Optional additional links
}

export default function Header({
  onProfileClick,
  additionalLinks,
}: HeaderProps) {
  const router = useRouter();

  // Default navigation to Profile if no custom handler is provided
  const handleProfileClick = () => {
    console.log("Navigating to /profile via the Profile button");
    if (onProfileClick) {
      onProfileClick();
    } else {
      router.push("/User/Dashboard");
    }
  };

  return (
    <header className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Home Button with Logo */}
      <div
        onClick={() => {
          console.log("Navigating to /User/Dashboard via the 3SP logo");
        }}
      >
        <Link
          href="/User/Dashboard"
          aria-label="Go to Homepage"
          className="flex items-center"
        >
          <Image
            src="/3splogowbg (1).png" // Adjust path as necessary
            alt="Home"
            width={125}
            height={32}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Additional Links */}
      <nav className="flex items-center space-x-4">
        {additionalLinks?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            {link.label}
          </Link>
        ))}

        {/* Profile Button */}
        <Button
          onClick={handleProfileClick}
          className="bg-gray-200 hover:bg-gray-300 text-black border border-gray-300"
          aria-label="Go to Profile"
        >
          Profile
        </Button>
      </nav>
    </header>
  );
}
