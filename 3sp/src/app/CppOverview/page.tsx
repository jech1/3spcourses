'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const images = [
  { src: '/Scientific Writing Badge (1).png?height=500&width=500', alt: 'Image 1' },
  { src: '/circuitbadge.png?height=500&width=500', alt: 'Image 2' },
  { src: '/researchbadge.png?height=500&width=500', alt: 'Image 3' },
  { src: '/CADbadge (1).png?height=500&width=500', alt: 'Image 4' },
  { src: '/c++badge.png?height=500&width=500', alt: 'Image 5' },
  { src: '/caffeinebadge.png?height=500&width=500', alt: 'Image 6' },
]

function AnimatedImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useAnimationFrame(() => {
    if (containerRef.current) {
      const xValue = x.get()
      const containerWidth = containerRef.current.scrollWidth / 2
      
      if (xValue <= -containerWidth) {
        x.set(0)
      } else {
        x.set(xValue - 2) // Adjust this value to change the speed
      }
    }
  })

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const clonedItems = container.innerHTML
      container.innerHTML += clonedItems
    }
  }, [])

  return (
    <div className="w-full overflow-hidden p-40">
      <motion.div
        ref={containerRef}
        className="flex space-x-4"
        style={{ x }}
      >
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
  )
}

export default function EnhancedCourseOverviewComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-primary-foreground py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">3SP Course Platform</h1>
        <Button variant="secondary">Login</Button>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 space-y-36 mt-20">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">C++ Coding</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand programming concepts and write efficient code using one of the most utilized languages worldwide.
            </p>
          </section>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
              <CardDescription>Learn the fundamentals of Programming</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This comprehensive course will introduce you to the core technologies used in modern web development. 
                Youll learn HTML, CSS, and JavaScript, as well as best practices for creating responsive and 
                accessible websites.
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
                <AccordionTrigger>Week 1: Introduction to HTML</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Understanding the structure of web pages</li>
                    <li>Basic HTML tags and elements</li>
                    <li>Creating your first HTML document</li>
                    <li>HTML5 semantic elements</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week2">
                <AccordionTrigger>Week 2: Styling with CSS</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introduction to CSS</li>
                    <li>Selectors and properties</li>
                    <li>Box model and layout</li>
                    <li>Responsive design principles</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week3">
                <AccordionTrigger>Week 3: JavaScript Basics</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Introduction to programming with JavaScript</li>
                    <li>Variables, data types, and operators</li>
                    <li>Control structures and functions</li>
                    <li>DOM manipulation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week4">
                <AccordionTrigger>Week 4: Advanced HTML and CSS</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Forms and input validation</li>
                    <li>CSS flexbox and grid</li>
                    <li>CSS animations and transitions</li>
                    <li>Accessibility best practices</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week5">
                <AccordionTrigger>Week 5: JavaScript and the DOM</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Event handling</li>
                    <li>AJAX and fetch API</li>
                    <li>Working with JSON</li>
                    <li>Local storage and session storage</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week6">
                <AccordionTrigger>Week 6: Responsive Web Design</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mobile-first design approach</li>
                    <li>Media queries and breakpoints</li>
                    <li>Responsive images and typography</li>
                    <li>Testing and debugging responsive layouts</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week7">
                <AccordionTrigger>Week 7: Web Performance and Optimization</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Performance metrics and tools</li>
                    <li>Optimizing images and assets</li>
                    <li>Minification and compression techniques</li>
                    <li>Caching strategies</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="week8">
                <AccordionTrigger>Week 8: Final Project and Review</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Building a complete website from scratch</li>
                    <li>Implementing responsive design</li>
                    <li>Adding interactivity with JavaScript</li>
                    <li>Course review and next steps</li>
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
              <li><Link href="#" className="hover:underline">Student Handbook</Link></li>
              <li><Link href="#" className="hover:underline">Course Materials</Link></li>
              <li><Link href="#" className="hover:underline">Learning Tips</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Admin</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@courseplatform.com" className="hover:underline">info@courseplatform.com</a></li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Website: <a href="https://www.courseplatform.com" className="hover:underline">www.courseplatform.com</a></li>
              <li>Made by: Jordan Rodriguez & Jacob Echeverry</li>
              <li>Contact Makers: <a href="https://www.courseplatform.com" className="hover:underline">www.courseplatform.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}