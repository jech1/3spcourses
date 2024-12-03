"use client";

import CoursePage from "../../../../components/CoursePage";
import { CourseData } from "../../../../types/courseTypes";

// Complete course data with all weeks and chapters
const ResearchCourseData: CourseData = {
  title: "Research Methods & Analytics",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to Research Methods",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Welcome to Research Methods & Analytics</h2>
            <p class="mt-4">Research methods are the backbone of any scientific inquiry. This week, we'll explore the fundamental concepts that underpin effective research practices.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Week 1:</strong> Introduction to Research Methods</li>
              <li><strong>Week 2:</strong> Formulating Research Questions and Hypotheses</li>
              <li><strong>Week 3:</strong> Quantitative Research Methods</li>
              <li><strong>Week 4:</strong> Qualitative Research Methods</li>
              <li><strong>Week 5:</strong> Mixed-Methods Research</li>
              <li><strong>Week 6:</strong> Data Collection and Analysis</li>
              <li><strong>Week 7:</strong> Reporting and Presenting Research Findings</li>
            </ul>
            <div class="mt-6">
              <img src="/researchlogo3sp.png" alt="Course structure diagram" width="500" height="300" />
            </div>
          `,
          videoUrl: "https://example.com/week1-intro",
        },
        {
          title: "Understanding the Purpose of Research Methods",
          content: `
            <h2 class="text-2xl font-bold">The Purpose of Research Methods</h2>
            <p class="mt-4">Research methods are essential for systematically investigating questions and generating reliable knowledge. They provide a structured approach to collecting and analyzing data.</p>
            <h3 class="text-xl font-semibold mt-6">Key Purposes:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>To answer specific research questions.</li>
              <li>To test hypotheses and theories.</li>
              <li>To ensure the validity and reliability of findings.</li>
              <li>To facilitate replication and verification of results.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Types of Research:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Basic Research:</strong> Aims to expand knowledge without immediate practical applications.</li>
              <li><strong>Applied Research:</strong> Seeks to solve practical problems.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-purpose",
        },
        {
          title: "Key Concepts: Reliability, Validity, and Ethics",
          content: `
            <h2 class="text-2xl font-bold">Essential Research Concepts</h2>
            <p class="mt-4">Understanding reliability, validity, and ethics is crucial for conducting robust and ethical research.</p>
            <h3 class="text-xl font-semibold mt-6">Reliability:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Definition:</strong> The consistency of a measurement tool.</li>
              <li><strong>Types:</strong> Test-retest reliability, inter-rater reliability, internal consistency.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Validity:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Definition:</strong> The extent to which a tool measures what it is intended to measure.</li>
              <li><strong>Types:</strong> Content validity, construct validity, criterion validity.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Ethics in Research:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Informed Consent:</strong> Participants must be fully informed about the study and consent to participate.</li>
              <li><strong>Confidentiality:</strong> Protecting the privacy of participants.</li>
              <li><strong>Avoiding Harm:</strong> Ensuring that research does not cause physical or psychological harm.</li>
              <li><strong>Integrity:</strong> Maintaining honesty and transparency in conducting and reporting research.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-key-concepts",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to Research Methods</h2>
            <p class="mt-4">In this week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The fundamental purpose and importance of research methods.</li>
              <li>Different types of research and their applications.</li>
              <li>Key concepts including reliability, validity, and ethics in research.</li>
            </ul>
            <p class="mt-4">These foundational concepts will support your understanding as we delve deeper into specific research methodologies in the coming weeks.</p>
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
              "Which of the following best describes validity in research?",
            options: [
              "The consistency of a measurement tool.",
              "The extent to which a tool measures what it is intended to measure.",
              "The ethical considerations in conducting research.",
              "The ability to replicate study results.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 2
    {
      title: "Week 2: Formulating Research Questions and Hypotheses",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">The Foundation of Scientific Inquiry</h2>
            <p class="mt-4">Research questions and hypotheses are central to the scientific method. They define the focus of your study and guide your research design and analysis.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand how to identify research gaps.</li>
              <li>Learn how to formulate clear research questions.</li>
              <li>Develop testable hypotheses.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-intro",
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
          videoUrl: "https://example.com/week2-identifying-gaps",
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
          videoUrl: "https://example.com/week2-writing-hypotheses",
        },
        {
          title: "Responsive Design Principles",
          content: `
            <h2 class="text-2xl font-bold">Note: This Chapter May Be Misplaced</h2>
            <p class="mt-4">It seems there might be an error in the chapter listing. "Responsive Design Principles" typically pertains to web design, which may not align with the context of research methods. If this chapter is intended, please provide additional details or confirm its inclusion.</p>
          `,
          videoUrl: "https://example.com/week2-responsive-design",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 2 Summary: Formulating Research Questions and Hypotheses</h2>
            <p class="mt-4">This week, we've focused on:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Identifying research gaps through literature review.</li>
              <li>Formulating clear and focused research questions.</li>
              <li>Writing testable hypotheses.</li>
            </ul>
            <p class="mt-4">These skills are essential for designing a solid research study and contributing meaningful knowledge to your field.</p>
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
              "Which of the following is a characteristic of a good research question?",
            options: [
              "It is broad and general.",
              "It is specific and measurable.",
              "It is based on personal opinion.",
              "It cannot be tested.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 3
    {
      title: "Week 3: Quantitative Research Methods",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Exploring Quantitative Research</h2>
            <p class="mt-4">Quantitative research involves the collection and analysis of numerical data to identify patterns, relationships, and trends.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the principles of quantitative research.</li>
              <li>Learn about different quantitative research designs.</li>
              <li>Explore data collection and analysis techniques.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-intro",
        },
        {
          title: "Experimental Design and Control",
          content: `
            <h2 class="text-2xl font-bold">Structuring Your Experiments</h2>
            <p class="mt-4">Experimental design is crucial for establishing cause-and-effect relationships in quantitative research.</p>
            <h3 class="text-xl font-semibold mt-6">Key Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Independent Variable (IV):</strong> The variable you manipulate.</li>
              <li><strong>Dependent Variable (DV):</strong> The variable you measure.</li>
              <li><strong>Control Variables:</strong> Variables kept constant to prevent confounding.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Types of Experimental Designs:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Between-Subjects Design:</strong> Different groups receive different treatments.</li>
              <li><strong>Within-Subjects Design:</strong> The same group receives all treatments.</li>
              <li><strong>Factorial Design:</strong> Examines the effects of two or more IVs simultaneously.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Randomization and Control:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Randomly assign participants to control for selection bias.</li>
              <li>Implement control groups to establish baseline measurements.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"To determine the effect of study environment on productivity, participants will be randomly assigned to either a quiet study room (IV) or a noisy study room (IV). Productivity (DV) will be measured by the number of tasks completed."</p>
          `,
          videoUrl: "https://example.com/week3-experimental-design",
        },
        {
          title: "Survey Design and Measurement",
          content: `
            <h2 class="text-2xl font-bold">Creating Effective Surveys</h2>
            <p class="mt-4">Surveys are a common tool in quantitative research for collecting data from participants.</p>
            <h3 class="text-xl font-semibold mt-6">Steps in Survey Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Define Objectives:</strong> Clearly state what you aim to measure.</li>
              <li><strong>Question Development:</strong> Craft clear, unbiased, and relevant questions.</li>
              <li><strong>Response Formats:</strong> Choose appropriate formats (e.g., Likert scales, multiple-choice).</li>
              <li><strong>Pilot Testing:</strong> Test the survey on a small group to identify issues.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Types of Questions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Closed-Ended:</strong> Provide specific response options.</li>
              <li><strong>Open-Ended:</strong> Allow participants to respond in their own words.</li>
              <li><strong>Likert Scale:</strong> Measure attitudes or opinions on a scale (e.g., 1-5).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Ensuring Reliability and Validity:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Reliability:</strong> Ensure consistency in responses.</li>
              <li><strong>Validity:</strong> Ensure the survey measures what it intends to measure.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Survey Question:</h3>
            <p class="mt-4">"On a scale of 1 to 5, how satisfied are you with your current study environment?"</p>
          `,
          videoUrl: "https://example.com/week3-survey-design",
        },
        {
          title: "Data Collection and Analysis Techniques",
          content: `
            <h2 class="text-2xl font-bold">Gathering and Interpreting Data</h2>
            <p class="mt-4">Effective data collection and analysis are critical for producing meaningful research findings.</p>
            <h3 class="text-xl font-semibold mt-6">Data Collection Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Surveys and Questionnaires:</strong> Gather large amounts of data efficiently.</li>
              <li><strong>Experiments:</strong> Manipulate variables to observe effects.</li>
              <li><strong>Observations:</strong> Record behaviors or phenomena as they occur.</li>
              <li><strong>Secondary Data:</strong> Utilize existing data from previous studies or databases.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Data Analysis Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Descriptive Statistics:</strong> Summarize data using means, medians, modes, and standard deviations.</li>
              <li><strong>Inferential Statistics:</strong> Make predictions or inferences about a population based on sample data.</li>
              <li><strong>Correlation Analysis:</strong> Assess the relationship between two variables.</li>
              <li><strong>Regression Analysis:</strong> Examine the relationship between dependent and independent variables.</li>
              <li><strong>ANOVA (Analysis of Variance):</strong> Compare means across multiple groups.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Using Statistical Software:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Software like SPSS, R, or Python can facilitate complex data analyses.</li>
              <li>Ensure proficiency in the chosen tool to perform accurate analyses.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"A Pearson correlation coefficient will be calculated to determine the relationship between study hours (IV) and exam scores (DV). An ANOVA will be conducted to compare exam scores across different study environment groups."</p>
          `,
          videoUrl: "https://example.com/week3-data-analysis",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 3 Summary: Quantitative Research Methods</h2>
            <p class="mt-4">This week, you've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The fundamentals of quantitative research and its importance.</li>
              <li>Various experimental designs and the role of control variables.</li>
              <li>Effective survey design and measurement techniques.</li>
              <li>Data collection methods and statistical analysis techniques.</li>
            </ul>
            <p class="mt-4">These concepts are essential for conducting rigorous and reliable quantitative research studies.</p>
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
              "Which statistical method is used to assess the relationship between two continuous variables?",
            options: [
              "ANOVA",
              "Chi-Square Test",
              "Pearson Correlation",
              "T-Test",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 4
    {
      title: "Week 4: Qualitative Research Methods",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Diving into Qualitative Research</h2>
            <p class="mt-4">Qualitative research focuses on understanding phenomena from a subjective, contextual, and in-depth perspective.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the principles of qualitative research.</li>
              <li>Learn about different qualitative research designs.</li>
              <li>Explore data collection and analysis techniques specific to qualitative methods.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-intro",
        },
        {
          title: "Case Study and Ethnography Approaches",
          content: `
            <h2 class="text-2xl font-bold">In-Depth Exploration of Contextual Phenomena</h2>
            <p class="mt-4">Case studies and ethnographies are qualitative research designs that provide comprehensive insights into specific contexts or groups.</p>
            <h3 class="text-xl font-semibold mt-6">Case Study:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Focuses on a single case or a small number of cases.</li>
              <li>Provides detailed analysis within its real-life context.</li>
              <li>Useful for exploring complex issues and generating hypotheses.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Ethnography:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Involves immersive observation of a culture or group.</li>
              <li>Aims to understand social interactions, behaviors, and perceptions.</li>
              <li>Often conducted over extended periods to gain deep insights.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"An ethnographic study of remote rural communities to understand the impact of digital technologies on daily life."</p>
            <h3 class="text-xl font-semibold mt-6">Advantages:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Provides rich, detailed data.</li>
              <li>Captures the complexity of human behavior.</li>
              <li>Allows for the exploration of new areas where little is known.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Challenges:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Time-consuming and resource-intensive.</li>
              <li>Potential for researcher bias.</li>
              <li>Difficulties in generalizing findings.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-case-study-ethnography",
        },
        {
          title: "Interview and Focus Group Techniques",
          content: `
            <h2 class="text-2xl font-bold">Gathering In-Depth Perspectives</h2>
            <p class="mt-4">Interviews and focus groups are primary data collection methods in qualitative research that provide deep insights into participants' thoughts and experiences.</p>
            <h3 class="text-xl font-semibold mt-6">Individual Interviews:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Conducted one-on-one with participants.</li>
              <li>Can be structured, semi-structured, or unstructured.</li>
              <li>Allows for exploring personal experiences and perspectives.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Focus Groups:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Conducted with a group of participants simultaneously.</li>
              <li>Encourages interaction and discussion among participants.</li>
              <li>Useful for exploring collective views and social dynamics.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Developing Effective Questions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use open-ended questions to elicit detailed responses.</li>
              <li>Avoid leading or biased questions.</li>
              <li>Ensure questions align with research objectives.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Interview Question:</h3>
            <p class="mt-4">"Can you describe your experience with using online collaboration tools in your daily work?"</p>
            <h3 class="text-xl font-semibold mt-6">Tips for Conducting Interviews and Focus Groups:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Establish rapport and create a comfortable environment.</li>
              <li>Be an active listener and avoid interrupting.</li>
              <li>Probe deeper when necessary to gain comprehensive insights.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-interview-focus-groups",
        },
        {
          title: "Analyzing Qualitative Data: Thematic Analysis",
          content: `
            <h2 class="text-2xl font-bold">Identifying Patterns and Themes</h2>
            <p class="mt-4">Thematic analysis is a method for identifying, analyzing, and reporting patterns (themes) within qualitative data.</p>
            <h3 class="text-xl font-semibold mt-6">Steps in Thematic Analysis:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Familiarization:</strong> Read and re-read the data to become intimately familiar with its content.</li>
              <li><strong>Generating Initial Codes:</strong> Systematically code interesting features of the data across the entire dataset.</li>
              <li><strong>Searching for Themes:</strong> Collate codes into potential themes, gathering all data relevant to each potential theme.</li>
              <li><strong>Reviewing Themes:</strong> Check if the themes work in relation to the coded extracts and the entire dataset.</li>
              <li><strong>Defining and Naming Themes:</strong> Refine the specifics of each theme and generate clear definitions and names.</li>
              <li><strong>Producing the Report:</strong> Select vivid, compelling extract examples and relate the analysis back to the research question and literature.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Example Themes:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Access to Technology:</strong> Participants discuss the availability and accessibility of digital tools.</li>
              <li><strong>Impact on Communication:</strong> Insights into how technology affects interpersonal interactions.</li>
              <li><strong>Challenges Faced:</strong> Barriers and difficulties encountered in using technology.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Tips for Effective Thematic Analysis:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Be open to unexpected themes emerging from the data.</li>
              <li>Ensure themes are distinct and not overly overlapping.</li>
              <li>Maintain a balance between identifying patterns and honoring individual experiences.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-thematic-analysis",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 4 Summary: Qualitative Research Methods</h2>
            <p class="mt-4">This week, you've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The principles and importance of qualitative research.</li>
              <li>Diverse qualitative research designs like case studies and ethnographies.</li>
              <li>Effective data collection methods including interviews and focus groups.</li>
              <li>Techniques for analyzing qualitative data using thematic analysis.</li>
            </ul>
            <p class="mt-4">These methodologies provide deep insights and understanding of complex phenomena in various contexts.</p>
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
              "Which qualitative research design involves immersive observation of a culture or group?",
            options: [
              "Case Study",
              "Ethnography",
              "Grounded Theory",
              "Phenomenology",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Mixed-Methods Research",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Integrating Quantitative and Qualitative Approaches</h2>
            <p class="mt-4">Mixed-methods research combines quantitative and qualitative approaches to provide a comprehensive understanding of research problems.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the rationale behind mixed-methods research.</li>
              <li>Learn about different mixed-methods designs.</li>
              <li>Explore strategies for integrating quantitative and qualitative data.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-intro",
        },
        {
          title: "Types of Mixed-Methods Designs",
          content: `
            <h2 class="text-2xl font-bold">Structuring Your Research Approach</h2>
            <p class="mt-4">Mixed-methods research can be structured in various ways to best address the research questions.</p>
            <h3 class="text-xl font-semibold mt-6">1. Convergent Parallel Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Quantitative and qualitative data are collected simultaneously.</li>
              <li>Data are analyzed separately and then merged for interpretation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">2. Explanatory Sequential Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Quantitative data are collected and analyzed first.</li>
              <li>Qualitative data are collected subsequently to explain or elaborate on the quantitative findings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">3. Exploratory Sequential Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Qualitative data are collected and analyzed first.</li>
              <li>Quantitative data are collected subsequently to test or generalize the qualitative findings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">4. Embedded Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>One data type is nested within a larger design.</li>
              <li>Used when one data type provides supplemental information to the other.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"A convergent parallel design will be used to collect survey data and conduct focus groups simultaneously to understand the impact of remote work on employee productivity."</p>
          `,
          videoUrl: "https://example.com/week5-mixed-methods-designs",
        },
        {
          title: "Integrating Quantitative and Qualitative Data",
          content: `
            <h2 class="text-2xl font-bold">Merging Data for Comprehensive Insights</h2>
            <p class="mt-4">Integration is a critical step in mixed-methods research, ensuring that quantitative and qualitative data complement each other.</p>
            <h3 class="text-xl font-semibold mt-6">Techniques for Data Integration:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Data Transformation:</strong> Convert qualitative data into quantitative formats or vice versa.</li>
              <li><strong>Joint Displays:</strong> Use tables or figures to juxtapose quantitative and qualitative findings.</li>
              <li><strong>Interpretive Integration:</strong> Synthesize findings narratively to provide a unified interpretation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Challenges:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensuring methodological compatibility.</li>
              <li>Managing the complexity of data merging.</li>
              <li>Maintaining coherence in the integrated findings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"The survey results indicated a positive correlation between remote work and job satisfaction. Focus group discussions revealed that flexible schedules and reduced commute times were key factors contributing to this satisfaction."</p>
          `,
          videoUrl: "https://example.com/week5-data-integration",
        },
        {
          title: "Benefits and Limitations of Mixed-Methods Research",
          content: `
            <h2 class="text-2xl font-bold">Evaluating the Approach</h2>
            <p class="mt-4">While mixed-methods research offers comprehensive insights, it's essential to understand its advantages and potential drawbacks.</p>
            <h3 class="text-xl font-semibold mt-6">Benefits:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Provides a more complete understanding by combining numerical trends with in-depth perspectives.</li>
              <li>Enhances the validity of results through triangulation.</li>
              <li>Allows for exploration of complex research questions.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Limitations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Time-consuming and resource-intensive.</li>
              <li>Requires proficiency in both quantitative and qualitative methods.</li>
              <li>Complexity in data integration and analysis.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">When to Use Mixed-Methods:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>When addressing multifaceted research questions.</li>
              <li>When needing to validate qualitative findings with quantitative data or vice versa.</li>
              <li>When exploring new areas where both numerical data and in-depth insights are valuable.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"To evaluate the effectiveness of a new teaching method, quantitative data from test scores will be complemented with qualitative feedback from student interviews."</p>
          `,
          videoUrl: "https://example.com/week5-benefits-limitations",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 5 Summary: Mixed-Methods Research</h2>
            <p class="mt-4">This week, you've learned about:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The rationale and benefits of integrating quantitative and qualitative approaches.</li>
              <li>Various mixed-methods research designs and their applications.</li>
              <li>Techniques for effectively merging and interpreting diverse data types.</li>
              <li>The advantages and challenges associated with mixed-methods research.</li>
            </ul>
            <p class="mt-4">Mastering mixed-methods approaches allows for a more nuanced and comprehensive exploration of research questions.</p>
          `,
          videoUrl: "https://example.com/week5-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week5-quiz",
          quiz: {
            question:
              "Which mixed-methods design involves collecting qualitative data after quantitative data to explain the quantitative findings?",
            options: [
              "Convergent Parallel Design",
              "Explanatory Sequential Design",
              "Exploratory Sequential Design",
              "Embedded Design",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 6
    {
      title: "Week 6: Data Collection and Analysis",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Gathering and Analyzing Research Data</h2>
            <p class="mt-4">Effective data collection and analysis are pivotal for generating valid and reliable research findings.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand various data collection methods.</li>
              <li>Learn about data management and organization.</li>
              <li>Explore statistical and analytical techniques for data analysis.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week6-intro",
        },
        {
          title:
            "Data Collection Methods: Surveys, Interviews, and Observations",
          content: `
            <h2 class="text-2xl font-bold">Choosing the Right Method</h2>
            <p class="mt-4">Selecting appropriate data collection methods is essential to address your research questions effectively.</p>
            <h3 class="text-xl font-semibold mt-6">1. Surveys:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Efficient for collecting data from large populations.</li>
              <li>Can include various question types (e.g., Likert scales, multiple-choice).</li>
              <li>Useful for gathering standardized information.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">2. Interviews:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Provide in-depth insights into participants' experiences and perspectives.</li>
              <li>Can be structured, semi-structured, or unstructured.</li>
              <li>Allow for exploration of complex topics.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">3. Observations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Involve systematically watching and recording behaviors or events.</li>
              <li>Can be participant or non-participant observations.</li>
              <li>Useful for studying interactions in natural settings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">4. Secondary Data:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Utilize existing datasets from previous research or databases.</li>
              <li>Cost-effective and time-saving.</li>
              <li>Important to assess the relevance and quality of secondary data.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"A survey will be distributed to 500 university students to assess their study habits and academic performance. Additionally, in-depth interviews will be conducted with 20 students to explore the challenges they face."</p>
          `,
          videoUrl: "https://example.com/week6-data-collection-methods",
        },
        {
          title: "Data Management and Organization",
          content: `
            <h2 class="text-2xl font-bold">Keeping Your Data Organized</h2>
            <p class="mt-4">Proper data management ensures that your data remains accessible, secure, and ready for analysis.</p>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Data Storage:</strong> Use reliable storage solutions like cloud services or external hard drives.</li>
              <li><strong>Backup Regularly:</strong> Prevent data loss by maintaining multiple copies of your data.</li>
              <li><strong>Organize Files:</strong> Create a clear and consistent folder structure with descriptive file names.</li>
              <li><strong>Data Cleaning:</strong> Remove duplicates, correct errors, and handle missing data before analysis.</li>
              <li><strong>Documentation:</strong> Keep detailed records of data collection procedures, coding schemes, and analysis steps.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Using Data Management Tools:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Software like Excel, SPSS, R, or NVivo can aid in data organization and analysis.</li>
              <li>Reference management tools (e.g., Zotero, Mendeley) help in organizing sources and citations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Ethical Considerations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensure data privacy and confidentiality, especially when handling sensitive information.</li>
              <li>Follow institutional guidelines and legal requirements for data storage and sharing.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"All survey responses will be stored in encrypted files on a secure server with access restricted to the research team. Backup copies will be maintained daily to prevent data loss."</p>
          `,
          videoUrl: "https://example.com/week6-data-management",
        },
        {
          title: "Statistical Analysis Techniques",
          content: `
            <h2 class="text-2xl font-bold">Analyzing Your Data Effectively</h2>
            <p class="mt-4">Selecting appropriate statistical techniques is crucial for accurately interpreting your quantitative data.</p>
            <h3 class="text-xl font-semibold mt-6">Descriptive Statistics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Mean, Median, Mode:</strong> Measure central tendency.</li>
              <li><strong>Standard Deviation:</strong> Measure data dispersion.</li>
              <li><strong>Frequency Distributions:</strong> Show how often each value occurs.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Inferential Statistics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>T-Tests:</strong> Compare means between two groups.</li>
              <li><strong>ANOVA (Analysis of Variance):</strong> Compare means among three or more groups.</li>
              <li><strong>Correlation Analysis:</strong> Assess the relationship between two variables.</li>
              <li><strong>Regression Analysis:</strong> Examine the predictive relationship between variables.</li>
              <li><strong>Chi-Square Test:</strong> Test the association between categorical variables.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Using Statistical Software:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Software like SPSS, R, or Python's statistical libraries can perform complex analyses.</li>
              <li>Ensure accurate data entry and coding to facilitate correct analyses.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"A multiple regression analysis will be conducted to determine the impact of study time, attendance, and extracurricular activities on academic performance."</p>
          `,
          videoUrl: "https://example.com/week6-statistical-analysis",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 6 Summary: Data Collection and Analysis</h2>
            <p class="mt-4">This week, you've delved into:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Various data collection methods including surveys, interviews, and observations.</li>
              <li>Best practices for data management and organization.</li>
              <li>Statistical and analytical techniques for quantitative data analysis.</li>
            </ul>
            <p class="mt-4">Mastering these areas ensures that your research data is both robust and insightful, laying the groundwork for meaningful findings.</p>
          `,
          videoUrl: "https://example.com/week6-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
          `,
          videoUrl: "https://example.com/week6-quiz",
          quiz: {
            question:
              "Which statistical test is used to compare the means of three or more groups?",
            options: [
              "T-Test",
              "ANOVA",
              "Chi-Square Test",
              "Pearson Correlation",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 7
    {
      title: "Week 7: Reporting and Presenting Research Findings",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Communicating Your Research Effectively</h2>
            <p class="mt-4">Reporting and presenting research findings is the final step in the research process, ensuring that your work contributes to the broader academic community.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Learn how to structure research reports and papers.</li>
              <li>Understand best practices for presenting data and findings.</li>
              <li>Explore strategies for effective oral presentations.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week7-intro",
        },
        {
          title: "Structuring Research Reports and Academic Papers",
          content: `
            <h2 class="text-2xl font-bold">Organizing Your Written Work</h2>
            <p class="mt-4">A well-structured research report or academic paper enhances readability and ensures that your arguments are presented logically.</p>
            <h3 class="text-xl font-semibold mt-6">Typical Structure:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Title Page:</strong> Includes the title, author(s), affiliation, and date.</li>
              <li><strong>Abstract:</strong> A brief summary of the research, including objectives, methods, results, and conclusions.</li>
              <li><strong>Introduction:</strong> Presents the research question, background, and objectives.</li>
              <li><strong>Literature Review:</strong> Summarizes existing research related to the topic.</li>
              <li><strong>Methodology:</strong> Details the research design, data collection, and analysis methods.</li>
              <li><strong>Results:</strong> Presents the findings of the study.</li>
              <li><strong>Discussion:</strong> Interprets the results, discusses implications, and acknowledges limitations.</li>
              <li><strong>Conclusion:</strong> Summarizes the main findings and suggests future research directions.</li>
              <li><strong>References:</strong> Lists all sources cited in the paper.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Writing Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Maintain a clear and logical flow between sections.</li>
              <li>Use headings and subheadings to guide the reader.</li>
              <li>Ensure consistency in terminology and formatting.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Structure:</h3>
            <p class="mt-4"><strong>I. Introduction</strong></p>
            <ul class="list-disc list-inside mt-2">
              <li>Background of the study</li>
              <li>Research question and objectives</li>
            </ul>
            <p class="mt-4"><strong>II. Literature Review</strong></p>
            <ul class="list-disc list-inside mt-2">
              <li>Summary of existing research</li>
              <li>Identification of research gaps</li>
            </ul>
            <p class="mt-4"><strong>III. Methodology</strong></p>
            <ul class="list-disc list-inside mt-2">
              <li>Research design and approach</li>
              <li>Data collection methods</li>
              <li>Data analysis procedures</li>
            </ul>
          `,
          videoUrl: "https://example.com/week7-structuring-reports",
        },
        {
          title: "Presenting Data and Findings Effectively",
          content: `
            <h2 class="text-2xl font-bold">Visualizing Your Results</h2>
            <p class="mt-4">Effective presentation of data enhances the clarity and impact of your findings.</p>
            <h3 class="text-xl font-semibold mt-6">Data Visualization Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Tables:</strong> Organize numerical data for easy comparison.</li>
              <li><strong>Graphs and Charts:</strong> Visual representations like bar graphs, line charts, and pie charts illustrate trends and relationships.</li>
              <li><strong>Figures:</strong> Include images, diagrams, or models to depict complex information.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensure all visuals are clearly labeled and referenced in the text.</li>
              <li>Keep designs simple and avoid clutter.</li>
              <li>Use consistent formatting and color schemes.</li>
              <li>Provide descriptive captions that explain the content of the visual.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Interpreting Findings:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Present findings objectively without bias.</li>
              <li>Highlight significant patterns, trends, and relationships.</li>
              <li>Link the findings back to the research questions and objectives.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"Figure 2 illustrates the positive correlation between study hours and exam scores, indicating that increased study time is associated with higher academic performance."</p>
          `,
          videoUrl: "https://example.com/week7-presenting-data",
        },
        {
          title: "Effective Oral and Poster Presentations",
          content: `
            <h2 class="text-2xl font-bold">Communicating Research Visually and Verbally</h2>
            <p class="mt-4">Oral and poster presentations are essential for sharing your research with the academic community.</p>
            <h3 class="text-xl font-semibold mt-6">Oral Presentations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Structure:</strong> Introduction, methodology, results, discussion, and conclusion.</li>
              <li><strong>Visual Aids:</strong> Use slides to support your speech with visuals like charts and images.</li>
              <li><strong>Delivery:</strong> Maintain eye contact, use clear and concise language, and engage the audience.</li>
              <li><strong>Time Management:</strong> Adhere to the allotted time to cover all key points effectively.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Poster Presentations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Design:</strong> Create a visually appealing layout with clear headings and organized sections.</li>
              <li><strong>Content:</strong> Include essential elements like introduction, methods, results, and conclusions succinctly.</li>
              <li><strong>Interactivity:</strong> Be prepared to discuss your poster with viewers and answer questions.</li>
              <li><strong>Accessibility:</strong> Ensure text is legible from a distance and visuals are easy to interpret.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Tips for Success:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Practice your presentation multiple times to build confidence.</li>
              <li>Seek feedback from peers or mentors before the actual presentation.</li>
              <li>Be prepared to elaborate on any part of your research during discussions.</li>
              <li>Keep your audience engaged by highlighting the significance and implications of your findings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">"During your oral presentation, begin with a brief introduction to your research question, followed by an overview of your methodology. Use slides to display key graphs and data points, and conclude by discussing the implications of your findings."</p>
          `,
          videoUrl: "https://example.com/week7-presentation",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 7 Summary: Reporting and Presenting Research Findings</h2>
            <p class="mt-4">In this final week, you've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Structuring research reports and academic papers for clarity and coherence.</li>
              <li>Effective techniques for presenting data through visuals and written descriptions.</li>
              <li>Strategies for delivering compelling oral and poster presentations.</li>
            </ul>
            <p class="mt-4">Mastering these skills ensures that your research is communicated effectively, enhancing its impact and reach within the academic community.</p>
          `,
          videoUrl: "https://example.com/week7-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your comprehensive understanding of the concepts covered throughout the course.</p>
          `,
          videoUrl: "https://example.com/week7-quiz",
          quiz: {
            question:
              "Which of the following is NOT a key component of an effective oral presentation?",
            options: [
              "Clear and concise language",
              "Engaging visual aids",
              "Reading directly from your slides",
              "Maintaining eye contact with the audience",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function ResearchCoursePage() {
  return <CoursePage courseData={ResearchCourseData} />;
}
