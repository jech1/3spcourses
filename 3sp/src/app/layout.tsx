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
          <header className="bg-[#11001C] text-white py-4 px-6 flex justify-between items-center shadow-md">
            <Link href="/" className="text-2xl font-bold">
              3SP Course Platform
            </Link>
            <Button className="bg-white text-[#11001C] hover:bg-gray-200 px-6 py-2 rounded-md">
              Login
            </Button>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
