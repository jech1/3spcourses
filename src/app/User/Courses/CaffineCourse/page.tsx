"use client";

import Head from "next/head";
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
              <h2 class="text-2xl font-bold">Slide 1: Welcome to Caffeine Extraction</h2>
              <p class="mt-4"><strong>Objective:</strong> Begin your journey into the science of caffeine extraction by understanding its significance and scope.</p>
              <h3 class="text-xl font-semibold mt-6">What You Will Learn:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Basic properties of caffeine and its natural sources.</li>
                <li>An overview of extraction processes and their applications.</li>
                <li>The importance of lab safety and proper chemical handling.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Read through this slide to grasp the course overview.</li>
                <li>Note key terms such as <em>caffeine properties</em>, <em>extraction methods</em>, and <em>lab safety</em>.</li>
                <li>Prepare your lab notebook to record essential points and any questions.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> Keep this slide accessible as it will serve as a reference throughout the course.</p>
              <p class="mt-4">
                <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                  Click here for additional details and assessment info.
                </a>
              </p>
            `,
            //videoUrl: "https://example.com/week1-introduction"
          },
          {
            title: "1.2 Understanding Caffeine Extraction Methods",
            content: `
              <h2 class="text-2xl font-bold">Slide 2: Caffeine Extraction Methods</h2>
              <p class="mt-4"><strong>Objective:</strong> Explore the various techniques used to extract caffeine and understand their underlying principles.</p>
              <h3 class="text-xl font-semibold mt-6">Extraction Techniques:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Solvent-Based Extraction</li>
                <li>Steam Distillation</li>
                <li>Supercritical Fluid Extraction</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Review each extraction method and understand its advantages and limitations.</li>
                <li>Note how factors such as solvent choice, temperature, and pressure affect extraction efficiency.</li>
                <li>Record your observations and questions in your lab notebook.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> Compare the techniques to determine which method is most suitable for specific applications.</p>
              <p class="mt-4">
                <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                  Click here for additional details and assessment info.
                </a>
              </p>
            `,
            //videoUrl: "https://example.com/week1-extraction-methods"
          },
          {
            title: "1.3 Basic Lab Safety Protocols and Proper Equipment Handling",
            content: `
              <h2 class="text-2xl font-bold">Slide 3: Lab Safety and Equipment Handling</h2>
              <p class="mt-4"><strong>Objective:</strong> Learn essential lab safety practices and proper handling of equipment used in caffeine extraction.</p>
              <h3 class="text-xl font-semibold mt-6">Key Safety Practices:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Wearing Personal Protective Equipment (PPE): safety goggles, lab coats, gloves, and closed-toe shoes.</li>
                <li>Safe chemical handling: correct storage, accurate labeling, and understanding Material Safety Data Sheets (MSDS).</li>
                <li>Proper equipment handling: using fume hoods, operating lab instruments, and maintaining a clean workspace.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Review the list of required PPE and ensure all items are available.</li>
                <li>Watch the safety demonstration video to see proper chemical and equipment handling.</li>
                <li>Set up your lab workspace following these safety protocols.</li>
                <li>Document your observations and any questions regarding lab safety.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> Always prioritize safety—review these protocols before starting any experiment.</p>
              <p class="mt-4">
                <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                  Click here for additional details and assessment info.
                </a>
              </p>
            `,
            //videoUrl: "https://example.com/week1-lab-safety"
          },
          {
            title: "1.4 Summary",
            content: `
              <h2 class="text-2xl font-bold">Slide 4: Week 1 Summary</h2>
              <p class="mt-4"><strong>Review:</strong> Recap the key points covered this week regarding caffeine properties, extraction methods, and lab safety.</p>
              <ul class="list-disc list-inside mt-2">
                <li>Understanding the natural sources and properties of caffeine.</li>
                <li>An overview of various extraction methods and the factors influencing their efficiency.</li>
                <li>Essential lab safety protocols and proper equipment handling practices.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Final Assessment Preparation:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Review all the slides and your notes.</li>
                <li>Create a concise summary of what you've learned in your lab notebook.</li>
                <li>Begin brainstorming ideas for your final extraction project.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> A detailed summary will form the backbone of your final project and help reinforce your understanding.</p>
              <p class="mt-4">
                <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                  Click here for additional details and assessment info.
                </a>
              </p>
            `,
          },
          {
            title: "1.5 Quiz",
            content: `
              <h2 class="text-2xl font-bold">Slide 5: Quiz - Caffeine Extraction Fundamentals</h2>
              <p class="mt-4"><strong>Objective:</strong> Assess your understanding of caffeine properties, extraction methods, and lab safety protocols.</p>
              <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Review the concepts presented in Slides 1 through 4.</li>
                <li>Reflect on how each element contributes to a safe and effective extraction process.</li>
                <li>Select the answer that best summarizes the key principles.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> Take your time and refer back to your notes if needed before answering.</p>
              <p class="mt-4">
                <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                  Click here for additional details and assessment info.
                </a>
              </p>
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
            }
          }
        ],
      },

    // Week 2
    {
      title: "Week 2: Solvent-Based Extraction Techniques",
      chapters: [
        {
          title: "2.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Solvent-Based Extraction Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the principles behind using solvents to extract caffeine and the role this technique plays in laboratory research.</p>
            <h3 class="text-xl font-semibold mt-6">What You Will Learn:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The basic concept of solvent-based extraction and its advantages.</li>
              <li>Key solvent properties such as polarity, boiling point, and toxicity.</li>
              <li>An overview of how these properties influence extraction efficiency.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the theoretical background on solvent extraction from your course materials.</li>
              <li>Familiarize yourself with common solvents used in caffeine extraction (e.g., ethyl acetate, methanol, hexane, ethanol).</li>
              <li>Note how each solvent’s properties affect the extraction process.</li>
              <li>Record key points and any questions in your lab notebook.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Understanding solvent properties is essential for optimizing extraction efficiency in later experiments.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-intro"
        },
        {
          title: "2.2 Delving into Lab Safety",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Advanced Lab Safety for Solvent Extraction</h2>
            <p class="mt-4"><strong>Objective:</strong> Enhance your understanding of lab safety, specifically when handling solvents during caffeine extraction.</p>
            <h3 class="text-xl font-semibold mt-6">Key Safety Protocols:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Proper use of Personal Protective Equipment (PPE): gloves, safety goggles, lab coats, and closed-toe shoes.</li>
              <li>Safe handling and storage of volatile and potentially toxic solvents.</li>
              <li>Effective use of fume hoods and ventilation systems to minimize exposure.</li>
              <li>Guidelines for proper disposal of solvent waste.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the lab safety guidelines in your manual and watch the provided safety demonstration video.</li>
              <li>Set up your lab workspace with all required PPE and ensure that the fume hood is operational.</li>
              <li>Practice proper storage and labeling of solvents as instructed.</li>
              <li>Document any questions or uncertainties about solvent handling for later discussion.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Always confirm that your safety equipment is in proper working order before beginning any experiment.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-lab-safety"
        },
        {
          title: "2.3 Selecting and Handling Solvents in the Lab",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Selecting and Handling Solvents</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to choose the appropriate solvent for caffeine extraction and handle it safely in the laboratory.</p>
            <h3 class="text-xl font-semibold mt-6">Criteria for Solvent Selection:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Polarity:</strong> Determines the solvent's ability to dissolve caffeine.</li>
              <li><strong>Boiling Point:</strong> Affects the ease of solvent removal after extraction.</li>
              <li><strong>Volatility & Toxicity:</strong> Impacts user safety and environmental considerations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Consult your lab manual and reference materials to review the properties of common solvents.</li>
              <li>Compare solvents such as ethyl acetate, methanol, hexane, and ethanol based on their polarity, boiling point, and safety profiles.</li>
              <li>Select a solvent that meets your extraction requirements while adhering to lab safety protocols.</li>
              <li>Prepare and properly label the solvent container following standard lab procedures.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Write down your solvent selection rationale—it can be a valuable reference when optimizing extraction conditions.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-selecting-solvents"
        },
        {
          title: "2.4 Liquid-Liquid Extraction Guide",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Liquid-Liquid Extraction Procedure</h2>
            <p class="mt-4"><strong>Objective:</strong> Execute the liquid-liquid extraction process to isolate caffeine effectively.</p>
            <h3 class="text-xl font-semibold mt-6">Procedure Overview:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare the caffeine-containing material (e.g., grind tea leaves or coffee beans).</li>
              <li>Mix the material with the selected solvent in a clean, labeled container.</li>
              <li>Agitate the mixture to facilitate the dissolution of caffeine into the solvent.</li>
              <li>Allow the mixture to settle, forming two distinct layers.</li>
              <li>Carefully separate and collect the solvent layer that contains the extracted caffeine.</li>
              <li>Evaporate the solvent under controlled conditions to recover purified caffeine.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Key Considerations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensure complete layer separation to maximize yield.</li>
              <li>Avoid cross-contamination by using clean tools and containers.</li>
              <li>Monitor solvent-to-material ratios to optimize extraction efficiency.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Maintain detailed records of your procedure to improve and repeat the process in future experiments.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-liquid-liquid-extraction"
        },
        {
          title: "2.5 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 2 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> Recap the key concepts and steps for solvent-based caffeine extraction covered this week.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the principles and advantages of solvent-based extraction.</li>
              <li>Advanced lab safety protocols for handling volatile solvents.</li>
              <li>Criteria for selecting the proper solvent for optimal extraction.</li>
              <li>A detailed, step-by-step liquid-liquid extraction procedure.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Final Assessment Preparation:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all the slides and your lab notes from this week.</li>
              <li>Create a concise summary highlighting the extraction process and safety measures.</li>
              <li>Prepare any questions or discussion points for your next lab session.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A thorough summary helps reinforce your learning and serves as a reference for future experiments.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "2.6 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - Solvent-Based Extraction Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your understanding of the extraction methods, solvent handling, and lab safety practices covered this week.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the key points from Slides 1 through 5.</li>
              <li>Reflect on the criteria for solvent selection and the importance of safety in handling them.</li>
              <li>Select the answer that best summarizes the critical factor in a successful solvent-based extraction.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Revisit any slides that are unclear before attempting the quiz.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "What is the primary factor in selecting a solvent for caffeine extraction?",
            options: [
              "Its boiling point",
              "Its polarity and ability to dissolve caffeine",
              "Its cost",
              "Its color and odor"
            ],
            correctAnswer: 1
          }
        }
      ],
    },
    // Week 3
    {
      title: "Week 3: Purification and Waste Management",
      chapters: [
        {
          title: "3.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Purification and Waste Management</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the importance of purifying extracted caffeine and managing chemical waste safely.</p>
            <h3 class="text-xl font-semibold mt-6">What You Will Learn:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The purpose of purification in enhancing caffeine quality.</li>
              <li>Common purification techniques such as crystallization and recrystallization.</li>
              <li>Fundamental principles of safe waste management in a lab setting.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Read through the purification overview to understand its role in research.</li>
              <li>Take note of the common methods used to remove impurities from your extract.</li>
              <li>Begin preparing your lab notebook for documenting purification steps and safety measures.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A clear understanding of these concepts is crucial for maintaining the quality and safety of your lab work.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-intro"
        },
        {
          title: "3.2 Safely Separating Impurities from Extracted Caffeine",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Purification Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to purify extracted caffeine by separating impurities using methods like crystallization, recrystallization, and distillation.</p>
            <h3 class="text-xl font-semibold mt-6">Purification Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Crystallization:</strong> Allows impurities to be excluded as the caffeine crystallizes out.</li>
              <li><strong>Recrystallization:</strong> Enhances purity by dissolving and reprecipitating the compound.</li>
              <li><strong>Distillation:</strong> Separates components based on differences in boiling points.</li>
              <li><strong>Filtration:</strong> Removes solid contaminants from liquid extracts.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare your crude caffeine extract following your standard procedure.</li>
              <li>Select an appropriate purification method based on your sample’s properties.</li>
              <li>Follow the specific steps of the chosen method:
                <ul class="list-disc list-inside">
                  <li>For crystallization, cool the solution gradually to promote pure crystal formation.</li>
                  <li>For distillation, set up your apparatus and carefully monitor temperature control.</li>
                </ul>
              </li>
              <li>Document the process, noting temperatures, timings, and observations.</li>
              <li>Collect and dry the purified caffeine for further analysis.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Maintaining detailed records during purification helps optimize future experiments.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-purification-techniques"
        },
        {
          title: "3.3 Proper Disposal of Chemical Waste in Accordance with Safety Guidelines",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Responsible Waste Management</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn safe and environmentally responsible methods for disposing of chemical waste.</p>
            <h3 class="text-xl font-semibold mt-6">Key Waste Management Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Segregating hazardous waste from non-hazardous waste.</li>
              <li>Using appropriate, labeled containers for different types of waste.</li>
              <li>Following institutional and governmental disposal guidelines.</li>
              <li>Ensuring that waste is stored safely until it can be properly disposed of.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the lab’s chemical waste disposal procedures and guidelines.</li>
              <li>Identify and segregate waste materials from your purification process.</li>
              <li>Label all waste containers clearly with the type of waste and date.</li>
              <li>Place waste in designated storage areas until it can be safely disposed of.</li>
              <li>Document all waste disposal actions in your lab logbook.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Proper waste management protects both the environment and your health. Always follow safety guidelines precisely.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-waste-management"
        },
        {
          title: "3.4 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Week 3 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> Recap the key purification and waste management practices covered this week.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Effective techniques for purifying caffeine to enhance its quality.</li>
              <li>Detailed procedures for methods such as crystallization and distillation.</li>
              <li>Proper and safe disposal of chemical waste in accordance with lab guidelines.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Final Assessment Preparation:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all slides and consolidate your lab notes.</li>
              <li>Create a concise summary of the purification process and waste management protocols.</li>
              <li>Prepare any questions you have for further discussion or clarification.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-documented summary will reinforce your understanding and serve as a useful reference for future projects.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "3.5 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Purification and Waste Management</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your understanding of the purification techniques and waste disposal practices covered in this week’s lessons.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the key points from Slides 1 through 4.</li>
              <li>Consider the importance of each purification method and safety protocol.</li>
              <li>Select the answer that best encapsulates the critical aspect of these processes.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> If you are unsure, revisit your notes or rewatch the demonstration videos before attempting the quiz.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "Which purification technique involves dissolving a compound in a solvent and then allowing it to form purer crystals upon cooling?",
            options: [
              "Filtration",
              "Crystallization",
              "Distillation",
              "Centrifugation"
            ],
            correctAnswer: 1
          }
        }
      ],
    },

    
    // Week 4
    {
      title: "Week 4: Advanced Analytical Techniques",
      chapters: [
        {
          title: "4.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Advanced Analytical Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the role of advanced analytical methods in evaluating the purity and quality of extracted caffeine.</p>
            <h3 class="text-xl font-semibold mt-6">What You Will Learn:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>An overview of High-Pressure Liquid Chromatography (HPLC) and Infrared (IR) Spectroscopy.</li>
              <li>How these techniques contribute to quality control in caffeine extraction.</li>
              <li>The importance of instrument calibration, maintenance, and data interpretation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Read through the theoretical background on HPLC and IR Spectroscopy provided in your course materials.</li>
              <li>Note key concepts such as separation, detection, calibration, and spectral analysis.</li>
              <li>Prepare your lab notebook to document all procedures, observations, and instrument settings.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> This introduction lays the foundation for the detailed procedures in the following slides, so review it carefully.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-intro"
        },
        {
          title: "4.2 Utilizing High-Pressure Liquid Chromatography (HPLC) to Analyze Caffeine Purity",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: High-Pressure Liquid Chromatography (HPLC)</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to operate the HPLC system to separate and quantify components in your caffeine sample.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the interaction between the stationary and mobile phases.</li>
              <li>Calibration techniques, sample injection, and detection methods.</li>
              <li>Interpreting chromatograms to assess caffeine purity.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare your caffeine sample according to the lab protocol.</li>
              <li>Calibrate the HPLC instrument using standard solutions as described in your manual.</li>
              <li>Select the appropriate column and mobile phase for your analysis.</li>
              <li>Inject the sample and monitor the chromatogram for characteristic peaks.</li>
              <li>Record the retention times and peak areas for data analysis.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Carefully document all instrument settings and observations to aid in troubleshooting and future analyses.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-hplc-analysis"
        },
        {
          title: "4.3 Mastering HPLC Techniques to Ensure Accurate Results",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Advanced HPLC Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Enhance your HPLC skills by mastering techniques for optimizing separation and resolving common analytical challenges.</p>
            <h3 class="text-xl font-semibold mt-6">Advanced Techniques Include:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Adjusting flow rates and temperature settings for optimal separation.</li>
              <li>Implementing gradient elution to handle complex mixtures.</li>
              <li>Troubleshooting issues such as peak tailing, baseline noise, and solvent contamination.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Record your baseline HPLC settings before making adjustments.</li>
              <li>Experiment with different flow rates and temperature settings, noting the impact on peak resolution.</li>
              <li>Adjust the gradient profile if needed to improve separation.</li>
              <li>Document any issues and the steps taken to resolve them.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Detailed logs of your adjustments and outcomes will help refine your method and support reproducibility.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-hplc-techniques"
        },
        {
          title: "4.4 IR Spectroscopy to Further Analyze Caffeine Purity",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Infrared (IR) Spectroscopy</h2>
            <p class="mt-4"><strong>Objective:</strong> Use IR Spectroscopy to obtain detailed molecular information and confirm the purity of your caffeine sample.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Fundamentals of IR absorption and how molecules interact with infrared light.</li>
              <li>Interpreting IR spectra to identify functional groups in caffeine.</li>
              <li>Calibration and maintenance of the IR spectrometer for consistent results.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Prepare your caffeine sample following the standard procedure for IR analysis.</li>
              <li>Mount the sample properly on the IR spectrometer.</li>
              <li>Calibrate the instrument using reference standards.</li>
              <li>Run the scan and collect the IR spectrum.</li>
              <li>Analyze the spectrum to identify key absorption peaks that confirm caffeine’s molecular structure and purity.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Compare your spectrum with known reference spectra to validate your results.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-ir-spectroscopy"
        },
        {
          title: "4.5 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 4 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> Recap the advanced analytical techniques discussed this week and their role in ensuring the purity of your extracted caffeine.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Utilizing HPLC to separate and quantify caffeine with precision.</li>
              <li>Optimizing HPLC methods through advanced techniques and troubleshooting.</li>
              <li>Employing IR Spectroscopy to confirm molecular structure and purity.</li>
              <li>Understanding the critical importance of instrument calibration and maintenance.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Final Assessment Preparation:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all slides and consolidate your lab notes from the week.</li>
              <li>Create a summary of each analytical method and its significance in quality control.</li>
              <li>Prepare any questions or discussion points for your next lab session.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A comprehensive summary reinforces your learning and serves as a valuable reference for future experiments and your final project.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "4.6 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - Advanced Analytical Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your understanding of the advanced analytical techniques used to assess caffeine purity.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all key points from Slides 1 through 5.</li>
              <li>Reflect on how each analytical method contributes to quality control.</li>
              <li>Select the answer that best captures the critical role of these techniques.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Revisit your lab notes and demonstration videos if needed before taking the quiz.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "What is the primary purpose of using IR Spectroscopy in caffeine analysis?",
            options: [
              "To separate caffeine from impurities",
              "To determine the molecular structure and confirm purity",
              "To calibrate the HPLC instrument",
              "To monitor the evaporation of solvents"
            ],
            correctAnswer: 1
          }
        }
      ],
    },
    
    // Week 5
    {
      title: "Week 5: Final Extraction Project and Safety Assessment",
      chapters: [
        {
          title: "5.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Your Final Project</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to integrate all the skills from the course into a comprehensive caffeine extraction project while ensuring laboratory safety.</p>
            <h3 class="text-xl font-semibold mt-6">What You Will Do:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Review the final project guidelines and objectives.</li>
              <li>Understand the deliverables: a complete extraction process, documentation, and safety assessment.</li>
              <li>Outline the project phases—from initial concept to final presentation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Carefully read the final project brief provided in your course materials.</li>
              <li>Identify the key techniques (solvent extraction, purification, waste management, and safety protocols) that you will incorporate.</li>
              <li>Create a detailed timeline and checklist to manage each project phase.</li>
              <li>Prepare your lab notebook to document every step of the process.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Start early and iterate on your design concept to refine both your extraction technique and safety practices.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-intro"
        },
        {
          title: "5.2 Designing and Performing a Comprehensive Caffeine Extraction Project",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Project Planning and Execution</h2>
            <p class="mt-4"><strong>Objective:</strong> Plan and execute a detailed extraction project that integrates all the course techniques and safety measures.</p>
            <h3 class="text-xl font-semibold mt-6">Project Phases:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Concept Development:</strong> Brainstorm, sketch, and outline your extraction process.</li>
              <li><strong>Process Design:</strong> Choose solvents, determine purification methods, and map safety checkpoints.</li>
              <li><strong>Execution:</strong> Set up your lab, run the extraction, and monitor each step carefully.</li>
              <li><strong>Documentation:</strong> Record every detail—from equipment settings to observations—throughout the project.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Integration of Skills:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Applying solvent-based extraction techniques learned in Week 2.</li>
              <li>Utilizing purification methods from Week 3 for optimal product quality.</li>
              <li>Maintaining strict adherence to lab safety protocols.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Keep a visual record (photos or screenshots) of each stage for inclusion in your final report.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-project-design"
        },
        {
          title: "5.3 Reviewing and Applying All Safety Protocols in the Final Procedure",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Comprehensive Safety Implementation</h2>
            <p class="mt-4"><strong>Objective:</strong> Ensure rigorous application of all safety protocols during your extraction project.</p>
            <h3 class="text-xl font-semibold mt-6">Safety Focus Areas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Reviewing and confirming PPE requirements and proper usage.</li>
              <li>Ensuring safe chemical handling and proper storage practices.</li>
              <li>Conducting risk assessments and emergency procedure drills.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Safety Checks:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Verify that all lab equipment and safety gear are in optimal condition.</li>
              <li>Set up your workspace with clear safety signage and properly labeled chemicals.</li>
              <li>Conduct a pre-experiment safety audit with your team.</li>
              <li>Monitor and document safety compliance throughout the extraction process.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Regular safety reviews not only protect you but also enhance the credibility of your final project.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-safety-review"
        },
        {
          title: "5.4 Caffeine Extraction Without the Use of Carcinogenic Chemicals",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Green Chemistry Approaches</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore sustainable, non-toxic alternatives for caffeine extraction that minimize environmental and health risks.</p>
            <h3 class="text-xl font-semibold mt-6">Alternative Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Microwave-Assisted Extraction (MAE)</li>
              <li>Supercritical Fluid Extraction (SFE) using CO₂</li>
              <li>Deep Eutectic Solvents (DES) for eco-friendly extraction</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Benefits:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Reduced exposure to carcinogenic chemicals</li>
              <li>Lower environmental impact</li>
              <li>Enhanced safety in the laboratory</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Implementation:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Research and select an alternative solvent or method based on your project needs.</li>
              <li>Review the experimental setup for the chosen green extraction technique.</li>
              <li>Integrate this method into your overall project plan and note any adjustments required.</li>
              <li>Document the performance of the green extraction method compared to traditional techniques.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A comparative analysis of green vs. traditional methods can add significant value to your project report.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-green-extraction"
        },
        {
          title: "5.5 Presenting Results with an Emphasis on Safety Compliance",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Effective Project Presentation</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn to communicate your project outcomes clearly, with a focus on both technical results and adherence to safety protocols.</p>
            <h3 class="text-xl font-semibold mt-6">Presentation Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Create clear, organized slides summarizing each phase of your project.</li>
              <li>Use visual aids (photos, graphs, and charts) to illustrate key data and safety checkpoints.</li>
              <li>Highlight how safety protocols were implemented and monitored throughout your experiment.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Documentation:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Compile a comprehensive project report including methodology, results, and safety assessments.</li>
              <li>Include detailed observations, troubleshooting logs, and reflections on process improvements.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-documented presentation not only demonstrates technical expertise but also underscores your commitment to lab safety.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-presentation"
        },
        {
          title: "5.6 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Week 5 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> Recap the final extraction project, emphasizing both the technical execution and safety measures employed throughout the process.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Completed a comprehensive caffeine extraction project using both traditional and green chemistry methods.</li>
              <li>Ensured strict adherence to lab safety protocols and documented each safety measure.</li>
              <li>Effectively presented your project outcomes with clear data and safety assessments.</li>
            </ul>
            <p class="mt-4">This final project showcases your ability to integrate advanced extraction techniques with rigorous safety standards, preparing you for further academic or industrial research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "5.7 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Final Quiz - Comprehensive Extraction Project</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your understanding of the entire final project process—from design through execution and presentation.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all the slides from Slides 1 to 6.</li>
              <li>Reflect on how each phase contributed to both the technical success and safety of your project.</li>
              <li>Select the answer that best captures the critical element for overall project success.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Revisit your project documentation and safety records if you need to refresh your memory before taking the quiz.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "Which aspect of the final extraction project is most critical for ensuring both technical success and safety compliance?",
            options: [
              "Concept development and brainstorming",
              "Rigorous application of safety protocols during the extraction process",
              "Advanced extraction techniques alone",
              "High-quality presentation of the results"
            ],
            correctAnswer: 1
          }
        }
      ],
    },
    
    //add weeks here if you want to 
  ],
};

export default function CaffCoursePage() {
  return (
    <>
      <Head>
        <title>Caffeine Extraction Course</title>
        <meta name="description" content="Learn the science of caffeine extraction, including methods, lab safety, purification techniques, and more." />
      </Head>
      <CoursePage courseData={CaffCourseData} />
    </>
  );
}





