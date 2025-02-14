"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
//import Link from "next/link";
//import { useRouter } from "next/navigation"; // Ensure useRouter is imported
//import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TakeCourseButton from "@/components/TakeCourseButton";

const images = [
  {
    src: "/SWB.png?height=500&width=500",
    alt: "Image 1",
  },
  { src: "/MCDB.png?height=500&width=500", alt: "Image 2" },
  { src: "/RMB.png?height=500&width=500", alt: "Image 3" },
  { src: "/CADB.png?height=500&width=500", alt: "Image 4" },
  { src: "/CppPD.png?height=500&width=500", alt: "Image 5" },
  { src: "/CELS.png?height=500&width=500", alt: "Image 6" },
];

function AnimatedImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    if (containerRef.current) {
      const xValue = x.get();
      const containerWidth = containerRef.current.scrollWidth / 2;

      if (xValue <= -containerWidth) {
        x.set(0);
      } else {
        x.set(xValue - 2); // Adjust this value to change the speed
      }
    }
  });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const clonedItems = container.innerHTML;
      container.innerHTML += clonedItems;
    }
  }, []);

  return (
    <div className="w-full overflow-hidden p-40">
      <motion.div ref={containerRef} className="flex space-x-4" style={{ x }}>
        {images.concat(images).map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function EnhancedCourseOverviewComponent() {
  //const router = useRouter(); // Initialize the router here

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="relative">
          <div
            className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#632a88] to-white"
            style={{ zIndex: -1 }}
          ></div>
          <div className="container mx-auto px-4 py-12 space-y-36 mt-0">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">C++ Project Design</h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Understand programming concepts and write efficient code using
                one of the most utilized languages worldwide.
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn the fundamentals of Programming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This course introduces students to the fundamentals of C++
                  programming, emphasizing practical applications and real-world
                  problem-solving. Starting with setting up the development
                  environment, the course progresses through essential
                  programming concepts, arrays, functions, modular programming,
                  and hardware interaction, culminating in a final project that
                  integrates all learned skills.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 7 weeks</li>
                  <li>Difficulty: Beginner to Associate </li>
                  <li>Prerequisites: Basic coding skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Introduction to Programming and Basic Concepts
                    {" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>1.1 Overview of Programming Languages</li>
                      <li>
                        1.2 Overview of Frameworks, Tools, and GitHub
                      </li>
                      <li>
                        1.3 Main Branches of Computer Science
                      </li>
                      <li>
                        1.4 What This Course Will Cover
                      </li>
                      <li>1.5 Introduction to the Terminal</li>
                      <li>1.6 Summary</li>
                      <li>1.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Basic Programming{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>2.1 Understanding Programming Syntax and Data Types</li>
                      <li>2.2 Input and Output: Using cin and cout</li>
                      <li>2.3 Arithmetic Operations and Variables</li>
                      <li>
                        2.4 Introduction to Functions: Declaration, Definition, and Calling

                      </li>
                      <li>
                        2.5 Summary
                      </li>
                      <li>2.6 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Advanced Programming Concepts{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>3.1 Introduction to Functions and Parameter Passing</li>
                      <li>3.2 Deep Dive: Passing by Value vs. Passing by Reference</li>
                      <li>3.3 Best Practices for Parameter Passing</li>
                      <li>
                        3.4 Introduction to Arrays and Their Use in Functions
                      </li>
                      <li>
                        3.5 Example Walkthrough: Functions, Parameter Passing, and Arrays

                      </li>
                      <li>3.6 Summary</li>
                      <li>3.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Final Programming with Structures and Mini Project
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>4.1 Introduction to Structures</li>
                      <li>
                        4.2 Passing Structures by Value and by Reference
                      </li>
                      <li>
                        4.3 Mini Project: Combining Arrays, Functions, and Structures
                      </li>
                      <li>4.4 Summary</li>
                      <li>4.5 Quiz</li>
                      
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Arduino {" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>5.1 Introduction to the Arduino IDE</li>
                      <li>
                        5.2 Utilizing Arduino Libraries
                      </li>
                      <li>
                        5.3 File Handling in Arduino: Using the SD Library
                      </li>
                      <li>
                        5.4 Configuring the Arduino IDE: Board, COM Port, and Library Manager
                      </li>
                      <li>
                        5.5 Summary and Quiz
                      </li>
                      <li>5.6 Summary</li>
                      <li>5.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Advanced Code Analysis, Debugging, and Microcontroller Integration{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>6.1 Code Analysis, Debugging, and Big O Notation</li>
                      <li>6.2 Controlling Electronics: Servos and Motors</li>
                      <li>
                        6.3 Advanced Communication: Serial Monitor, WiFi, and ESP32 Integration
                      </li>
                      <li>6.4 Microcontrollers and Resources for Further Learning</li>
                      
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week7">
                  <AccordionTrigger>Week 7: Final Project - Comprehensive Assessment </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>7.1 Introduction</li>
                      <li>
                        7.2 C++ Programming Project Guidelines
                      </li>
                      <li>
                        7.3 Arduino Project Guidelines
                      </li>
                      <li>
                        7.4 Final Project Evaluation Criteria
                      </li>
                      <li>
                        7.5 Final Project Summary and Quiz
                      </li>
                     
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/CppCourse" />
            </div>
          </div>
        </div>

        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold mt-20 mb-1 text-center text-[#11001C]">
            Awarded Badges
          </h2>
          <AnimatedImageCarousel />
        </section>
      </main>
    </div>
  );
}
