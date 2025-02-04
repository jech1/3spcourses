"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import SessionProviderWrapper from "./SessionProviderWrapper"; // Import the wrapper
import "./global.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
//import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();

  // Determine if the current route is a user route
  const isUserRoute = currentPath.startsWith("/User");

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <div className="min-h-screen flex flex-col">
            {/* Conditional Header: Show only if not on User routes */}
            {!isUserRoute && (
              <header className="bg-[#632a88] text-white py-4 px-6 flex justify-between items-center shadow-md">
                <Link href="/" className="text-2xl font-bold">
                  3SP Course Platform
                </Link>

                {/* Conditional Login Button */}
                {currentPath !== "/Login" && (
                  <Link href="/Login">
                    <Button className="bg-white text-[#11001C] hover:bg-gray-200 px-6 py-2 rounded-md">
                      Login
                    </Button>
                  </Link>
                )}
              </header>
            )}

            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Footer: Show only if not on User routes */}
            {!isUserRoute && (
              <footer className="bg-gray-100 text-gray-600 py-12">
                <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="CoursesPathways.png"
                          className="hover:underline hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Badges Pathways
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:underline hover:text-blue-700"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="Merged_document.png"
                          className="hover:underline hover:text-blue-700"
                        >
                          Terms and conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                      <li>
                        Email:{" "}
                        <a
                          href="mailto:jrodriguez154929@me.bergen.edu"
                          className="hover:underline hover:text-blue-700"
                        >
                          3spSupport@bergen.edu
                        </a>
                      </li>
                      <li>
                        Website:{" "}
                        <a
                          href="https://www.bergen.edu"
                          className="hover:underline hover:text-blue-700"
                        >
                          www.bergen.edu
                        </a>
                      </li>
                      <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
                      <li>
                        Visit:{" "}
                        <a
                          href="https://bitmedia0.webflow.io"
                          className="hover:underline hover:text-blue-700"
                        >
                          www.JMR-JE.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
            )}
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
