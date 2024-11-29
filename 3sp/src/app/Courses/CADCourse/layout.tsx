"use client";

import { Inter } from "next/font/google";
import "../../global.css"; // Adjust the path if necessary
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Function to navigate to profile page
  const goToProfile = () => {
    router.push("/profile");
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Sticky Header for Writing Course Page */}
          <header className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
            {/* Home Button with Image */}

            {/* We can make this a stagnant component so we can take this out of every file */}
            {/* Make this go back home to user page */}
            <Link href="/" className="flex items-center">
              <Image
                src="/3splogowbg (1).png" // Adjusted image path
                alt="Home"
                width={125}
                height={32}
              />
            </Link>

            {/* Profile Button with Static Hover Effect */}
            <Button
              onClick={goToProfile}
              className="bg-gray-200 hover:bg-gray-300 text-black border border-gray-300"
            >
              Profile
            </Button>
          </header>

          {/* Main Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
