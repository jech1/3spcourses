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
                  <li>Duration: 8 weeks</li>
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
                    Week 1: Introduction to Scientific Writing
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>
                        Chapter 1.2: Understanding the Purpose of Scientific
                        Writing
                      </li>
                      <li>Chapter 1.3: Key Components of a Research Paper</li>
                      <li>
                        Chapter 1.4: Differences Between Academic and General
                        Writing Styles
                      </li>
                      <li>Chapter 1.5: Planning and Organizing Your Writing</li>
                      <li>Chapter 1.6: Summary</li>
                      <li>Chapter 1.7: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Crafting Research Questions and Hypotheses
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>
                        Chapter 2.2: Identifying Research Gaps and Formulating
                        Questions
                      </li>
                      <li>
                        Chapter 2.3: Writing Clear and Testable Hypotheses
                      </li>
                      <li>Chapter 2.4: Summary</li>
                      <li>Chapter 2.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Literature Review and Citation Management
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>
                        Chapter 3.2: Conducting a Thorough Literature Review
                      </li>
                      <li>Chapter 3.3: Summarizing and Synthesizing Sources</li>
                      <li>
                        Chapter 3.4: Proper Citation Techniques and Avoiding
                        Plagiarism
                      </li>
                      <li>Chapter 3.5: Summary</li>
                      <li>Chapter 3.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Writing Methods and Results Sections
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>
                        Chapter 4.2: Describing Methodologies Clearly and
                        Concisely
                      </li>
                      <li>Chapter 4.3: Writing an Accurate Results Section</li>
                      <li>Chapter 4.4: Summary</li>
                      <li>Chapter 4.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Crafting a Strong Discussion Section
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>
                        Chapter 5.2: Interpreting Results and Drawing
                        Conclusions
                      </li>
                      <li>
                        Chapter 5.3: Discussing Implications and Limitations
                      </li>
                      <li>Chapter 5.4: Suggesting Areas for Future Research</li>
                      <li>Chapter 5.5: Summary</li>
                      <li>Chapter 5.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 6 */}
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Grant Proposal Writing
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6.1: Introduction</li>
                      <li>
                        Chapter 6.2: Understanding Funding Agencies and
                        Requirements
                      </li>
                      <li>
                        Chapter 6.3: Components of a Successful Grant Proposal
                      </li>
                      <li>Chapter 6.4: Writing Persuasively and Effectively</li>
                      <li>Chapter 6.5: Summary</li>
                      <li>Chapter 6.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Week 7 */}
                <AccordionItem value="week7">
                  <AccordionTrigger>
                    Week 7: Revising, Editing, and Peer Review
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 7.1: Introduction</li>
                      <li>
                        Chapter 7.2: Effective Revising and Editing Techniques
                      </li>
                      <li>
                        Chapter 7.3: Understanding the Peer Review Process
                      </li>
                      <li>Chapter 7.4: Responding to Feedback and Revisions</li>
                      <li>Chapter 7.5: Summary</li>
                      <li>Chapter 7.6: Final Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                {/* Final Week */}
                <AccordionItem value="week8">
                  <AccordionTrigger>
                    Final Week: Research and Grant Proposal Assignments
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 8.1: Introduction to Final Assignments</li>
                      <li>
                        Chapter 8.2: First Draft of Grant Proposal Assignment
                      </li>
                      <li>Chapter 8.3: Final Paper</li>
                      <li>Chapter 8.4: Submissions</li>
                      <li>Chapter 8.5: Final Remarks</li>
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
