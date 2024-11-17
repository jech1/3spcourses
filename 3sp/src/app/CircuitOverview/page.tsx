"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 space-y-36 mt-20 ">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Microcontroller & Circuit Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                This comprehensive course will introduce you to the core
                technologies used in modern web development. Youll learn HTML,
                CSS, and JavaScript, as well as best practices for creating
                responsive and accessible websites.
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
                  Week 1: Introduction; software downloads and online resources{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 1: Introduction</li>
                    <li>Chapter 1: Downloading Arduino IDE</li>
                    <li>Chapter 1: Understtanding the Arduino IDE Platform</li>
                    <li>Chapter 1: Communities & Resources</li>
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
                    <li>Chapter 2: Selectors and properties</li>
                    <li>Chapter 2: Box model and layout</li>
                    <li>Chapter 2: Responsive design principles</li>
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
                    <li>Chapter 3: Variables, data types, and operators</li>
                    <li>Chapter 3: Control structures and functions</li>
                    <li>Chapter 3: DOM manipulation</li>
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
                    <li>Chapter 4: CSS flexbox and grid</li>
                    <li>Chapter 4: CSS animations and transitions</li>
                    <li>Chapter 4: Accessibility best practices</li>
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
                    <li>Chapter 5: AJAX and fetch API</li>
                    <li>Chapter 5: Working with JSON</li>
                    <li>Chapter 5: Local storage and session storage</li>
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
                    <li>Chapter 6: Media queries and breakpoints</li>
                    <li>Chapter 6: Responsive images and typography</li>
                    <li>Chapter 6: Testing and debugging responsive layouts</li>
                    <li>Chapter 6: Summary </li>
                    <li>Chapter 6: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week7">
                <AccordionTrigger>Week 7: Combining </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 7: Introduction</li>
                    <li>Chapter 7: Optimizing images and assets</li>
                    <li>Chapter 7: Minification and compression techniques</li>
                    <li>Chapter 7: Caching strategies</li>
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
                    <li>Chapter 8: Implementing responsive design</li>
                    <li>Chapter 8: Adding interactivity with JavaScript</li>
                    <li>Chapter 8: Course review and next steps</li>
                    <li>Chapter 8: Summary </li>
                    <li>Chapter 8: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg">Take Course</Button>
          </div>
        </div>

        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold mt-20 mb-1 text-center text-[#11001C]">
            Awarded Badges
          </h2>
          <AnimatedImageCarousel />
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-12">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Student Handbook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Course Materials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Learning Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@courseplatform.com"
                  className="hover:underline"
                >
                  info@courseplatform.com
                </a>
              </li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>
                Website:{" "}
                <a
                  href="https://www.courseplatform.com"
                  className="hover:underline"
                >
                  www.courseplatform.com
                </a>
              </li>
              <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
              <li>
                Contact Makers:{" "}
                <a
                  href="https://www.courseplatform.com"
                  className="hover:underline"
                >
                  www.courseplatform.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
