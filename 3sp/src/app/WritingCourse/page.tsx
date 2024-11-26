"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
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

// Expanded course data
const courseData: CourseData = {
  title: "Scientific Writing & Grant Proposal",
  weeks: [
    {
      title: "Week 1: Introduction to Scientific Writing",
      chapters: [
        {
          title: "Introduction to Scientific Writing",
          content: `
            <h3>Welcome to Scientific Writing & Grant Proposal</h3>
            <p>Scientific writing is a crucial skill for researchers, academics, and professionals in various scientific fields. This course will guide you through the intricacies of effective scientific communication, from crafting research papers to writing compelling grant proposals.</p>
            <h4>Course Overview:</h4>
            <ul>
              <li>Week 1: Introduction to Scientific Writing</li>
              <li>Week 2: Crafting Research Questions and Hypotheses</li>
              <li>Week 3: Literature Review and Citation Management</li>
              <li>Week 4: Writing Methods and Results Sections</li>
              <li>Week 5: Crafting a Strong Discussion Section</li>
              <li>Week 6: Grant Proposal Writing</li>
              <li>Week 7: Revising, Editing, and Peer Review</li>
            </ul>
            <div class="mt-4">
              <img src="/researchlogo3sp.png?height=100&width=200" alt="Course structure diagram" width="500" height="300" />
            </div>
          `,
          videoUrl: "https://example.com/week1-intro"
        },
        {
          title: "Understanding the purpose of scientific writing",
          content: `
            <h3>The Purpose of Scientific Writing</h3>
            <p>Scientific writing serves multiple crucial purposes in the academic and research world.</p>
          `,
          videoUrl: "https://example.com/week1-purpose"
        }
      ]
    },
    {
      title: "Week 2: Crafting Research Questions and Hypotheses",
      chapters: [
        {
          title: "Introduction to Research Questions and Hypotheses",
          content: `
            <h3>The Foundation of Scientific Inquiry</h3>
            <p>Research questions and hypotheses form the backbone of scientific investigation. They guide your study, shape your methodology, and provide a framework for analyzing and interpreting your results.</p>
            <h4>Key Concepts:</h4>
            <ul>
              <li>Research Question: A broad inquiry about a topic of interest</li>
              <li>Hypothesis: A specific, testable prediction about the relationship between variables</li>
            </ul>
            <div class="mt-4">
              <img src="/placeholder.svg?height=300&width=500" alt="Research question and hypothesis diagram" width="500" height="300" />
            </div>
          `,
          videoUrl: "https://example.com/week2-intro"
        }
      ]
    },
    {
      title: "Week 3: Literature Review and Citation Management",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h3>The Importance of Literature Review and Citation Management</h3>
            <p>A thorough literature review and proper citation management are crucial components of scientific writing. They demonstrate your understanding of the field, contextualize your research, and give credit to other researchers' work.</p>
            <h4>Key Objectives:</h4>
            <ul>
              <li>Understand the purpose and structure of a literature review</li>
              <li>Learn effective strategies for conducting comprehensive literature searches</li>
              <li>Master the art of summarizing and synthesizing sources</li>
              <li>Develop skills in proper citation techniques and avoiding plagiarism</li>
            </ul>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Component</th>
                  <th class="border border-gray-300 p-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Literature Review</td>
                  <td class="border border-gray-300 p-2">Provide context, identify gaps, justify research</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Citation Management</td>
                  <td class="border border-gray-300 p-2">Organize sources, ensure proper attribution, avoid plagiarism</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week3-intro"
        },
        {
          title: "Conducting a thorough literature review",
          content: `
            <h3>Steps for a Comprehensive Literature Review</h3>
            <p>A well-conducted literature review is essential for understanding the current state of knowledge in your field and identifying research gaps. Follow these steps:</p>
            <ol>
              <li><strong>Define your research question:</strong> Clearly articulate what you want to investigate</li>
              <li><strong>Identify relevant databases:</strong> Choose appropriate academic databases for your field</li>
              <li><strong>Develop search strategies:</strong> Use keywords, Boolean operators, and filters effectively</li>
              <li><strong>Screen and select sources:</strong> Evaluate the relevance and quality of the literature</li>
              <li><strong>Analyze and synthesize:</strong> Identify themes, trends, and gaps in the literature</li>
              <li><strong>Organize your findings:</strong> Structure your review logically (e.g., chronologically, thematically)</li>
            </ol>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Step</th>
                  <th class="border border-gray-300 p-2">Key Actions</th>
                  <th class="border border-gray-300 p-2">Tools/Resources</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Define question</td>
                  <td class="border border-gray-300 p-2">Brainstorm, consult with advisors</td>
                  <td class="border border-gray-300 p-2">Mind mapping software</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Identify databases</td>
                  <td class="border border-gray-300 p-2">Consult librarians, check field-specific resources</td>
                  <td class="border border-gray-300 p-2">Google Scholar, PubMed, Web of Science</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Develop search strategies</td>
                  <td class="border border-gray-300 p-2">Use Boolean operators, synonyms, wildcards</td>
                  <td class="border border-gray-300 p-2">Database search guides, thesauri</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week3-literature-review"
        },
        {
          title: "Summarizing and synthesizing sources",
          content: `
            <h3>Effective Summarization and Synthesis Techniques</h3>
            <p>Summarizing and synthesizing sources are crucial skills for creating a coherent and insightful literature review. Here are some strategies:</p>
            <h4>Summarizing:</h4>
            <ul>
              <li>Identify the main idea and key points of each source</li>
              <li>Use your own words to concisely capture the essence of the work</li>
              <li>Include only the most relevant information for your research question</li>
            </ul>
            <h4>Synthesizing:</h4>
            <ul>
              <li>Look for common themes, contradictions, and gaps across sources</li>
              <li>Compare and contrast different perspectives or methodologies</li>
              <li>Develop a new understanding or interpretation based on the collective insights</li>
            </ul>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Technique</th>
                  <th class="border border-gray-300 p-2">Purpose</th>
                  <th class="border border-gray-300 p-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Annotated Bibliography</td>
                  <td class="border border-gray-300 p-2">Summarize individual sources</td>
                  <td class="border border-gray-300 p-2">Smith (2020) argues that climate change impacts urban areas more severely...</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Concept Matrix</td>
                  <td class="border border-gray-300 p-2">Identify common themes across sources</td>
                  <td class="border border-gray-300 p-2">A table showing how different authors address key concepts in your field</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Synthesis Paragraph</td>
                  <td class="border border-gray-300 p-2">Integrate multiple sources</td>
                  <td class="border border-gray-300 p-2">While Smith (2020) and Jones (2021) agree on the urban impact of climate change, they differ in their proposed solutions...</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week3-summarizing-synthesizing"
        }
      ]
    },
    {
      title: "Week 4: Writing Methods and Results Sections",
      chapters: [
        {
          title: "Introduction to Methods and Results",
          content: `
            <h3>The Importance of Methods and Results Sections</h3>
            <p>The Methods and Results sections are crucial components of a scientific paper, providing the foundation for the validity and reproducibility of your research. These sections answer two fundamental questions:</p>
            <ul>
              <li>Methods: How was the study conducted?</li>
              <li>Results: What were the findings?</li>
            </ul>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Section</th>
                  <th class="border border-gray-300 p-2">Purpose</th>
                  <th class="border border-gray-300 p-2">Key Elements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Methods</td>
                  <td class="border border-gray-300 p-2">Describe how the study was conducted</td>
                  <td class="border border-gray-300 p-2">Study design, participants, materials, procedures, data analysis</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Results</td>
                  <td class="border border-gray-300 p-2">Present the findings of the study</td>
                  <td class="border border-gray-300 p-2">Data summaries, statistical analyses, tables, figures</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week4-intro"
        },
        {
          title: "Writing an Effective Methods Section",
          content: `
            <h3>Key Principles for Methods Writing</h3>
            <p>A well-written Methods section allows other researchers to replicate your study and assess its validity. Follow these guidelines for clear and concise methodology descriptions:</p>
            <ol>
              <li><strong>Use appropriate level of detail:</strong> Provide enough information for replication, but avoid unnecessary minutiae</li>
              <li><strong>Organize logically:</strong> Present methods in the order they were performed</li>
              <li><strong>Use subheadings:</strong> Break up long methods sections for improved readability</li>
              <li><strong>Be precise:</strong> Use exact measurements, model numbers, and specific procedures</li>
              <li><strong>Explain the rationale:</strong> Briefly justify why you chose specific methods when necessary</li>
              <li><strong>Use past tense:</strong> Describe what you did, not what you will do or are doing</li>
            </ol>
            <h4>Example Structure for a Methods Section:</h4>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Subsection</th>
                  <th class="border border-gray-300 p-2">Content</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Participants</td>
                  <td class="border border-gray-300 p-2">Sample size, demographics, recruitment method</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Materials</td>
                  <td class="border border-gray-300 p-2">Equipment, stimuli, questionnaires used</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Procedure</td>
                  <td class="border border-gray-300 p-2">Step-by-step description of the experimental process</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Data Analysis</td>
                  <td class="border border-gray-300 p-2">Statistical tests, software used, data preprocessing steps</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week4-methods-writing"
        },
        {
          title: "Crafting a Clear Results Section",
          content: `
            <h3>Presenting Your Findings Effectively</h3>
            <p>The Results section presents your findings without interpretation. Follow these guidelines for an effective Results section:</p>
            <ol>
              <li><strong>Be objective:</strong> Report findings without discussing their implications</li>
              <li><strong>Use past tense:</strong> Describe what you found, not what you are finding</li>
              <li><strong>Organize logically:</strong> Present results in the same order as the methods</li>
              <li><strong>Use visuals:</strong> Include tables and figures to summarize complex data</li>
              <li><strong>Report statistical analyses:</strong> Include test statistics, p-values, and effect sizes</li>
              <li><strong>Highlight key findings:</strong> Draw attention to the most important results</li>
            </ol>
            <h4>Elements of an Effective Results Section:</h4>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Element</th>
                  <th class="border border-gray-300 p-2">Description</th>
                  <th class="border border-gray-300 p-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Descriptive Statistics</td>
                  <td class="border border-gray-300 p-2">Summarize the data (e.g., means, standard deviations)</td>
                  <td class="border border-gray-300 p-2">The mean score was 75.3 (SD = 12.1)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Inferential Statistics</td>
                  <td class="border border-gray-300 p-2">Report statistical tests and their outcomes</td>
                  <td class="border border-gray-300 p-2">A t-test revealed a significant difference (t(58) = 2.35, p &lt; .05)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Effect Sizes</td>
                  <td class="border border-gray-300 p-2">Indicate the magnitude of the observed effects</td>
                  <td class="border border-gray-300 p-2">The effect size was large (Cohen's d = 0.8)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Tables and Figures</td>
                  <td class="border border-gray-300 p-2">Visual representations of data</td>
                  <td class="border border-gray-300 p-2">Figure 1 shows the relationship between X and Y</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week4-results-writing"
        },
        {
          title: "Summary and Quiz",
          content: `
            <h3>Week 4 Summary: Writing Methods and Results Sections</h3>
            <p>This week, we focused on crafting effective Methods and Results sections:</p>
            <ul>
              <li>The importance and purpose of Methods and Results sections in scientific papers</li>
              <li>Strategies for describing methodologies clearly and concisely</li>
              <li>Techniques for organizing and structuring the Methods section</li>
              <li>Guidelines for writing an accurate and objective Results section</li>
              <li>Best practices for presenting data, including the use of tables and figures</li>
            </ul>
            <p>Remember, well-written Methods and Results sections are crucial for the credibility and reproducibility of your research. They provide the foundation for the Discussion section, where you will interpret your findings in the context of existing literature.</p>
          `,
          videoUrl: "https://example.com/week4-summary",
          quiz: {
            question: "Which of the following should NOT be included in the Results section of a scientific paper?",
            options: [
              "Descriptive statistics of the data",
              "Outcomes of statistical tests",
              "Interpretation of the findings",
              "Visual representations of the data (e.g., graphs, tables)"
            ],
            correctAnswer: 2
          }
        }
      ]
    },
    {
      title: "Week 5: Crafting a Strong Discussion Section",
      chapters: [
        {
          title: "Introduction to the Discussion Section",
          content: `
            <h3>The Role of the Discussion Section</h3>
            <p>The Discussion section is where you interpret your results, explain their significance, and place them in the context of existing research. It's your opportunity to showcase the importance of your study and its contributions to the field.</p>
            <h4>Key Objectives of the Discussion Section:</h4>
            <ul>
              <li>Interpret the results in light of the study's objectives or hypotheses</li>
              <li>Explain how the results support or challenge existing theories</li>
              <li>Discuss the implications of the findings</li>
              <li>Address any limitations of the study</li>
              <li>Suggest directions for future research</li>
            </ul>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Component</th>
                  <th class="border border-gray-300 p-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Results Summary</td>
                  <td class="border border-gray-300 p-2">Briefly restate the main findings</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Interpretation</td>
                  <td class="border border-gray-300 p-2">Explain what the results mean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Context</td>
                  <td class="border border-gray-300 p-2">Relate findings to previous research</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Implications</td>
                  <td class="border border-gray-300 p-2">Discuss the broader impact of the findings</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Limitations</td>
                  <td class="border border-gray-300 p-2">Acknowledge constraints of the study</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Future Directions</td>
                  <td class="border border-gray-300 p-2">Suggest areas for further research</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week5-intro"
        },
        {
          title: "Interpreting and Analyzing Results",
          content: `
            <h3>Effective Interpretation of Results</h3>
            <p>Interpreting your results is a critical step in scientific writing. It involves explaining what your findings mean and why they matter. Here are some strategies for effective interpretation:</p>
            <ol>
              <li><strong>Start with a brief summary:</strong> Remind readers of your main findings</li>
              <li><strong>Relate to hypotheses:</strong> Explain whether your results support or refute your initial hypotheses</li>
              <li><strong>Consider alternative explanations:</strong> Discuss other possible interpretations of your data</li>
              <li><strong>Use clear language:</strong> Avoid jargon and explain complex concepts</li>
              <li><strong>Be objective:</strong> Acknowledge both expected and unexpected results</li>
              <li><strong>Use transition phrases:</strong> Guide readers through your thought process</li>
            </ol>
            <h4>Example Transition Phrases:</h4>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Purpose</th>
                  <th class="border border-gray-300 p-2">Phrase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Introducing interpretation</td>
                  <td class="border border-gray-300 p-2">"These results suggest that..."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Comparing to previous research</td>
                  <td class="border border-gray-300 p-2">"In contrast to Smith et al. (2020), our findings indicate..."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Acknowledging limitations</td>
                  <td class="border border-gray-300 p-2">"While these results are promising, it's important to note that..."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Suggesting implications</td>
                  <td class="border border-gray-300 p-2">"These findings have important implications for..."</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week5-interpreting-results"
        },
        {
          title: "Addressing Limitations and Future Directions",
          content: `
            <h3>Acknowledging Limitations</h3>
            <p>Addressing the limitations of your study is an important aspect of scientific integrity and helps readers interpret your findings appropriately. Here's how to approach this section:</p>
            <ol>
              <li><strong>Be honest and transparent:</strong> Clearly state the limitations of your study</li>
              <li><strong>Explain the impact:</strong> Discuss how limitations might affect the interpretation of your results</li>
              <li><strong>Avoid defensiveness:</strong> Present limitations as opportunities for future research</li>
              <li><strong>Be specific:</strong> Address concrete limitations rather than making vague statements</li>
              <li><strong>Propose solutions:</strong> If possible, suggest how limitations could be addressed in future studies</li>
            </ol>
            <h4>Common Types of Limitations:</h4>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Limitation Type</th>
                  <th class="border border-gray-300 p-2">Example</th>
                  <th class="border border-gray-300 p-2">How to Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Sample Size</td>
                  <td class="border border-gray-300 p-2">Small sample limiting generalizability</td>
                  <td class="border border-gray-300 p-2">"Future studies should aim for larger, more diverse samples to enhance generalizability."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Methodology</td>
                  <td class="border border-gray-300 p-2">Cross-sectional design limiting causal inferences</td>
                  <td class="border border-gray-300 p-2">"Longitudinal studies could provide stronger evidence for causal relationships."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Measurement</td>
                  <td class="border border-gray-300 p-2">Self-report measures potentially biased</td>
                  <td class="border border-gray-300 p-2">"Incorporating objective measures alongside self-reports could enhance validity."</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Scope</td>
                  <td class="border border-gray-300 p-2">Limited to specific geographic region</td>
                  <td class="border border-gray-300 p-2">"Replication in different cultural contexts would test the robustness of our findings."</td>
                </tr>
              </tbody>
            </table>
            <h3>Proposing Future Research Directions</h3>
            <p>Suggesting directions for future research is an important way to contribute to the ongoing scientific dialogue in your field. Here are some strategies for proposing future research:</p>
            <ol>
              <li><strong>Address unanswered questions:</strong> Identify aspects of your research topic that remain unclear</li>
              <li><strong>Build on your findings:</strong> Suggest how your results could be extended or applied in new contexts</li>
              <li><strong>Propose methodological improvements:</strong> Recommend ways to enhance the study design or measurement</li>
              <li><strong>Consider interdisciplinary approaches:</strong> Suggest how insights from other fields could be incorporated</li>
              <li><strong>Be specific:</strong> Provide concrete suggestions rather than vague statements</li>
            </ol>
          `,
          videoUrl: "https://example.com/week5-limitations-future-directions"
        },
        {
          title: "Summary and Quiz",
          content: `
            <h3>Week 5 Summary: Crafting a Strong Discussion Section</h3>
            <p>This week, we focused on the key elements of writing an effective Discussion section:</p>
            <ul>
              <li>Understanding the role and structure of the Discussion section</li>
              <li>Strategies for interpreting and analyzing results</li>
              <li>Techniques for linking findings to existing literature</li>
              <li>Approaches to addressing study limitations transparently</li>
              <li>Methods for proposing meaningful future research directions</li>
            </ul>
            <p>Remember, a well-crafted Discussion section is crucial for demonstrating the significance of your research and its contribution to the field. It's your opportunity to showcase your critical thinking skills and situate your work within the broader scientific context.</p>
          `,
          videoUrl: "https://example.com/week5-summary",
          quiz: {
            question: "Which of the following is NOT typically included in the Discussion section of a scientific paper?",
            options: [
              "Interpretation of results",
              "Comparison with previous literature",
              "Detailed description of methods",
              "Suggestions for future research"
            ],
            correctAnswer: 2
          }
        }
      ]
    },
    {
      title: "Week 7: Revising, Editing, and Peer Review",
      chapters: [
        {
          title: "Final polishing and proofreading",
          content: `
            <h3>Perfecting Your Manuscript</h3>
            <p>The final polish and proofread are crucial steps in ensuring your manuscript is of the highest quality before submission. Here are some strategies for this final stage:</p>
            <ol>
              <li><strong>Take a break:</strong> Step away from your manuscript for a day or two before final proofreading</li>
              <li><strong>Change the format:</strong> Print out your manuscript or change the font to spot errors more easily</li>
              <li><strong>Read backwards:</strong> Start from the last sentence and work your way up to catch spelling errors</li>
              <li><strong>Use text-to-speech:</strong> Have your computer read your manuscript aloud to catch awkward phrasing</li>
              <li><strong>Check formatting:</strong> Ensure your manuscript adheres to the journal's formatting guidelines</li>
              <li><strong>Verify references:</strong> Double-check that all citations are accurate and properly formatted</li>
            </ol>
            <h4>Final Proofreading Checklist:</h4>
            <table class="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th class="border border-gray-300 p-2">Element</th>
                  <th class="border border-gray-300 p-2">Check for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-2">Spelling</td>
                  <td class="border border-gray-300 p-2">Typos, correctly spelled but wrong words (e.g., "form" instead of "from")</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Grammar</td>
                  <td class="border border-gray-300 p-2">Subject-verb agreement, proper tense usage, correct punctuation</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Formatting</td>
                  <td class="border border-gray-300 p-2">Consistent font, correct headings, proper figure and table numbering</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Citations</td>
                  <td class="border border-gray-300 p-2">All sources cited, correct citation format, matching reference list</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-2">Figures and Tables</td>
                  <td class="border border-gray-300 p-2">Clear labels, readable font size, mentioned in the text</td>
                </tr>
              </tbody>
            </table>
          `,
          videoUrl: "https://example.com/week7-final-polish"
        },
        {
          title: "Summary",
          content: `
            <h3>Week 7 Summary: Revising, Editing, and Peer Review</h3>
            <p>This week, we focused on the critical final stages of the scientific writing process:</p>
            <ul>
              <li>Effective self-editing techniques to improve your writing</li>
              <li>Understanding the peer review process and how to respond to reviewer comments</li>
              <li>Strategies for final polishing and proofreading of your manuscript</li>
              <li>The importance of adhering to ethical standards in scientific writing</li>
              <li>Tips for maintaining good writing habits throughout your scientific career</li>
            </ul>
            <p>Remember, writing is a skill that improves with practice. Continual refinement of your writing process will lead to clearer, more impactful scientific communications throughout your career.</p>
          `,
          videoUrl: "https://example.com/week7-summary"
        },
        {
          title: "Quiz",
          content: "Test your understanding of the revision, editing, and peer review process.",
          videoUrl: "https://example.com/week7-quiz",
          quiz: {
            question: "Which of the following is NOT a recommended strategy for final proofreading?",
            options: [
              "Reading the manuscript backwards",
              "Using text-to-speech software",
              "Relying solely on spell-check software",
              "Printing out the manuscript"
            ],
            correctAnswer: 2
          }
        }
      ]
    }
  ]
}

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

  // Memoize navigateToChapter to prevent unnecessary re-renders
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
    [courseData.weeks]
  )

  useEffect(() => {
    navigateToChapter(progress.week, progress.chapter)
  }, [navigateToChapter, progress.week, progress.chapter])

  const updateProgress = (week: number, chapter: number) => {
    const newCompleted = [...progress.completed]
    const key = `${week}-${chapter}`
    if (!newCompleted.includes(key)) {
      newCompleted.push(key)
    }
    const newProgress: Progress = { week, chapter, completed: newCompleted }
    setProgress(newProgress)
    if (typeof window !== 'undefined') {
      localStorage.setItem('courseProgress', JSON.stringify(newProgress))
    }
  }

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

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200 h-2">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${calculateOverallProgress()}%` }}
        />
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <ScrollArea className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <h2 className="text-2xl font-semibold mb-4">{courseData.weeks[currentWeek]?.title}</h2>
          <h3 className="text-xl font-semibold mb-2">{courseData.weeks[currentWeek]?.chapters[currentChapter]?.title}</h3>
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => window.open(courseData.weeks[currentWeek]?.chapters[currentChapter]?.videoUrl ?? '', '_blank')}
          >
            <Play className="h-4 w-4 mr-2" /> Watch Video
          </Button>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: courseData.weeks[currentWeek]?.chapters[currentChapter]?.content ?? '' }}
          />
          {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz && (
            <div className="mt-6 p-4 border rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Quiz</h4>
              <p className="mb-4">{courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.question}</p>
              <RadioGroup value={quizAnswer?.toString()} onValueChange={(value) => setQuizAnswer(parseInt(value))}>
                {courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleQuizSubmit} className="mt-4" disabled={quizAnswer === null}>
                Submit Answer
              </Button>
              {showQuizResult && (
                <p
                  className={`mt-4 ${
                    quizAnswer === courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.correctAnswer
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {quizAnswer === courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.correctAnswer
                    ? 'Correct!'
                    : `Incorrect. The correct answer is: ${
                        courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.options[
                          courseData.weeks[currentWeek]?.chapters[currentChapter]?.quiz?.correctAnswer ?? 0
                        ]
                      }`}
                </p>
              )}
            </div>
          )}
        </ScrollArea>
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={previousChapter}
            disabled={currentChapter === 0 && currentWeek === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button
            variant="ghost"
            onClick={nextChapter}
            disabled={
              currentWeek === courseData.weeks.length - 1 &&
              currentChapter === courseData.weeks[currentWeek]?.chapters.length - 1
            }
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
