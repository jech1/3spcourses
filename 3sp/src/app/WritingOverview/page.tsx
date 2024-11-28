"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
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
  const router = useRouter(); // Initialize the router

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 space-y-36 mt-20">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Scientific Writing & Grant Proposal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                scientific communication. Youll master grant proposals, research
                papers, and presentation skills essential for academic and
                professional success.
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
                    <li>Chapter 1: Introduction</li>
                    <li>
                      Chapter 1: Understanding the purpose of scientific writing
                    </li>
                    <li>Chapter 1: Key components of a research paper</li>
                    <li>
                      Chapter 1: Differences between academic and general writing
                      styles
                    </li>
                    <li>Chapter 1: Planning and organizing your writing</li>
                    <li>Chapter 1: Summary</li>
                    <li>Chapter 1: Quiz</li>
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
                    <li>Chapter 2: Introduction</li>
                    <li>
                      Chapter 2: Identifying research gaps and formulating questions
                    </li>
                    <li>Chapter 2: Writing clear and testable hypotheses</li>
                    <li>Chapter 2: Responsive design principles</li>
                    <li>Chapter 2: Summary</li>
                    <li>Chapter 2: Quiz</li>
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
                    <li>Chapter 3: Introduction</li>
                    <li>
                      Chapter 3: Conducting a thorough literature review
                    </li>
                    <li>Chapter 3: Summarizing and synthesizing sources</li>
                    <li>
                      Chapter 3: Proper citation techniques and avoiding plagiarism
                    </li>
                    <li>Chapter 3: Summary</li>
                    <li>Chapter 3: Quiz</li>
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
                    <li>Chapter 4: Introduction</li>
                    <li>
                      Chapter 4: Describing methodologies clearly and concisely
                    </li>
                    <li>Chapter 4: Writing an accurate results section</li>
                    <li>Chapter 4: Summary</li>
                    <li>Chapter 4: Quiz</li>
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
                    <li>Chapter 5: Introduction</li>
                    <li>
                      Chapter 5: Interpreting and analyzing results
                    </li>
                    <li>Chapter 5: Linking findings to existing literature</li>
                    <li>Chapter 5: Addressing study limitations</li>
                    <li>
                      Chapter 5: Proposing future research directions
                    </li>
                    <li>Chapter 5: Summary</li>
                    <li>Chapter 5: Quiz</li>
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
                    <li>Chapter 6: Introduction</li>
                    <li>
                      Chapter 6: Understanding the structure of a grant proposal
                    </li>
                    <li>
                      Chapter 6: Writing compelling abstracts and objectives
                    </li>
                    <li>Chapter 6: Summary</li>
                    <li>Chapter 6: Quiz</li>
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
                    <li>Chapter 7: Introduction</li>
                    <li>
                      Chapter 7: Strategies for self-editing and revising
                    </li>
                    <li>
                      Chapter 7: Enhancing clarity and readability in writing
                    </li>
                    <li>
                      Chapter 7: Responding to reviewer feedback professionally
                    </li>
                    <li>
                      Chapter 7: Finalizing and submitting your paper or proposal
                    </li>
                    <li>Chapter 7: Summary</li>
                    <li>Chapter 7: Quiz</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg" onClick={() => router.push("/WritingCourse")}>
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
