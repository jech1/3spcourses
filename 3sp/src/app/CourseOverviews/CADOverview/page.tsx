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
        <div className="relative">
          <div 
            className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#632a88] to-white"
            style={{ zIndex: -1 }}
          ></div>
          <div className="container mx-auto px-4 py-12 space-y-36 mt-0">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
              3D Modeling & CAD
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
              Learn the principles of CAD and how to develop your own models
              through onshape
              </p>
            </section>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
              <CardDescription>
                Learn the fundamentals of Computer Aided Design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
              This course provides a practical introduction to Computer-Aided Design (CAD) and 3D modeling, teaching students to design, modify, and visualize objects for various applications. From mastering essential CAD tools to creating complex 3D models, students will gain hands-on experience to bring their ideas to life.
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
                  Week 1: Introduction to CAD and Software Setup{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 1: Introduction</li>
                    <li>Chapter 1: Setting up the CAD environment in onshape
                    </li>
                    <li>Chapter 1: Overview of the CAD interface and tools</li>
                    <li>Chapter 1: Understanding design principles and sketching basics</li>
                    <li>Chapter 1: Creating simple 2D sketches and extrusions</li>
                    <li>Chapter 1: Summary </li>
                    <li>Chapter 1: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week2">
                <AccordionTrigger>
                  Week 2: Mastering Basic 3D Modeling Techniques{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 2: Introduction</li>
                    <li>Chapter 2: Working with primitives like cubes, spheres, and cylinders</li>
                    <li>Chapter 2: Modifying shapes using extrude, revolve, and loft tools</li>
                    <li>Chapter 2: Combining and subtracting shapes (Boolean operations)</li>
                    <li>Chapter 2: Building simple 3D objects with precision</li>
                    <li>Chapter 2: Summary </li>
                    <li>Chapter 2: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week3">
                <AccordionTrigger>
                  Week 3: Rendering and Visualization{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 3: Introduction</li>
                    <li>Chapter 3: Applying materials and textures to models</li>
                    <li>Chapter 3: Setting up lighting and creating realistic renders</li>
                    <li>Chapter 3: Exporting high-quality images and animations</li>
                    <li>Chapter 3: Summary </li>
                    <li>Chapter 3: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week4">
                <AccordionTrigger>Week 4: 3D Printing and Prototyping </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 4: Introduction</li>
                    <li>Chapter 4: Preparing models for 3D printing with slicing software</li>
                    <li>Chapter 4: Troubleshooting and refining designs for printability</li>
                    <li>Chapter 4: Understanding real-world applications of prototypes</li>
                    <li>Chapter 4: Summary </li>
                    <li>Chapter 4: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week5">
                <AccordionTrigger>
                  Week 5: Final Project{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Chapter 5: Introduction</li>
                    <li>Chapter 5: Developing a complete design from concept to final render</li>
                    <li>Chapter 5: Incorporating advanced modeling techniques</li>
                    <li>Chapter 5: Presenting and documenting the design process</li>
                    <li>Chapter 5: Summary </li>
                    <li>Chapter 5: Quiz </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <div className="text-center">
            <Button size="lg" onClick={() => router.push("/Courses/CADCourse")}>
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
