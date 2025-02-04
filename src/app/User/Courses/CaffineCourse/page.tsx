"use client";

// import { useState, useEffect, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// //import Image from 'next/image'
import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const CaffCourseData: CourseData = {
  title: "Caffeine Extraction",

  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to Caffeine and Lab Safety",
      chapters: [
        {
          title: "1.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Welcome to Caffeine Extraction</h2>
            <p class="mt-4">Embark on your journey to master the fundamentals of research in a lab setting by learning the science behind caffeine extraction. This course emphasizes lab safety, chemical handling, and precise extraction techniques.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the properties of caffeine and its natural sources.</li>
              <li>Introduction to lab safety protocols and proper equipment handling.</li>
            </ul>
            
          `,
          videoUrl: "https://example.com/week1-introduction"
        },
        {
          title: "1.2 Understanding Caffeine Extraction Methods",
          content: `
            <h2 class="text-2xl font-bold">Caffeine Extraction Methods</h2>
            <p class="mt-4">Explore the various methods used to extract caffeine from natural sources, focusing on their principles, applications, and effectiveness.</p>
            <h3 class="text-xl font-semibold mt-6">Extraction Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Solvent-Based Extraction</li>
              <li>Steam Distillation</li>
              <li>Supercritical Fluid Extraction</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Factors Influencing Extraction Efficiency:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Choice of solvent</li>
              <li>Temperature and pressure conditions</li>
              <li>Extraction time</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-extraction-methods"
        },
        {
          title: "1.3 Basic Lab Safety Protocols and Proper Equipment Handling",
          content: `
            <h2 class="text-2xl font-bold">Lab Safety and Equipment Handling</h2>
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
          videoUrl: "https://example.com/week1-lab-safety"

        },
        {
          title: "1.4 Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to Caffeine and Lab Safety</h2>
            <p class="mt-4">This week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The properties and natural sources of caffeine.</li>
              <li>Essential lab safety protocols and proper equipment handling techniques.</li>
              <li>Various methods of caffeine extraction and factors affecting their efficiency.</li>
            </ul>
            <p class="mt-4">These foundational concepts are crucial as you begin your journey into the science of caffeine extraction.</p>
          `,

        },
        {
          title: "1.5 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          quiz: {
            question: "Which of the following is NOT a natural source of caffeine?",
            options: [
              "Coffee beans",
              "Tea leaves",
              "Cacao pods",
              "Sugar cane"
            ],
            correctAnswer: 3

          },
        },
      ],
    },
    // Week 2
    {
      title: "Week 2: Solvent-Based Extraction Techniques",
      chapters: [
        {
          title: "2.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Solvent-Based Extraction Methods</h2>
            <p class="mt-4">Dive into the various solvent-based techniques used for extracting caffeine from natural sources.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Selecting and handling solvents safely in the lab.</li>
              <li>Step-by-step caffeine extraction using liquid-liquid methods.</li>
              <li>Importance of using fume hoods and personal protective equipment.</li>
              <li>Proper disposal of chemicals to maintain a clean and safe workplace.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-intro"

        },
        {
          title: "2.2 Delving into Lab Safety",
          content: `
            <h2 class="text-2xl font-bold">Advanced Lab Safety Practices</h2>
            <p class="mt-4">Enhance your understanding of lab safety, focusing on Personal Protective Equipment (PPE), ventilation systems, fume hoods, maintaining a tidy workspace, and proper disposal of chemicals.</p>
            <h3 class="text-xl font-semibold mt-6">Personal Protective Equipment (PPE):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Types of PPE and their appropriate usage.</li>
              <li>Ensuring proper fit and maintenance of PPE.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Ventilation Systems and Fume Hoods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Function and importance of fume hoods in the lab.</li>
              <li>Best practices for using ventilation systems effectively.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Maintaining a Tidy and Clean Workspace:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Organizing lab equipment and materials.</li>
              <li>Regular cleaning schedules to prevent contamination.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Proper Disposal of Chemicals:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Segregating hazardous and non-hazardous waste.</li>
              <li>Following institutional and governmental disposal guidelines.</li>
              <li>Using designated containers for different types of chemical waste.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-lab-safety"

        },
        {
          title: "2.3 Selecting and Handling Solvents in the Lab",
          content: `
            <h2 class="text-2xl font-bold">Choosing and Managing Solvents</h2>
            <p class="mt-4">Understand the criteria for selecting appropriate solvents and learn safe handling practices in the laboratory.</p>
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
          videoUrl: "https://example.com/week2-selecting-solvents"
        },
        {
          title: "2.4 Liquid-Liquid Extraction Guide",
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
          videoUrl: "https://example.com/week2-liquid-liquid-extraction"
        },
        {
          title: "2.5 Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 2 Summary: Solvent-Based Extraction Techniques</h2>
            <p class="mt-4">This week, you've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Advanced lab safety practices including PPE, ventilation, and waste management.</li>
              <li>Selection and safe handling of solvents for caffeine extraction.</li>
              <li>Step-by-step liquid-liquid extraction procedures.</li>
              <li>Proper disposal of chemicals to maintain a clean and safe laboratory environment.</li>
            </ul>
            <p class="mt-4">These techniques are fundamental for effective and safe caffeine extraction, laying the groundwork for more advanced topics in the coming weeks.</p>
          `,
        },
        {
          title: "2.6 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          quiz: {
            question: "What is the primary purpose of using a fume hood during solvent-based extraction?",
            options: [
              "To increase the temperature of the solvent",
              "To ventilate hazardous fumes away from the user",
              "To provide additional lighting",
              "To store excess solvents safely"
            ],
            correctAnswer: 1
          },
        },
      ],
    },
    // Week 3
    {
      title: "Week 3: Purification and Waste Management",
      chapters: [
        {
          title: "3.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Ensuring Purity and Safe Waste Disposal</h2>
            <p class="mt-4">This week focuses on purifying extracted caffeine and managing chemical waste responsibly.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Safely separating impurities from extracted caffeine.</li>
              <li>Proper disposal of chemical waste in accordance with safety guidelines.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-intro"
        },
        {
          title: "3.2 Safely Separating Impurities from Extracted Caffeine",
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
          videoUrl: "https://example.com/week3-purification-techniques"
        },
        {
          title: "3.3 Proper Disposal of Chemical Waste in Accordance with Safety Guidelines",
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
          videoUrl: "https://example.com/week3-waste-management"
        },
        {
          title: "3.4 Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 3 Summary: Purification and Waste Management</h2>
            <p class="mt-4">This week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Effective purification techniques to ensure high-purity caffeine.</li>
              <li>Responsible chemical waste disposal practices in compliance with safety guidelines.</li>
            </ul>
            <p class="mt-4">These skills are essential for maintaining the integrity of your research and ensuring a safe laboratory environment.</p>
          `,
        },
        {
          title: "3.5 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          quiz: {
            question: "Which purification technique involves dissolving a solid in a solvent and then allowing it to recrystallize?",
            options: [
              "Filtration",
              "Distillation",
              "Crystallization",
              "Evaporation"
            ],
            correctAnswer: 2
          },
        },
      ],
    },
    // Week 4
    {
      title: "Week 4: Advanced Analytical Techniques",
      chapters: [
        {
          title: "4.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Analyzing Caffeine Purity</h2>
            <p class="mt-4">This week, we'll delve into advanced analytical techniques to assess the purity of extracted caffeine, including High-Pressure Liquid Chromatography (HPLC) and Infrared (IR) Spectroscopy.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Utilizing High-Pressure Liquid Chromatography (HPLC) to analyze caffeine purity.</li>
              <li>Mastering HPLC techniques to ensure accurate results with a comprehensive maintenance guide.</li>
              <li>Applying IR Spectroscopy for further analysis of caffeine purity, including maintenance protocols.</li>
              <li>Best practices for maintaining analytical equipment.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-intro"
        },
        {
          title: "4.2 Utilizing High-Pressure Liquid Chromatography (HPLC) to Analyze Caffeine Purity",
          content: `
            <h2 class="text-2xl font-bold">High-Pressure Liquid Chromatography (HPLC)</h2>
            <p class="mt-4">Learn how to use HPLC to determine the purity of caffeine samples with precision and accuracy.</p>
            <h3 class="text-xl font-semibold mt-6">HPLC Principles:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Separation based on interactions between analytes and the stationary phase.</li>
              <li>Detection methods and their sensitivity.</li>
              <li>Calibration and quantification.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Operational Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Sample preparation and injection.</li>
              <li>Selecting appropriate columns and mobile phases.</li>
              <li>Running the HPLC system and monitoring results.</li>
              <li>Interpreting chromatograms to assess purity.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Maintenance Guide:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Regular cleaning of HPLC columns.</li>
              <li>Monitoring and replacing worn-out components.</li>
              <li>Ensuring system integrity and calibration.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-hplc-analysis"
        },
        {
          title: "4.3 Mastering HPLC Techniques to Ensure Accurate Results",
          content: `
            <h2 class="text-2xl font-bold">Advanced HPLC Techniques</h2>
            <p class="mt-4">Enhance your HPLC skills to achieve consistent and reliable results in caffeine purity analysis.</p>
            <h3 class="text-xl font-semibold mt-6">Technique Optimization:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Adjusting flow rates and temperature for optimal separation.</li>
              <li>Choosing the right detector settings.</li>
              <li>Implementing gradient elution for complex mixtures.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Troubleshooting Common Issues:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Peak tailing and broadening</li>
              <li>Baseline noise and drift</li>
              <li>Solvent compatibility and contamination</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Maintenance Procedures:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Daily, weekly, and monthly maintenance tasks.</li>
              <li>Preventative measures to extend equipment lifespan.</li>
              <li>Documentation and record-keeping for maintenance activities.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-hplc-techniques"
        },
        {
          title: "4.4 IR Spectroscopy to Further Analyze Caffeine Purity",
          content: `
            <h2 class="text-2xl font-bold">Infrared (IR) Spectroscopy</h2>
            <p class="mt-4">Utilize IR Spectroscopy to gain deeper insights into the molecular structure and purity of caffeine samples.</p>
            <h3 class="text-xl font-semibold mt-6">IR Spectroscopy Basics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Principles of IR Spectroscopy.</li>
              <li>Interpreting IR spectra.</li>
              <li>Identifying functional groups in caffeine.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Operational Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Sample preparation and mounting.</li>
              <li>Calibrating the IR spectrometer.</li>
              <li>Running scans and collecting data.</li>
              <li>Analyzing spectral data to determine purity.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Maintenance Procedures:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Cleaning optical components.</li>
              <li>Regular calibration and verification of instrument accuracy.</li>
              <li>Handling and storage of samples to prevent contamination.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-ir-spectroscopy"
        },
        {
          title: "4.5 Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 4 Summary: Advanced Analytical Techniques</h2>
            <p class="mt-4">This week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Utilizing High-Pressure Liquid Chromatography (HPLC) for caffeine purity analysis.</li>
              <li>Mastering advanced HPLC techniques to ensure accurate and consistent results.</li>
              <li>Applying Infrared (IR) Spectroscopy for detailed molecular analysis of caffeine.</li>
              <li>Best practices for maintaining and troubleshooting analytical equipment.</li>
            </ul>
            <p class="mt-4">These analytical skills are essential for verifying the purity of your extracted caffeine and ensuring the reliability of your research findings.</p>
          `,
        },
        {
          title: "4.6 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          quiz: {
            question: "What is the primary purpose of using High-Pressure Liquid Chromatography (HPLC) in caffeine analysis?",
            options: [
              "To increase the boiling point of solvents",
              "To determine the molecular weight of caffeine",
              "To separate and quantify components in a mixture",
              "To visualize caffeine crystals"
            ],
            correctAnswer: 2
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Final Extraction Project and Safety Assessment",
  chapters: [
    {
      title: "5.1 Introduction",
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
      title: "5.2 Designing and Performing a Comprehensive Caffeine Extraction Project",
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
      title: "5.3 Reviewing and Applying All Safety Protocols in the Final Procedure",
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
      title: "5.4 Caffeine Extraction Without the Use of Carcinogenic Chemicals",
      content: `
        <h2 class="text-2xl font-bold">Green Chemistry Approaches to Caffeine Extraction</h2>
        <p class="mt-4">Explore environmentally friendly methods for extracting caffeine without relying on carcinogenic chemicals, ensuring safety and sustainability in your laboratory practices.</p>
        <h3 class="text-xl font-semibold mt-6">Alternative Solvent Selection:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Introduction to green solvents and their benefits.</li>
          <li>Comparing traditional and green solvents for efficiency and safety.</li>
          <li>Evaluating the environmental impact of solvent choices.</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">Implementing Green Extraction Techniques:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Microwave-Assisted Extraction (MAE) as a green alternative.</li>
          <li>Supercritical Fluid Extraction (SFE) with CO2.</li>
          <li>Using Deep Eutectic Solvents (DES) for sustainable extraction.</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">Benefits of Non-Toxic Extraction Processes:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Enhancing laboratory safety.</li>
          <li>Reducing environmental footprint.</li>
          <li>Improving product purity and quality.</li>
        </ul>
      `,
      videoUrl: "https://example.com/week5-green-extraction",
    },
    {
      title: "5.5 Presenting Results with an Emphasis on Safety Compliance",
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
      title: "5.6 Summary",
      content: `
        <h2 class="text-2xl font-bold">Week 5 Summary: Final Extraction Project and Safety Assessment</h2>
        <p class="mt-4">This week, you've accomplished:</p>
        <ul class="list-disc list-inside mt-2">
          <li>Designed and performed a comprehensive caffeine extraction project.</li>
          <li>Applied all safety protocols rigorously throughout the project.</li>
          <li>Implemented green chemistry approaches to ensure safe and sustainable extraction.</li>
          <li>Presented your results with a focus on safety compliance and effective communication.</li>
        </ul>
        <p class="mt-4">Congratulations on completing the **Caffeine Extraction** course! Your hands-on experience and adherence to safety standards prepare you for both academic and industrial research applications.</p>
      `,
    },
    {
      title: "5.7 Quiz",
      content: `
        <h2 class="text-2xl font-bold">Final Quiz: Final Extraction Project and Safety Assessment</h2>
        <p class="mt-4">Assess your comprehensive understanding of the concepts covered throughout the course.</p>
      `,
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
    //add weeks here if you want to 
  ],
};

export default function CaffCoursePage() {
  return <CoursePage courseData={CaffCourseData} />;
}
