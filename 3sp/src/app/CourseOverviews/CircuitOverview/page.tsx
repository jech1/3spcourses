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
    alt: "Scientific Writing Badge",
  },
  { src: "/circuitbadge.png?height=500&width=500", alt: "Circuit Design Badge" },
  { src: "/researchbadge.png?height=500&width=500", alt: "Research Badge" },
  { src: "/CADbadge (1).png?height=500&width=500", alt: "CAD Design Badge" },
  { src: "/c++badge.png?height=500&width=500", alt: "C++ Programming Badge" },
  { src: "/caffeinebadge.png?height=500&width=500", alt: "Caffeine Badge" },
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
              <h1 className="text-4xl font-bold text-white">
                Microcontroller & Circuit Design
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Learn to build reliable prototypes with coding in C++, designing
                circuits, and soldering components.
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn the fundamentals of Electronics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This course introduces students to microcontroller programming
                  and circuit design principles. Covering software setup,
                  hardware components, and advanced circuitry, students will
                  develop hands-on skills to create functional prototypes and
                  systems.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 8 weeks</li>
                  <li>Difficulty: Beginner to Intermediate</li>
                  <li>Prerequisites: Basic electronic skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Introduction, Software Setup, and Online Resources
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>
                        Chapter 1.2: Setting up Arduino IDE and Understanding Its
                        Interface
                      </li>
                      <li>
                        Chapter 1.3: Exploring Online Resources and Communities
                        for Support
                      </li>
                      <li>
                        Chapter 1.4: Familiarizing with Hardware Setup and
                        Connectivity Basics
                      </li>
                      <li>Chapter 1.5: Summary</li>
                      <li>Chapter 1.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Electrical Components and Safety
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>
                        Chapter 2.2: Identifying and Understanding Resistors,
                        Capacitors, and Diodes
                      </li>
                      <li>
                        Chapter 2.3: Safely Using Breadboards and Power Supplies
                        in Circuits
                      </li>
                      <li>
                        Chapter 2.4: Basic Troubleshooting Techniques for Faulty
                        Components
                      </li>
                      <li>Chapter 2.5: Summary</li>
                      <li>Chapter 2.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Programming a Microcontroller
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>
                        Chapter 3.2: Writing and Uploading Simple C++ Programs to
                        Microcontrollers
                      </li>
                      <li>
                        Chapter 3.3: Understanding Data Types, Variables, and
                        Logic Control Structures
                      </li>
                      <li>
                        Chapter 3.4: Using Functions to Organize Code for Complex
                        Operations
                      </li>
                      <li>Chapter 3.5: Summary</li>
                      <li>Chapter 3.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Circuit Basics and Testing
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>
                        Chapter 4.2: Building Basic Circuits with LEDs,
                        Resistors, and Switches
                      </li>
                      <li>
                        Chapter 4.3: Understanding Voltage, Current, and
                        Resistance Relationships
                      </li>
                      <li>
                        Chapter 4.4: Safely Testing Circuits with a Multimeter
                      </li>
                      <li>Chapter 4.5: Summary</li>
                      <li>Chapter 4.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Advanced Circuit Schematics
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>
                        Chapter 5.2: Designing and Analyzing Complex Circuit
                        Diagrams
                      </li>
                      <li>
                        Chapter 5.3: Creating PCB Layouts for Advanced Projects
                      </li>
                      <li>
                        Chapter 5.4: Integrating Sensors and Actuators for
                        Interactive Systems
                      </li>
                      <li>Chapter 5.5: Summary</li>
                      <li>Chapter 5.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Circuit Designs and Prototyping
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6.1: Introduction</li>
                      <li>
                        Chapter 6.2: Using Software Tools for PCB Design and
                        Simulation
                      </li>
                      <li>
                        Chapter 6.3: Testing and Refining Circuits on Breadboards
                      </li>
                      <li>
                        Chapter 6.4: Exploring Best Practices for Prototype
                        Assembly
                      </li>
                      <li>Chapter 6.5: Summary</li>
                      <li>Chapter 6.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week7">
                  <AccordionTrigger>
                    Week 7: Combining Hardware and Software
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 7.1: Introduction</li>
                      <li>
                        Chapter 7.2: Integrating Sensors and Actuators with
                        Microcontroller Code
                      </li>
                      <li>
                        Chapter 7.3: Synchronizing Hardware Functionality with
                        Software Logic
                      </li>
                      <li>
                        Chapter 7.4: Debugging Issues in Integrated Systems
                      </li>
                      <li>Chapter 7.5: Summary</li>
                      <li>Chapter 7.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week8">
                  <AccordionTrigger>
                    Week 8: Final Project and Review
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 8.1: Introduction</li>
                      <li>
                        Chapter 8.2: Developing a Comprehensive Project
                      </li>
                      <li>
                        Chapter 8.3: Presenting the Project with a Focus on Design
                        and Functionality
                      </li>
                      <li>
                        Chapter 8.4: Reviewing Key Concepts and Discussing Next
                        Steps for Further Learning
                      </li>
                      <li>Chapter 8.5: Summary</li>
                      <li>Chapter 8.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => router.push("/User/Courses/CircuitCourse")}
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
