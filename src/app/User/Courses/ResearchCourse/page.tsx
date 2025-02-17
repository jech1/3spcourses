"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const ResearchCourseData: CourseData = {
  title: "Research Methods & Analytics",
  weeks: [
    // Week 1
    {
      title: "Week 1: Foundations of Methodological Rigor",
      chapters: [
        {
          title: "1.1 Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Introduction to Methodological Rigor</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore Ivy League standards for research design, reproducibility, and ethical frameworks including IRB, HIPAA, and the Belmont Report.</p>
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>High standards for research design and reproducibility.</li>
              <li>Understanding ethical frameworks and guidelines (IRB, HIPAA, Belmont Report).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review key ethical documents and their importance.</li>
              <li>Examine case studies that exemplify methodological rigor.</li>
              <li>Discuss how reproducibility impacts research credibility.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A strong foundation in ethical and methodological principles is essential for conducting impactful research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week1-introduction"
        },
        {
          title: "1.2 Defining Research Gaps",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Identifying Research Gaps</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn systematic approaches to literature synthesis and gap identification using tools like PRISMA.</p>
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Utilize databases and systematic review protocols.</li>
              <li>Apply PRISMA guidelines for literature synthesis.</li>
              <li>Identify conflicting findings and research gaps.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Search for relevant literature using major academic databases.</li>
              <li>Follow the PRISMA checklist to record and screen studies.</li>
              <li>Discuss your findings to identify gaps in the research.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A clearly defined research gap is the first step in producing original and impactful research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week1-research-gaps"
        },
        {
          title: "1.3 Hypothesis Crafting",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Crafting Your Research Hypothesis</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop the ability to create clear, testable hypotheses by operationalizing variables.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Formulating Null and Alternative Hypotheses.</li>
              <li>Understanding directional versus non-directional hypotheses.</li>
              <li>Operationalizing abstract concepts into measurable variables.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Define your research question clearly.</li>
              <li>Decide on a null hypothesis and an alternative hypothesis.</li>
              <li>Specify whether your hypothesis is directional or non-directional.</li>
              <li>Translate theoretical concepts into operational variables.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A precise hypothesis sets the stage for effective research and accurate testing.</p>
          `,
          //videoUrl: "https://example.com/week1-hypothesis-crafting"
        },
        {
          title: "1.4 Peer Review Foundations",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Understanding Peer Review</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn the structure and importance of high-impact journal articles and the peer review process.</p>
            <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Anatomy of a research article: Abstract, Introduction, Methods, Results, Discussion, Conclusion.</li>
              <li>Importance of clear reporting and rigorous methodology.</li>
              <li>Role of peer review in maintaining research quality.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Examine examples of high-impact articles from top journals.</li>
              <li>Identify key elements that contribute to a well-reported study.</li>
              <li>Discuss how peer review enhances research integrity.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Understanding the peer review process is crucial for improving your own research design and writing.</p>
          `,
          //videoUrl: "https://example.com/week1-peer-review"
        },
        {
          title: "1.5 Quiz: Critically Appraise a Flawed Study Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Study Design Critique</h2>
            <p class="mt-4"><strong>Objective:</strong> Apply your understanding of research methodology by critiquing a flawed study design.</p>
            <h3 class="text-xl font-semibold mt-6">Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Read the provided case study of a flawed study design.</li>
              <li>Identify weaknesses in hypothesis formulation, methodology, and ethical considerations.</li>
              <li>Write a brief critique highlighting the flaws and suggesting improvements.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Focus on clarity, reproducibility, and ethical considerations when critiquing the study design.</p>
          `,
          quiz: {
            question: "Which of the following is a critical flaw in a study that fails to clearly define its research hypothesis?",
            options: [
              "Ambiguous results and difficulty in measuring outcomes.",
              "Enhanced exploratory potential.",
              "Elimination of the need for statistical analysis.",
              "Increased reproducibility."
            ],
            correctAnswer: 0
          }
        },
        {
          title: "1.6 Assignments",
          content: `
            <h3 class="text-xl font-semibold mt-6">Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>First Primary Paper Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The first primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/forms/d/15WC0Dnk3w0uXmHbGSarU1E1EQWtcDKg4J_vWAsaSdcU/edit#:~:text=https%3A//docs.google.com/document/d/1NylLZ3z%2DgtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report / Publications Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1gcb2QrzsQdIWVkULTIWrBDFx_1A8GBd_vxERKSNz7RI/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1Oa-8nCDHAYwBGZqPLE1gJhZ1JhKDJQfk3t_4Ojkf0q4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Checklist And Guide</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
            </ul>
          `,
        }
      ],
    },
    

    
    // Week 2
    {
      title: "Week 2: Quantitative Precision & Statistical Mastery",
      chapters: [
        {
          title: "2.1 Experimental Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Foundations of Experimental Design</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn the essentials of experimental design including Randomized Controlled Trials (RCTs), blinding, counterbalancing, and power analysis using tools like G*Power.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>RCTs:</strong> Minimize bias through random assignment.</li>
              <li><strong>Blinding:</strong> Conceal group allocation to reduce bias.</li>
              <li><strong>Counterbalancing:</strong> Control order effects in repeated measures.</li>
              <li><strong>Power Analysis:</strong> Calculate the needed sample size with G*Power.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Define your research question and determine if an RCT is suitable.</li>
              <li>Plan the design including blinding and counterbalancing strategies.</li>
              <li>Perform power analysis using G*Power to calculate sample size.</li>
              <li>Document design choices and ethical considerations.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A robust experimental design minimizes bias and strengthens your study’s validity.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-experimental-design"
        },
        {
          title: "2.2 Advanced Survey Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Advanced Survey Design Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Master advanced survey methods including Likert validation, cognitive interviewing, and REDCap optimization.</p>
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Likert Scale Validation:</strong> Ensure reliability of survey items.</li>
              <li><strong>Cognitive Interviewing:</strong> Pre-test questions to reduce misinterpretation.</li>
              <li><strong>REDCap Optimization:</strong> Streamline data collection and management.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Draft survey questions aligned with your research goals.</li>
              <li>Conduct cognitive interviews to refine questions.</li>
              <li>Validate Likert items statistically.</li>
              <li>Set up and optimize data collection using REDCap.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-designed survey increases data quality and study validity.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-survey-design"
        },
        {
          title: "2.3 Statistical Inference",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Statistical Inference Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Apply advanced statistical methods such as multivariate regression, ANCOVA, and bootstrapping to analyze your data.</p>
            <h3 class="text-xl font-semibold mt-6">Key Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Multivariate Regression:</strong> Evaluate the influence of multiple variables.</li>
              <li><strong>ANCOVA:</strong> Adjust for covariates to isolate treatment effects.</li>
              <li><strong>Bootstrapping:</strong> Use resampling techniques to validate your estimates in SPSS or R.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Identify your dependent and independent variables.</li>
              <li>Run multivariate regression analysis to assess relationships.</li>
              <li>Use ANCOVA to control for confounding variables.</li>
              <li>Apply bootstrapping methods to test the stability of your findings.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Statistical inference is critical for drawing valid, data-driven conclusions from your research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-statistical-inference"
        },
        {
          title: "2.4 Data Visualization",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Data Visualization Principles</h2>
            <p class="mt-4"><strong>Objective:</strong> Create publication-ready figures that clearly and accurately represent your data using tools such as ggplot2 and Tableau.</p>
            <h3 class="text-xl font-semibold mt-6">Key Principles:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Tufte’s Data-Ink Ratio:</strong> Prioritize essential visual elements to communicate data effectively.</li>
              <li><strong>Tool Selection:</strong> Use ggplot2 in R or Tableau for dynamic and precise visualizations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Study exemplary figures from high-impact journals.</li>
              <li>Learn the basics of your chosen visualization tool through tutorials.</li>
              <li>Create a figure that summarizes your dataset effectively.</li>
              <li>Refine your visualization to ensure clarity and accuracy.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Effective data visualization enhances the impact and credibility of your research findings.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week2-data-visualization"
        },
        {
          title: "2.5 Quiz: Interpreting Regression Outputs with Interaction Terms",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Statistical Interpretation</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your ability to interpret regression outputs that include interaction terms.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Examine a sample regression output featuring interaction terms.</li>
              <li>Identify the meaning of the interaction coefficient.</li>
              <li>Write a brief interpretation of how the interaction term modifies the effect of independent variables.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Interaction terms reveal that the effect of one independent variable is influenced by the level of another.</p>
          `,
          quiz: {
            question: "In a regression model with an interaction term, what does a significant interaction indicate?",
            options: [
              "No effect of the independent variables.",
              "The effect of one independent variable depends on the level of another.",
              "A perfect linear relationship among variables.",
              "The model is overfit."
            ],
            correctAnswer: 1
          }
        },
        {
          title: "2.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>First Primary Paper Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The first primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/forms/d/15WC0Dnk3w0uXmHbGSarU1E1EQWtcDKg4J_vWAsaSdcU/edit#:~:text=https%3A//docs.google.com/document/d/1NylLZ3z%2DgtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report / Publications Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1gcb2QrzsQdIWVkULTIWrBDFx_1A8GBd_vxERKSNz7RI/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1Oa-8nCDHAYwBGZqPLE1gJhZ1JhKDJQfk3t_4Ojkf0q4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Checklist And Guide</a></li>
                </ul>
              </li>
            </ul>
          `,
        }
      ],
    },
    
    
    
    // Week 3
    {
      title: "Week 3: Qualitative Depth & Thematic Sophistication",
      chapters: [
        {
          title: "3.1 Ethnographic Excellence",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Ethnographic Excellence</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop a deep understanding of ethnographic research through thick description, reflexivity, and detailed field notes (e.g., using NVivo).</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Thick Description:</strong> Provide rich, contextual details that capture the complexity of social phenomena.</li>
              <li><strong>Reflexivity:</strong> Reflect on your own biases and document how they may influence your observations.</li>
              <li><strong>Field Notes:</strong> Systematically record observations to support in-depth qualitative analysis.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Examine exemplary ethnographic studies to observe effective thick description.</li>
              <li>Practice taking detailed field notes during a mock observation session.</li>
              <li>Reflect on your own biases and record them as part of your reflexivity notes.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Consistent and reflective field notes are essential for credible qualitative analysis.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourEthnographyDetailsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-ethnography"
        },
        {
          title: "3.2 Interview Mastery",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Mastering Qualitative Interviews</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn advanced qualitative interviewing techniques, including phenomenological interviewing, laddering, and ensuring intercoder reliability.</p>
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Phenomenological Interviewing:</strong> Focus on capturing participants’ lived experiences.</li>
              <li><strong>Laddering Techniques:</strong> Use successive probing questions to uncover deeper insights.</li>
              <li><strong>Intercoder Reliability:</strong> Calibrate your coding with peers for consistent analysis.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Conduct practice interviews using open-ended questions.</li>
              <li>Apply laddering techniques by asking “why” after each response.</li>
              <li>Discuss your coding decisions with peers to ensure consistency.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Effective interviewing relies on active listening and probing for detailed responses.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourInterviewDetailsURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-interviews"
        },
        {
          title: "3.3 Thematic Analysis",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Thematic Analysis & Coding</h2>
            <p class="mt-4"><strong>Objective:</strong> Master the process of coding qualitative data by developing a codebook, applying axial coding, and conducting member checking.</p>
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Codebook Development:</strong> Create a systematic guide for coding your data.</li>
              <li><strong>Axial Coding:</strong> Organize related codes into broader themes.</li>
              <li><strong>Member Checking:</strong> Validate your findings by seeking feedback from study participants.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Start with open coding on a raw interview transcript.</li>
              <li>Develop an initial codebook with definitions and examples.</li>
              <li>Apply axial coding to consolidate similar codes into themes.</li>
              <li>Share your coded data with participants for validation.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A rigorous thematic analysis enhances both the validity and reliability of your qualitative research findings.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourThematicAnalysisURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-thematic-analysis"
        },
        {
          title: "3.4 Mixed-Methods Triangulation",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Integrating Quantitative & Qualitative Data</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to enhance the depth of your research by integrating quantitative and qualitative data through triangulation.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Triangulation:</strong> Validate findings by comparing multiple data sources and methods.</li>
              <li>Use integration matrices to map converging and diverging data.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Collect both quantitative and qualitative data relevant to your research.</li>
              <li>Create a matrix to compare findings across data sources.</li>
              <li>Analyze the matrix to draw comprehensive conclusions from multiple perspectives.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Triangulation strengthens the credibility of your research by ensuring your findings are supported by diverse evidence.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourTriangulationURL" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week3-triangulation"
        },
        {
          title: "3.5 Quiz: Coding Raw Interview Transcripts for Emergent Themes",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Qualitative Coding Challenge</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your ability to code raw interview transcripts and identify emergent themes.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review a provided raw interview transcript.</li>
              <li>Assign codes to key phrases and statements that reveal underlying themes.</li>
              <li>Write a brief interpretation of the emergent themes based on your coding.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Look for recurring patterns and significant insights that highlight the depth of the participant's experience.</p>
          `,
          quiz: {
            question: "In qualitative research, what is the primary purpose of coding?",
            options: [
              "To assign numerical values for statistical analysis.",
              "To organize and categorize data into meaningful themes.",
              "To automatically generate analysis algorithms.",
              "To translate qualitative data into quantitative measures."
            ],
            correctAnswer: 1
          }
        },
        {
          title: "3.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>First Primary Paper Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The first primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/forms/d/15WC0Dnk3w0uXmHbGSarU1E1EQWtcDKg4J_vWAsaSdcU/edit#:~:text=https%3A//docs.google.com/document/d/1NylLZ3z%2DgtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The second primary article assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report / Publications Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>The assignment is due on <strong>3/1, 4/1, 5/1</strong> (due online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1gcb2QrzsQdIWVkULTIWrBDFx_1A8GBd_vxERKSNz7RI/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1Oa-8nCDHAYwBGZqPLE1gJhZ1JhKDJQfk3t_4Ojkf0q4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Checklist And Guide</a></li>
                </ul>
              </li>
            </ul>
          `,
        }
      ],
    },
    
    
    
    // Week 4
    {
      title: "Week 4: Analytic Peer Review & Replication",
      chapters: [
        {
          title: "4.1 Critical Appraisal",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Critical Appraisal of Research Studies</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn to evaluate research studies using established guidelines like CONSORT for trials and STROBE for observational studies.</p>
            <h3 class="text-xl font-semibold mt-6">Key Frameworks:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>CONSORT Guidelines:</strong> Ensure clear and complete reporting in randomized controlled trials.</li>
              <li><strong>STROBE Guidelines:</strong> Enhance transparency in observational studies.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the CONSORT and STROBE checklists.</li>
              <li>Examine published articles adhering to these guidelines.</li>
              <li>Practice critiquing a sample study by assessing its compliance with each checklist item.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A systematic appraisal ensures that you capture all aspects of study quality.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional critical appraisal details.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-critical-appraisal"
        },
        {
          title: "4.2 Reproducibility Crisis",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Addressing the Reproducibility Crisis</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore strategies to enhance reproducibility through pre-registration, OSF workflows, and FAIR data principles.</p>
            <h3 class="text-xl font-semibold mt-6">Key Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Pre-registration:</strong> Document your study design and analysis plan before data collection.</li>
              <li><strong>OSF Workflows:</strong> Use the Open Science Framework for transparent research processes.</li>
              <li><strong>FAIR Principles:</strong> Ensure your data is Findable, Accessible, Interoperable, and Reusable.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Learn how to pre-register your study on platforms like OSF.</li>
              <li>Examine examples of transparent workflows.</li>
              <li>Discuss how FAIR data practices enhance reproducibility.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Embracing reproducibility strengthens both the ethical and scientific integrity of your research.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional reproducibility guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-reproducibility"
        },
        {
          title: "4.3 Peer Review Simulation",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Simulating Peer Review</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a simulated peer review process modeled after high-impact journals like NEJM.</p>
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Critically review a sample manuscript using a structured checklist.</li>
              <li>Participate in dual-reviewer calibration to ensure consistent evaluation.</li>
              <li>Identify strengths and weaknesses in research design and methodology.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Examine a NEJM-style manuscript provided in your materials.</li>
              <li>Use the CONSORT/STROBE checklist to guide your critique.</li>
              <li>Discuss your findings with a peer to calibrate your review.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Collaborative peer review refines your critical appraisal skills and prepares you for real-world academic evaluation.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional peer review simulation details.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-peer-review-simulation"
        },
        {
          title: "4.4 Grant Panel Roleplay",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Grant Proposal Review Simulation</h2>
            <p class="mt-4"><strong>Objective:</strong> Experience the role of a grant panel member by critically reviewing an NSF-style proposal with a focus on budget justification.</p>
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Examine an NSF-style proposal with detailed budget sections.</li>
              <li>Critique the methodology and budget justification for clarity and feasibility.</li>
              <li>Engage in roleplay sessions with peers to simulate a grant panel discussion.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the sample proposal provided in your materials.</li>
              <li>Analyze the budget section for realism and justification.</li>
              <li>Discuss potential improvements and how the proposal aligns with funding priorities.</li>
              <li>Participate in a simulated discussion as a grant reviewer.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A detailed and critical budget analysis is key to ensuring the feasibility and impact of a research proposal.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional grant roleplay guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week4-grant-panel-roleplay"
        },
        {
          title: "4.5 Quiz: Red Teaming a Methodology Section",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Methodology Red Teaming</h2>
            <p class="mt-4"><strong>Objective:</strong> Critically assess a provided methodology section to identify validity threats.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Read the sample methodology section with intentional flaws.</li>
              <li>Identify potential validity threats such as uncontrolled confounding or measurement errors.</li>
              <li>Write a brief critique outlining the flaws and suggesting improvements.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Focus on clarity, reproducibility, and ethical rigor when evaluating methodology sections.</p>
          `,
          quiz: {
            question: "Which of the following is a common validity threat when failing to control for confounding variables?",
            options: [
              "Over-sampling the target population",
              "Failure to adjust for external influences on the outcome",
              "Excessive data transparency",
              "Rigorous use of control groups"
            ],
            correctAnswer: 1
          }
        },
        {
          title: "4.6 Assignments",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Assignments & Due Dates</h2>
            <h3 class="text-xl font-semibold mt-6">Assignments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>
                <strong>First Primary Paper Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/forms/d/15WC0Dnk3w0uXmHbGSarU1E1EQWtcDKg4J_vWAsaSdcU/edit#:~:text=https%3A//docs.google.com/document/d/1NylLZ3z%2DgtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Primary Paper Written Example One</a></li>
                </ul>
              </li>
              <li>
                <strong>Second Primary Paper Review Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Due on <strong>3/1, 4/1, 5/1</strong> (submit online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1NylLZ3z-gtNnSLKVMWnE8yiyO6XeUzyW/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Second Primary Paper Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Second Primary Paper Written Example Two</a></li>
                </ul>
              </li>
              <li>
                <strong>Lab Report / Publications Assessment:</strong>
                <ul class="list-disc list-inside ml-6 mt-1">
                  <li>Due on <strong>3/15, 4/15, 5/15</strong> (submit online - <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</li>
                  <li><a href="https://docs.google.com/document/d/1gcb2QrzsQdIWVkULTIWrBDFx_1A8GBd_vxERKSNz7RI/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Review Instructions</a></li>
                  <li><a href="https://docs.google.com/document/d/1KtL6lD9afCsoKjCukEkAdA5CqbQ61pXlQv0A_wxlLKc/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Example One</a></li>
                  <li><a href="https://docs.google.com/document/d/1kmFjSnXmEVKCmZDq61NeAGuEdEnQc0--/edit?usp=sharing&ouid=110583200227002215775&rtpof=true&sd=true" class="text-blue-500 underline" target="_blank">Lab Report Example Two</a></li>
                  <li><a href="https://docs.google.com/document/d/1Oa-8nCDHAYwBGZqPLE1gJhZ1JhKDJQfk3t_4Ojkf0q4/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Lab Report Checklist And Guide</a></li>
                </ul>
              </li>
            </ul>
          `,
        }
      ],
    },
    
    

    
    // Week 5
    {
      title: "Week 5: Capstone Defense & Translational Impact",
      chapters: [
        {
          title: "5.1 Final Project Workshop",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Final Project Workshop</h2>
            <p class="mt-4"><strong>Objective:</strong> Refine your full research protocol through iterative peer feedback.</p>
            <h3 class="text-xl font-semibold mt-6">Workshop Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Develop a comprehensive draft of your research protocol, including design, methodology, and ethical considerations.</li>
              <li>Engage in small-group sessions to provide and receive structured feedback.</li>
              <li>Use evaluation tools (e.g., CONSORT/STROBE checklists) to ensure methodological rigor.</li>
              <li>Revise your protocol iteratively based on feedback.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Due Dates & Submission:</h3>
            <p class="mt-2"><strong>Deadline:</strong> Your draft is due on <strong>3/15, 4/15, and 5/15</strong> via the online submission portal (<a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</p>
            <p class="mt-4"><em>Tip:</em> Document every revision to demonstrate the evolution of your research protocol.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalProjectGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional project workshop guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-project-workshop"
        },
        {
          title: "5.2 Journal Club",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Journal Club Critique</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a live critique of high-impact journal articles (e.g., Nature/Science) with a faculty discussant.</p>
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Pre-read a selected high-impact paper and prepare a detailed critique.</li>
              <li>Identify strengths and weaknesses in research design, methodology, and reporting.</li>
              <li>Participate in a live discussion with peers and a faculty discussant to refine your critique.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Due Dates & Submission:</h3>
            <p class="mt-2"><strong>Deadline:</strong> Journal club critiques are due on <strong>3/1, 4/1, and 5/1</strong> via the online portal (<a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</p>
            <p class="mt-4"><em>Tip:</em> Prepare your critique thoroughly to engage effectively during the live session.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourJournalClubGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional journal club guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-journal-club"
        },
        {
          title: "5.3 Translational Pitch",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Translational Pitch</h2>
            <p class="mt-4"><strong>Objective:</strong> Present your research findings to a mock panel of stakeholders (clinicians, policymakers) to demonstrate the real-world impact of your study.</p>
            <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Create a concise pitch deck (5-10 slides) that outlines your research question, methodology, key findings, and translational implications.</li>
              <li>Practice delivering your pitch and anticipate critical questions regarding the practical applications of your research.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Due Dates & Submission:</h3>
            <p class="mt-2"><strong>Deadline:</strong> Translational pitch slides and presentation are due on <strong>3/15, 4/15, and 5/15</strong> (submit online via <a href="https://forms.gle/5F8DtcDvEFMCbx9u8" class="text-blue-500 underline" target="_blank">Click Here</a>).</p>
            <p class="mt-4"><em>Tip:</em> A compelling pitch should clearly communicate both data and its broader impact.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourTranslationalPitchGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional pitch guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-translational-pitch"
        },
        {
          title: "5.4 Ivy League Viva",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Ivy League Viva Defense</h2>
            <p class="mt-4"><strong>Objective:</strong> Defend your research methodology before a panel by addressing counterfactuals and potential critiques.</p>
            <h3 class="text-xl font-semibold mt-6">Key Aspects:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Prepare a detailed explanation of your research design, methodology, and ethical considerations.</li>
              <li>Anticipate and respond to potential counterarguments and weaknesses in your protocol.</li>
              <li>Participate in a viva-style defense with faculty and peer reviewers.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review your full research protocol and note areas of potential vulnerability.</li>
              <li>Develop clear, concise responses to common critiques.</li>
              <li>Engage in mock viva sessions with peers to refine your defense strategy.</li>
              <li>Incorporate feedback to strengthen your final presentation.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-prepared defense showcases your deep understanding of your research and your ability to critically evaluate your own work.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourVivaGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional viva defense guidelines.
              </a>
            </p>
          `,
          //videoUrl: "https://example.com/week5-viva-defense"
        },
        {
          title: "5.5 Quiz: Ethical Dilemma Resolution",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Ethical Dilemma Resolution</h2>
            <p class="mt-4"><strong>Objective:</strong> Assess your ability to resolve ethical dilemmas encountered in research, such as handling data anomalies in clinical trials.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review a provided case scenario involving significant data anomalies.</li>
              <li>Identify the ethical challenges presented in the scenario.</li>
              <li>Write a brief explanation of the most ethical course of action and justify your decision.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Prioritize transparency, integrity, and participant welfare when addressing ethical dilemmas.</p>
          `,
          quiz: {
            question: "If you discover significant data anomalies in a clinical trial, what is the most ethical course of action?",
            options: [
              "Ignore the anomalies to preserve the study's outcomes.",
              "Report the anomalies to the ethics board and adjust the analysis accordingly.",
              "Alter the data to remove the anomalies.",
              "Discredit the entire study without further investigation."
            ],
            correctAnswer: 1
          }
        }
      ],
    }
    
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function ResearchCoursePage() {
  return <CoursePage courseData={ResearchCourseData} />;
}
