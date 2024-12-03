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
              <h1 className="text-4xl font-bold text-white">
                Microcontroller & Circuit Design
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Learn to build reliable prototypes with coding in c++, designing
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
                    Week 1: Introduction; software downloads and online
                    resources{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1: Introduction</li>
                      <li>
                        Chapter 1: Setting up Arduino IDE and understanding its
                        interface
                      </li>
                      <li>
                        Chapter 1: Exploring online resources and communities
                        for support
                      </li>
                      <li>
                        Chapter 1: Familiarizing with hardware setup and
                        connectivity basics
                      </li>
                      <li>Chapter 1: Summary </li>
                      <li>Chapter 1: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Electrical Components{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2: Introduction</li>
                      <li>
                        Chapter 2: Identifying and understanding resistors,
                        capacitors, and diodes
                      </li>
                      <li>
                        Chapter 2: Safely using breadboards and power supplies
                        in circuits
                      </li>
                      <li>
                        Chapter 2: Basic troubleshooting techniques for faulty
                        components
                      </li>
                      <li>Chapter 2: Summary </li>
                      <li>Chapter 2: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Programing A Microcontroller{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3: Introduction</li>
                      <li>
                        Chapter 3: Writing and uploading simple C++ programs to
                        microcontrollers
                      </li>
                      <li>
                        Chapter 3: Understanding data types, variables, and
                        logic control structures
                      </li>
                      <li>
                        Chapter 3: Using functions to organize code for complex
                        operations
                      </li>
                      <li>Chapter 3: Summary </li>
                      <li>Chapter 3: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week4">
                  <AccordionTrigger>Week 4: Circuit Basics </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4: Introduction</li>
                      <li>
                        Chapter 4: Building basic circuits with LEDs, resistors,
                        and switches
                      </li>
                      <li>
                        Chapter 4: Understanding voltage, current, and
                        resistance relationships
                      </li>
                      <li>
                        Chapter 4: Safely testing circuits with a multimeter
                      </li>
                      <li>Chapter 4: Summary </li>
                      <li>Chapter 4: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Advanced Circuit Schematics{" "}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5: Introduction</li>
                      <li>
                        Chapter 5: Designing and analyzing complex circuit
                        diagrams
                      </li>
                      <li>
                        Chapter 5: Creating PCB layouts for advanced projects
                      </li>
                      <li>
                        Chapter 5: Integrating sensors and actuators for
                        interactive systems
                      </li>
                      <li>Chapter 5: Summary </li>
                      <li>Chapter 5: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week6">
                  <AccordionTrigger>Week 6: Circuit Designs </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6: Introduction</li>
                      <li>
                        Chapter 6: Using software tools for PCB design and
                        simulation
                      </li>
                      <li>
                        Chapter 6: Testing and refining circuits on breadboards
                      </li>
                      <li>
                        Chapter 6: Exploring best practices for prototype
                        assembly
                      </li>
                      <li>Chapter 6: Summary </li>
                      <li>Chapter 6: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week7">
                  <AccordionTrigger>
                    Week 7: Combining Hardware and Software
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 7: Introduction</li>
                      <li>
                        Chapter 7: Integrating sensors and actuators with
                        microcontroller code
                      </li>
                      <li>
                        Chapter 7: Synchronizing hardware functionality with
                        software logic
                      </li>
                      <li>Chapter 7: Debugging issues in integrated systems</li>
                      <li>Chapter 7: Summary </li>
                      <li>Chapter 7: Quiz </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week8">
                  <AccordionTrigger>
                    Week 8: Final Project and Review
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 8: Introduction</li>
                      <li>
                        Chapter 8: Developing a comprehensive project that
                        combines all skills learned
                      </li>
                      <li>
                        Chapter 8: Presenting the project with a focus on design
                        and functionality
                      </li>
                      <li>
                        Chapter 8: Reviewing key concepts and discussing next
                        steps for further learning
                      </li>
                      <li>Chapter 8: Summary </li>
                      <li>Chapter 8: Quiz </li>
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
