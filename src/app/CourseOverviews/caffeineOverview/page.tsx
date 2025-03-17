"use client";

import Head from "next/head";
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
        x.set(xValue - 2); // Adjust speed by changing this value
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
      <Head>
        <title>Scientific Writing & Grant Proposal Overview - 3SP Courses</title>
        <meta
          name="description"
          content="Explore the Scientific Writing & Grant Proposal course overview. Master the fundamentals of scientific writing, grant proposals, research papers, and academic presentations for academic and professional success."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="flex-grow">
        <div className="relative">
          <div
            className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#632a88] to-white"
            style={{ zIndex: -1 }}
          ></div>
          <div className="container mx-auto px-4 py-12 space-y-36 mt-0">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
                Caffeine Extraction
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Master the fundamentals of research and lab safety in caffeine extraction.
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3SP Course Overview</CardTitle>
                <CardDescription>
                  Master the fundamentals of lab research by extracting caffeine.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This course emphasizes the science and lab safety practices involved in caffeine extraction.
                  Students will learn how to safely handle chemicals, perform extractions, purify caffeine, and manage waste,
                  preparing them for both academic and industrial applications.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 5 weeks</li>
                  <li>Difficulty: Beginner to Intermediate</li>
                  <li>Prerequisites: Basic Note Taking Skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Introduction to Caffeine and Lab Safety
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>Chapter 1.2: Understanding Caffeine Extraction Methods</li>
                      <li>Chapter 1.3: Basic Lab Safety Protocols and Proper Equipment Handling</li>
                      <li>Chapter 1.4: Summary</li>
                      <li>Chapter 1.5: Quiz</li>
                      <li>Chapter 1.6: Assignment Submission</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Solvent-Based Extraction Techniques
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>Chapter 2.2: Delving into Lab Safety</li>
                      <li>Chapter 2.3: Selecting and Handling Solvents in the Lab</li>
                      <li>Chapter 2.4: Liquid-Liquid Extraction Guide</li>
                      <li>Chapter 2.5: Summary</li>
                      <li>Chapter 2.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Purification and Waste Management
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>Chapter 3.2: Safely Separating Impurities from Extracted Caffeine</li>
                      <li>Chapter 3.3: Proper Disposal of Chemical Waste in Accordance with Safety Guidelines</li>
                      <li>Chapter 3.4: Summary</li>
                      <li>Chapter 3.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Advanced Analytical Techniques and Lab Accuracy
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>Chapter 4.2: Utilizing HPLC to Analyze Caffeine Purity</li>
                      <li>Chapter 4.3: Mastering HPLC Techniques to Ensure Accurate Results</li>
                      <li>Chapter 4.4: IR Spectroscopy to Further Analyze Caffeine Purity</li>
                      <li>Chapter 4.5: Summary</li>
                      <li>Chapter 4.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Final Extraction Project and Safety Assessment
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>Chapter 5.2: Designing and Performing a Comprehensive Caffeine Extraction Project</li>
                      <li>Chapter 5.3: Reviewing and Applying All Safety Protocols in the Final Procedure</li>
                      <li>Chapter 5.4: Caffeine Extraction Without the Use of Carcinogenic Chemicals</li>
                      <li>Chapter 5.5: Presenting Results with an Emphasis on Safety Compliance</li>
                      <li>Chapter 5.6: Summary</li>
                      <li>Chapter 5.7: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/CaffineCourse" />
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
