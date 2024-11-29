"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
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
  title: "Scientific Writing & Grant Proposal",
  weeks: [
    {
        title: "Week 1: Introduction to Scientific Writing",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">Welcome to Scientific Writing & Grant Proposal</h2>
              <p class="mt-4">Scientific writing is a crucial skill for researchers, academics, and professionals in various scientific fields. This course will guide you through the intricacies of effective scientific communication, from crafting research papers to writing compelling grant proposals.</p>
              <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Week 1:</strong> Introduction to Scientific Writing</li>
                <li><strong>Week 2:</strong> Crafting Research Questions and Hypotheses</li>
                <li><strong>Week 3:</strong> Literature Review and Citation Management</li>
                <li><strong>Week 4:</strong> Writing Methods and Results Sections</li>
                <li><strong>Week 5:</strong> Crafting a Strong Discussion Section</li>
                <li><strong>Week 6:</strong> Grant Proposal Writing</li>
                <li><strong>Week 7:</strong> Revising, Editing, and Peer Review</li>
              </ul>
              <div class="mt-6">
                <img src="/researchlogo3sp.png" alt="Course structure diagram" width="500" height="300" />
              </div>
            `,
            videoUrl: "https://example.com/week1-intro"
          },
          {
            title: "Understanding the Purpose of Scientific Writing",
            content: `
              <h2 class="text-2xl font-bold">The Purpose of Scientific Writing</h2>
              <p class="mt-4">Scientific writing serves multiple crucial purposes in the academic and research world:</p>
              <ul class="list-disc list-inside mt-2">
                <li>Communicate research findings effectively</li>
                <li>Contribute to the body of scientific knowledge</li>
                <li>Facilitate peer review and collaboration</li>
                <li>Secure funding through grant proposals</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Key Characteristics of Scientific Writing:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Clarity:</strong> Present information in a clear and concise manner.</li>
                <li><strong>Objectivity:</strong> Maintain neutrality and avoid personal bias.</li>
                <li><strong>Accuracy:</strong> Provide precise and correct data and references.</li>
                <li><strong>Evidence-based:</strong> Support statements with empirical data.</li>
              </ul>
              <p class="mt-4">Throughout this course, we'll delve deeper into each of these characteristics and learn how to apply them effectively in your writing.</p>
            `,
            videoUrl: "https://example.com/week1-purpose"
          },
          {
            title: "Key Components of a Research Paper",
            content: `
              <h2 class="text-2xl font-bold">Understanding the Structure</h2>
              <p class="mt-4">A typical scientific research paper follows a standardized structure, often referred to as IMRaD:</p>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Introduction:</strong> Presents the research question and background.</li>
                <li><strong>Methods:</strong> Describes how the research was conducted.</li>
                <li><strong>Results:</strong> Reports the findings.</li>
                <li><strong>Discussion:</strong> Interprets the results and their implications.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Additional Components:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Abstract:</strong> A brief summary of the entire paper.</li>
                <li><strong>References:</strong> List of sources cited in the paper.</li>
                <li><strong>Acknowledgments:</strong> Credits to contributors and funding sources.</li>
              </ul>
              <p class="mt-4">Understanding this structure is essential for organizing your paper effectively.</p>
              <h3 class="text-xl font-semibold mt-6">Example Layout:</h3>
              <table class="w-full border border-gray-500 mt-4">
                <thead>
                  <tr>
                    <th class="border border-gray-500 px-4 py-2 bg-gray-100">Section</th>
                    <th class="border border-gray-500 px-4 py-2 bg-gray-100">Content</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Abstract</td>
                    <td class="border border-gray-500 px-4 py-2">Summary of the study including purpose, methods, results, and conclusions.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Introduction</td>
                    <td class="border border-gray-500 px-4 py-2">Background information, research question, and objectives.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Methods</td>
                    <td class="border border-gray-500 px-4 py-2">Detailed description of procedures and materials used.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Results</td>
                    <td class="border border-gray-500 px-4 py-2">Presentation of data and findings.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Discussion</td>
                    <td class="border border-gray-500 px-4 py-2">Interpretation of results, implications, and conclusions.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">References</td>
                    <td class="border border-gray-500 px-4 py-2">List of all sources cited in the paper.</td>
                  </tr>
                </tbody>
              </table>
            `,
            videoUrl: "https://example.com/week1-key-components"
          },
          {
            title: "Differences Between Academic and General Writing Styles",
            content: `
              <h2 class="text-2xl font-bold">Academic vs. General Writing</h2>
              <p class="mt-4">Academic writing differs from general writing in several key ways:</p>
              <h3 class="text-xl font-semibold mt-6">Formality:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Academic writing uses formal language and avoids colloquialisms.</li>
                <li>General writing may be more conversational and accessible.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Objectivity:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Academic writing emphasizes objectivity and evidence-based arguments.</li>
                <li>General writing can include personal opinions and anecdotes.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Audience:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Academic writing targets scholars and professionals in the field.</li>
                <li>General writing aims for a broader audience.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Purpose:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Academic writing seeks to inform, analyze, or contribute to scholarly discourse.</li>
                <li>General writing can entertain, inform, or persuade.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Examples:</h3>
              <table class="w-full border border-gray-500 mt-4">
                <thead>
                  <tr>
                    <th class="border border-gray-500 px-4 py-2 bg-gray-100">Aspect</th>
                    <th class="border border-gray-500 px-4 py-2 bg-gray-100">Academic Writing</th>
                    <th class="border border-gray-500 px-4 py-2 bg-gray-100">General Writing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Language</td>
                    <td class="border border-gray-500 px-4 py-2">Formal, technical terms</td>
                    <td class="border border-gray-500 px-4 py-2">Informal, everyday language</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Tone</td>
                    <td class="border border-gray-500 px-4 py-2">Objective, neutral</td>
                    <td class="border border-gray-500 px-4 py-2">Subjective, personal</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-500 px-4 py-2">Structure</td>
                    <td class="border border-gray-500 px-4 py-2">Structured with headings and citations</td>
                    <td class="border border-gray-500 px-4 py-2">Flexible, may not include citations</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-xl font-semibold mt-6">Summary:</h3>
              <p class="mt-4">Recognizing these differences helps in adopting the appropriate style for your scientific writing.</p>
            `,
            videoUrl: "https://example.com/week1-academic-vs-general"
          },
          {
            title: "Planning and Organizing Your Writing",
            content: `
              <h2 class="text-2xl font-bold">Effective Planning Strategies</h2>
              <p class="mt-4">Proper planning and organization are essential for coherent and impactful scientific writing. Here are some steps to guide you:</p>
              <h3 class="text-xl font-semibold mt-6">1. Understand the Assignment or Purpose:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Clarify the objectives and requirements of your paper.</li>
                <li>Identify the target audience and their expectations.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">2. Conduct Preliminary Research:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Gather background information on your topic.</li>
                <li>Identify key themes and gaps in the literature.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">3. Create an Outline:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Organize your main ideas and supporting points.</li>
                <li>Use headings and subheadings to structure your paper.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">4. Set a Writing Schedule:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Allocate time for research, writing, and revisions.</li>
                <li>Set realistic goals and deadlines.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">5. Use Writing Tools:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Leverage software like reference managers and project planners.</li>
                <li>Utilize templates or style guides specific to your discipline.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Outline:</h3>
                <p class="mt-4"><strong>I. Introduction</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Background of the study</li>
                <li>Statement of the problem</li>
                <li>Research objectives</li>
                <li>Research questions/hypotheses</li>
                </ul>
                <p class="mt-4"><strong>II. Literature Review</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Theoretical framework</li>
                <li>Previous studies</li>
                <li>Identified gaps</li>
                <li>Summary of key findings</li>
                </ul>
                <p class="mt-4"><strong>III. Methodology</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Research design</li>
                <li>Data collection methods</li>
                <li>Data analysis procedures</li>
                <li>Ethical considerations</li>
                </ul>
                <p class="mt-4"><strong>IV. Results</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Presentation of data</li>
                <li>Statistical analyses</li>
                <li>Key findings</li>
                </ul>
                <p class="mt-4"><strong>V. Discussion</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Interpretation of results</li>
                <li>Comparison with existing literature</li>
                <li>Implications of the study</li>
                </ul>
                <p class="mt-4"><strong>VI. Conclusion</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>Summary of findings</li>
                <li>Limitations of the study</li>
                <li>Recommendations for future research</li>
                </ul>
                <p class="mt-4"><strong>VII. References</strong></p>
                <ul class="list-disc list-inside mt-2">
                <li>List of all sources cited</li>
                </ul>
              <h3 class="text-xl font-semibold mt-6">Summary:</h3>
              <p class="mt-4">Effective planning and organization streamline the writing process and enhance the clarity of your scientific paper.</p>
            `,
            videoUrl: "https://example.com/week1-planning"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to Scientific Writing</h2>
              <p class="mt-4">This week, we've covered the fundamentals of scientific writing:</p>
              <ul class="list-disc list-inside mt-2">
                <li>The purpose and importance of scientific writing.</li>
                <li>Key components of a research paper (IMRaD structure).</li>
                <li>Differences between academic and general writing styles.</li>
                <li>Strategies for planning and organizing your writing.</li>
              </ul>
              <p class="mt-4">These foundational concepts will support your progress throughout the course as we delve deeper into each aspect of scientific writing.</p>
            `,
            videoUrl: "https://example.com/week1-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week1-quiz",
            quiz: {
              question: "Which section of a research paper is typically NOT part of the IMRaD structure?",
              options: [
                "Introduction",
                "Methods",
                "Discussion",
                "Abstract"
              ],
              correctAnswer: 3
            }
          }
        ]
      },
      {
        title: "Week 2: Crafting Research Questions and Hypotheses",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">The Foundation of Scientific Inquiry</h2>
              <p class="mt-4">Research questions and hypotheses are central to the scientific method. They define the focus of your study and guide your research design and analysis.</p>
              <h3 class="text-xl font-semibold mt-6">Learning Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Understand how to identify research gaps.</li>
                <li>Learn how to formulate clear research questions.</li>
                <li>Develop testable hypotheses.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week2-intro"
          },
          {
            title: "Identifying Research Gaps and Formulating Questions",
            content: `
              <h2 class="text-2xl font-bold">Finding Your Research Niche</h2>
              <p class="mt-4">Identifying research gaps involves reviewing existing literature to find areas that are under-explored or contentious. Here's how to proceed:</p>
              <h3 class="text-xl font-semibold mt-6">1. Conduct a Literature Review:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Read extensively on your topic of interest.</li>
                <li>Note recurring themes and contradictions.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">2. Identify Under-Researched Areas:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Look for topics with limited studies.</li>
                <li>Find questions raised but not answered in previous research.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">3. Formulate Your Research Question:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Ensure it's specific, measurable, and achievable.</li>
                <li>Align it with identified research gaps.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example:</h3>
              <p class="mt-4"><strong>Research Gap:</strong> Limited studies on the impact of social media on adolescent mental health in rural areas.</p>
              <p><strong>Research Question:</strong> What is the effect of social media use on the mental health of adolescents in rural communities?</p>
              <h3 class="text-xl font-semibold mt-6">Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Ensure your question is clear and focused.</li>
                <li>Avoid overly broad or vague questions.</li>
                <li>Consider the feasibility of researching the question.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week2-identifying-gaps"
          },
          {
            title: "Writing Clear and Testable Hypotheses",
            content: `
              <h2 class="text-2xl font-bold">Formulating Your Hypotheses</h2>
              <p class="mt-4">A hypothesis is a tentative explanation or prediction that can be tested through research. Here's how to write effective hypotheses:</p>
              <h3 class="text-xl font-semibold mt-6">1. Start with Your Research Question:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Transform your question into a statement that predicts an outcome.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">2. Ensure It's Testable:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Use measurable variables.</li>
                <li>Avoid subjective terms that can't be quantified.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">3. Make It Specific:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Clearly define the relationship between variables.</li>
                <li>State the expected direction of the relationship (e.g., increases, decreases).</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example:</h3>
              <p class="mt-4"><strong>Research Question:</strong> Does increased screen time affect sleep quality among teenagers?</p>
              <p><strong>Hypothesis:</strong> Teenagers who spend more than 3 hours per day on screens will have poorer sleep quality compared to those who spend less time.</p>
              <h3 class="text-xl font-semibold mt-6">Null and Alternative Hypotheses:</h3>
              <p class="mt-4">In statistical testing, we often use:</p>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Null Hypothesis (H<sub>0</sub>):</strong> No effect or relationship exists.</li>
                <li><strong>Alternative Hypothesis (H<sub>A</sub>):</strong> An effect or relationship exists.</li>
              </ul>
              <p class="mt-4"><strong>Example:</strong></p>
              <ul class="list-disc list-inside mt-2">
                <li><strong>H<sub>0</sub>:</strong> Screen time does not affect sleep quality among teenagers.</li>
                <li><strong>H<sub>A</sub>:</strong> Increased screen time negatively affects sleep quality among teenagers.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Avoiding Common Mistakes:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Don't make hypotheses that are too broad or not testable.</li>
                <li>Avoid using non-measurable terms.</li>
                <li>Ensure your hypothesis is grounded in theory or existing literature.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week2-writing-hypotheses"
          },
          {
            title: "Responsive Design Principles",
            content: `
              <h2 class="text-2xl font-bold">Note: This Chapter May Be Misplaced</h2>
              <p class="mt-4">It seems there might be an error in the chapter listing. "Responsive Design Principles" typically pertains to web design, which may not align with the context of scientific writing. If this chapter is intended, please provide additional details or confirm its inclusion.</p>
            `,
            videoUrl: "https://example.com/week2-responsive-design"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 2 Summary: Crafting Research Questions and Hypotheses</h2>
              <p class="mt-4">This week, we've focused on:</p>
              <ul class="list-disc list-inside mt-2">
                <li>Identifying research gaps through literature review.</li>
                <li>Formulating clear and focused research questions.</li>
                <li>Writing testable hypotheses.</li>
              </ul>
              <p class="mt-4">These skills are essential for designing a solid research study and contributing meaningful knowledge to your field.</p>
            `,
            videoUrl: "https://example.com/week2-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week2-quiz",
            quiz: {
              question: "Which of the following is a characteristic of a good research question?",
              options: [
                "It is broad and general.",
                "It is specific and measurable.",
                "It is based on personal opinion.",
                "It cannot be tested."
              ],
              correctAnswer: 1
            }
          }
        ]
    },  
    {
        title: "Week 3: Literature Review and Citation Management",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">The Importance of Literature Review and Citation Management</h2>
              <p class="mt-4">A well-conducted literature review is the foundation of any research project. It helps you understand the current state of knowledge, identify gaps, and position your research within the existing body of work.</p>
              <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Understand the purpose of a literature review.</li>
                <li>Learn effective strategies for searching and selecting relevant literature.</li>
                <li>Master techniques for summarizing and synthesizing sources.</li>
                <li>Develop skills in citation management to avoid plagiarism.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week3-intro"
          },
          {
            title: "Conducting a Thorough Literature Review",
            content: `
              <h2 class="text-2xl font-bold">Steps to an Effective Literature Review</h2>
              <p class="mt-4">A comprehensive literature review involves several key steps:</p>
              <h3 class="text-xl font-semibold mt-6">1. Define Your Research Topic:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Clearly articulate your research question or hypothesis.</li>
                <li>Identify keywords and phrases related to your topic.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">2. Search for Literature:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Use academic databases like PubMed, Google Scholar, and JSTOR.</li>
                <li>Apply search filters to narrow down results.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">3. Evaluate Sources:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Assess the credibility and relevance of each source.</li>
                <li>Prioritize peer-reviewed journals and reputable publications.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">4. Organize Your Findings:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Group studies by themes, methodologies, or findings.</li>
                <li>Use reference management tools to keep track of sources.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">5. Identify Gaps and Trends:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Look for areas that lack research or have conflicting results.</li>
                <li>Note emerging trends and new methodologies in the field.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Stay organized by taking detailed notes.</li>
                <li>Regularly update your literature review as new studies are published.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week3-literature-review"
          },
          {
            title: "Summarizing and Synthesizing Sources",
            content: `
              <h2 class="text-2xl font-bold">From Individual Studies to a Cohesive Narrative</h2>
              <p class="mt-4">Summarizing and synthesizing are essential skills for creating a literature review that offers value to your readers.</p>
              <h3 class="text-xl font-semibold mt-6">Summarizing:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Briefly state the main points of a single source.</li>
                <li>Focus on the purpose, methodology, results, and conclusions.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Synthesizing:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Combine information from multiple sources to identify patterns.</li>
                <li>Highlight agreements, contradictions, and gaps among studies.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Techniques:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Create thematic categories to group similar findings.</li>
                <li>Use tables or charts to compare and contrast studies.</li>
                <li>Paraphrase information in your own words to avoid plagiarism.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example:</h3>
              <p class="mt-4">"Several studies (Smith, 2020; Johnson, 2019) have found a positive correlation between X and Y, suggesting that..."</p>
              <h3 class="text-xl font-semibold mt-6">Avoiding Common Mistakes:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Don't simply list studies without connecting them.</li>
                <li>Avoid bias by presenting multiple perspectives.</li>
                <li>Ensure that your synthesis supports your research question.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week3-summarizing-synthesizing"
          },
          {
            title: "Proper Citation Techniques and Avoiding Plagiarism",
            content: `
              <h2 class="text-2xl font-bold">Ethical Writing Practices</h2>
              <p class="mt-4">Proper citation is crucial to acknowledge others' work and avoid plagiarism.</p>
              <h3 class="text-xl font-semibold mt-6">Understanding Plagiarism:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Using someone else's work without proper acknowledgment.</li>
                <li>Includes copying text, ideas, images, or data.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Citation Styles:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>APA:</strong> Common in social sciences.</li>
                <li><strong>MLA:</strong> Used in humanities.</li>
                <li><strong>Chicago:</strong> Preferred in history and some sciences.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Cite all sources of information, whether paraphrased or quoted.</li>
                <li>Use quotation marks for direct quotes.</li>
                <li>Include page numbers for specific references.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Using Citation Management Tools:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Software like Zotero, Mendeley, or EndNote can help organize citations.</li>
                <li>They allow you to insert citations and generate bibliographies automatically.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Avoiding Self-Plagiarism:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Do not reuse your own previous work without citation.</li>
                <li>Always check with your institution's guidelines.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week3-citation"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 3 Summary: Literature Review and Citation Management</h2>
              <p class="mt-4">This week, you've learned:</p>
              <ul class="list-disc list-inside mt-2">
                <li>The purpose and importance of conducting a literature review.</li>
                <li>Effective strategies for searching and evaluating literature.</li>
                <li>Techniques for summarizing and synthesizing multiple sources.</li>
                <li>Proper citation methods to maintain academic integrity.</li>
              </ul>
              <p class="mt-4">These skills will help you build a solid foundation for your research and ensure that your work is ethically sound.</p>
            `,
            videoUrl: "https://example.com/week3-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week3-quiz",
            quiz: {
              question: "Which of the following practices helps you avoid plagiarism?",
              options: [
                "Using direct quotes without quotation marks",
                "Paraphrasing information and providing a citation",
                "Copying and pasting text from a source",
                "Submitting the same work for different assignments without disclosure"
              ],
              correctAnswer: 1
            }
          }
        ]
      },
      // Week 4
      {
        title: "Week 4: Writing Methods and Results Sections",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">Presenting Your Research Process and Findings</h2>
              <p class="mt-4">The Methods and Results sections are critical components of your research paper, providing transparency and credibility to your study.</p>
              <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Learn how to describe your research methodology effectively.</li>
                <li>Understand how to present your results clearly and accurately.</li>
                <li>Recognize the importance of reproducibility in research.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week4-intro"
          },
          {
            title: "Describing Methodologies Clearly and Concisely",
            content: `
              <h2 class="text-2xl font-bold">Crafting the Methods Section</h2>
              <p class="mt-4">The Methods section should provide enough detail for another researcher to replicate your study.</p>
              <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Participants or Subjects:</strong> Describe who or what was studied.</li>
                <li><strong>Materials and Instruments:</strong> Detail any equipment, surveys, or tools used.</li>
                <li><strong>Procedure:</strong> Explain the steps taken during the research.</li>
                <li><strong>Data Analysis:</strong> Outline the statistical or analytical methods applied.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Use past tense since the research has been conducted.</li>
                <li>Be precise and avoid unnecessary details.</li>
                <li>Include ethical approvals and consent if applicable.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Excerpt:</h3>
              <p class="mt-4">"A total of 200 participants were recruited from the university. Participants completed a survey consisting of 50 questions assessing their study habits. Data were analyzed using SPSS version 25."</p>
            `,
            videoUrl: "https://example.com/week4-methods-writing"
          },
          {
            title: "Writing an Accurate Results Section",
            content: `
              <h2 class="text-2xl font-bold">Presenting Your Findings</h2>
              <p class="mt-4">The Results section should report your findings without interpretation.</p>
              <h3 class="text-xl font-semibold mt-6">Structure:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Present results in a logical order, often following the sequence of your research questions or hypotheses.</li>
                <li>Use tables, graphs, and figures to illustrate key data.</li>
                <li>Include both positive and negative results.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Be clear and concise; avoid redundancy.</li>
                <li>Do not interpret or explain the results—that belongs in the Discussion section.</li>
                <li>Ensure all tables and figures are properly labeled and referenced in the text.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Excerpt:</h3>
              <p class="mt-4">"The analysis revealed a significant correlation between study time and exam scores (r = 0.65, p &lt; 0.01). Participants who studied more than 10 hours per week scored, on average, 15% higher than those who studied less."</p>
            `,
            videoUrl: "https://example.com/week4-results-writing"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 4 Summary: Writing Methods and Results Sections</h2>
              <p class="mt-4">This week, you've learned how to:</p>
              <ul class="list-disc list-inside mt-2">
                <li>Describe your research methodology in detail to ensure reproducibility.</li>
                <li>Present your findings clearly and accurately without interpretation.</li>
                <li>Use visuals like tables and figures effectively.</li>
              </ul>
              <p class="mt-4">Mastering these sections enhances the credibility and reliability of your research.</p>
            `,
            videoUrl: "https://example.com/week4-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week4-quiz",
            quiz: {
              question: "Which of the following should NOT be included in the Results section?",
              options: [
                "Descriptive statistics",
                "Interpretation of the results",
                "Presentation of data",
                "Figures and tables"
              ],
              correctAnswer: 1
            }
          }
        ]
      },  
    // Week 5
    {
        title: "Week 5: Crafting a Strong Discussion Section",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">Interpreting Your Findings</h2>
              <p class="mt-4">The Discussion section is where you interpret your results, discuss their implications, and place them in the context of existing research.</p>
              <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Understand the purpose of the Discussion section.</li>
                <li>Learn how to relate your findings to the research question and hypotheses.</li>
                <li>Recognize how to acknowledge limitations and suggest future research.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week5-intro"
          },
          {
            title: "Interpreting Results and Drawing Conclusions",
            content: `
              <h2 class="text-2xl font-bold">Making Sense of Your Data</h2>
              <p class="mt-4">In this chapter, we'll explore how to interpret your results effectively.</p>
              <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Restate Your Research Question:</strong> Begin by reminding readers of the purpose of your study.</li>
                <li><strong>Summarize Key Findings:</strong> Highlight the most important results without repeating the Results section.</li>
                <li><strong>Interpret the Findings:</strong> Explain what the results mean in the context of your research question.</li>
                <li><strong>Compare with Existing Literature:</strong> Discuss how your findings align or contrast with previous studies.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Use clear and concise language to explain complex ideas.</li>
                <li>Avoid introducing new results or data in this section.</li>
                <li>Be honest and objective in your interpretation.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Excerpt:</h3>
              <p class="mt-4">"Our findings suggest that increased screen time is significantly associated with reduced sleep quality among teenagers, supporting the hypothesis and aligning with Smith's (2020) study on digital media impact."</p>
            `,
            videoUrl: "https://example.com/week5-interpreting-results"
          },
          {
            title: "Discussing Implications and Limitations",
            content: `
              <h2 class="text-2xl font-bold">Acknowledging the Bigger Picture</h2>
              <p class="mt-4">Discussing the implications and limitations provides context and credibility to your research.</p>
              <h3 class="text-xl font-semibold mt-6">Implications:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Theoretical Implications:</strong> How do your findings contribute to existing theories or models?</li>
                <li><strong>Practical Implications:</strong> What are the real-world applications of your research?</li>
                <li><strong>Policy Implications:</strong> Can your findings inform policy decisions?</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Limitations:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Address any methodological constraints (e.g., sample size, measurement errors).</li>
                <li>Acknowledge any biases or confounding variables.</li>
                <li>Explain how these limitations affect the interpretation of your results.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Be transparent but avoid undermining your study.</li>
                <li>Discuss limitations in a way that highlights the need for further research.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Excerpt:</h3>
              <p class="mt-4">"While our study provides valuable insights into adolescent sleep patterns, the reliance on self-reported data may introduce bias. Future research could employ objective sleep tracking to validate these findings."</p>
            `,
            videoUrl: "https://example.com/week5-implications-limitations"
          },
          {
            title: "Suggesting Areas for Future Research",
            content: `
              <h2 class="text-2xl font-bold">Looking Ahead</h2>
              <p class="mt-4">Suggesting future research areas demonstrates the ongoing relevance of your topic.</p>
              <h3 class="text-xl font-semibold mt-6">How to Identify Future Research Directions:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Consider the limitations you've acknowledged.</li>
                <li>Identify unanswered questions or new questions raised by your findings.</li>
                <li>Look for emerging trends or technologies that could impact the field.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Be specific about what future research should address.</li>
                <li>Explain how addressing these areas could advance understanding.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Excerpt:</h3>
              <p class="mt-4">"Future studies should explore the impact of specific types of social media content on sleep quality, as well as potential moderating factors such as physical activity levels."</p>
            `,
            videoUrl: "https://example.com/week5-future-research"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 5 Summary: Crafting a Strong Discussion Section</h2>
              <p class="mt-4">This week, we've focused on:</p>
              <ul class="list-disc list-inside mt-2">
                <li>Interpreting your results in the context of your research question.</li>
                <li>Discussing the implications of your findings.</li>
                <li>Acknowledging limitations and how they affect your study.</li>
                <li>Suggesting areas for future research to continue the scholarly conversation.</li>
              </ul>
              <p class="mt-4">A well-crafted Discussion section strengthens the overall impact of your research paper.</p>
            `,
            videoUrl: "https://example.com/week5-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week5-quiz",
            quiz: {
              question: "Which of the following should NOT be included in the Discussion section?",
              options: [
                "Interpretation of results",
                "Detailed data and statistics",
                "Implications of findings",
                "Suggestions for future research"
              ],
              correctAnswer: 1
            }
          }
        ]
      },
      // Week 6
      {
        title: "Week 6: Grant Proposal Writing",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">Securing Funding for Your Research</h2>
              <p class="mt-4">Writing a compelling grant proposal is essential for obtaining funding. This week, we'll explore how to craft proposals that stand out to funding agencies.</p>
              <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Understand the components of a grant proposal.</li>
                <li>Learn how to tailor your proposal to specific funding agencies.</li>
                <li>Develop skills to articulate the significance and feasibility of your research.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week6-intro"
          },
          {
            title: "Understanding Funding Agencies and Requirements",
            content: `
              <h2 class="text-2xl font-bold">Aligning with Funder Priorities</h2>
              <p class="mt-4">Different funding agencies have specific missions and priorities. Understanding these is crucial to tailor your proposal effectively.</p>
              <h3 class="text-xl font-semibold mt-6">Researching Funding Agencies:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Review the agency's mission statement and strategic plan.</li>
                <li>Examine previously funded projects to identify trends.</li>
                <li>Contact program officers for insights and clarification.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Understanding Requirements:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Read the funding announcement carefully.</li>
                <li>Note eligibility criteria, deadlines, and submission guidelines.</li>
                <li>Pay attention to formatting and documentation requirements.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Tailoring Your Proposal:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Align your research objectives with the funder's priorities.</li>
                <li>Use terminology that resonates with the agency's mission.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week6-funding-agencies"
          },
          {
            title: "Components of a Successful Grant Proposal",
            content: `
              <h2 class="text-2xl font-bold">Building Blocks of Your Proposal</h2>
              <p class="mt-4">A typical grant proposal includes several key components:</p>
              <h3 class="text-xl font-semibold mt-6">1. Abstract or Executive Summary:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>A concise overview of your project.</li>
                <li>Highlights objectives, methods, and significance.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">2. Introduction or Background:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Sets the context for your research.</li>
                <li>Discusses the problem and its importance.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">3. Objectives or Specific Aims:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Clearly state what you intend to accomplish.</li>
                <li>Objectives should be specific, measurable, and achievable.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">4. Methodology:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Detailed plan of how you will conduct the research.</li>
                <li>Include timelines, resources, and personnel involved.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">5. Budget and Justification:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Itemized list of expenses.</li>
                <li>Explanation of why each expense is necessary.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">6. Expected Outcomes and Impact:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Discuss potential results and their significance.</li>
                <li>Highlight how the project aligns with the funder's goals.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">7. References:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Cite all sources used in your proposal.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week6-proposal-components"
          },
          {
            title: "Writing Persuasively and Effectively",
            content: `
              <h2 class="text-2xl font-bold">Convincing Funders of Your Project's Merit</h2>
              <p class="mt-4">Your writing style plays a significant role in persuading funders to support your project.</p>
              <h3 class="text-xl font-semibold mt-6">Strategies for Persuasive Writing:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Clarity:</strong> Use clear and concise language.</li>
                <li><strong>Focus on Significance:</strong> Emphasize the importance of your project.</li>
                <li><strong>Demonstrate Feasibility:</strong> Show that your project is achievable.</li>
                <li><strong>Highlight Innovation:</strong> Explain how your project is novel or fills a gap.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Common Mistakes to Avoid:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Avoid jargon that may not be understood by reviewers.</li>
                <li>Do not make unsupported claims.</li>
                <li>Ensure consistency throughout the proposal.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Phraseology:</h3>
              <p class="mt-4">"This project addresses a critical need in the field of public health by developing a scalable intervention that can reduce the incidence of disease X among vulnerable populations."</p>
            `,
            videoUrl: "https://example.com/week6-persuasive-writing"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 6 Summary: Grant Proposal Writing</h2>
              <p class="mt-4">This week, we've explored:</p>
              <ul class="list-disc list-inside mt-2">
                <li>The importance of understanding funding agencies and aligning your proposal with their priorities.</li>
                <li>The key components that make up a successful grant proposal.</li>
                <li>Strategies for writing persuasively to convince funders of your project's merit.</li>
              </ul>
              <p class="mt-4">Applying these principles increases your chances of securing funding for your research.</p>
            `,
            videoUrl: "https://example.com/week6-summary"
          },
          {
            title: "Quiz",
            content: `
              <h2 class="text-2xl font-bold">Test Your Understanding</h2>
              <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
            `,
            videoUrl: "https://example.com/week6-quiz",
            quiz: {
              question: "Which of the following is NOT typically a component of a grant proposal?",
              options: [
                "Abstract or Executive Summary",
                "Literature Review",
                "Budget and Justification",
                "Methodology"
              ],
              correctAnswer: 1
            }
          }
        ]
      },
  
    // Week 7
    {
        title: "Week 7: Revising, Editing, and Peer Review",
        chapters: [
          {
            title: "Introduction",
            content: `
              <h2 class="text-2xl font-bold">Refining Your Work for Publication</h2>
              <p class="mt-4">The final week focuses on the crucial steps of revising, editing, and understanding the peer review process. These steps are essential to ensure your work is polished and ready for publication.</p>
              <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Learn effective strategies for revising and editing your manuscript.</li>
                <li>Understand the importance of peer review and how to navigate it.</li>
                <li>Develop skills to respond constructively to feedback.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week7-intro"
          },
          {
            title: "Effective Revising and Editing Techniques",
            content: `
              <h2 class="text-2xl font-bold">Polishing Your Manuscript</h2>
              <p class="mt-4">Revising and editing are iterative processes that enhance the clarity, coherence, and overall quality of your manuscript.</p>
              <h3 class="text-xl font-semibold mt-6">Revising vs. Editing:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Revising:</strong> Focuses on content, structure, and flow. It involves making substantial changes to improve arguments and organization.</li>
                <li><strong>Editing:</strong> Involves refining language, grammar, and style. It's about polishing the text to ensure readability and correctness.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Strategies for Effective Revision:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Take a Break:</strong> Step away from your manuscript for a few days to gain fresh perspective.</li>
                <li><strong>Review Structure:</strong> Ensure that your paper follows a logical flow and that each section transitions smoothly.</li>
                <li><strong>Check for Consistency:</strong> Verify that terminology, formatting, and citations are consistent throughout.</li>
                <li><strong>Focus on Clarity:</strong> Simplify complex sentences and clarify ambiguous statements.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Editing Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Read your manuscript aloud to catch errors and awkward phrasing.</li>
                <li>Use grammar and spell-check tools but don't rely solely on them.</li>
                <li>Pay attention to common problem areas like passive voice and wordiness.</li>
                <li>Consider hiring a professional editor if necessary.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Checklist:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Are all sources properly cited?</li>
                <li>Does each paragraph have a clear main idea?</li>
                <li>Have you eliminated unnecessary jargon?</li>
                <li>Is the abstract concise and informative?</li>
              </ul>
            `,
            videoUrl: "https://example.com/week7-revising-editing"
          },
          {
            title: "Understanding the Peer Review Process",
            content: `
              <h2 class="text-2xl font-bold">Navigating Peer Review</h2>
              <p class="mt-4">Peer review is a fundamental part of scholarly publishing, ensuring the quality and integrity of academic work.</p>
              <h3 class="text-xl font-semibold mt-6">What is Peer Review?</h3>
              <ul class="list-disc list-inside mt-2">
                <li>A process where experts in the field evaluate your manuscript.</li>
                <li>Aims to validate research quality, originality, and significance.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Types of Peer Review:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Single-blind:</strong> Reviewers know the author's identity, but authors don't know the reviewers.</li>
                <li><strong>Double-blind:</strong> Both authors and reviewers are anonymous to each other.</li>
                <li><strong>Open Review:</strong> Identities are known to both parties, and sometimes reviews are published alongside the article.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">The Peer Review Process:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li><strong>Submission:</strong> You submit your manuscript to a journal.</li>
                <li><strong>Initial Screening:</strong> The editor assesses the manuscript for suitability.</li>
                <li><strong>Reviewer Assignment:</strong> The editor selects reviewers with relevant expertise.</li>
                <li><strong>Review Period:</strong> Reviewers evaluate the manuscript and provide feedback.</li>
                <li><strong>Decision:</strong> The editor makes a decision based on reviewers' comments (accept, revise, or reject).</li>
              </ol>
              <h3 class="text-xl font-semibold mt-6">Tips:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Choose a journal that aligns with your research scope.</li>
                <li>Follow the journal's submission guidelines meticulously.</li>
                <li>Be prepared for multiple rounds of revision.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week7-peer-review"
          },
          {
            title: "Responding to Feedback and Revisions",
            content: `
              <h2 class="text-2xl font-bold">Embracing Constructive Criticism</h2>
              <p class="mt-4">Responding effectively to reviewers' comments is crucial for the success of your manuscript.</p>
              <h3 class="text-xl font-semibold mt-6">Receiving Feedback:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Stay open-minded and avoid taking criticism personally.</li>
                <li>Read all comments carefully and thoroughly.</li>
                <li>Identify common themes in the feedback.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Preparing Your Response:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Create a Response Document:</strong> Address each comment point by point.</li>
                <li><strong>Be Respectful and Professional:</strong> Thank reviewers for their insights.</li>
                <li><strong>Provide Clear Justifications:</strong> If you disagree with a comment, explain your reasoning logically.</li>
                <li><strong>Highlight Changes:</strong> Indicate where revisions have been made in the manuscript.</li>
              </ul>
              <h3 class="text-xl font-semibold mt-6">Example Response Format:</h3>
              <p class="mt-4"><strong>Reviewer Comment:</strong> "The sample size seems insufficient to support the conclusions."</p>
              <p><strong>Author Response:</strong> "Thank you for this observation. We have expanded the sample size by including additional participants, as detailed on page 12."</p>
              <h3 class="text-xl font-semibold mt-6">Tips for Effective Revisions:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Prioritize significant comments that impact the validity of your work.</li>
                <li>Ensure that your revisions enhance the overall quality of the manuscript.</li>
                <li>Keep track of all changes for transparency.</li>
              </ul>
            `,
            videoUrl: "https://example.com/week7-responding-feedback"
          },
          {
            title: "Summary",
            content: `
              <h2 class="text-2xl font-bold">Week 7 Summary: Revising, Editing, and Peer Review</h2>
              <p class="mt-4">In this final week, we've covered:</p>
              <ul class="list-disc list-inside mt-2">
                <li>Effective techniques for revising and editing your manuscript to enhance clarity and coherence.</li>
                <li>An in-depth understanding of the peer review process and its significance in academic publishing.</li>
                <li>Strategies for responding constructively to feedback and making necessary revisions.</li>
              </ul>
              <p class="mt-4">Mastering these skills ensures that your research is presented in the best possible light and increases the likelihood of publication success.</p>
            `,
            videoUrl: "https://example.com/week7-summary"
          },
          {
            title: "Final Quiz",
            content: `
              <h2 class="text-2xl font-bold">Final Assessment</h2>
              <p class="mt-4">Test your comprehensive understanding of the concepts covered throughout the course.</p>
            `,
            videoUrl: "https://example.com/week7-quiz",
            quiz: {
              question: "Which of the following is the most appropriate way to respond to a reviewer's criticism you disagree with?",
              options: [
                "Ignore the comment and make no changes.",
                "Argue that the reviewer is incorrect without providing evidence.",
                "Thank the reviewer and provide a reasoned explanation for your position.",
                "Complain to the editor about the reviewer's feedback."
              ],
              correctAnswer: 2
            }
          }
        ]
      }
      // You can now close the courseData object if it's the last week
    ]
  }
  

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function CoursePage() {
  const [currentWeek, setCurrentWeek] = useState<number>(0)
  const [currentChapter, setCurrentChapter] = useState<number>(0)
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('courseProgress')
      return savedProgress ? (JSON.parse(savedProgress) as Progress) : { week: 0, chapter: 0, completed: [] }
    }
    return { week: 0, chapter: 0, completed: [] }
  })
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [showQuizResult, setShowQuizResult] = useState(false)

  // Memoize updateProgress to ensure it has a stable reference
  const updateProgress = useCallback((week: number, chapter: number) => {
    setProgress((prev) => {
      const newCompleted = [...prev.completed]
      const key = `${week}-${chapter}`
      if (!newCompleted.includes(key)) {
        newCompleted.push(key)
      }
      const newProgress: Progress = { week, chapter, completed: newCompleted }
      if (typeof window !== 'undefined') {
        localStorage.setItem('courseProgress', JSON.stringify(newProgress))
      }
      return newProgress
    })
  }, [])

  // Include updateProgress in the dependency array
  const navigateToChapter = useCallback(
    (weekIndex: number, chapterIndex: number) => {
      const week = courseData.weeks[weekIndex]
      if (week && week.chapters[chapterIndex]) {
        setCurrentWeek(weekIndex)
        setCurrentChapter(chapterIndex)
        updateProgress(weekIndex, chapterIndex)
        setQuizAnswer(null)
        setShowQuizResult(false)
      }
    },
    [updateProgress]
  )

  useEffect(() => {
    navigateToChapter(progress.week, progress.chapter)
  }, [navigateToChapter, progress.week, progress.chapter])

  const previousChapter = () => {
    if (currentChapter > 0) {
      navigateToChapter(currentWeek, currentChapter - 1)
    } else if (currentWeek > 0) {
      const previousWeekIndex = currentWeek - 1
      const previousWeek = courseData.weeks[previousWeekIndex]
      if (previousWeek) {
        const previousWeekLastChapterIndex = previousWeek.chapters.length - 1
        navigateToChapter(previousWeekIndex, previousWeekLastChapterIndex)
      }
    }
  }

  const nextChapter = () => {
    const currentWeekData = courseData.weeks[currentWeek]
    if (currentWeekData && currentChapter < currentWeekData.chapters.length - 1) {
      navigateToChapter(currentWeek, currentChapter + 1)
    } else if (currentWeek < courseData.weeks.length - 1) {
      navigateToChapter(currentWeek + 1, 0)
    }
  }

  const calculateOverallProgress = () => {
    const totalChapters = courseData.weeks.reduce((acc, week) => acc + week.chapters.length, 0)
    return (progress.completed.length / totalChapters) * 100
  }

  const handleQuizSubmit = () => {
    setShowQuizResult(true)
  }

  // Determine if Next and Previous buttons should be disabled
  const isFirstChapter = currentWeek === 0 && currentChapter === 0
  const isLastChapter =
    currentWeek === courseData.weeks.length - 1 &&
    currentChapter === courseData.weeks[currentWeek].chapters.length - 1

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
                courseData.weeks[currentWeek]?.chapters[currentChapter]?.videoUrl ?? '',
                '_blank'
              )
            }
          >
            <Play className="h-4 w-4 mr-2" /> Watch Video
          </Button>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html:
                courseData.weeks[currentWeek]?.chapters[currentChapter]?.content ?? '',
            }}
          />
          {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz && (
            <div className="mt-8 p-6 border border-gray-300 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Quiz</h4>
              <p className="mb-4">
                {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.question}
              </p>
              <RadioGroup
                value={quizAnswer?.toString() ?? ''}
                onValueChange={(value) => setQuizAnswer(parseInt(value))}
              >
                {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.options.map(
                  (option, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                        className="border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            quizAnswer === index ? 'bg-blue-600' : 'bg-transparent'
                          }`}
                        />
                      </RadioGroupItem>
                      <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
              <Button onClick={handleQuizSubmit} className="mt-6" disabled={quizAnswer === null}>
                Submit Answer
              </Button>
              {showQuizResult && (
                <p
                  className={`mt-4 ${
                    quizAnswer ===
                    courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.correctAnswer
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {quizAnswer ===
                  courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.correctAnswer
                    ? 'Correct!'
                    : `Incorrect. The correct answer is: ${
                        courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.options[
                          courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz
                            ?.correctAnswer ?? 0
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
        <Button
          variant="ghost"
          onClick={nextChapter}
          disabled={isLastChapter}
        >
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
