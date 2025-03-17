"use client";

import Head from "next/head";
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
            <p class="mt-4"><em>Lab Resources:</em> 
              Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp;
              Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            </p>
          `,
          //videoUrl: "https://example.com/week1-introduction"
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
            <p class="mt-4"><em>Tip:</em> Familiarize yourself with high-impact articles to see these components executed at an Ivy League standard.</p>
            <p class="mt-4"><em>Lab Resources:</em> 
              Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp;
              Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            </p>
          `,
          //videoUrl: "https://example.com/week1-imrad"
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
            <p class="mt-4"><em>Tip:</em> Maintaining a formal tone is essential for scientific credibility.</p>
            <p class="mt-4"><em>Lab Resources:</em> 
              Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp;
              Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            </p>
          `,
          //videoUrl: "https://example.com/week1-academic-vs-general"
        },
        {
          title: "1.4 Planning & Organizing Your Manuscript",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Planning & Organizing</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn strategies for outlining and structuring your manuscript to ensure clarity and coherence.</p>
            <h3 class="text-xl font-semibold mt-6">Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Develop a detailed outline based on the IMRaD format.</li>
              <li>Organize your literature review, methods, results, and discussion logically.</li>
              <li>Plan your writing and revision schedule carefully.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-organized manuscript enhances readability and the persuasiveness of your arguments.</p>
            <p class="mt-4"><em>Lab Resources:</em> 
              Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp;
              Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            </p>
          `,
          //videoUrl: "https://example.com/week1-planning-organizing"
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
              <li>Explain the key differences between academic and general writing.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Mastery of these components is essential for producing high-quality scientific manuscripts.</p>
            <p class="mt-4"><em>Lab Resources:</em> 
              Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp;
              Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            </p>
          `,
          quiz: {
            question: "Which of the following best describes the purpose of the 'Methods' section in a research paper?",
            options: [
              "To provide background and context for the study.",
              "To detail the procedures and techniques used so that the study can be replicated.",
              "To discuss the implications of the research findings.",
              "To review the literature related to the study topic."
            ],
            correctAnswer: 1
          },
          //videoUrl: "https://example.com/week1-assignment-submission"
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
                  <li><a href="https://forms.gle/KWkDCmzN6x8MxFxP8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1BlIKF7_2OVcZl7Gv8UPsRmFIG8tGIaVY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1um8jqJv9XGkY-_WqP_j8M4M3tnfWD_Qs/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Grant Proposal Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment. Both are due at the same time as the grant proposal.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1k7ktEblxvvN0AmL1VE7Krt5qbneKEf4z/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1Y-rlkNHIIXhVH77i6wD9HO-M0ITBPZUm/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week1-assignment-submission"
        }
      ]
    },
    
      
    
      {
        title: "Week 2: Crafting Research Questions & Hypotheses",
        chapters: [
          {
            title: "2.1 Introduction",
            content: `
              <h2 class="text-2xl font-bold">Slide 1: The Role of Research Questions & Hypotheses</h2>
              <p class="mt-4"><strong>Objective:</strong> Understand how research questions and hypotheses form the foundation of scientific inquiry.</p>
              <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Research questions define the scope and direction of a study.</li>
                <li>Hypotheses offer testable predictions about relationships between variables.</li>
                <li>They guide your research design and data collection.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> A clear research question paired with a testable hypothesis is critical for focused research.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            `,
            //videoUrl: "https://example.com/week2-introduction"
          },
          {
            title: "2.2 Identifying Research Gaps",
            content: `
              <h2 class="text-2xl font-bold">Slide 2: Identifying Research Gaps</h2>
              <p class="mt-4"><strong>Objective:</strong> Learn techniques for conducting literature reviews and identifying under-explored areas in the scientific literature.</p>
              <h3 class="text-xl font-semibold mt-6">Techniques:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Utilize systematic literature review methods using academic databases.</li>
                <li>Apply frameworks like PRISMA to organize and synthesize research findings.</li>
                <li>Analyze studies to uncover gaps or inconsistencies in current knowledge.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> A thorough literature review is key to pinpointing research gaps that inspire innovative studies.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            `,
            //videoUrl: "https://example.com/week2-research-gaps"
          },
          {
            title: "2.3 Formulating Hypotheses",
            content: `
              <h2 class="text-2xl font-bold">Slide 3: Crafting Clear, Testable Hypotheses</h2>
              <p class="mt-4"><strong>Objective:</strong> Develop the skills to write clear, testable hypotheses, including null, alternative, and directional hypotheses.</p>
              <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Null Hypothesis (H₀):</strong> Assumes no effect or relationship exists.</li>
                <li><strong>Alternative Hypothesis (H₁):</strong> Suggests a specific effect or relationship.</li>
                <li><strong>Directional vs. Non-Directional:</strong> Specifies whether the hypothesis predicts a particular direction of effect.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> Specific and clear hypotheses enhance your study's focus and testability.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            `,
            //videoUrl: "https://example.com/week2-hypotheses"
          },
          {
            title: "2.4 Peer Review Simulation",
            content: `
              <h2 class="text-2xl font-bold">Slide 4: Peer Review Simulation</h2>
              <p class="mt-4"><strong>Objective:</strong> Engage in a simulated peer review session to critique a peer’s research question and hypothesis.</p>
              <h3 class="text-xl font-semibold mt-6">Simulation Steps:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Exchange research questions and hypotheses with a peer.</li>
                <li>Use a structured checklist to assess clarity, relevance, and testability.</li>
                <li>Provide constructive feedback and discuss improvements.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> Peer feedback is essential for refining your research ideas.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            `,
            //videoUrl: "https://example.com/week2-peer-review"
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
              <p class="mt-4"><em>Tip:</em> A well-defined research question paired with a testable hypothesis is essential for rigorous scientific inquiry.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
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
            },
            //videoUrl: "https://example.com/week2-assignment-submission"
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
                    <li>You may choose to submit either a lab report or a grant proposal as your final assignment. Both are due at the same time as the grant proposal.</li>
                    <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                    <li><a href="https://docs.google.com/document/d/1k7ktEblxvvN0AmL1VE7Krt5qbneKEf4z/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Review Instructions</a></li>
                    <li><a href="https://docs.google.com/document/d/1Y-rlkNHIIXhVH77i6wD9HO-M0ITBPZUm/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Example One</a></li>
                  </ul>
                </li>
                <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
              </ul>
              <p class="mt-4"><strong>Important:</strong> Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
            `,
            //videoUrl: "https://example.com/week2-assignment-submission"
          }
        ]
      },
      
    
      {
        title: "Week 3: Writing Methods & Results Sections",
        chapters: [
          {
            title: "3.1 Introduction",
            content: `
              <h2 class="text-2xl font-bold">Slide 1: The Importance of Methods & Results</h2>
              <p class="mt-4"><strong>Objective:</strong> Understand why reproducibility and clarity in the methods and results sections are essential for scientific integrity and credibility.</p>
              <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Reproducibility ensures that research findings can be independently verified.</li>
                <li>Clear methods allow others to replicate your study.</li>
                <li>Effective presentation of results supports transparent interpretation of data.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> A well-crafted methods and results section forms the backbone of a robust scientific paper.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
            `,
            //videoUrl: "https://example.com/week3-introduction"
          },
          {
            title: "3.2 Describing Methodologies",
            content: `
              <h2 class="text-2xl font-bold">Slide 2: Writing Detailed Methods</h2>
              <p class="mt-4"><strong>Objective:</strong> Learn to write detailed and replicable methods sections that allow others to reproduce your work.</p>
              <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Describe experimental design and procedures using clear, concise language.</li>
                <li>Include specific details such as sample sizes, materials, and statistical analyses.</li>
                <li>Organize the methods section in a logical sequence mirroring the actual research process.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> Comprehensive details in your methods are critical for reproducibility.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
            `,
            //videoUrl: "https://example.com/week3-methods"
          },
          {
            title: "3.3 Presenting Results",
            content: `
              <h2 class="text-2xl font-bold">Slide 3: Effective Presentation of Results</h2>
              <p class="mt-4"><strong>Objective:</strong> Learn best practices for presenting research findings using tables, graphs, and figures.</p>
              <h3 class="text-xl font-semibold mt-6">Key Elements:</h3>
              <ul class="list-disc list-inside mt-2">
                <li>Organize data in tables for clear comparisons.</li>
                <li>Create graphs and figures to illustrate trends and relationships.</li>
                <li>Ensure all visuals have appropriate labels, legends, titles, and units.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> High-quality visuals greatly enhance the clarity and impact of your research results.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
            `,
            //videoUrl: "https://example.com/week3-results"
          },
          {
            title: "3.4 Data Visualization",
            content: `
              <h2 class="text-2xl font-bold">Slide 4: Advanced Data Visualization</h2>
              <p class="mt-4"><strong>Objective:</strong> Master the principles of data visualization, as outlined by Edward Tufte, to create publication-ready visuals using tools like ggplot2 or Tableau.</p>
              <h3 class="text-xl font-semibold mt-6">Key Principles:</h3>
              <ul class="list-disc list-inside mt-2">
                <li><strong>Tufte’s Data-Ink Ratio:</strong> Remove unnecessary visual elements to maximize clarity.</li>
                <li>Create visuals that are both aesthetically pleasing and scientifically accurate.</li>
                <li>Effectively use color, scale, and annotations to guide the viewer’s interpretation.</li>
              </ul>
              <p class="mt-4"><em>Tip:</em> Effective data visualization is essential for conveying complex results clearly.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
            `,
            //videoUrl: "https://example.com/week3-data-visualization"
          },
          {
            title: "3.5 Quiz: Methods & Results Best Practices",
            content: `
              <h2 class="text-2xl font-bold">Slide 5: Quiz - Evaluating Methods & Results Sections</h2>
              <p class="mt-4"><strong>Objective:</strong> Assess your understanding of the essential components for writing effective methods and results sections.</p>
              <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
              <ol class="list-decimal list-inside mt-2">
                <li>Review sample methods and results sections.</li>
                <li>Identify which components best enhance clarity and reproducibility.</li>
                <li>Explain how effective data visualization supports transparent presentation of results.</li>
              </ol>
              <p class="mt-4"><em>Tip:</em> A well-crafted methods and results section is key to the credibility of your research findings.</p>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
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
            },
            //videoUrl: "https://example.com/week3-assignment-submission"
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
                    <li>Review the provided guidelines to ensure your draft meets Ivy League standards in clarity, structure, and reproducibility.</li>
                  </ul>
                </li>
                <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
              </ul>
              <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" target="_blank" class="text-blue-500 underline">click here</a>.
            `,
            //videoUrl: "https://example.com/week3-assignments"
          }
        ]
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
              <li>Links your findings back to your research questions and hypotheses.</li>
              <li>Places your results within the context of existing literature and theory.</li>
              <li>Provides a narrative that explains the significance and impact of your study.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Think of the discussion as the "story" of your research—how your findings contribute to the field.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week4-introduction"
        },
        {
          title: "4.2 Interpreting Results",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Interpreting Your Results</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to connect your findings to your original hypotheses and integrate them with existing literature.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Compare your actual outcomes with the expected results.</li>
              <li>Discuss whether your data supports or refutes your hypotheses.</li>
              <li>Relate your findings to previous studies and theoretical frameworks.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use clear, precise language to show how your results contribute to the broader scientific conversation.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week4-interpreting-results"
        },
        {
          title: "4.3 Discussing Implications",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Discussing Implications</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore the theoretical, practical, and policy implications of your research findings.</p>
            <h3 class="text-xl font-semibold mt-6">Key Areas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Theoretical Implications:</strong> How your findings advance or challenge existing theories.</li>
              <li><strong>Practical Implications:</strong> What applications or interventions your results suggest.</li>
              <li><strong>Policy Implications:</strong> How your research might influence public policy or guidelines.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clearly articulate the broader impact of your work beyond your immediate study.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week4-implications"
        },
        {
          title: "4.4 Addressing Limitations",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Addressing Limitations</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to critically acknowledge the limitations of your study and suggest directions for future research.</p>
            <h3 class="text-xl font-semibold mt-6">Key Elements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify potential weaknesses in your study design or methodology.</li>
              <li>Discuss how these limitations might affect your results and conclusions.</li>
              <li>Propose recommendations for future studies to overcome these limitations.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Transparency about limitations demonstrates critical thinking and scientific integrity.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week4-limitations"
        },
        {
          title: "4.5 Quiz: Understanding Discussion Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Discussion & Conclusion Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the essential components of a discussion section in a scientific manuscript.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the functions and purpose of the discussion section.</li>
              <li>Identify how it links your findings to your hypotheses and existing literature.</li>
              <li>Explain the importance of addressing limitations and discussing broader implications.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-crafted discussion section is crucial for the overall impact of your research paper.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          quiz: {
            question: "What is the primary purpose of the discussion section in a research paper?",
            options: [
              "To present raw data without interpretation.",
              "To critically interpret results, link them to the literature, and discuss implications and limitations.",
              "To provide an exhaustive review of previous studies.",
              "To list every experimental detail."
            ],
            correctAnswer: 1
          },
          //videoUrl: "https://example.com/week4-assignment-submission"
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
                  <li>Write a discussion section for your mock study that includes:</li>
                  <ul class="list-disc list-inside ml-6 mt-1">
                    <li>Interpretation of results and linkage to your hypotheses.</li>
                    <li>Discussion of theoretical, practical, and policy implications.</li>
                    <li>A clear acknowledgment of study limitations and suggestions for future research.</li>
                  </ul>
                  <li>This is a practice assignment to help you refine your writing skills and will not be graded.</li>
                </ul>
              </li>
              <li>
                <strong>Mandatory Session:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</li>
                </ul>
              </li>
              <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
            </ul>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week4-assignments"
        }
      ]
    },
    
    
    
     
    // Week 5
    {
      title: "Week 5: Grant Proposal Writing & Peer Review",
      chapters: [
        {
          title: "5.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: The Importance of Grant Proposals</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how grant proposals are essential for securing research funding and advancing scientific inquiry.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Grant proposals articulate your research vision and justify the need for funding.</li>
              <li>They demonstrate the feasibility, impact, and innovation of your project.</li>
              <li>A persuasive proposal aligns with funder priorities and emphasizes translational impact.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A strong proposal not only details your methodology but also tells a compelling story about your research’s potential impact.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week5-introduction"
        },
        {
          title: "5.2 Components of a Grant Proposal",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Essential Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Break down the key sections of a grant proposal: Abstract, Introduction, Objectives, Methodology, Budget, and Expected Outcomes.</p>
            <h3 class="text-xl font-semibold mt-6">Components Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Abstract:</strong> A concise summary of your proposal.</li>
              <li><strong>Introduction:</strong> Background and rationale for your project.</li>
              <li><strong>Objectives:</strong> Clear, measurable goals.</li>
              <li><strong>Methodology:</strong> Detailed research design and procedures.</li>
              <li><strong>Budget:</strong> A realistic and justified cost breakdown.</li>
              <li><strong>Expected Outcomes:</strong> The anticipated impact and benefits of your research.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Each section must be well-articulated to convince reviewers of your project’s merit.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week5-components"
        },
        {
          title: "5.3 Writing Persuasively",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Crafting a Compelling Narrative</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop persuasive writing strategies that align your proposal with funder priorities and highlight the translational impact of your research.</p>
            <h3 class="text-xl font-semibold mt-6">Key Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Adopt a clear, confident tone and organize your argument logically.</li>
              <li>Highlight the innovative aspects and potential real-world impact of your project.</li>
              <li>Tailor your language to address the interests of potential funders.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Persuasive writing is about clarity and focus—ensure your proposal tells a coherent, compelling story.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week5-writing-persuasively"
        },
        {
          title: "5.4 Peer Review & Revisions",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Peer Review Simulation</h2>
            <p class="mt-4"><strong>Objective:</strong> Simulate a grant review panel to provide and receive constructive feedback on your proposal draft.</p>
            <h3 class="text-xl font-semibold mt-6">Review Process:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Exchange draft proposals with your peers.</li>
              <li>Use a structured checklist to critique each section of the proposal.</li>
              <li>Engage in a discussion to refine your proposal based on peer feedback.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive peer feedback is invaluable for enhancing the clarity, feasibility, and overall impact of your proposal.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week5-peer-review"
        },
        {
          title: "5.5 Quiz: Grant Proposal Components & Persuasive Writing",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Evaluating Grant Proposals</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the critical components of a grant proposal and the principles of persuasive writing.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review sample grant proposals and identify strengths and weaknesses in each section.</li>
              <li>Explain how persuasive writing enhances a proposal's appeal to funders.</li>
              <li>Answer multiple-choice questions based on the material covered.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A deep understanding of each component is essential for crafting a compelling grant proposal.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
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
          },
          //videoUrl: "https://example.com/week5-assignment-submission"
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
              <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week5-assignments"
        }
      ]
    },
    
    
    
    // Week 6
    {
      title: "Week 6: Capstone & Peer Review - Final Submissions and Reflections",
      chapters: [
        {
          title: "6.1 Final Research Paper Submission",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Final Research Paper Submission</h2>
            <p class="mt-4"><strong>Objective:</strong> Refine and submit your complete research paper by incorporating feedback from peers and instructors.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Review all feedback received during the course.</li>
              <li>Revise your paper for clarity, coherence, and adherence to Ivy League standards.</li>
              <li>Ensure that your manuscript follows the IMRaD structure and includes all necessary sections.</li>
              <li>Submit the final version via the designated online submission portal.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Detailed revisions and careful formatting demonstrate your growth as a scientific writer.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week6-final-research-paper"
        },
        {
          title: "6.2 Final Grant Proposal Submission",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Final Grant Proposal Submission</h2>
            <p class="mt-4"><strong>Objective:</strong> Finalize and submit your grant proposal, ensuring that it meets all formatting, content, and budget requirements.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Incorporate feedback from both peers and instructors to enhance clarity and persuasiveness.</li>
              <li>Review every component—abstract, introduction, objectives, methodology, budget, and expected outcomes—for completeness.</li>
              <li>Submit your final proposal via the designated online submission portal.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-structured and persuasive proposal is key to securing research funding.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week6-final-grant-proposal"
        },
        {
          title: "6.3 Final Peer Review Session",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Final Peer Review Session</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a final peer review session to critique and provide feedback on both your submissions and those of your peers.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Participate in a structured review process using provided checklists.</li>
              <li>Offer constructive feedback on both your research paper and grant proposal drafts.</li>
              <li>Incorporate peer feedback to refine your final submissions.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive criticism is invaluable for ensuring the overall quality of your work.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week6-peer-review-session"
        },
        {
          title: "6.4 Capstone Reflection & Course Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Capstone Reflection & Course Summary</h2>
            <p class="mt-4"><strong>Objective:</strong> Reflect on your growth as a scientific writer and researcher by summarizing the key lessons learned throughout the course.</p>
            <h3 class="text-xl font-semibold mt-6">Reflection Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Discuss improvements in your writing, methodology, and critical analysis skills.</li>
              <li>Highlight how peer review and instructor feedback helped refine your work.</li>
              <li>Identify challenges you encountered and how you overcame them.</li>
              <li>Outline your plans for future professional development as a scientific writer.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A thoughtful reflection consolidates your learning and provides direction for future growth.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab Data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab Instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week6-reflection-summary"
        },
        {
          title: "6.5 Assignments",
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
                  <li><a href="https://forms.gle/KWkDCmzN6x8MxFxP8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1BlIKF7_2OVcZl7Gv8UPsRmFIG8tGIaVY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1um8jqJv9XGkY-_WqP_j8M4M3tnfWD_Qs/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Grant Proposal Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment. Both are due at the same time as the grant proposal.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/U8RKt9YsHpVeTxsPA" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1k7ktEblxvvN0AmL1VE7Krt5qbneKEf4z/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1Y-rlkNHIIXhVH77i6wD9HO-M0ITBPZUm/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Grant Proposal Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report Final Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>You may choose to submit either a lab report or a grant proposal as your final assignment.</li>
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/durxBnKX9vZMZwuw6" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1YlbSC9btt2Ue2wjpeDTue5cnPy0a-CUP/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1qsKrzINuVglzoQ5dtfpEUMQAxm8WOaCLHi-40nuis00/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1saiwbwYTzdjfLSwc_Hgo2V9tQ8cuOQb_/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Formal Lab Report Explanation and Grading Key </a></li>
                  <li><a href="https://docs.google.com/document/d/165LFQsZbI8ru41P7WeQGjLMSbSTS03yY/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Teacher Notes - Lab Report Individual Requirements</a></li>
                  <li><a href="https://docs.google.com/document/d/18HRpPUqxhGnybeCtZp9YdjQQ0-ijoUUi/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Materials and Methods Section for Each Lab Report</a></li>
                  <li><a href="https://docs.google.com/document/d/1I-FwO4Vzymz-WnOcjnEhzzcGTS6Eh5Ek/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Hypothetical Lab Report Class Results</a></li>

                </ul>
              </li>
            </ul>
            <p class="mt-4"><strong>Important:</strong> Attendance at a 3SP Information Session at Bergen Community College is required to receive your badge.</p>
            <p class="mt-4"><em>Lab Resources:</em> Lab data: <a href="https://docs.google.com/document/d/12lZNXUW17pE-UCbJILQd9nnXuA_ksedBwyvgIgKLjS4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a> &nbsp;|&nbsp; Lab instructions: <a href="https://drive.google.com/file/d/1Cakcarue73JHPpBSsJSg4A-jiRTgp2yj/view?usp=sharing" class="text-blue-500 underline" target="_blank">click here</a>.
          `,
          //videoUrl: "https://example.com/week6-assignments"
        }
      ]
    },
    
    
  ],
};// You can now close the courseData object if it's the last week

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function WritingCoursePage() {
  return (
    <>
      <Head>
        <title>Scientific Writing & Grant Proposal - 3SP Courses</title>
        <meta name="description" content="Learn the fundamentals of scientific writing and grant proposal creation in this comprehensive course. Improve your writing skills and advance your research capabilities." />
        <meta name="robots" content="index, follow" />
      </Head>

      <CoursePage courseData={WritingCourseData} />
    </>
  );
}
