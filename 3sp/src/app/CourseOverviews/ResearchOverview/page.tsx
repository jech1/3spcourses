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
    src: "/Scientific Writing Badge (1).png",
    alt: "Scientific Writing Badge",
  },
  { src: "/circuitbadge.png", alt: "Circuit Badge" },
  { src: "/researchbadge.png", alt: "Research Badge" },
  { src: "/CADbadge (1).png", alt: "CAD Badge" },
  { src: "/c++badge.png", alt: "C++ Badge" },
  { src: "/caffeinebadge.png", alt: "Caffeine Badge" },
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
                  <li>Duration: 8 weeks</li>
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
                    Week 1: Introduction to Research Methods
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction</li>
                      <li>
                        Chapter 1.2: Understanding the importance of research
                        methods
                      </li>
                      <li>
                        Chapter 1.3: Key concepts: reliability, validity, and
                        ethics
                      </li>
                      <li>Chapter 1.4: Summary</li>
                      <li>Chapter 1.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Formulating Research Questions and Hypotheses
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>
                        Chapter 2.2: Identifying research problems and
                        objectives
                      </li>
                      <li>
                        Chapter 2.3: Crafting clear and testable hypotheses
                      </li>
                      <li>Chapter 2.4: Summary</li>
                      <li>Chapter 2.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Quantitative Research Methods
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>
                        Chapter 3.2: Understanding experimental and
                        non-experimental designs
                      </li>
                      <li>
                        Chapter 3.3: Sampling techniques and population analysis
                      </li>
                      <li>
                        Chapter 3.4: Using surveys, questionnaires, and
                        statistical tools
                      </li>
                      <li>Chapter 3.5: Summary</li>
                      <li>Chapter 3.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: Qualitative Research Methods
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>
                        Chapter 4.2: Conducting interviews and focus groups
                      </li>
                      <li>Chapter 4.3: Observational research techniques</li>
                      <li>
                        Chapter 4.4: Analyzing and interpreting qualitative data
                      </li>
                      <li>Chapter 4.5: Summary</li>
                      <li>Chapter 4.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Mixed-Methods Research
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>
                        Chapter 5.2: Integrating qualitative and quantitative
                        approaches
                      </li>
                      <li>
                        Chapter 5.3: Advantages and challenges of mixed-methods
                        designs
                      </li>
                      <li>Chapter 5.4: Summary</li>
                      <li>Chapter 5.5: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 6 */}
                <AccordionItem value="week6">
                  <AccordionTrigger>
                    Week 6: Data Collection and Analysis
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 6.1: Introduction</li>
                      <li>
                        Chapter 6.2: Choosing the right tools for data
                        collection
                      </li>
                      <li>
                        Chapter 6.3: Organizing and analyzing data effectively
                      </li>
                      <li>
                        Chapter 6.4: Interpreting results to address research
                        questions
                      </li>
                      <li>Chapter 6.5: Summary</li>
                      <li>Chapter 6.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 7 */}
                <AccordionItem value="week7">
                  <AccordionTrigger>
                    Week 7: Reporting and Presenting Research Findings
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 7.1: Introduction</li>
                      <li>
                        Chapter 7.2: Structuring a research report or
                        presentation
                      </li>
                      <li>
                        Chapter 7.3: Visualizing data with charts, graphs, and
                        tables
                      </li>
                      <li>
                        Chapter 7.4: Best practices for sharing findings with
                        different audiences
                      </li>
                      <li>Chapter 7.5: Summary</li>
                      <li>Chapter 7.6: Quiz</li>
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
