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
        <div className="container mx-auto px-4 py-12 space-y-36 mt-20">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">C++ Coding</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understand programming concepts and write efficient code using one
              of the most utilized languages worldwide.
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
                This course introduces students to the fundamentals of C++ programming, emphasizing practical applications and real-world problem-solving. Starting with setting up the development environment, the course progresses through essential programming concepts, arrays, functions, modular programming, and hardware interaction, culminating in a final project that integrates all learned skills.
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
                    <li>Chapter 1: Introduction</li>
                    <li>Chapter 1: Setting up Visual Studio Code and configuring the environment</li>
                    <li>Chapter 1: Introduction to the terminal and basic commands</li>
                    <li>Chapter 1: Understanding variables, data types, and constants</li>
                    <li>Chapter 1: Producing outputs and handling user input</li>
                    <li>Chapter 1: Summary </li>
                    <li>Chapter 1: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week2">
                <AccordionTrigger>
                  Week 2: Working with Arrays{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 2: Introduction</li>
                    <li>Chapter 2: Introduction to arrays and their importance</li>
                    <li>Chapter 2: Declaring, initializing, and accessing arrays</li>
                    <li>Chapter 2: Multi-dimensional arrays and their applications</li>
                    <li>Chapter 2: Common array operations like searching and sorting</li>
                    <li>Chapter 2: Summary </li>
                    <li>Chapter 2: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week3">
                <AccordionTrigger>
                  Week 3: Functions and Modular Programming{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 3: Introduction</li>
                    <li>Chapter 3: Defining and calling functions</li>
                    <li>Chapter 3: Function arguments, return types, and scope</li>
                    <li>Chapter 3: Breaking programs into modules for better organization</li>
                    <li>Chapter 3: Benefits of modular programming for scalability</li>
                    <li>Chapter 3: Summary </li>
                    <li>Chapter 3: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week4">
                <AccordionTrigger>Week 4: Integrating Concepts: Arrays, Functions, and Logic</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 4: Introduction</li>
                    <li>Chapter 4: Combining arrays with functions to solve complex problems</li>
                    <li>Chapter 4: Building small modular projects using all covered concepts</li>
                    <li>Chapter 4: Debugging and refining code for efficiency</li>
                    <li>Chapter 4: Summary </li>
                    <li>Chapter 4: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week5">
                <AccordionTrigger>
                  Week 5: Programming with Arduino and Microcontrollers{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 5: Introduction</li>
                    <li>Chapter 5: Introduction to Arduino IDE and basic hardware setup</li>
                    <li>Chapter 5: Writing and uploading C++ programs to microcontrollers</li>
                    <li>Chapter 5: Reading input from sensors and controlling output devices</li>
                    <li>Chapter 5: Exploring practical applications with hardware integration</li>
                    <li>Chapter 5: Summary </li>
                    <li>Chapter 5: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week6">
                <AccordionTrigger>Week 6: File Handling in C++ </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 6: Introduction</li>
                    <li>Chapter 6: Reading from and writing to files</li>
                    <li>Chapter 6: Using file streams for data storage and retrieval</li>
                    <li>Chapter 6: Error handling in file operations</li>
                    <li>Chapter 6: Building programs that save and load data</li>
                    <li>Chapter 6: Summary </li>
                    <li>Chapter 6: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week7">
                <AccordionTrigger>Week 7: Final Project </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 7: Introduction</li>
                    <li>Chapter 7: Designing and implementing a comprehensive program that combines all concepts</li>
                    <li>Chapter 7: Integrating hardware (optional for those with access to microcontrollers)</li>
                    <li>Chapter 7: Debugging, testing, and presenting the final project</li>
                    <li>Chapter 6: Best practices for future learning and advanced topics</li>
                    <li>Chapter 7: Summary </li>
                    <li>Chapter 7: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg" onClick={() => router.push("/Courses/CppCourse")}>
              Take Course
            </Button>
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
