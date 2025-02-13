"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const CppCourseData: CourseData = {
  title: "C++ Project Design",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to Programming and Basic Concepts",
      chapters: [
        {
          title: "1.1 Overview of Programming Languages",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: What Is a Programming Language?</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the purpose of programming languages and explore the top languages used in the industry.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Programming languages are tools used to communicate instructions to a computer.</li>
              <li>They allow us to develop software, applications, and systems by providing a syntax and set of rules for coding.</li>
              <li>Each language has its strengths, use cases, and communities.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Top 5 Programming Languages:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>C++:</strong> Powerful and efficient; widely used in systems programming, game development, and performance-critical applications.</li>
              <li><strong>Python:</strong> Known for its simplicity and versatility; popular in data science, scripting, and web development.</li>
              <li><strong>Java:</strong> Platform-independent and robust; extensively used for enterprise applications and Android development.</li>
              <li><strong>JavaScript:</strong> The backbone of web development; essential for front-end development and increasingly used on the server-side with Node.js.</li>
              <li><strong>C#:</strong> Developed by Microsoft; used for Windows applications, game development with Unity, and enterprise solutions.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the purpose and unique characteristics of each language.</li>
              <li>Note how language choice depends on the project and domain.</li>
              <li>Record any questions about language features in your lab notebook.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Understanding different programming languages helps you choose the right tool for each task.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-language-overview"
        },
        {
          title: "1.2 Overview of Frameworks, Tools, and GitHub",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Beyond Languages – Frameworks and Tools</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn about popular frameworks and development tools, and understand the role of GitHub in modern software development.</p>
            <h3 class="text-xl font-semibold mt-6">Key Frameworks and Tools:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
              <li><strong>Node.js:</strong> A runtime environment for executing JavaScript on the server side.</li>
              <li><strong>Express:</strong> A web framework for Node.js, simplifying server development.</li>
              <li><strong>Angular and Vue:</strong> Other popular front-end frameworks for dynamic web applications.</li>
              <li><strong>GitHub:</strong> A platform for version control and collaborative coding using Git.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Identify the role of frameworks in speeding up development and ensuring maintainability.</li>
              <li>Learn the basics of Git and how GitHub facilitates code collaboration and version control.</li>
              <li>Explore examples of how these tools are used in real-world projects.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Familiarize yourself with GitHub early—it will be an essential tool throughout your coding journey.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-frameworks-tools"
        },
        {
          title: "1.3 Main Branches of Computer Science",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Exploring the Fields of Computing</h2>
            <p class="mt-4"><strong>Objective:</strong> Gain a broad understanding of the major branches of computer science and their real-world applications.</p>
            <h3 class="text-xl font-semibold mt-6">Key Branches:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Software Engineering:</strong> Focuses on designing, building, and maintaining software systems.</li>
              <li><strong>Data Science:</strong> Combines statistics, mathematics, and programming (using tools like R and Python) to analyze and interpret data.</li>
              <li><strong>Artificial Intelligence:</strong> Involves developing algorithms that allow computers to learn and make decisions.</li>
              <li><strong>Cybersecurity:</strong> Protects systems and networks from digital attacks and data breaches.</li>
              <li><strong>Embedded Systems:</strong> Integrates software and hardware to control devices (e.g., IoT, robotics, and microcontrollers).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review a brief description of each branch and its importance in the modern tech landscape.</li>
              <li>Consider how different branches complement each other in real-world projects.</li>
              <li>Document any interests or questions you have about these fields for further exploration.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Knowing the broad spectrum of computer science can help you decide which area to specialize in later on.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-branches"
        },
        {
          title: "1.4 What This Course Will Cover",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Course Roadmap and Key Concepts</h2>
            <p class="mt-4"><strong>Objective:</strong> Outline the foundational topics this course will cover and how they relate to the major branches of computer science.</p>
            <h3 class="text-xl font-semibold mt-6">Course Focus Areas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Basic programming concepts: data types, variables, arrays, and functions.</li>
              <li>Understanding structures and classes for organizing code.</li>
              <li>An introduction to libraries and how they extend functionality (libraries for Arduino IDE will be covered in a later week).</li>
              <li>Practical usage of the terminal to manipulate files and run code.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the course outline and identify how each topic builds on the previous ones.</li>
              <li>Note that while this course focuses on foundational concepts, future modules will dive deeper into advanced topics.</li>
              <li>Record your learning objectives and any questions you have about the course structure.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A clear roadmap of the course helps you stay organized and track your progress.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-course-content"
        },
        {
          title: "1.5 Introduction to the Terminal",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Navigating the Terminal</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how the terminal (command line) is used to navigate directories, manipulate files, and run programs.</p>
            <h3 class="text-xl font-semibold mt-6">Key Commands and Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>cd:</strong> Change directory.</li>
              <li><strong>ls (or dir):</strong> List directory contents.</li>
              <li><strong>mkdir:</strong> Create a new directory.</li>
              <li><strong>rm (or del):</strong> Remove files or directories.</li>
              <li><strong>gcc/g++:</strong> Compile C++ programs.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Open your terminal or command prompt.</li>
              <li>Practice navigating to different directories using <code>cd</code>.</li>
              <li>Create a new directory for your C++ projects using <code>mkdir</code>.</li>
              <li>Compile a simple C++ file to see the terminal in action.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Mastering the terminal early will streamline your workflow as you work on more complex projects.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week1-terminal"
        },
        {
          title: "1.6 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Week 1 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> This week, we've covered the basics of programming and an overview of the computing landscape:</p>
            <ul class="list-disc list-inside mt-2">
              <li>An introduction to programming languages with a focus on C++, Python, Java, JavaScript, and C#.</li>
              <li>A brief overview of popular frameworks and tools, including React, Node.js, and GitHub.</li>
              <li>An exploration of the main branches of computer science such as Software Engineering, Data Science, Artificial Intelligence, Cybersecurity, and Embedded Systems.</li>
              <li>What this course will cover: fundamentals like data types, arrays, functions, structures, and classes.</li>
              <li>Basic usage of the terminal to navigate directories, manipulate files, and compile code.</li>
            </ul>
            <p class="mt-4">These foundational concepts will serve as the building blocks for your programming journey and prepare you for more advanced topics in future weeks.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "1.7 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Fundamentals of Programming</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the key introductory concepts covered in this week.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the slides from 1.1 through 1.6.</li>
              <li>Recall the purpose of programming languages and the differences between them.</li>
              <li>Consider the role of frameworks, GitHub, and the terminal in modern development.</li>
              <li>Select the answer that best reflects the foundational purpose of programming.</li>
            </ol>
          `,
          quiz: {
            question: "Which of the following best describes the primary purpose of a programming language?",
            options: [
              "To design hardware components",
              "To instruct computers to perform specific tasks",
              "To manage and manipulate digital images",
              "To operate system-level processes only"
            ],
            correctAnswer: 1
          }
        }
      ],
    },
    
    // Week 2
    {
      title: "Week 2: Basic Programming",
      chapters: [
        {
          title: "2.1 Understanding Programming Syntax and Data Types",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: What is Syntax?</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn that syntax is the set of rules defining how code must be written for a programming language to be understood by a computer.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Different programming languages have their own unique syntax (e.g., C++ uses semicolons and curly braces, while Python uses indentation).</li>
              <li>The syntax ensures that the computer interprets your code correctly.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Data Types in C++:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>int:</strong> For integer values (e.g., 42).</li>
              <li><strong>double:</strong> For floating-point numbers (e.g., 3.14).</li>
              <li><strong>char:</strong> For individual characters (e.g., 'A').</li>
              <li><strong>bool:</strong> For boolean values (true/false).</li>
              <li><strong>string:</strong> For sequences of characters (requires <code>#include &lt;string&gt;</code>).</li>
            </ul>
            <p class="mt-4">Remember to always include <code>using namespace std;</code> at the top of your code so you don’t have to prefix everything with <code>std::</code>.</p>
            <p class="mt-4"><em>Tip:</em> Think of syntax as grammar in a human language—it ensures your ideas are communicated clearly to the computer.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-syntax-datatypes"
        },
        {
          title: "2.2 Input and Output: Using cin and cout",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Standard Input and Output</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to interact with the user via the console using <code>cin</code> and <code>cout</code>.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>cout:</strong> Used to output (print) data to the console.</li>
              <li><strong>cin:</strong> Used to take input from the user.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    
    int main() {
        string name;
        int age;
        cout &lt;&lt; "Enter your name: ";
        cin &gt;&gt; name;
        cout &lt;&lt; "Enter your age: ";
        cin &gt;&gt; age;
        cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "! You are " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;
        return 0;
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Using <code>using namespace std;</code> keeps your code clean by avoiding repetitive <code>std::</code> prefixes.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-cin-cout"
        },
        {
          title: "2.3 Arithmetic Operations and Variables",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Arithmetic in C++</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to perform arithmetic operations and use variables to store and manipulate numerical data.</p>
            <h3 class="text-xl font-semibold mt-6">Key Arithmetic Operators:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%)</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    using namespace std;
    
    int main() {
        int a = 10, b = 5;
        int sum = a + b;
        int diff = a - b;
        int prod = a * b;
        int quot = a / b;
        cout &lt;&lt; "Sum: " &lt;&lt; sum &lt;&lt; endl;
        cout &lt;&lt; "Difference: " &lt;&lt; diff &lt;&lt; endl;
        cout &lt;&lt; "Product: " &lt;&lt; prod &lt;&lt; endl;
        cout &lt;&lt; "Quotient: " &lt;&lt; quot &lt;&lt; endl;
        return 0;
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Arithmetic is the basis for many algorithms. Practice by modifying values and observing changes in output.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-arithmetic"
        },
        {
          title: "2.4 Introduction to Functions: Declaration, Definition, and Calling",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Functions in C++</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the concept of functions, how to declare, define, and call them, and the significance of return types.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Declaration (Prototype):</strong> Tells the compiler about a function's name, return type, and parameters.</li>
              <li><strong>Definition:</strong> Contains the body of the function with the code to execute.</li>
              <li><strong>Function Call:</strong> Executes the function's code when invoked.</li>
              <li><strong>Return Type:</strong> Specifies the type of value the function returns.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: A Simple Arithmetic Function</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    using namespace std;
    
    // Function declaration (prototype)
    int add(int x, int y);
    
    int main() {
        int result = add(7, 3);  // Function call
        cout &lt;&lt; "7 + 3 = " &lt;&lt; result &lt;&lt; endl;
        return 0;
    }
    
    // Function definition
    int add(int x, int y) {
        return x + y;
    }
            </pre>
            <p class="mt-4"><em>Note:</em> If you define the function above <code>main()</code>, you don't need a separate declaration.</p>
            <p class="mt-4"><em>Tip:</em> Functions help break down complex tasks into manageable pieces and promote code reuse.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week2-functions"
        },
        {
          title: "2.5 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 2 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> In this week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>What syntax is and how it varies between programming languages.</li>
              <li>The fundamental data types in C++ and how to use <code>cin</code> and <code>cout</code> for I/O.</li>
              <li>Basic arithmetic operations and working with variables.</li>
              <li>The essentials of functions: declaration, definition, calling, and return types.</li>
            </ul>
            <p class="mt-4">These concepts are the foundation for all programming tasks and will support more advanced topics in future weeks.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "2.6 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - Basic Programming Concepts</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of syntax, data types, I/O operations, arithmetic, and functions in C++.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review slides 2.1 through 2.5 carefully.</li>
              <li>Recall the importance of correct syntax and the role of functions.</li>
              <li>Select the answer that best explains the primary benefit of using functions.</li>
            </ol>
          `,
          quiz: {
            question: "Which of the following best describes the role of functions in C++ programming?",
            options: [
              "They allow you to write code without syntax errors.",
              "They break code into reusable blocks, enhancing organization and readability.",
              "They automatically perform arithmetic operations.",
              "They eliminate the need for data types."
            ],
            correctAnswer: 1
          }
        }
      ],
    },

    
    // Week 3
    {
  title: "Week 3: Advanced Programming Concepts",
  chapters: [
    {
      title: "3.1 Introduction to Functions and Parameter Passing",
      content: `
        <h2 class="text-2xl font-bold">Slide 1: Introduction to Functions</h2>
        <p class="mt-4"><strong>Objective:</strong> Understand the purpose of functions and the two primary methods of parameter passing in C++: by value and by reference.</p>
        <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
        <ul class="list-disc list-inside mt-2">
          <li><strong>Functions:</strong> Reusable blocks of code that perform specific tasks.</li>
          <li><strong>Pass by Value:</strong> A copy of the variable is passed; changes inside the function do not affect the original.</li>
          <li><strong>Pass by Reference:</strong> The function accesses the original variable; modifications affect the original data.</li>
        </ul>
        <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
        <ol class="list-decimal list-inside mt-2">
          <li>Review the definition and benefits of using functions for modular programming.</li>
          <li>Learn how syntax differs when passing parameters by value versus by reference.</li>
          <li>Take notes on scenarios where each method is most efficient.</li>
        </ol>
        <p class="mt-4"><em>Tip:</em> Use pass by reference for large data structures to avoid unnecessary copying.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
      videoUrl: "https://example.com/week3-intro-functions"
    },
    {
      title: "3.2 Deep Dive: Passing by Value vs. Passing by Reference",
      content: `
        <h2 class="text-2xl font-bold">Slide 2: Parameter Passing Methods</h2>
        <p class="mt-4"><strong>Objective:</strong> Compare and contrast passing parameters by value and by reference with a clear example.</p>
        <h3 class="text-xl font-semibold mt-6">Pass by Value:</h3>
        <p class="mt-2">A copy of the variable is sent to the function, so changes do not affect the original.</p>
        <h3 class="text-xl font-semibold mt-6">Pass by Reference:</h3>
        <p class="mt-2">The original variable is passed, allowing the function to modify it directly.</p>
        <h3 class="text-xl font-semibold mt-6">When to Use:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Use <strong>pass by value</strong> for small, simple types.</li>
          <li>Use <strong>pass by reference</strong> for large objects or when modifications are necessary.</li>
        </ul>
        <p class="mt-4"><em>Tip:</em> Consider using <code>const</code> with references to prevent unintended modifications.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
      videoUrl: "https://example.com/week3-pass-by-value-reference"
    },
    {
      title: "3.3 Best Practices for Parameter Passing",
      content: `
        <h2 class="text-2xl font-bold">Slide 3: Choosing the Right Passing Method</h2>
        <p class="mt-4"><strong>Objective:</strong> Learn guidelines for choosing between passing by value and by reference.</p>
        <h3 class="text-xl font-semibold mt-6">Guidelines:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Use <strong>pass by value</strong> for simple data (e.g., int, char).</li>
          <li>Use <strong>pass by reference</strong> for large objects or when the function should modify the input.</li>
          <li>For safety without copying, use a <strong>const reference</strong> (e.g., <code>const int &</code>).</li>
        </ul>
        <p class="mt-4"><em>Tip:</em> Evaluate data size and mutability to choose the most efficient method.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
      videoUrl: "https://example.com/week3-best-practices"
    },
    {
      title: "3.4 Introduction to Arrays and Their Use in Functions",
      content: `
        <h2 class="text-2xl font-bold">Slide 4: Arrays in C++</h2>
        <p class="mt-4"><strong>Objective:</strong> Learn what arrays are and how they can be passed to functions for efficient data processing.</p>
        <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
        <ul class="list-disc list-inside mt-2">
          <li>Arrays store multiple elements of the same type in contiguous memory.</li>
          <li>They enable processing of collections of data using loops.</li>
          <li>When passed to functions, arrays are typically treated as pointers.</li>
        </ul>
        <p class="mt-4"><em>Tip:</em> Arrays are essential for handling sequences of data; understanding their use in functions is crucial.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
      videoUrl: "https://example.com/week3-arrays-intro"
    },
    {
      title: "3.5 Example Walkthrough: Functions, Parameter Passing, and Arrays",
      content: `
        <h2 class="text-2xl font-bold">Slide 5: Detailed Code Example with Comments</h2>
        <p class="mt-4"><strong>Objective:</strong> Walk through a comprehensive example that demonstrates functions, parameter passing (by value and reference), and array usage.</p>
        <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
        <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;              // Include the iostream library for input/output operations
#include &lt;string&gt;                // Include string library for using strings
using namespace std;               // Use the standard namespace to avoid std:: prefixes

// Function to add two integers passed by value
int addByValue(int a, int b) {     
    // 'a' and 'b' are copies; modifications here do not affect the originals
    return a + b;                // Return the sum of a and b
}

// Function to add two integers passed by reference
int addByReference(const int &a, const int &b) {  
    // 'a' and 'b' are references; declared as const to prevent modification
    return a + b;                // Return the sum without modifying a and b
}

// Function to calculate the sum of an array
int sumArray(const int arr[], int size) {
    int sum = 0;                 // Initialize sum to 0
    for (int i = 0; i < size; i++) {  // Loop through each element in the array
        sum += arr[i];           // Add the current element to sum
    }
    return sum;                  // Return the total sum of the array elements
}

int main() {
    // Demonstrate functions with pass by value and pass by reference
    int x = 5, y = 10;           
    cout << "Using pass by value: " << addByValue(x, y) << endl;       // Calls addByValue; outputs 15
    cout << "Using pass by reference: " << addByReference(x, y) << endl; // Calls addByReference; outputs 15

    // Demonstrate passing an array to a function
    int numbers[5] = {1, 2, 3, 4, 5}; // Declare and initialize an array of 5 integers
    int total = sumArray(numbers, 5);  // Call sumArray to calculate the sum of array elements
    cout << "Sum of the array: " << total << endl; // Output the sum (should be 15)

    return 0;                    // End of program
}
        </pre>
        <p class="mt-4"><em>Tip:</em> Comments in the code explain each line, helping you understand the logic and flow.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
      videoUrl: "https://example.com/week3-example-walkthrough"
    },
    {
      title: "3.6 Summary",
      content: `
        <h2 class="text-2xl font-bold">Slide 6: Week 3 Summary</h2>
        <p class="mt-4"><strong>Review:</strong> In this week, you've learned advanced programming concepts including:</p>
        <ul class="list-disc list-inside mt-2">
          <li>The purpose and benefits of functions in modular programming.</li>
          <li>The differences between passing parameters by value and by reference.</li>
          <li>Guidelines for selecting the appropriate passing method.</li>
          <li>An introduction to arrays and how they integrate with functions.</li>
          <li>A detailed code walkthrough explaining these concepts line by line.</li>
        </ul>
        <p class="mt-4">Mastering these concepts is essential for writing efficient and maintainable C++ code.</p>
        <p class="mt-4">
          <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
            Click here for additional details and assessment info.
          </a>
        </p>
      `,
    },
    {
      title: "3.7 Quiz",
      content: `
        <h2 class="text-2xl font-bold">Slide 7: Quiz - Advanced Programming Concepts</h2>
        <p class="mt-4"><strong>Objective:</strong> Test your understanding of functions, parameter passing, and arrays.</p>
        <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
        <ol class="list-decimal list-inside mt-2">
          <li>Review all the slides from 3.1 through 3.6.</li>
          <li>Recall the key differences and benefits of passing by value versus by reference.</li>
          <li>Select the answer that best explains the advantage of passing parameters by reference.</li>
        </ol>
      `,
      quiz: {
        question: "What is the main advantage of passing parameters by reference in C++?",
        options: [
          "It creates an independent copy of the variable.",
          "It allows the function to modify the original variable without copying, improving efficiency.",
          "It ensures that the data is read-only.",
          "It automatically converts data types."
        ],
        correctAnswer: 1
      }
    }
  ],
},


    // Week 4
    {
      title: "Week 4: Final Programming with Structures and Mini Project",
      chapters: [
        {
          title: "4.1 Introduction to Structures",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: What Are Structures?</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand structures in C++ as custom data types that group related variables together.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Structures:</strong> Allow you to group data of different types under one name.</li>
              <li>They are defined using the <code>struct</code> keyword.</li>
              <li>They help in organizing data logically in your programs.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    // Include iostream for input/output operations
    #include &lt;iostream&gt;
    // Use the standard namespace to avoid repetitive std:: prefixes
    using namespace std;
    
    // Define a structure named 'Point' to represent a 2D coordinate
    struct Point {
        int x; // x-coordinate
        int y; // y-coordinate
    };
    
    int main() {
        // Create an instance of Point and initialize its members
        Point p = {10, 20};
        cout << "Point coordinates: (" << p.x << ", " << p.y << ")" << endl;
        return 0; // End of program
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Structures are the building blocks for organizing complex data. They allow you to bundle related information together.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-intro-structures"
        },
        {
          title: "4.2 Passing Structures by Value and by Reference",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Parameter Passing with Structures</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn the difference between passing structures by value and by reference, using a matrix example for clarity.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Pass by Value:</strong> A copy of the structure is created; changes inside the function do not affect the original data.</li>
              <li><strong>Pass by Reference:</strong> The original structure is accessed directly; any changes affect the original data.</li>
              <li>For large data (such as matrices), pass by reference is more efficient.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Matrix Example:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    // Include iostream for console output
    #include &lt;iostream&gt;
    using namespace std;
    
    // Define a structure 'Matrix' for a 2x2 matrix
    struct Matrix {
        int m[2][2]; // 2D array holding matrix elements
    };
    
    // Function to display the matrix (passed by value)
    void displayMatrixByValue(Matrix mat) {
        cout << "Matrix (by value):" << endl;
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                cout << mat.m[i][j] << " "; // Output each element
            }
            cout << endl;
        }
    }
    
    // Function to update the matrix (passed by reference)
    void updateMatrixByReference(Matrix &mat) {
        // Modify specific elements of the matrix
        mat.m[0][0] += 10;
        mat.m[1][1] += 10;
    }
    
    int main() {
        // Create a Matrix instance and initialize it
        Matrix A = {{{1, 2}, {3, 4}}};
        
        // Display the original matrix (pass by value)
        displayMatrixByValue(A);
        
        // Update the matrix (pass by reference)
        updateMatrixByReference(A);
        
        // Display the updated matrix to see the changes
        cout << "After update (by reference):" << endl;
        displayMatrixByValue(A);
        
        return 0; // End of program
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> When working with large structures, passing by reference avoids unnecessary copying and improves performance.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-structure-passing"
        },
        {
          title: "4.3 Mini Project: Combining Arrays, Functions, and Structures",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Mini Project Overview</h2>
            <p class="mt-4"><strong>Objective:</strong> Integrate your knowledge of arrays, functions, and structures to build a mini project.</p>
            <h3 class="text-xl font-semibold mt-6">Project Description:</h3>
            <p class="mt-2">Develop a simple Student Management System. In this project:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Each student is represented by a structure that holds a <code>name</code> and a <code>grade</code>.</li>
              <li>An array of these structures stores data for multiple students.</li>
              <li>Functions will handle data input and calculate the average grade.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Instructions:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Define a <code>Student</code> structure with <code>name</code> (string) and <code>grade</code> (int).</li>
              <li>Create an array of <code>Student</code> structures to hold multiple records.</li>
              <li>Write a function to input student data using <code>cin</code> and display prompts with <code>cout</code>.</li>
              <li>Write another function to compute and return the average grade.</li>
              <li>Call these functions in <code>main()</code> and display the results.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;      // Include iostream for input/output operations
    #include &lt;string&gt;        // Include string library for using strings
    using namespace std;         // Use the standard namespace
    
    // Define a structure to represent a student
    struct Student {
        string name;   // Student's name
        int grade;     // Student's grade
    };
    
    // Function to input student data into an array of Student structures
    void inputStudentData(Student students[], int size) {
        for (int i = 0; i < size; i++) {
            cout << "Enter name for student " << i + 1 << ": ";
            cin >> students[i].name;    // Read student's name
            cout << "Enter grade for student " << i + 1 << ": ";
            cin >> students[i].grade;   // Read student's grade
        }
    }
    
    // Function to calculate the average grade of students
    double calculateAverage(Student students[], int size) {
        int sum = 0;                    // Initialize sum to 0
        for (int i = 0; i < size; i++) {
            sum += students[i].grade;   // Add each student's grade to the sum
        }
        return static_cast<double>(sum) / size; // Calculate and return the average
    }
    
    int main() {
        const int numStudents = 3;      // Number of students
        Student classList[numStudents]; // Array of Student structures
    
        // Input data for each student
        inputStudentData(classList, numStudents);
    
        // Calculate the average grade
        double avg = calculateAverage(classList, numStudents);
        cout << "Average Grade: " << avg << endl; // Output the average grade
        return 0; // End of program
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Integrating multiple programming concepts into one project helps reinforce your understanding and prepares you for complex real-world applications.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week4-mini-project"
        },
        {
          title: "4.4 Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Week 4 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> In this week, you've learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The concept of structures and how they organize related data.</li>
              <li>How to pass structures by value versus by reference, using a matrix example.</li>
              <li>How to combine arrays, functions, and structures in a mini project (a Student Management System).</li>
            </ul>
            <p class="mt-4">These final programming concepts integrate many of the skills you've developed and prepare you for even more advanced projects.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "4.5 Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Quiz - Final Programming Concepts</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of structures, parameter passing, and integrating arrays, functions, and structures.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the slides from 4.1 through 4.4 carefully.</li>
              <li>Recall the benefits of passing structures by reference for efficiency.</li>
              <li>Select the answer that best describes the main advantage of passing a structure by reference.</li>
            </ol>
          `,
          quiz: {
            question: "What is the main advantage of passing a structure by reference instead of by value?",
            options: [
              "It creates a complete copy of the structure, ensuring isolation.",
              "It allows the function to modify the original structure and avoids the overhead of copying large data.",
              "It prevents the function from modifying the structure.",
              "It automatically converts the structure to a different type."
            ],
            correctAnswer: 1
          }
        }
      ],
    },

    
    // Week 5
    {
      title: "Week 5: Arduino Code",
      chapters: [
        {
          title: "5.1 Introduction to the Arduino IDE",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Getting Started with the Arduino IDE</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn about the Arduino Integrated Development Environment and its key features for coding microcontrollers.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The Arduino IDE provides a user-friendly interface for writing, compiling, and uploading code to Arduino boards.</li>
              <li>It includes a text editor, a compiler, and an uploader for transferring code to your board.</li>
              <li>You can view and modify code using example sketches, such as the classic "Blink" example.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Blink Sketch</h3>
            <pre class="bg-gray-100 p-4 rounded">
    /*
     * Blink Example
     * Turns the onboard LED on and off every second.
     */
     
    void setup() {
      pinMode(13, OUTPUT); // Set digital pin 13 as output
    }
    
    void loop() {
      digitalWrite(13, HIGH); // Turn LED on
      delay(1000);            // Wait for 1 second
      digitalWrite(13, LOW);  // Turn LED off
      delay(1000);            // Wait for 1 second
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Experiment by changing the delay values to modify the blink rate.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
          `,
          videoUrl: "https://example.com/week5-arduino-intro"
        },
        {
          title: "5.2 Utilizing Arduino Libraries",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: How to Use Libraries in Arduino</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to extend the functionality of your projects by including and using libraries in the Arduino IDE.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Libraries contain pre-written code to simplify tasks like controlling displays, sensors, or motors.</li>
              <li>Include libraries at the top of your sketch using <code>#include &lt;LibraryName.h&gt;</code>.</li>
              <li>Utilize the Library Manager (found under <code>Sketch &gt; Include Library &gt; Manage Libraries...</code>) to install and update libraries.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Using the LiquidCrystal Library</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;LiquidCrystal.h&gt; // Include the LiquidCrystal library
    
    // Initialize the LCD with the numbers of the interface pins
    LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
    
    void setup() {
      lcd.begin(16, 2);         // Set up the LCD's number of columns and rows
      lcd.print("Hello, Arduino!"); // Display message on LCD
    }
    
    void loop() {
      // No need to repeat code in loop for this example.
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Use the Library Manager to easily install and update the libraries you need.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
          `,
          videoUrl: "https://example.com/week5-arduino-libraries"
        },
        {
          title: "5.3 File Handling in Arduino: Using the SD Library",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: File Handling in Arduino</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how Arduino handles file operations using the SD library.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Standard C++ file streams (<code>ofstream</code> and <code>ifstream</code>) are not natively supported in Arduino.</li>
              <li>The SD library is used to read from and write to files on an SD card connected to your Arduino.</li>
              <li>This slide demonstrates a basic example of writing data to an SD card.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Writing to an SD Card</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;SPI.h&gt;
    #include &lt;SD.h&gt;
    using namespace std;
    
    const int chipSelect = 4; // SD card module chip select pin
    
    void setup() {
      Serial.begin(9600);
      if (!SD.begin(chipSelect)) {
        Serial.println("SD card initialization failed!");
        return;
      }
      Serial.println("SD card initialized.");
      
      // Open or create a file for writing
      File dataFile = SD.open("data.txt", FILE_WRITE);
      if (dataFile) {
        dataFile.println("Hello, Arduino SD!");
        dataFile.close(); // Close the file
        Serial.println("Data written to file.");
      } else {
        Serial.println("Error opening data.txt");
      }
    }
    
    void loop() {
      // Nothing required here for this example.
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Ensure your SD card module is correctly connected and use the Library Manager to install the SD library.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
          `,
          videoUrl: "https://example.com/week5-file-handling"
        },
        {
          title: "5.4 Configuring the Arduino IDE: Board, COM Port, and Library Manager",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Configuring Your Arduino Environment</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to configure the Arduino IDE for successful code compilation and upload.</p>
            <h3 class="text-xl font-semibold mt-6">Key Configuration Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Select Board:</strong> Go to <code>Tools &gt; Board</code> and choose your Arduino model (e.g., Arduino Uno).</li>
              <li><strong>Select COM Port:</strong> Go to <code>Tools &gt; Port</code> to choose the port connected to your Arduino.</li>
              <li><strong>Library Manager:</strong> Use <code>Sketch &gt; Include Library &gt; Manage Libraries...</code> to install or update libraries.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Verifying board and port settings at the top left of the IDE ensures your code uploads to the correct device.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
          `,
          videoUrl: "https://example.com/week5-configure-ide"
        },
        {
          title: "5.5 Summary and Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 5 Summary</h2>
            <p class="mt-4"><strong>Review:</strong> This week, you have learned:</p>
            <ul class="list-disc list-inside mt-2">
              <li>How to navigate and use the Arduino IDE for coding microcontrollers.</li>
              <li>How to incorporate libraries in your Arduino projects using the Library Manager.</li>
              <li>Basic file handling using the SD library as a substitute for standard C++ file streams.</li>
              <li>How to configure your Arduino IDE by selecting the appropriate board, COM port, and managing libraries.</li>
            </ul>
            <p class="mt-4">These skills will enable you to develop interactive hardware projects and extend the functionality of your code using external libraries.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
            <h2 class="text-2xl font-bold mt-6">Slide 6: Quiz - Arduino Code Concepts</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the Arduino IDE configuration, library usage, and file handling techniques.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review slides 5.1 through 5.4 carefully.</li>
              <li>Recall the importance of selecting the correct board and COM port.</li>
              <li>Consider the role of the Library Manager and SD library for file handling.</li>
              <li>Select the answer that best describes the purpose of the Library Manager in the Arduino IDE.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Revisiting your notes on board configuration and library installation will help reinforce these concepts.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">Click here for additional details and assessment info.</a>
            </p>
            <pre class="bg-gray-100 p-4 rounded">
    /* Quiz Answer Example:
    The Library Manager in the Arduino IDE is used to search for, install, and update libraries. These libraries extend the functionality of your projects by providing pre-written code for interfacing with various hardware components.
    */
            </pre>
          `,
          videoUrl: "https://example.com/week5-summary-quiz"
        }
      ],
    },

    
    // Week 6
    {
      title: "Week 6: Advanced Code Analysis, Debugging, and Microcontroller Integration",
      chapters: [
        {
          title: "6.1 Code Analysis, Debugging, and Big O Notation",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Analyzing Code and Debugging</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn techniques to analyze and debug your code, and understand Big O notation to evaluate algorithm performance.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Debugging:</strong> The process of identifying and fixing errors in your code using tools (e.g., GDB, print statements).</li>
              <li><strong>Code Analysis:</strong> Reviewing your code for efficiency, readability, and performance improvements.</li>
              <li><strong>Big O Notation:</strong> A mathematical notation that describes the performance or complexity of an algorithm (e.g., O(n), O(log n), O(n²)).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Analyzing a Simple Loop</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;              // Include iostream for input/output operations
    using namespace std;               // Use the standard namespace
    
    int main() {
        int n = 100;                 // Define the number of iterations
        // Loop runs 'n' times - this is O(n) complexity
        for (int i = 0; i < n; i++) {
            cout << i << " ";        // Constant time operation per iteration
        }
        cout << endl;
        return 0;                    // End of program
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Use debugging tools and print statements (cout) to trace errors, and analyze loops to determine their Big O complexity.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-debugging-bigO"
        },
        {
          title: "6.2 Controlling Electronics: Servos and Motors",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Controlling Servos and Motors</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to control electronic components like servos and motors using C++ code in the Arduino IDE.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Utilize libraries (e.g., Servo.h) to control servo motors.</li>
              <li>Understand how to drive DC motors using motor drivers and digital outputs.</li>
              <li>Write code that sets specific positions or speeds.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Controlling a Servo Motor</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Servo.h&gt;          // Include the Servo library for controlling servo motors
    using namespace std;          // Use the standard namespace
    
    Servo myServo;                // Create a Servo object
    
    void setup() {
        myServo.attach(9);        // Attach the servo to digital pin 9
    }
    
    void loop() {
        myServo.write(0);         // Set servo to 0 degrees
        delay(1000);              // Wait for 1 second
        myServo.write(90);        // Set servo to 90 degrees
        delay(1000);              // Wait for 1 second
        myServo.write(180);       // Set servo to 180 degrees
        delay(1000);              // Wait for 1 second
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Experiment with different angles and delays to see how the servo responds.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-servos-motors"
        },
        {
          title: "6.3 Advanced Communication: Serial Monitor, WiFi, and ESP32 Integration",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Serial Communication and WiFi Connectivity</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to use the serial monitor for debugging, connect your microcontroller to WiFi, and retrieve key information such as the MAC address on an ESP32.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Using <code>Serial.begin()</code>, <code>Serial.print()</code>, and <code>Serial.read()</code> to communicate via the serial monitor.</li>
              <li>Connecting to WiFi using the WiFi library on ESP32 and retrieving the MAC address.</li>
              <li>Connecting multiple ESP32 boards to work together in a networked project.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: ESP32 WiFi and MAC Address Retrieval</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;WiFi.h&gt;          // Include the WiFi library for ESP32 connectivity
    using namespace std;          // Use the standard namespace
    
    const char* ssid = "YourSSID";      // Replace with your WiFi network name
    const char* password = "YourPass";  // Replace with your WiFi password
    
    void setup() {
        Serial.begin(115200);           // Initialize serial communication at 115200 baud
        WiFi.begin(ssid, password);     // Connect to WiFi network
    
        Serial.print("Connecting to WiFi");
        while (WiFi.status() != WL_CONNECTED) { // Wait for connection
            delay(500);
            Serial.print(".");
        }
        Serial.println("Connected!");
    
        // Retrieve and display the MAC address
        Serial.print("MAC Address: ");
        Serial.println(WiFi.macAddress());
    }
    
    void loop() {
        // Read serial input if available
        if (Serial.available()) {
            String data = Serial.readString();
            Serial.println("Received: " + data);
        }
        delay(1000); // Delay before next reading
    }
            </pre>
            <p class="mt-4"><em>Tip:</em> Customize this example to connect multiple ESP32 boards by assigning unique identifiers or network roles.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-wifi-esp32"
        },
        {
          title: "6.4 Microcontrollers and Resources for Further Learning",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Exploring Microcontrollers and Technology Resources</h2>
            <p class="mt-4"><strong>Objective:</strong> Gain an overview of various microcontrollers and discover resources to support your learning and project development.</p>
            <h3 class="text-xl font-semibold mt-6">Types of Microcontrollers:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Arduino:</strong> Ideal for beginners and rapid prototyping.</li>
              <li><strong>ESP32:</strong> Offers WiFi and Bluetooth; great for IoT projects.</li>
              <li><strong>PIC:</strong> Robust, widely used in embedded systems.</li>
              <li><strong>STM32:</strong> High-performance ARM-based controllers for advanced applications.</li>
              <li><strong>Raspberry Pi:</strong> A microcomputer useful for interfacing with electronics.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Resources and References:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Adafruit, SparkFun, Micro Center:</strong> Trusted suppliers for microcontrollers, sensors, and related components.</li>
              <li><strong>Online Communities:</strong> Arduino Forum, r/esp32 on Reddit, and Stack Overflow for troubleshooting and collaboration.</li>
              <li><strong>Academic Resources:</strong> Google Scholar for research articles and technical papers.</li>
              <li><strong>Official Documentation:</strong> Manufacturer websites and documentation (e.g., Arduino, ESP32, STM32).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Explore the differences among various microcontrollers to determine which is best suited for your projects.</li>
              <li>Compile a list of resources and suppliers for future reference.</li>
              <li>Bookmark useful sites and join online communities to stay updated on new technologies.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A comprehensive understanding of available microcontrollers and resources will empower you to build more innovative projects.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" 
                 target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week6-microcontrollers"
        }
      ],
    },

    
    // Week 7
    {
      title: "Week 7: Final Project - Comprehensive Assessment",
      chapters: [
        {
          title: "7.1 Final Project Overview",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Final Project Overview</h2>
            <p class="mt-4"><strong>Objective:</strong> Plan and execute a comprehensive project that showcases your mastery of the course topics.</p>
            <h3 class="text-xl font-semibold mt-6">Project Options:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>C++ Programming Project:</strong> Develop a challenging C++ application that integrates concepts such as data types, arrays, functions, file handling, structures, and advanced programming techniques. <em>Bring your computer</em> with the project running and ensure it is thoroughly tested and well-documented.</li>
              <li><strong>Arduino Project:</strong> Build an interactive hardware project using Arduino. You must purchase and bring all necessary components (sensors, actuators, microcontrollers, etc.) for a live demonstration. Your project should integrate various aspects of the course, including hardware control, library usage, and serial communication.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Guidelines:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review all course materials and choose the project type that best suits your interests and resources.</li>
              <li>Create a detailed project plan and timeline, including milestones for design, implementation, testing, and documentation.</li>
              <li>Prepare a presentation (via PowerPoint or Google Slides) that outlines your project goals, design choices, and expected outcomes.</li>
              <li>Ensure you understand the evaluation criteria, which include functionality, code/hardware quality, documentation, and presentation.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Begin planning your project early to leave ample time for testing and refinement.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalProjectGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for detailed final project guidelines and assessment criteria.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week7-overview"
        },
        {
          title: "7.2 C++ Programming Project Guidelines",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: C++ Project Requirements</h2>
            <p class="mt-4"><strong>Objective:</strong> Build a sophisticated C++ application that demonstrates your mastery of the fundamentals and advanced concepts learned in the course.</p>
            <h3 class="text-xl font-semibold mt-6">Requirements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>The project must run on your computer. <strong>Bring your computer</strong> with the project fully functional during the evaluation.</li>
              <li>Integrate key topics from the course, such as data types, arrays, functions, structures, file handling, and advanced programming concepts.</li>
              <li>The code must be clean, well-commented, and documented. Use GitHub for version control and documentation.</li>
              <li>Include error handling, and demonstrate that the application is efficient and user-friendly.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Project Ideas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>An Inventory Management System for tracking products, quantities, and orders.</li>
              <li>A Personal Finance Tracker that manages income, expenses, and budget reports.</li>
              <li>A Simulation Game that uses arrays and functions to model real-world scenarios.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Test your application thoroughly to ensure reliability and usability before the evaluation.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourCppProjectGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional C++ project guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week7-cpp-project"
        },
        {
          title: "7.3 Arduino Project Guidelines",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Arduino Project Requirements</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop an interactive Arduino project that demonstrates effective hardware integration with your code.</p>
            <h3 class="text-xl font-semibold mt-6">Requirements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Your project must include a live hardware demonstration. <strong>You are required to purchase and bring all necessary components</strong> (Arduino board, sensors, actuators, etc.).</li>
              <li>Integrate various course concepts: digital I/O, serial communication, library usage (e.g., Servo, SD), and possibly file handling using the SD library.</li>
              <li>Ensure that your code is well-documented and that your circuit is robust and safe.</li>
              <li>Prepare a detailed project report and a GitHub repository that includes your code and documentation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Project Ideas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>An Automated Plant Watering System that uses moisture sensors and a water pump.</li>
              <li>A Home Automation System controlling lights, temperature, or security.</li>
              <li>A Wearable Device that monitors environmental conditions and displays data on an LCD.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Plan your circuit and code thoroughly. Test each module independently before integration.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourArduinoProjectGuidelinesURL" target="_blank" class="text-blue-600 underline">
                Click here for additional Arduino project guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week7-arduino-project"
        },
        {
          title: "7.4 Final Project Evaluation Criteria",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Evaluation Criteria</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how your final project will be evaluated for both C++ and Arduino tracks.</p>
            <h3 class="text-xl font-semibold mt-6">Evaluation Aspects:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>C++ Project:</strong> Functionality, code quality, documentation, user interface design, and performance. <em>Bring your computer</em> with the project running.</li>
              <li><strong>Arduino Project:</strong> Hardware integration, circuit design, functionality, presentation, and safety. All required components must be provided for a live demonstration.</li>
              <li><strong>Overall:</strong> Innovation, adherence to safety protocols, and the integration of all course concepts.</li>
              <li><strong>Presentation:</strong> Clarity, thorough documentation (via GitHub), and your ability to explain your project design and implementation.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Review these criteria carefully and ensure that your project meets every requirement before the evaluation day.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalEvaluationCriteriaURL" target="_blank" class="text-blue-600 underline">
                Click here for detailed final project evaluation guidelines.
              </a>
            </p>
          `,
          videoUrl: "https://example.com/week7-evaluation-criteria"
        },
        {
          title: "7.5 Final Project Summary and Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Final Project Summary</h2>
            <p class="mt-4"><strong>Review:</strong> In your final project, you must demonstrate your proficiency in either C++ programming or Arduino development by integrating the course concepts.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Your C++ project should be a complete application that runs on your computer, with clean code and comprehensive documentation.</li>
              <li>Your Arduino project should feature hardware components that you have purchased, and be ready for a live demonstration.</li>
              <li>Both projects should integrate core concepts from the course, including arrays, functions, structures, file handling, and advanced programming or hardware integration techniques.</li>
            </ul>
            <p class="mt-4">Prepare thoroughly, ensuring all components or code dependencies are tested and working ahead of the evaluation.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/YourFinalProjectSummaryURL" target="_blank" class="text-blue-600 underline">
                Click here for additional final project details and assessment info.
              </a>
            </p>
            <h2 class="text-2xl font-bold mt-6">Slide 6: Final Quiz - Project Readiness</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of the final project requirements and evaluation criteria.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Answer:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Review the guidelines for both C++ and Arduino projects.</li>
              <li>Recall the key evaluation criteria, such as functionality, documentation, and live demonstration requirements.</li>
              <li>Select the answer that best summarizes a key requirement for project success.</li>
            </ol>
          `,
          quiz: {
            question: "What is a key requirement for the Arduino final project?",
            options: [
              "It should run solely on your computer without any hardware.",
              "It must include a live demonstration with all required hardware components.",
              "It should be entirely simulated in software.",
              "It requires only code documentation with no live demo."
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

export default function CppCoursePage() {
  return <CoursePage courseData={CppCourseData} />;
}
