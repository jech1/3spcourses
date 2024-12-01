"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
//import Image from 'next/image'

// Define TypeScript interfaces
interface CourseData {
  title: string;
  weeks: Week[];
}

interface Week {
  title: string;
  chapters: Chapter[];
}

interface Chapter {
  title: string;
  content: string;
  videoUrl: string;
  quiz?: Quiz;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Progress {
  week: number;
  chapter: number;
  completed: string[];
}

// Complete course data with all weeks and chapters
const courseData: CourseData = {
  title: "Caffeine Extraction",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to Caffeine and Lab Safety",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Welcome to Caffeine Extraction</h2>
            <p class="mt-4">Embark on your journey to master the fundamentals of research in a lab setting by learning the science behind caffeine extraction. This course emphasizes lab safety, chemical handling, and precise extraction techniques.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the properties of caffeine and its natural sources.</li>
              <li>Introduction to lab safety protocols and proper equipment handling.</li>
            </ul>
            <div class="mt-6">
              <img src="/caffeineextraction_logo.png" alt="Caffeine Extraction Course Structure Diagram" width="500" height="300" />
            </div>
          `,
          videoUrl: "https://example.com/week1-introduction",
        },
        {
          title:
            "Understanding the Properties of Caffeine and Its Natural Sources",
          content: `
            <h2 class="text-2xl font-bold">Caffeine: An Overview</h2>
            <p class="mt-4">Explore the chemical properties of caffeine, its natural occurrence, and its significance in various industries.</p>
            <h3 class="text-xl font-semibold mt-6">Chemical Structure:</h3>
            <p class="mt-2">Caffeine is an organic compound belonging to the class of methylxanthines. Its chemical formula is C8H10N4O2.</p>
            <h3 class="text-xl font-semibold mt-6">Natural Sources:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Coffee beans</li>
              <li>Tea leaves</li>
              <li>Cacao pods</li>
              <li>Kola nuts</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Applications:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Beverage industry</li>
              <li>Pharmaceuticals</li>
              <li>Food additives</li>
              <li>Cosmetics</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-properties-caffeine",
        },
        {
          title:
            "Introduction to Lab Safety Protocols and Proper Equipment Handling",
          content: `
            <h2 class="text-2xl font-bold">Ensuring Safety in the Lab</h2>
            <p class="mt-4">Learn essential lab safety practices to protect yourself and maintain a safe working environment.</p>
            <h3 class="text-xl font-semibold mt-6">Personal Protective Equipment (PPE):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Safety goggles</li>
              <li>Lab coats</li>
              <li>Gloves</li>
              <li>Closed-toe shoes</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Chemical Handling:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Proper storage of chemicals</li>
              <li>Labeling containers accurately</li>
              <li>Understanding Material Safety Data Sheets (MSDS)</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Equipment Handling:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Using fume hoods correctly</li>
              <li>Operating laboratory instruments safely</li>
              <li>Maintenance and cleaning of equipment</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-lab-safety",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to Caffeine and Lab Safety</h2>
            <p class="mt-4">This week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The properties and natural sources of caffeine.</li>
              <li>Essential lab safety protocols and proper equipment handling techniques.</li>
            </ul>
            <p class="mt-4">These foundational concepts are crucial as you begin your journey into the science of caffeine extraction.</p>
          `,
          videoUrl: "https://example.com/week1-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week1-quiz",
          quiz: {
            question:
              "Which of the following is NOT a natural source of caffeine?",
            options: ["Coffee beans", "Tea leaves", "Cacao pods", "Sugar cane"],
            correctAnswer: 3,
          },
        },
      ],
    },
    // Week 2
    {
      title: "Week 2: Solvent-Based Extraction Techniques",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Solvent-Based Extraction Methods</h2>
            <p class="mt-4">Dive into the various solvent-based techniques used for extracting caffeine from natural sources.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Selecting and handling solvents safely in the lab.</li>
              <li>Step-by-step caffeine extraction using liquid-liquid methods.</li>
              <li>Importance of using fume hoods and personal protective equipment.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-intro",
        },
        {
          title: "Selecting and Handling Solvents Safely in the Lab",
          content: `
            <h2 class="text-2xl font-bold">Choosing the Right Solvent</h2>
            <p class="mt-4">Understand the criteria for selecting appropriate solvents and learn safe handling practices.</p>
            <h3 class="text-xl font-semibold mt-6">Solvent Properties:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Polarity</li>
              <li>Boiling point</li>
              <li>Volatility</li>
              <li>Toxicity</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Safe Handling Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Proper storage and labeling of solvents.</li>
              <li>Using appropriate PPE when handling solvents.</li>
              <li>Working in well-ventilated areas or fume hoods.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Common Solvents for Caffeine Extraction:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ethyl acetate</li>
              <li>Methanol</li>
              <li>Hexane</li>
              <li>Ethanol</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-selecting-solvents",
        },
        {
          title: "Step-by-Step Caffeine Extraction Using Liquid-Liquid Methods",
          content: `
            <h2 class="text-2xl font-bold">Executing Liquid-Liquid Extraction</h2>
            <p class="mt-4">Learn the detailed procedure for extracting caffeine using liquid-liquid extraction techniques.</p>
            <h3 class="text-xl font-semibold mt-6">Procedure:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare the caffeine-containing material (e.g., tea leaves).</li>
              <li>Mix the material with a suitable solvent.</li>
              <li>Allow the mixture to separate into two distinct layers.</li>
              <li>Collect the solvent layer containing the extracted caffeine.</li>
              <li>Evaporate the solvent to obtain purified caffeine.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Key Considerations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensuring complete separation of layers.</li>
              <li>Avoiding contamination during the extraction process.</li>
              <li>Optimizing solvent-to-material ratios for maximum yield.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-liquid-liquid-extraction",
        },
        {
          title:
            "Importance of Using Fume Hoods and Personal Protective Equipment",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Safety During Extraction</h2>
            <p class="mt-4">Understand the critical role of fume hoods and PPE in maintaining a safe laboratory environment during solvent-based extractions.</p>
            <h3 class="text-xl font-semibold mt-6">Fume Hoods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ventilating hazardous fumes away from the user.</li>
              <li>Preventing inhalation of toxic solvent vapors.</li>
              <li>Maintaining a controlled airflow for safe operations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Personal Protective Equipment (PPE):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Safety goggles to protect eyes from splashes.</li>
              <li>Lab coats to shield skin and clothing.</li>
              <li>Gloves resistant to solvents to protect hands.</li>
              <li>Proper footwear to prevent accidents.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Always wear appropriate PPE when handling solvents.</li>
              <li>Ensure the fume hood is functioning correctly before starting.</li>
              <li>Minimize open container exposure to reduce vapor release.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-fume-hood-ppe",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 2 Summary: Solvent-Based Extraction Techniques</h2>
            <p class="mt-4">This week, you've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Selection and safe handling of solvents for caffeine extraction.</li>
              <li>Step-by-step liquid-liquid extraction procedures.</li>
              <li>The importance of using fume hoods and PPE to ensure laboratory safety.</li>
            </ul>
            <p class="mt-4">These techniques are fundamental for effective and safe caffeine extraction, laying the groundwork for more advanced topics in the coming weeks.</p>
          `,
          videoUrl: "https://example.com/week2-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week2-quiz",
          quiz: {
            question:
              "What is the primary purpose of using a fume hood during solvent-based extraction?",
            options: [
              "To increase the temperature of the solvent",
              "To ventilate hazardous fumes away from the user",
              "To provide additional lighting",
              "To store excess solvents safely",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 3
    {
      title: "Week 3: Purification and Waste Management",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Ensuring Purity and Safe Waste Disposal</h2>
            <p class="mt-4">This week focuses on purifying extracted caffeine and managing chemical waste responsibly.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Safely separating impurities from extracted caffeine.</li>
              <li>Proper disposal of chemical waste in accordance with safety guidelines.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-intro",
        },
        {
          title: "Safely Separating Impurities from Extracted Caffeine",
          content: `
            <h2 class="text-2xl font-bold">Purification Techniques</h2>
            <p class="mt-4">Learn effective methods to purify extracted caffeine, ensuring high purity levels for further use or analysis.</p>
            <h3 class="text-xl font-semibold mt-6">Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Crystallization to remove impurities.</li>
              <li>Recrystallization for enhanced purity.</li>
              <li>Distillation to separate components based on boiling points.</li>
              <li>Filtration to eliminate solid contaminants.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Process Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare the crude caffeine extract.</li>
              <li>Apply the chosen purification technique.</li>
              <li>Monitor the process to ensure effective impurity removal.</li>
              <li>Collect and dry the purified caffeine.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Quality Assurance:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Testing purity using analytical methods.</li>
              <li>Ensuring consistency in purification results.</li>
              <li>Documenting the purification process for reproducibility.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-purification-techniques",
        },
        {
          title:
            "Proper Disposal of Chemical Waste in Accordance with Safety Guidelines",
          content: `
            <h2 class="text-2xl font-bold">Responsible Waste Management</h2>
            <p class="mt-4">Understand the protocols for disposing of chemical waste safely to protect the environment and maintain lab safety.</p>
            <h3 class="text-xl font-semibold mt-6">Waste Segregation:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Separating organic solvents from aqueous waste.</li>
              <li>Identifying hazardous vs. non-hazardous waste.</li>
              <li>Using appropriate containers for different waste types.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Disposal Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Recycling solvents where possible.</li>
              <li>Utilizing designated disposal services for hazardous waste.</li>
              <li>Following institutional and governmental regulations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Safety Precautions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Wearing appropriate PPE during waste handling.</li>
              <li>Labeling waste containers clearly.</li>
              <li>Storing waste in designated areas away from active experiments.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-waste-management",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 3 Summary: Purification and Waste Management</h2>
            <p class="mt-4">This week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Effective purification techniques to ensure high-purity caffeine.</li>
              <li>Responsible chemical waste disposal practices in compliance with safety guidelines.</li>
            </ul>
            <p class="mt-4">These skills are essential for maintaining the integrity of your research and ensuring a safe laboratory environment.</p>
          `,
          videoUrl: "https://example.com/week3-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week3-quiz",
          quiz: {
            question:
              "Which purification technique involves dissolving a solid in a solvent and then allowing it to recrystallize?",
            options: [
              "Filtration",
              "Distillation",
              "Crystallization",
              "Evaporation",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 4
    {
      title: "Week 4: Analytical Techniques and Lab Accuracy",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Analyzing Caffeine Purity</h2>
            <p class="mt-4">This week covers the analytical techniques used to assess the purity of extracted caffeine and the importance of accuracy in laboratory measurements.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Using chromatography and spectroscopy to analyze caffeine purity.</li>
              <li>Maintaining precision and accuracy in lab measurements.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-intro",
        },
        {
          title:
            "Using Chromatography and Spectroscopy to Analyze Caffeine Purity",
          content: `
            <h2 class="text-2xl font-bold">Advanced Analytical Methods</h2>
            <p class="mt-4">Learn how to employ chromatography and spectroscopy techniques to determine the purity and concentration of caffeine.</p>
            <h3 class="text-xl font-semibold mt-6">Chromatography:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Types: Thin Layer Chromatography (TLC) and High-Performance Liquid Chromatography (HPLC).</li>
              <li>Principles: Separation based on differential affinities.</li>
              <li>Applications: Identifying and quantifying caffeine in extracts.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Spectroscopy:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Types: UV-Vis Spectroscopy and Infrared (IR) Spectroscopy.</li>
              <li>Principles: Interaction of light with matter to determine molecular structure.</li>
              <li>Applications: Assessing purity and identifying impurities in caffeine samples.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Procedure Example:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare the caffeine sample for analysis.</li>
              <li>Run chromatography to separate components.</li>
              <li>Use spectroscopy to analyze the separated compounds.</li>
              <li>Interpret the results to determine caffeine purity.</li>
            </ol>
          `,
          videoUrl: "https://example.com/week4-chromatography-spectroscopy",
        },
        {
          title: "Maintaining Precision and Accuracy in Lab Measurements",
          content: `
            <h2 class="text-2xl font-bold">Ensuring Reliable Data</h2>
            <p class="mt-4">Understand the difference between precision and accuracy and learn techniques to achieve reliable and reproducible measurements in the lab.</p>
            <h3 class="text-xl font-semibold mt-6">Precision vs. Accuracy:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Precision:</strong> Consistency of repeated measurements.</li>
              <li><strong>Accuracy:</strong> Closeness of measurements to the true value.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Techniques for Precision:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Calibrating instruments regularly.</li>
              <li>Using high-quality measurement tools.</li>
              <li>Minimizing environmental factors that can affect measurements.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Techniques for Accuracy:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Calibrating instruments against known standards.</li>
              <li>Using appropriate measurement techniques for the substance being measured.</li>
              <li>Ensuring proper sample preparation to avoid contamination.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Double-checking measurements for consistency.</li>
              <li>Recording all measurement conditions and variables.</li>
              <li>Implementing quality control checks during experiments.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-precision-accuracy",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 4 Summary: Analytical Techniques and Lab Accuracy</h2>
            <p class="mt-4">This week, you've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Chromatography and spectroscopy techniques for analyzing caffeine purity.</li>
              <li>Strategies to maintain precision and accuracy in laboratory measurements.</li>
            </ul>
            <p class="mt-4">Mastering these analytical methods and measurement techniques ensures the reliability and validity of your caffeine extraction results.</p>
          `,
          videoUrl: "https://example.com/week4-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week4-quiz",
          quiz: {
            question:
              "What is the primary difference between precision and accuracy in lab measurements?",
            options: [
              "Precision refers to the closeness to the true value, while accuracy refers to consistency.",
              "Precision refers to consistency of measurements, while accuracy refers to the closeness to the true value.",
              "Precision is about speed of measurement, while accuracy is about cost.",
              "Precision and accuracy are interchangeable terms.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Final Extraction Project and Safety Assessment",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Designing and Performing a Comprehensive Caffeine Extraction Project</h2>
            <p class="mt-4">In this week, you'll apply all the skills you've learned to design and execute a complete caffeine extraction project, ensuring adherence to safety protocols.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Designing and performing a comprehensive caffeine extraction project.</li>
              <li>Reviewing and applying all safety protocols in the final procedure.</li>
              <li>Presenting results with an emphasis on safety compliance.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-intro",
        },
        {
          title:
            "Designing and Performing a Comprehensive Caffeine Extraction Project",
          content: `
            <h2 class="text-2xl font-bold">Project Planning and Execution</h2>
            <p class="mt-4">Plan and execute a detailed caffeine extraction project that integrates all the techniques and safety measures learned throughout the course.</p>
            <h3 class="text-xl font-semibold mt-6">Project Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Define the project objectives and desired outcomes.</li>
              <li>Design the extraction process using appropriate solvents and techniques.</li>
              <li>Assemble the necessary equipment and prepare the laboratory workspace.</li>
              <li>Conduct the extraction, purification, and analysis steps.</li>
              <li>Document each phase of the project meticulously.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Integration of Skills:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Applying solvent-based extraction techniques.</li>
              <li>Ensuring purity through analytical methods.</li>
              <li>Maintaining lab safety throughout the project.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-project-design",
        },
        {
          title:
            "Reviewing and Applying All Safety Protocols in the Final Procedure",
          content: `
            <h2 class="text-2xl font-bold">Comprehensive Safety Implementation</h2>
            <p class="mt-4">Ensure that all safety protocols are rigorously followed during the final extraction project to prevent accidents and maintain a safe lab environment.</p>
            <h3 class="text-xl font-semibold mt-6">Safety Review:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Revisiting PPE requirements and proper usage.</li>
              <li>Ensuring correct handling and storage of chemicals.</li>
              <li>Reviewing emergency procedures and equipment locations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Applying Safety Protocols:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Setting up the workspace with all necessary safety measures.</li>
              <li>Conducting risk assessments before starting experiments.</li>
              <li>Monitoring the project for adherence to safety guidelines.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-safety-review",
        },
        {
          title: "Presenting Results with an Emphasis on Safety Compliance",
          content: `
            <h2 class="text-2xl font-bold">Effective Communication of Your Project</h2>
            <p class="mt-4">Learn how to present your project findings effectively, highlighting both the results and the safety measures implemented.</p>
            <h3 class="text-xl font-semibold mt-6">Presentation Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Creating clear and organized presentation slides.</li>
              <li>Demonstrating the extraction process through visuals and demonstrations.</li>
              <li>Highlighting safety compliance and how it was maintained throughout the project.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Documentation:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Preparing a detailed project report.</li>
              <li>Including data analysis, observations, and conclusions.</li>
              <li>Documenting safety procedures and any incidents encountered.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-presentation",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 5 Summary: Final Extraction Project and Safety Assessment</h2>
            <p class="mt-4">This week, you've accomplished:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Designed and performed a comprehensive caffeine extraction project.</li>
              <li>Applied all safety protocols rigorously throughout the project.</li>
              <li>Presented your results with a focus on safety compliance and effective communication.</li>
            </ul>
            <p class="mt-4">Congratulations on completing the **Caffeine Extraction** course! Your hands-on experience and adherence to safety standards prepare you for both academic and industrial research applications.</p>
          `,
          videoUrl: "https://example.com/week5-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Final Quiz: Final Extraction Project and Safety Assessment</h2>
            <p class="mt-4">Assess your comprehensive understanding of the concepts covered throughout the course.</p>
          `,
          videoUrl: "https://example.com/week5-quiz",
          quiz: {
            question:
              "Why is it important to use a fume hood during solvent-based extraction projects?",
            options: [
              "To increase the speed of evaporation",
              "To protect the environment from chemical spills",
              "To ventilate hazardous fumes and protect the user from inhalation",
              "To enhance the purity of the extracted caffeine",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Weeks 6-8 can be added here following the same structure if provided
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function CoursePage() {
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem("courseProgress");
      return savedProgress
        ? (JSON.parse(savedProgress) as Progress)
        : { week: 0, chapter: 0, completed: [] };
    }
    return { week: 0, chapter: 0, completed: [] };
  });
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Memoize updateProgress to ensure it has a stable reference
  const updateProgress = useCallback((week: number, chapter: number) => {
    setProgress((prev) => {
      const newCompleted = [...prev.completed];
      const key = `${week}-${chapter}`;
      if (!newCompleted.includes(key)) {
        newCompleted.push(key);
      }
      const newProgress: Progress = { week, chapter, completed: newCompleted };
      if (typeof window !== "undefined") {
        localStorage.setItem("courseProgress", JSON.stringify(newProgress));
      }
      return newProgress;
    });
  }, []);

  // Include updateProgress in the dependency array
  const navigateToChapter = useCallback(
    (weekIndex: number, chapterIndex: number) => {
      const week = courseData.weeks[weekIndex];
      if (week && week.chapters[chapterIndex]) {
        setCurrentWeek(weekIndex);
        setCurrentChapter(chapterIndex);
        updateProgress(weekIndex, chapterIndex);
        setQuizAnswer(null);
        setShowQuizResult(false);
      }
    },
    [updateProgress]
  );

  useEffect(() => {
    navigateToChapter(progress.week, progress.chapter);
  }, [navigateToChapter, progress.week, progress.chapter]);

  const previousChapter = () => {
    if (currentChapter > 0) {
      navigateToChapter(currentWeek, currentChapter - 1);
    } else if (currentWeek > 0) {
      const previousWeekIndex = currentWeek - 1;
      const previousWeek = courseData.weeks[previousWeekIndex];
      if (previousWeek) {
        const previousWeekLastChapterIndex = previousWeek.chapters.length - 1;
        navigateToChapter(previousWeekIndex, previousWeekLastChapterIndex);
      }
    }
  };

  const nextChapter = () => {
    const currentWeekData = courseData.weeks[currentWeek];
    if (
      currentWeekData &&
      currentChapter < currentWeekData.chapters.length - 1
    ) {
      navigateToChapter(currentWeek, currentChapter + 1);
    } else if (currentWeek < courseData.weeks.length - 1) {
      navigateToChapter(currentWeek + 1, 0);
    }
  };

  const calculateOverallProgress = () => {
    const totalChapters = courseData.weeks.reduce(
      (acc, week) => acc + week.chapters.length,
      0
    );
    return (progress.completed.length / totalChapters) * 100;
  };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  // Determine if Next and Previous buttons should be disabled
  const isFirstChapter = currentWeek === 0 && currentChapter === 0;
  const isLastChapter =
    currentWeek === courseData.weeks.length - 1 &&
    currentChapter === courseData.weeks[currentWeek].chapters.length - 1;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Progress Bar */}
      <div className="bg-gray-200 h-2">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${calculateOverallProgress()}%` }}
        />
      </div>
      {/* Main Content Area */}
      <div className="flex-grow">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold mb-6">{courseData.title}</h1>
          <h2 className="text-3xl font-bold mb-4">
            {courseData.weeks[currentWeek]?.title}
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            {courseData.weeks[currentWeek]?.chapters[currentChapter]?.title}
          </h3>
          <Button
            variant="outline"
            className="mb-6"
            onClick={() =>
              window.open(
                courseData.weeks[currentWeek]?.chapters[currentChapter]
                  ?.videoUrl ?? "",
                "_blank"
              )
            }
          >
            <Play className="h-4 w-4 mr-2" /> Watch Video
          </Button>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html:
                courseData.weeks[currentWeek]?.chapters[currentChapter]
                  ?.content ?? "",
            }}
          />
          {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz && (
            <div className="mt-8 p-6 border border-gray-300 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Quiz</h4>
              <p className="mb-4">
                {
                  courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz
                    ?.question
                }
              </p>
              <RadioGroup
                value={quizAnswer?.toString() ?? ""}
                onValueChange={(value) => setQuizAnswer(parseInt(value))}
              >
                {courseData.weeks[currentWeek]?.chapters[
                  currentChapter
                ]?.quiz?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                      className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          quizAnswer === index
                            ? "bg-blue-600"
                            : "bg-transparent"
                        }`}
                      />
                    </RadioGroupItem>
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button
                onClick={handleQuizSubmit}
                className="mt-6"
                disabled={quizAnswer === null}
              >
                Submit Answer
              </Button>
              {showQuizResult && (
                <p
                  className={`mt-4 ${
                    quizAnswer ===
                    courseData.weeks[currentWeek]?.chapters[currentChapter]
                      ?.quiz?.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {quizAnswer ===
                  courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz
                    ?.correctAnswer
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${
                        courseData.weeks[currentWeek]?.chapters[currentChapter]
                          ?.quiz?.options[
                          courseData.weeks[currentWeek]?.chapters[
                            currentChapter
                          ]?.quiz?.correctAnswer ?? 0
                        ]
                      }`}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Navigation Buttons at the Bottom */}
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={previousChapter}
          disabled={isFirstChapter}
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>
        <Button variant="ghost" onClick={nextChapter} disabled={isLastChapter}>
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
