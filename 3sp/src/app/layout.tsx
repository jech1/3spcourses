import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3SP Course Platform",
  description: "Learn programming with 3SP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-[#632a88] text-white py-4 px-6 flex justify-between items-center shadow-md">
            <Link href="/" className="text-2xl font-bold">
              3SP Course Platform
            </Link>
            <Link href="/Login">
              <Button className="bg-white text-[#11001C] hover:bg-gray-200 px-6 py-2 rounded-md">
                Login
              </Button>
            </Link>
          </header>
          {children}
        </div>
        {/* Footer Section */}
        <footer className="bg-gray-100 text-gray-600 py-12">
          <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://bergen.edu/" className="hover:underline">
                    Place Holder
                  </Link>
                </li>
                <li>
                  <Link
                    href="CoursesPathways.png"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Badges Pathways
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Learning Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Admin
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
                    className="hover:underline"
                  >
                    3spSupport@bergen.edu (press link to email)
                  </a>
                </li>
                <li>Phone: +1 (201) 879-1277</li>
                <li>
                  Website:{" "}
                  <a href="https://www.bergen.edu" className="hover:underline">
                    www.bergen.edu
                  </a>
                </li>
                <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
                <li>
                  Contact Makers:{" "}
                  <a
                    href="https://www.courseplatform.com"
                    className="hover:underline"
                  >
                    www.JMR-JE.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
