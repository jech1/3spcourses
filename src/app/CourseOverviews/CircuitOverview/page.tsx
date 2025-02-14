"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
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
  { src: "/SWB.png?height=500&width=500", alt: "Image 1" },
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
        x.set(xValue - 2); // Adjust speed here if needed
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
                Learn to build reliable prototypes with coding in C++, designing circuits, and soldering components.
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
                  This course introduces students to microcontroller programming and circuit design principles. Covering software setup, hardware components, and advanced circuitry, students will develop hands-on skills to create functional prototypes and systems.
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
                {/* Week 1 */}
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Foundations of Circuits & Wiring
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction to Circuits</li>
                      <li>Chapter 1.2: Materials & Wiring Basics</li>
                      <li>Chapter 1.3: Electrical Properties</li>
                      <li>Chapter 1.4: Reading Circuit Diagrams</li>
                      <li>Chapter 1.5: Breadboarding Fundamentals</li>
                      <li>Chapter 1.6: The Physics of Electricity</li>
                      <li>Chapter 1.7: Quiz: Foundations of Circuits & Wiring</li>
                      <li>Chapter 1.8: Assignment Submission</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Electrical Components & Functionality
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Transistors as Switches</li>
                      <li>Chapter 2.2: Digital Logic Components</li>
                      <li>Chapter 2.3: Diodes and LEDs</li>
                      <li>Chapter 2.4: Resistors & Current Control</li>
                      <li>Chapter 2.5: Capacitors & Inductors</li>
                      <li>Chapter 2.6: Integrating Components</li>
                      <li>Chapter 2.7: Quiz: Electrical Components & Functionality</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Hardware Integration & Project Components
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Overview of Hardware Modules</li>
                      <li>Chapter 3.2: Sensor Applications</li>
                      <li>Chapter 3.3: Actuators and Servos</li>
                      <li>Chapter 3.4: Communication Modules</li>
                      <li>Chapter 3.5: Power Management</li>
                      <li>Chapter 3.6: Advanced Circuit Design</li>
                      <li>Chapter 3.7: Quiz: Integration of Hardware Components</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Arduino IDE & Programming Integration
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction to Arduino IDE</li>
                      <li>Chapter 4.2: Programming Fundamentals</li>
                      <li>Chapter 4.3: Writing Your First Sketch</li>
                      <li>Chapter 4.4: Hardware-Software Interface</li>
                      <li>Chapter 4.5: Debugging & Error Resolution</li>
                      <li>Chapter 4.6: Guided Project Walkthrough</li>
                      <li>Chapter 4.7: Quiz: Arduino IDE Integration</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Capstone Project & Final Review
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Project Planning & Conceptualization</li>
                      <li>Chapter 5.2: Detailed Circuit Design</li>
                      <li>Chapter 5.3: Assembly & Integration</li>
                      <li>Chapter 5.4: Final Programming Implementation</li>
                      <li>Chapter 5.5: Testing & Optimization</li>
                      <li>Chapter 5.6: Peer Review & Feedback</li>
                      <li>Chapter 5.7: Quiz: Capstone Project Reflection</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 6 */}
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Capstone & Peer Review – Final Submissions and Reflections
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6.1: Final Research Paper Submission</li>
                      <li>Chapter 6.2: Final Grant Proposal Submission</li>
                      <li>Chapter 6.3: Final Peer Review Session</li>
                      <li>Chapter 6.4: Capstone Reflection & Course Summary</li>
                      <li>Chapter 6.5: Final Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/CircuitCourse" />
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
