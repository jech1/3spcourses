"use client";

import Head from "next/head";
import TakeCourseButton from "@/components/TakeCourseButton";
import { useRef, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
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
      <Head>
        <title>Scientific Writing & Grant Proposal Overview - 3SP Courses</title>
        <meta
          name="description"
          content="Explore the Scientific Writing & Grant Proposal course overview. Master the fundamentals of scientific writing, grant proposals, research papers, and academic presentations for academic and professional success."
        />
        <meta name="robots" content="index, follow" />
      </Head>
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
        <div className="relative">
          <div
            className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#632a88] to-white"
            style={{ zIndex: -1 }}
          ></div>
          <div className="container mx-auto px-4 py-12 space-y-36 mt-0">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-white">
                3D Printing & CAD with Onshape
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Learn the principles of CAD and how to develop your own 3D printed models through Onshape.
              </p>
            </section>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn the fundamentals of Computer-Aided Design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This course provides a practical introduction to Computer-Aided Design (CAD) and 3D printing, teaching students to design, modify, and visualize objects for various applications. From mastering essential CAD tools to creating 3D models, students will gain hands-on experience to bring their ideas to life.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Duration: 4 weeks</li>
                  <li>Difficulty: Beginner to Intermediate</li>
                  <li>Prerequisites: Basic computer skills</li>
                </ul>
              </CardContent>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">Course Syllabus</h2>
              <Accordion type="single" collapsible className="w-full">
                {/* Week 1 */}
                <AccordionItem value="week1">
                  <AccordionTrigger>
                    Week 1: Introduction to CAD and Software Setup
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 1.1: Introduction to CAD &amp; 3D Printing</li>
                      <li>Chapter 1.2: Setting Up Onshape</li>
                      <li>Chapter 1.3: Introduction to 3D Printing Basics</li>
                      <li>Chapter 1.4: Summary of Week 1</li>
                      <li>Chapter 1.5: Creating Simple 2D Sketches and Extrusions</li>
                      <li>Chapter 1.6: Summary</li>
                      <li>Chapter 1.7: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 2 */}
                <AccordionItem value="week2">
                  <AccordionTrigger>
                    Week 2: Mastering Basic 3D Modeling Techniques
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 2.1: Introduction</li>
                      <li>Chapter 2.2: Working with Primitives like Cubes, Spheres, and Cylinders</li>
                      <li>Chapter 2.3: Modifying Shapes using Extrude, Revolve, and Loft Tools</li>
                      <li>Chapter 2.4: Combining and Subtracting Shapes (Boolean Operations)</li>
                      <li>Chapter 2.5: Building Simple 3D Objects with Precision</li>
                      <li>Chapter 2.6: Summary</li>
                      <li>Chapter 2.7: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 3 */}
                <AccordionItem value="week3">
                  <AccordionTrigger>
                    Week 3: Rendering and Visualization
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 3.1: Introduction</li>
                      <li>Chapter 3.2: Applying Materials and Textures to Models</li>
                      <li>Chapter 3.3: Setting up Lighting and Creating Realistic Renders</li>
                      <li>Chapter 3.4: Exporting High-Quality Images and Animations</li>
                      <li>Chapter 3.5: Summary</li>
                      <li>Chapter 3.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 4 */}
                <AccordionItem value="week4">
                  <AccordionTrigger>
                    Week 4: 3D Printing and Prototyping
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 4.1: Introduction</li>
                      <li>Chapter 4.2: Preparing Models for 3D Printing with Slicing Software</li>
                      <li>Chapter 4.3: Troubleshooting and Refining Designs for Printability</li>
                      <li>Chapter 4.4: Understanding Real-World Applications of Prototypes</li>
                      <li>Chapter 4.5: Summary</li>
                      <li>Chapter 4.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Week 5 */}
                <AccordionItem value="week5">
                  <AccordionTrigger>
                    Week 5: Final Project
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Chapter 5.1: Introduction</li>
                      <li>Chapter 5.2: Developing a Complete Design from Concept to Final Render</li>
                      <li>Chapter 5.3: Incorporating Advanced Modeling Techniques</li>
                      <li>Chapter 5.4: Presenting and Documenting the Design Process</li>
                      <li>Chapter 5.5: Summary</li>
                      <li>Chapter 5.6: Quiz</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="text-center">
              <TakeCourseButton redirectUrl="/User/Courses/CADCourse" />
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
