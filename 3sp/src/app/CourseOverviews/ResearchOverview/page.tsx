"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
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
  const router = useRouter(); // Initialize router here

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
                This course equips students with the skills to design, conduct, and analyze research effectively. Covering both qualitative and quantitative methods, the curriculum emphasizes developing strong research questions, employing appropriate methodologies, and presenting findings with clarity and impact.
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
              <AccordionItem value="week1">
                <AccordionTrigger>
                  Week 1: Introduction to Research Methods{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 1: Introduction</li>
                    <li>Chapter 1: Understanding the importance of research methods</li>
                    <li>Chapter 1: Key concepts: reliability, validity, and ethics</li>
                    <li>Chapter 1: Summary </li>
                    <li>Chapter 1: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week2">
                <AccordionTrigger>
                  Week 2: Formulating Research Questions and Hypotheses{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 2: Introduction</li>
                    <li>Chapter 2: Identifying research problems and objectives</li>
                    <li>Chapter 2: Crafting clear and testable hypotheses</li>
                    <li>Chapter 2: Summary </li>
                    <li>Chapter 2: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week3">
                <AccordionTrigger>
                  Week 3: Quantitative Research Methods{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 3: Introduction</li>
                    <li>Chapter 3: Understanding experimental and non-experimental designs</li>
                    <li>Chapter 3: Sampling techniques and population analysis</li>
                    <li>Chapter 3: Using surveys, questionnaires, and statistical tools</li>
                    <li>Chapter 3: Summary </li>
                    <li>Chapter 3: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week4">
                <AccordionTrigger>Week 4: Qualitative Research Methods </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 4: Introduction</li>
                    <li>Chapter 4: Conducting interviews and focus groups</li>
                    <li>Chapter 4: Observational research techniques</li>
                    <li>Chapter 4: Analyzing and interpreting qualitative data</li>
                    <li>Chapter 4: Summary </li>
                    <li>Chapter 4: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week5">
                <AccordionTrigger>
                  Week 5: Mixed-Methods Research{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 5: Introduction</li>
                    <li>Chapter 5: Integrating qualitative and quantitative approaches</li>
                    <li>Chapter 5: Advantages and challenges of mixed-methods designs</li>
                    <li>Chapter 5: Summary </li>
                    <li>Chapter 5: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week6">
                <AccordionTrigger>Week 6: Data Collection and Analysis </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 6: Introduction</li>
                    <li>Chapter 6: Choosing the right tools for data collection</li>
                    <li>Chapter 6: Organizing and analyzing data effectively</li>
                    <li>Chapter 6: Interpreting results to address research questions</li>
                    <li>Chapter 6: Summary </li>
                    <li>Chapter 6: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week7">
                <AccordionTrigger>Week 7: Reporting and Presenting Research Findings </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 7: Introduction</li>
                    <li>Chapter 7: Structuring a research report or presentation</li>
                    <li>Chapter 7: Visualizing data with charts, graphs, and tables</li>
                    <li>Chapter 7: Best practices for sharing findings with different audiences</li>
                    <li>Chapter 7: Summary </li>
                    <li>Chapter 7: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg" onClick={() => router.push("/Courses/ResearchCourse")}>
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