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
            <h1 className="text-4xl font-bold">Caffeine Extraction</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the fundamentals of research
            </p>
          </section>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3SP Course Overview</CardTitle>
              <CardDescription>
                Master the fundamentals of research in a lab by Extracting
                Caffeine.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
              This course emphasizes the science and lab safety practices involved in caffeine extraction. Students will learn how to safely handle chemicals, perform extractions, and analyze the purity of caffeine, preparing them for both academic and industrial applications.


              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Duration: 8 weeks</li>
                <li>Difficulty: Beginner to Intermediate</li>
                <li>Prerequisites: Basic computer skills</li>
              </ul>
            </CardContent>
          </Card>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Course Syllabus</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="week1">
                <AccordionTrigger>
                  Week 1: Introduction to Caffeine and Lab Safety{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 1: Introduction</li>
                    <li>Chapter 1: Understanding the properties of caffeine and its natural sources</li>
                    <li>Chapter 1: Introduction to lab safety protocols and proper equipment handling</li>
                    <li>Chapter 1: Summary </li>
                    <li>Chapter 1: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week2">
                <AccordionTrigger>
                  Week 2: Solvent-Based Extraction Techniques{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 2: Introduction</li>
                    <li>Chapter 2: Selecting and handling solvents safely in the lab
                    </li>
                    <li>Chapter 2: Step-by-step caffeine extraction using liquid-liquid methods</li>
                    <li>Chapter 2: Importance of using fume hoods and personal protective equipment</li>
                    <li>Chapter 2: Summary </li>
                    <li>Chapter 2: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week3">
                <AccordionTrigger>
                  Week 3: Purification and Waste Management{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 3: Introduction</li>
                    <li>Chapter 3: Safely separating impurities from extracted caffeine</li>
                    <li>Chapter 3: Proper disposal of chemical waste in accordance with safety guidelines</li>
                    <li>Chapter 3: Summary </li>
                    <li>Chapter 3: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week4">
                <AccordionTrigger>Week 4: Analytical Techniques and Lab Accuracy </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 4: Introduction</li>
                    <li>Chapter 4: Using chromatography and spectroscopy to analyze caffeine purity</li>
                    <li>Chapter 4: Maintaining precision and accuracy in lab measurements</li>
                    <li>Chapter 4: Summary </li>
                    <li>Chapter 4: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week5">
                <AccordionTrigger>
                  Week 5: Final Extraction Project and Safety Assessment{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 5: Introduction</li>
                    <li>Chapter 5: Designing and performing a comprehensive caffeine extraction project
                    </li>
                    <li>Chapter 5: Reviewing and applying all safety protocols in the final procedure</li>
                    <li>Chapter 5: Presenting results with an emphasis on safety compliance</li>
                    <li>Chapter 5: Summary </li>
                    <li>Chapter 5: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg" onClick={() => router.push("/Courses/CaffineCourse")}>
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
