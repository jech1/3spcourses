"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
//import Link from "next/link";
import { useRouter } from "next/navigation"; // Ensure useRouter is imported
import { Button } from "@/components/ui/button";
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

const images = [
  {
    src: "/Scientific Writing Badge (1).png?height=500&width=500",
    alt: "Image 1",
  },
  { src: "/circuitbadge.png?height=500&width=500", alt: "Image 2" },
  { src: "/researchbadge.png?height=500&width=500", alt: "Image 3" },
  { src: "/CADbadge (1).png?height=500&width=500", alt: "Image 4" },
  { src: "/c++badge.png?height=500&width=500", alt: "Image 5" },
  { src: "/caffeinebadge.png?height=500&width=500", alt: "Image 6" },
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
  const router = useRouter(); // Initialize the router here

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
              <h1 className="text-4xl font-bold text-white">C++ Coding</h1>
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
                  <li>Duration: 8 weeks</li>
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
                    Week 1: Introduction to C++ and Development Environment{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>1.1 Introduction</li>
                      <li>
                        1.2 Setting up Visual Studio Code and configuring the
                        environment
                      </li>
                      <li>
                        1.3 Introduction to the terminal and basic commands
                      </li>
                      <li>
                        1.4 Understanding variables, data types, and
                        constants
                      </li>
                      <li>1.5 Producing outputs and handling user input</li>
                      <li>1.6 Summary</li>
                      <li>1.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Working with Arrays{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>2.1 Introduction</li>
                      <li>
                        2.2 Introduction to arrays and their importance
                      </li>
                      <li>
                        2.3 Declaring, initializing, and accessing arrays
                      </li>
                      <li>
                        2.4 Multi-dimensional arrays and their applications
                      </li>
                      <li>2.5 Common array operations like searching and sorting</li>
                      <li>2.6 Summary</li>
                      <li>2.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Functions and Modular Programming{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>3.1 Introduction</li>
                      <li>3.2 Defining and calling functions</li>
                      <li>
                        3.3 Function arguments, return types, and scope
                      </li>
                      <li>
                        3.4 Breaking programs into modules for better organization
                      </li>
                      <li>
                        3.5 Benefits of modular programming for scalability
                      </li>
                      <li>3.6 Summary</li>
                      <li>3.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Integrating Concepts: Arrays, Functions, and Logic
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>4.1 Introduction</li>
                      <li>
                        4.2 Combining arrays with functions to solve complex problems
                      </li>
                      <li>
                        4.3 Building small modular projects using all covered concepts
                      </li>
                      <li>
                        4.4 Debugging and refining code for efficiency
                      </li>
                      <li>4.5 Summary</li>
                      <li>4.6 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Programming with Arduino and Microcontrollers{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>5.1 Introduction</li>
                      <li>
                        5.2 Introduction to Arduino IDE and basic hardware setup
                      </li>
                      <li>
                        5.3 Writing and uploading C++ programs to microcontrollers
                      </li>
                      <li>
                        5.4 Reading input from sensors and controlling output devices
                      </li>
                      <li>
                        5.5 Exploring practical applications with hardware integration
                      </li>
                      <li>5.6 Summary</li>
                      <li>5.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: File Handling in C++{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>6.1 Introduction</li>
                      <li>6.2 Reading from and writing to files</li>
                      <li>
                        6.3 Using file streams for data storage and retrieval
                      </li>
                      <li>6.4 Error handling in file operations</li>
                      <li>
                        6.5 Building programs that save and load data
                      </li>
                      <li>6.6 Summary</li>
                      <li>6.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week7">
                  <AccordionTrigger>Week 7: Final Project </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>7.1 Introduction</li>
                      <li>
                        7.2 Designing and implementing a comprehensive program that combines all concepts
                      </li>
                      <li>
                        7.3 Integrating hardware (optional for those with access to microcontrollers)
                      </li>
                      <li>
                        7.4 Debugging, testing, and presenting the final project
                      </li>
                      <li>
                        7.5 Best practices for future learning and advanced topics
                      </li>
                      <li>7.6 Summary</li>
                      <li>7.7 Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => router.push("/User/Courses/CppCourse")}
              >
                Take Course
              </Button>
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
