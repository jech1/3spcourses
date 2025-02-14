"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
//import { useRouter } from "next/navigation"; // Import useRouter
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

  // Duplicate the images array to create a seamless loop
  const allImages = [...images, ...images];

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

  return (
    <div className="w-full overflow-hidden p-40">
      <motion.div ref={containerRef} className="flex space-x-4" style={{ x }}>
        {allImages.map((image, index) => (
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

export default function WritingOverview() {
  //const router = useRouter(); // Initialize the router

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
                Scientific Writing & Grant Proposal
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Master the fundamentals of scientific writing
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn the fundamentals of writing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This comprehensive course will teach you the principles of
                  scientific communication. Youll master grant proposals,
                  research papers, and presentation skills essential for
                  academic and professional success.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 6 weeks</li>
                  <li>Difficulty: Intermediate</li>
                  <li>Prerequisites: Basic writing skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                {/* Week 1 */}
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Foundations of Scientific Writing
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>
                        Chapter 1.2: Structure of a Research Paper
                      </li>
                      <li>Chapter 1.3: Academic vs. General Writing</li>
                      <li>
                        Chapter 1.4: Planning & Organizing Your Manuscript
                      </li>
                      <li>Chapter 1.5: Quiz: IMRaD & Academic Writing Principles</li>
                      <li>Chapter 1.6: Assignments & Due Dates</li>
                      
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Crafting Research Questions & Hypotheses

                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>
                        Chapter 2.2: Identifying Research Gaps
                      </li>
                      <li>
                        Chapter 2.3: Formulating Hypotheses
                      </li>
                      <li>Chapter 2.4: Peer Review Simulation</li>
                      <li>Chapter 2.5: Quiz: Hypothesis Formulation & Research Gap Identification</li>
                      <li>Chapter 2.6: Assignments & Practice Assessment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Writing Methods & Results Sections
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>
                        Chapter 3.2: Describing Methodologies
                      </li>
                      <li>Chapter 3.3: Effective Presentation of Results</li>
                      <li>
                        Chapter 3.4: Advanced Data Visualization
                      </li>
                      <li>Chapter 3.5: Quiz: Methods & Results Best Practices</li>
                      <li>Chapter 3.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Crafting Discussions & Conclusions
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>
                        Chapter 4.2: Interpreting Results
                      </li>
                      <li>Chapter 4.3: Discussing Implications</li>
                      <li>Chapter 4.4: Addressing Limitations</li>
                      <li>Chapter 4.5: Quiz: Understanding Discussion Components</li>
                      <li>Chapter 4.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Grant Proposal Writing & Peer Review
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>
                        Chapter 5.2: Components of a Grant Proposal
                      </li>
                      <li>
                        Chapter 5.3: Writing Persuasively
                      </li>
                      <li>Chapter 5.4: Peer Review & Revisions</li>
                      <li>Chapter 5.5: Quiz: Grant Proposal Components & Persuasive Writing</li>
                      <li>Chapter 5.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 6 */}
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Capstone & Peer Review - Final Submissions and Reflections
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6.1: Final Research Paper Submission</li>
                      <li>
                        Chapter 6.2: Final Grant Proposal Submission
                      </li>
                      <li>
                        Chapter 6.3: Final Peer Review Session
                      </li>
                      <li>Chapter 6.4: Capstone Reflection & Course Summary</li>
                      <li>Chapter 6.5: Assignments</li>
                      
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/WritingCourse" />
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
