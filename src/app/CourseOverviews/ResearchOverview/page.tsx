"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation"; // Ensure useRouter is imported
// import { Button } from "@/components/ui/button";
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
  //const router = useRouter(); // Initialize router here
  //const router = useRouter(); // Initialize router here

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
                Research Methods & Analytics
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Master the basics of research from finding credible sources to
                having professional citations.
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn the fundamentals of Research methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This course equips students with the skills to design,
                  conduct, and analyze research effectively. Covering both
                  qualitative and quantitative methods, the curriculum
                  emphasizes developing strong research questions, employing
                  appropriate methodologies, and presenting findings with
                  clarity and impact.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 5 weeks</li>
                  <li>Difficulty: Intermediate</li>
                  <li>Prerequisites: Basic Writing skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                {/* Week 1 */}
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Foundations of Methodological Rigor
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>
                        Chapter 1.2: Defining Research Gaps
                      </li>
                      <li>
                        Chapter 1.3: Hypothesis Crafting
                      </li>
                      <li>Chapter 1.4: Peer Review Foundations</li>
                      <li>Chapter 1.5: Quiz: Critically Appraise a Flawed Study Design</li>
                      <li>Chapter 1.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Quantitative Precision & Statistical Mastery


                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Experimental Design
                      </li>
                      <li>
                        Chapter 2.2: Advanced Survey Design
                      </li>
                      <li>
                        Chapter 2.3: Statistical Inference
                      </li>
                      <li>Chapter 2.4: Data Visualization</li>
                      <li>Chapter 2.5: Quiz: Interpreting Regression Outputs with Interaction Terms
                      </li>
                      <li>Chapter 2.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Qualitative Depth & Thematic Sophistication
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Ethnographic Excellence</li>
                      <li>
                        Chapter 3.2: Interview Mastery
                      </li>
                      <li>
                        Chapter 3.3: Thematic Analysis
                      </li>
                      <li>
                        Chapter 3.4: Mixed-Methods Triangulation
                      </li>
                      <li>Chapter 3.5: Quiz: Coding Raw Interview Transcripts for Emergent Themes</li>
                      <li>Chapter 3.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Analytic Peer Review & Replication
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Critical Appraisal</li>
                      <li>
                        Chapter 4.2: Reproducibility Crisis
                      </li>
                      <li>Chapter 4.3: Peer Review Simulation</li>
                      <li>
                        Chapter 4.4: Grant Panel Roleplay
                      </li>
                      <li>Chapter 4.5: Quiz: Red Teaming a Methodology Section</li>
                      <li>Chapter 4.6: Assignments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Capstone Defense & Translational Impact

                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Final Project Workshop</li>
                      <li>
                        Chapter 5.2: Journal Club
                      </li>
                      <li>
                        Chapter 5.3: Translational Pitch
                      </li>
                      <li>Chapter 5.4: Ivy League Viva</li>
                      <li>Chapter 5.5: Quiz: Ethical Dilemma Resolution</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/ResearchCourse" />
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
