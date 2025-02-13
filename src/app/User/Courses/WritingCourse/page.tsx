"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const WritingCourseData: CourseData = {
  title: "Scientific Writing & Grant Proposal",
  weeks: [
    {
      title: "Week 1: Foundations of Scientific Writing",
      chapters: [
        {
          title: "1.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Scientific Writing</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the purpose of scientific writing and its critical role in advancing knowledge across disciplines.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The importance of clear, precise, and reproducible writing in science.</li>
              <li>How scientific writing communicates original research and supports peer review and publication.</li>
              <li>Standards and expectations at an Ivy League level.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Strong scientific writing not only informs but also persuades and inspires further inquiry.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-introduction"
        },
        {
          title: "1.2 Structure of a Research Paper",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Understanding the IMRaD Format</h2>
            <p class="mt-4"><strong>Objective:</strong> Deep dive into the structure of a research paper using the IMRaD format and additional components such as the Abstract, References, and Acknowledgments.</p>
            <h3 class="text-xl font-semibold mt-6">Components of IMRaD:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Introduction:</strong> Provides background and states the research question.</li>
              <li><strong>Methods:</strong> Details the experimental design and procedures.</li>
              <li><strong>Results:</strong> Presents the findings objectively.</li>
              <li><strong>Discussion:</strong> Interprets results and contextualizes them within existing literature.</li>
              <li>Additional sections: Abstract, References, and Acknowledgments are also critical.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Familiarize yourself with published high-impact articles to see how these components are executed at an Ivy League standard.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-imrad"
        },
        {
          title: "1.3 Academic vs. General Writing",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Academic vs. General Writing</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the key differences between academic writing and general writing in tone, audience, and purpose.</p>
            <h3 class="text-xl font-semibold mt-6">Key Differences:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Academic Writing:</strong> Formal tone, precise language, objective, evidence-based.</li>
              <li><strong>General Writing:</strong> More conversational, subjective, and accessible to a broader audience.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Maintaining a formal, objective tone is essential for scientific credibility.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-academic-vs-general"
        },
        {
          title: "1.4 Planning & Organizing Your Manuscript",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Planning & Organizing</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn strategies for outlining and structuring your manuscript to ensure clarity and coherence.</p>
            <h3 class="text-xl font-semibold mt-6">Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Develop a detailed outline based on the IMRaD format.</li>
              <li>Organize your literature review, methodology, results, and discussion logically.</li>
              <li>Plan your writing schedule and revision process.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-organized manuscript not only improves readability but also enhances the persuasiveness of your arguments.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-planning-organizing"
        },
        {
          title: "1.5 Quiz: IMRaD & Academic Writing Principles",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Understanding IMRaD Structure</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the IMRaD structure and the principles of academic writing.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the components of a research paper (IMRaD).</li>
              <li>Identify the purpose of each section.</li>
              <li>Explain key differences between academic and general writing.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A thorough understanding of these components is essential for producing high-quality scientific manuscripts.</p>
          `,
          quiz: {
            question: "Which of the following best describes the purpose of the 'Methods' section in a research paper?",
            options: [
              "To provide background and context for the study.",
              "To detail the procedures and techniques used in the study so that it can be replicated.",
              "To discuss the implications of the research findings.",
              "To review the literature related to the study topic."
            ],
            correctAnswer: 1
          }
        },
        {
          title: "1.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Key Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>First Primary Paper Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The first primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/RcwwWkX2zQ131aRP6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1uLhSkT2_rRzU04-e-ceyQzHw_Uby6Y9n/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/RcwwWkX2zQ131aRP6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1BlIKF7_2OVcZl7Gv8UPsRmFIG8tGIaVY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1um8jqJv9XGkY-_WqP_j8M4M3tnfWD_Qs/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Grant Proposal Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The grant proposal assignment is due on <strong>3/15, 4/15, 5/15</strong> (submit online - <a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1k7ktEblxvvN0AmL1VE7Krt5qbneKEf4z/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1Y-rlkNHIIXhVH77i6wD9HO-M0ITBPZUm/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Example One</a></li>
                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</p>
          `,
        }
      ],
    },
    
    {
      title: "Week 2: Crafting Research Questions & Hypotheses",
      chapters: [
        {
          title: "2.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: The Role of Research Questions & Hypotheses</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how research questions and hypotheses serve as the foundation of scientific inquiry.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Research questions define the scope and direction of a study.</li>
              <li>Hypotheses offer testable predictions about relationships between variables.</li>
              <li>They drive the research process by focusing inquiry and guiding methodology.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-crafted research question and hypothesis set the stage for meaningful, focused research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourResearchQuestionIntroURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-introduction"
        },
        {
          title: "2.2 Identifying Research Gaps",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Identifying Research Gaps</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn techniques for conducting literature reviews and identifying under-explored areas in the scientific literature.</p>
            <h3 class="text-xl font-semibold mt-6">Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Systematic literature review methods using databases and search tools.</li>
              <li>Utilizing frameworks such as PRISMA to organize and synthesize research findings.</li>
              <li>Analyzing existing studies to uncover gaps or inconsistencies in current knowledge.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A thorough literature review is key to uncovering research gaps that can lead to innovative study designs.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourResearchGapsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-research-gaps"
        },
        {
          title: "2.3 Formulating Hypotheses",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Crafting Clear, Testable Hypotheses</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop skills to write clear, testable hypotheses, including null, alternative, and directional hypotheses.</p>
            <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Null Hypothesis (H₀):</strong> States that there is no effect or relationship.</li>
              <li><strong>Alternative Hypothesis (H₁):</strong> Proposes a specific effect or relationship.</li>
              <li><strong>Directional vs. Non-Directional:</strong> Determines whether the hypothesis specifies the direction of the effect.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review a sample research question and identify the variables involved.</li>
              <li>Determine an appropriate null hypothesis and alternative hypothesis.</li>
              <li>Decide whether your hypothesis is directional or non-directional, based on your literature review.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Clarity and specificity in your hypotheses will enhance the focus and testability of your research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourHypothesesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-hypotheses"
        },
        {
          title: "2.4 Peer Review Simulation",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Peer Review Simulation</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a simulated peer review session to critique a peer's research question and hypothesis.</p>
            <h3 class="text-xl font-semibold mt-6">Simulation Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Exchange research questions and hypotheses with a peer.</li>
              <li>Use a structured checklist to assess clarity, relevance, and testability.</li>
              <li>Provide constructive feedback and discuss possible improvements.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Constructive peer feedback is invaluable for refining your own research ideas.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourPeerReviewURL" target="_blank" class="text-blue-600 underline">
                Click here for additional peer review simulation details.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-peer-review"
        },
        {
          title: "2.5 Quiz: Hypothesis Formulation & Research Gap Identification",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Research Questions & Hypotheses</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of formulating research questions, identifying research gaps, and writing clear hypotheses.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review a set of sample research questions and hypotheses.</li>
              <li>Identify which research question is most clearly defined and which hypothesis best addresses a research gap.</li>
              <li>Provide a brief explanation for your selections.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-defined research question paired with a testable hypothesis is the cornerstone of rigorous scientific inquiry.</p>
          `,
          quiz: {
            question: "What is the primary purpose of formulating a clear, testable hypothesis in research?",
            options: [
              "To provide a basis for statistical analysis.",
              "To guide the research design and data collection.",
              "To impress peer reviewers with complexity.",
              "To eliminate the need for a literature review."
            ],
            correctAnswer: 1
          }
        },
        {
          title: "2.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Practice Assessment</h2>
            <h3 class="text-xl font-semibold mt-6">Key Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>Research Question Development:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Practice developing a well-defined research question and corresponding hypothesis based on a literature review.</li>
                  <li>This is a practice assessment for self-evaluation and will not be graded.</li>
                  <li>Review the following resources:
                    <ul class="list-disc list-inside ml-6 mt-1">
                      <li><a href="https://forms.gle/RcwwWkX2zQ131aRP6" class="text-blue-500 underline" target="_blank">Click Here</a> (Primary Paper Assessment Submission Form – Practice)</li>
                      <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                      <li><a href="https://docs.google.com/document/d/1uLhSkT2_rRzU04-e-ceyQzHw_Uby6Y9n/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assessment is also a practice exercise (non-graded) due on 3/1, 4/1, 5/1.</li>
                  <li>Review the resources below:
                    <ul class="list-disc list-inside ml-6 mt-1">
                      <li><a href="https://forms.gle/RcwwWkX2zQ131aRP6" class="text-blue-500 underline" target="_blank">Click Here</a> (Submission Form – Practice)</li>
                      <li><a href="https://docs.google.com/document/d/1BlIKF7_2OVcZl7Gv8UPsRmFIG8tGIaVY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                      <li><a href="https://docs.google.com/document/d/1um8jqJv9XGkY-_WqP_j8M4M3tnfWD_Qs/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Grant Proposal Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>This assignment is a practice exercise (non-graded) due on 3/15, 4/15, 5/15.</li>
                  <li>Review the following resources:
                    <ul class="list-disc list-inside ml-6 mt-1">
                      <li><a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a> (Submission Form – Practice)</li>
                      <li><a href="https://docs.google.com/document/d/1k7ktEblxvvN0AmL1VE7Krt5qbneKEf4z/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Review Instructions</a></li>
                      <li><a href="https://docs.google.com/document/d/1Y-rlkNHIIXhVH77i6wD9HO-M0ITBPZUm/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Example One</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Remember, you must attend a 3SP Information Session at Bergen Community College to receive your badge.</p>
          `,
          videoUrl: "https://example.com/week2-assignments"
        }
      ],
    },
    
    {
      title: "Week 3: Writing Methods & Results Sections",
      chapters: [
        {
          title: "3.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: The Importance of Methods & Results</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand why reproducibility and clarity in the methods and results sections are vital for scientific integrity and credibility.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Reproducibility ensures that research findings can be independently verified.</li>
              <li>Clarity in methods allows readers to replicate your study.</li>
              <li>Effective presentation of results supports transparent data interpretation.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clear methods and results sections are the backbone of a robust scientific paper.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourMethodsIntroURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week3-introduction"
        },
        {
          title: "3.2 Describing Methodologies",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Writing Detailed Methods</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to write detailed and replicable methods sections that enable other researchers to reproduce your work.</p>
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Describe the experimental design and protocols in clear, concise language.</li>
              <li>Include precise details such as sample size, materials, procedures, and statistical analyses.</li>
              <li>Maintain a logical flow that mirrors the actual research process.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Providing comprehensive methodological details is critical for reproducibility.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourMethodsDetailsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional methodology writing guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week3-methods"
        },
        {
          title: "3.3 Presenting Results",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Effective Presentation of Results</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore best practices for presenting research findings using tables, graphs, and figures.</p>
            <h3 class="text-xl font-semibold mt-6">Key Elements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use tables to organize data for easy comparison.</li>
              <li>Create graphs and figures that clearly illustrate trends and relationships.</li>
              <li>Ensure that all visuals are properly labeled and include legends, titles, and units of measure.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Visual representations of data can enhance understanding and impact, so pay close attention to design details.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourResultsPresentationURL" target="_blank" class="text-blue-600 underline">
                Click here for additional results presentation guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week3-results"
        },
        {
          title: "3.4 Data Visualization",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Advanced Data Visualization</h2>
            <p class="mt-4"><strong>Objective:</strong> Master the principles of data visualization as advocated by Edward Tufte, and learn how to create publication-ready visuals using tools like ggplot2 or Tableau.</p>
            <h3 class="text-xl font-semibold mt-6">Key Principles:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Tufte’s Data-Ink Ratio:</strong> Minimize non-essential ink to maximize clarity.</li>
              <li>Create visuals that are both aesthetically pleasing and scientifically accurate.</li>
              <li>Use color, scale, and annotations effectively to guide the viewer’s understanding.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Publication-ready visuals are crucial for effectively communicating complex data insights.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourDataVisualizationURL" target="_blank" class="text-blue-600 underline">
                Click here for additional data visualization guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week3-data-visualization"
        },
        {
          title: "3.5 Quiz: Methods & Results Best Practices",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Evaluating Methods & Results Sections</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the key principles for writing methods and results sections.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review sample methods and results sections.</li>
              <li>Identify which components best contribute to clarity and reproducibility.</li>
              <li>Explain the role of effective data visualization in enhancing the presentation of results.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-crafted methods and results section is the cornerstone of credible scientific writing.</p>
          `,
          quiz: {
            question: "Which element is most critical for ensuring the reproducibility of a research study?",
            options: [
              "A comprehensive literature review",
              "A clearly written and detailed methods section",
              "The inclusion of high-quality visuals",
              "An engaging discussion section"
            ],
            correctAnswer: 1
          }
        },
        {
          title: "3.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Practice Assessment</h2>
            <h3 class="text-xl font-semibold mt-6">Key Assignment: Methods & Results Draft</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>Methods & Results Draft:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Write a methods and results section for a mock study, including at least one data visualization (table, graph, or figure).</li>
                  <li>This is a practice assessment intended to hone your skills and will not be graded.</li>
                  <li>Review and utilize the provided guidelines for structuring your draft.</li>
                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Note:</strong> While this assignment is practice-only, it is essential that you follow the Ivy League standards in structure, clarity, and reproducibility.</p>
          `,
          videoUrl: "https://example.com/week3-assignments"
        }
      ],
    },
    
    // Week 4
    {
      title: "Week 4: Crafting Discussions & Conclusions",
      chapters: [
        {
          title: "4.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: The Role of the Discussion Section</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how the discussion section interprets results, contextualizes findings, and connects your study to the broader literature.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The discussion links your findings back to your research questions and hypotheses.</li>
              <li>It contextualizes results within existing literature and theory.</li>
              <li>A strong discussion provides a narrative that explains the significance of your results.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Think of the discussion as the "story" of your research—how your findings contribute to the field.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourDiscussionIntroURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-introduction"
        },
        {
          title: "4.2 Interpreting Results",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Interpreting Your Results</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to link your findings to your original hypotheses and to the existing body of literature.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Compare your results to your expected outcomes.</li>
              <li>Discuss how your data supports or refutes your hypotheses.</li>
              <li>Integrate previous studies and theoretical frameworks to contextualize your findings.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use clear, precise language to show how your results fit within the larger scientific conversation.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourInterpretingResultsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-interpreting-results"
        },
        {
          title: "4.3 Discussing Implications",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Discussing Implications</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore the theoretical, practical, and policy implications of your research findings.</p>
            <h3 class="text-xl font-semibold mt-6">Key Areas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Theoretical Implications:</strong> How do your findings advance or challenge existing theories?</li>
              <li><strong>Practical Implications:</strong> What practical applications or interventions can be derived from your results?</li>
              <li><strong>Policy Implications:</strong> How might your findings influence public policy or guidelines?</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clearly articulate the broader impact of your research beyond the immediate study.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourImplicationsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-implications"
        },
        {
          title: "4.4 Addressing Limitations",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Addressing Limitations</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to critically acknowledge the limitations of your study and suggest areas for future research.</p>
            <h3 class="text-xl font-semibold mt-6">Key Elements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify and discuss potential weaknesses in your study design or methodology.</li>
              <li>Explain how these limitations might affect the interpretation of your results.</li>
              <li>Offer suggestions for how future studies could address these limitations.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Being transparent about limitations demonstrates your critical thinking and commitment to research integrity.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourLimitationsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-limitations"
        },
        {
          title: "4.5 Quiz: Understanding Discussion Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Discussion & Conclusion Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the essential elements of a discussion section in a scientific manuscript.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the key functions of the discussion section.</li>
              <li>Identify how the discussion links findings to hypotheses and literature.</li>
              <li>Explain the importance of addressing limitations and discussing implications.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A clear and comprehensive discussion section is crucial for scientific impact.</p>
          `,
          quiz: {
            question: "What is the primary purpose of the discussion section in a research paper?",
            options: [
              "To present raw data without interpretation.",
              "To critically interpret results, relate them to the literature, and discuss their implications and limitations.",
              "To provide an exhaustive review of previous studies.",
              "To list all experimental procedures."
            ],
            correctAnswer: 1
          }
        },
        {
          title: "4.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Key Assignment: Discussion Section Draft</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>Discussion Section Draft:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Write a discussion section for your mock study, including:
                    <ul class="list-disc list-inside ml-6 mt-1">
                      <li>Interpretation of results and linkage to hypotheses.</li>
                      <li>Implications of your findings (theoretical, practical, and policy).</li>
                      <li>Limitations of your study and suggestions for future research.</li>
                    </ul>
                  </li>
                  <li>This is a practice assignment to help you refine your writing skills and is not graded.</li>
                </ul>
              </li>
              <li>
                <strong>Mandatory Session:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</li>
                </ul>
              </li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-assignments"
        }
      ],
    },
    
     
    // Week 5
    {
      title: "Week 5: Grant Proposal Writing & Peer Review",
      chapters: [
        {
          title: "5.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: The Importance of Grant Proposals</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the crucial role grant proposals play in securing funding for research projects and advancing scientific inquiry.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Grant proposals articulate your research vision and justify the need for funding.</li>
              <li>They demonstrate the feasibility, impact, and innovation of your project.</li>
              <li>A compelling proposal aligns with funder priorities and emphasizes translational impact.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A strong proposal not only details your methodology but also tells a persuasive story about your research’s potential impact.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourGrantProposalIntroURL" target="_blank" class="text-blue-600 underline">
                Click here for additional proposal introduction details.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week5-introduction"
        },
        {
          title: "5.2 Components of a Grant Proposal",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Essential Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Break down the key sections of a grant proposal: Abstract, Introduction, Objectives, Methodology, Budget, and Expected Outcomes.</p>
            <h3 class="text-xl font-semibold mt-6">Components Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Abstract:</strong> A concise summary of the proposal.</li>
              <li><strong>Introduction:</strong> Background and rationale for the project.</li>
              <li><strong>Objectives:</strong> Clear, measurable goals.</li>
              <li><strong>Methodology:</strong> Detailed research design and procedures.</li>
              <li><strong>Budget:</strong> A realistic and justified cost breakdown.</li>
              <li><strong>Expected Outcomes:</strong> The anticipated impact and benefits of the research.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Each component must be well-articulated to convince reviewers of your project’s merit.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourGrantComponentsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional component details.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week5-components"
        },
        {
          title: "5.3 Writing Persuasively",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Crafting a Compelling Narrative</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop persuasive writing strategies that align your proposal with funder priorities and effectively communicate the translational impact of your research.</p>
            <h3 class="text-xl font-semibold mt-6">Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Adopt a clear, confident tone and structure your argument logically.</li>
              <li>Highlight innovation and real-world impact.</li>
              <li>Tailor your language to address the interests and priorities of potential funders.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Persuasive writing is about clarity and focus; ensure your proposal tells a coherent and compelling story.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourPersuasiveWritingURL" target="_blank" class="text-blue-600 underline">
                Click here for additional persuasive writing guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week5-writing-persuasively"
        },
        {
          title: "5.4 Peer Review & Revisions",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Peer Review Simulation</h2>
            <p class="mt-4"><strong>Objective:</strong> Simulate a grant review panel to provide and receive constructive feedback on your proposal.</p>
            <h3 class="text-xl font-semibold mt-6">Process Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Exchange draft proposals with peers.</li>
              <li>Use a structured checklist to critique each section of the proposal.</li>
              <li>Engage in a panel discussion to refine your proposal further.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive feedback is key to enhancing the clarity, feasibility, and impact of your proposal.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourPeerReviewGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional peer review and revision guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week5-peer-review"
        },
        {
          title: "5.5 Quiz: Grant Proposal Components & Persuasive Writing",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Evaluating Grant Proposals</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of grant proposal components and persuasive writing techniques.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review sample grant proposals and identify the strengths and weaknesses in each component.</li>
              <li>Explain how persuasive writing can enhance the proposal's appeal to funders.</li>
              <li>Answer multiple-choice questions based on the material covered.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A deep understanding of each component and effective persuasive techniques is essential for a successful grant proposal.</p>
          `,
          quiz: {
            question: "Which component of a grant proposal is primarily responsible for outlining the feasibility and methodology of the proposed research?",
            options: [
              "Abstract",
              "Introduction",
              "Methodology",
              "Budget"
            ],
            correctAnswer: 2
          }
        },
        {
          title: "5.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Key Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>Grant Proposal Draft:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Submit a draft grant proposal for a research project, including a literature review, experimental design, and budget.</li>
                  <li>Due on <strong>3/15, 4/15, and 5/15</strong> via the online submission portal (<a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                </ul>
              </li>
              <li>
                <strong>Peer Review Exercise:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Provide detailed feedback on a peer’s grant proposal draft.</li>
                  <li>This exercise is designed to enhance your critical review skills and will be submitted via your online portal.</li>
                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Ensure you attend a 3SP Information Session at Bergen Community College to receive your badge.</p>
          `,
          videoUrl: "https://example.com/week5-assignments"
        }
      ],
    },
    
    // Week 6
    {
      title: "Week 6: Capstone & Peer Review – Final Submissions and Reflections",
      chapters: [
        {
          title: "6.1 Final Research Paper Submission",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Final Research Paper Submission</h2>
            <p class="mt-4"><strong>Objective:</strong> Refine and submit your complete research paper by incorporating feedback from peers and instructors.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Review all feedback received during the course.</li>
              <li>Revise your paper to improve clarity, coherence, and adherence to scientific writing standards.</li>
              <li>Ensure that your manuscript is formatted according to Ivy League guidelines.</li>
              <li>Submit the final version electronically before the deadline.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Thorough revision and attention to detail in your final paper will demonstrate your growth and mastery of scientific writing.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalResearchPaperSubmissionURL" target="_blank" class="text-blue-600 underline">
                Click here for additional guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-final-research-paper"
        },
        {
          title: "6.2 Final Grant Proposal Submission",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Final Grant Proposal Submission</h2>
            <p class="mt-4"><strong>Objective:</strong> Finalize and submit your grant proposal, ensuring that it meets all formatting, content, and budget requirements.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Incorporate peer and instructor feedback to enhance your proposal’s clarity and persuasiveness.</li>
              <li>Double-check all components, including abstract, objectives, methodology, budget, and expected outcomes.</li>
              <li>Submit the final proposal via the designated online submission portal.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-structured and persuasive grant proposal is key to securing research funding.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalGrantProposalSubmissionURL" target="_blank" class="text-blue-600 underline">
                Click here for additional grant proposal submission guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-final-grant-proposal"
        },
        {
          title: "6.3 Final Peer Review Session",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Final Peer Review Session</h2>
            <p class="mt-4"><strong>Objective:</strong> Participate in a final peer review session to critique and provide feedback on your peers' submissions and refine your own work.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Engage in a structured review process using provided checklists.</li>
              <li>Offer constructive feedback on both the research paper and grant proposal drafts.</li>
              <li>Incorporate insights from the peer review to make final revisions.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive criticism from peers is invaluable for finalizing your work and ensuring its overall quality.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalPeerReviewGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional peer review session guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-peer-review-session"
        },
        {
          title: "6.4 Capstone Reflection & Course Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Capstone Reflection & Course Summary</h2>
            <p class="mt-4"><strong>Objective:</strong> Reflect on your growth as a scientific writer and researcher, summarizing key lessons learned throughout the course.</p>
            <h3 class="text-xl font-semibold mt-6">Reflection Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Discuss the improvements in your writing, methodology, and critical analysis skills.</li>
              <li>Highlight how feedback and peer review sessions helped refine your work.</li>
              <li>Consider the challenges you faced and how you overcame them.</li>
              <li>Plan for your future development as a researcher and scientific writer.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A reflective summary not only consolidates your learning but also guides your ongoing professional development.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourCapstoneReflectionURL" target="_blank" class="text-blue-600 underline">
                Click here for additional reflection and summary guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-reflection-summary"
        }
      ],
    },
    
  ],
};// You can now close the courseData object if it's the last week

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function WritingCoursePage() {
  return <CoursePage courseData={WritingCourseData} />;
}
