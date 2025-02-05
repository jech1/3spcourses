"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CoursePathways() {
  const courses = [
    {
      title: "Microcontroller and Circuit Design",
      description:
        "Used for creating mechanical systems and hardware prototypes, such as IoT devices or engineering projects.",
      leadsTo: "Electrical Engineering projects",
      badge: "/3spcourses/3spcourses/public/circuitbadge.png",
      badgeColor: "orange",
    },
    {
      title: "Scientific Writing",
      description:
        "Essential for documenting research findings, drafting technical reports, and publishing articles in academic journals or professional settings.",
      leadsTo: "Multidisciplinary projects",
      badge: "/3spcourses/public/Scientific Writing Badge (1).png",
      badgeColor: "purple",
    },
    {
      title: "CAD and 3D Modeling",
      description:
        "Applied in designing detailed mechanical components, creating architectural blueprints, or visualizing concepts in engineering projects.",
      leadsTo: "Engineering projects",
      badge: "/3spcourses/3spcourses/public/CADbadge (1).png",
      badgeColor: "orange",
    },
    {
      title: "Research Methods",
      description:
        "Utilized to design experiments, collect and analyze data, and validate findings in various scientific and technical investigations.",
      leadsTo: "Multidisciplinary projects",
      badge: "/3spcourses/public/Researchbadge.png",
      badgeColor: "purple",
    },
    {
      title: "Caffeine Extraction",
      description:
        "Conducted to study chemical processes, develop purification techniques, or explore applications in food science and pharmaceuticals.",
      leadsTo: "Biology and Chemistry projects",
      badge: "/3spcourses/public/c++badge.png",
      badgeColor: "orange",
    },
    {
      title: "C++ Coding",
      description:
        "Used for developing performance-critical applications like video games, system software, or simulations requiring computational power.",
      leadsTo: "Computer Science projects",
      badge: "/3spcourses/public/c++badge.png",
      badgeColor: "purple",
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#632a88] to-white text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">3SP COURSES PATHWAYS</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 mb-12">
              Empower your future with our cutting-edge online courses. Learn,
              grow, and succeed in the world of technology as a Stem Student
              Scholar.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 relative shrink-0">
                        <div
                          className={`absolute inset-0 rounded-full ${
                            course.badgeColor === "orange"
                              ? "bg-gradient-to-br from-orange-200 to-orange-400"
                              : "bg-gradient-to-br from-[#632a88] to-purple-400"
                          } opacity-20`}
                        />
                        <div className="absolute -left-1/2 bottom-0 w-full h-1/2 bg-[#632a88] rounded-r-full transform -rotate-12" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">{course.title}</h3>
                        <p className="text-sm text-gray-600">
                          {course.description}
                        </p>
                        <div className="pt-2">
                          <span className="text-sm font-semibold text-[#632a88]">
                            Leads to:
                          </span>
                          <span className="text-sm ml-1">{course.leadsTo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
