"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const CppCourseData: CourseData = {
  title: "C++ Coding",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to C++ and Development Environment",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Welcome to C++ Coding</h2>
            <p class="mt-4">C++ is a versatile programming language widely used in various domains such as software development, game development, and systems programming. This course will guide you through the fundamentals of C++, enabling you to write efficient and effective code.</p>
            <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Week 1:</strong> Introduction to C++ and Development Environment</li>
              <li><strong>Week 2:</strong> Working with Arrays</li>
              <li><strong>Week 3:</strong> Functions and Modular Programming</li>
              <li><strong>Week 4:</strong> Integrating Concepts: Arrays, Functions, and Logic</li>
              <li><strong>Week 5:</strong> Programming with Arduino and Microcontrollers</li>
              <li><strong>Week 6:</strong> File Handling in C++</li>
              <li><strong>Week 7:</strong> Final Project</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-intro",
        },
        {
          title:
            "Setting up Visual Studio Code and Configuring the Environment",
          content: `
            <h2 class="text-2xl font-bold">Configuring Your Development Environment</h2>
            <p class="mt-4">Before writing any code, it's essential to set up your development environment properly. This chapter will guide you through installing and configuring Visual Studio Code for C++ development.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Set Up:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Install Visual Studio Code:</strong> Download and install VS Code from the official website.</li>
              <li><strong>Install C++ Extensions:</strong> Add extensions like C/C++ by Microsoft for code editing and debugging.</li>
              <li><strong>Configure Compiler:</strong> Install GCC or Clang and set up environment variables to use the compiler from the terminal.</li>
              <li><strong>Set Up Debugging:</strong> Configure the debugger in VS Code to work with your compiler.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Configuration:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    // tasks.json
            </pre>
          `,
          videoUrl: "https://example.com/week1-setup-vscode",
        },
        {
          title: "Introduction to the Terminal and Basic Commands",
          content: `
            <h2 class="text-2xl font-bold">Navigating the Terminal</h2>
            <p class="mt-4">The terminal is a powerful tool for interacting with your operating system. This chapter covers basic terminal commands essential for C++ development.</p>
            <h3 class="text-xl font-semibold mt-6">Basic Commands:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>cd:</strong> Change directory.</li>
              <li><strong>ls / dir:</strong> List directory contents.</li>
              <li><strong>mkdir:</strong> Create a new directory.</li>
              <li><strong>rm / del:</strong> Remove files or directories.</li>
              <li><strong>gcc / g++:</strong> Compile C++ programs.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Usage:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    // Navigating to the project directory
    cd ~/Projects/CppCoding
    
    // Listing files
    ls
    
    // Creating a new directory
    mkdir src
    
    // Compiling a C++ program
    g++ main.cpp -o main
            </pre>
          `,
          videoUrl: "https://example.com/week1-terminal-commands",
        },
        {
          title: "Understanding Variables, Data Types, and Constants",
          content: `
            <h2 class="text-2xl font-bold">Core Programming Concepts</h2>
            <p class="mt-4">Variables, data types, and constants are fundamental to programming. This chapter explores their definitions and uses in C++.</p>
            <h3 class="text-xl font-semibold mt-6">Variables:</h3>
            <p class="mt-2">Variables are storage locations with a specific type that hold data values.</p>
            <pre class="bg-gray-100 p-4 rounded">
    int age = 25;
    double salary = 55000.50;
    char grade = 'A';
    bool isEmployed = true;
            </pre>
            <h3 class="text-xl font-semibold mt-6">Data Types:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>int:</strong> Integer numbers.</li>
              <li><strong>double:</strong> Floating-point numbers.</li>
              <li><strong>char:</strong> Single characters.</li>
              <li><strong>bool:</strong> Boolean values (true or false).</li>
              <li><strong>string:</strong> Sequence of characters.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Constants:</h3>
            <p class="mt-2">Constants are variables whose value cannot be changed once assigned.</p>
            <pre class="bg-gray-100 p-4 rounded">
    const double PI = 3.14159;
    const int MAX_USERS = 100;
            </pre>
          `,
          videoUrl: "https://example.com/week1-variables-data-types",
        },
        {
          title: "Producing Outputs and Handling User Input",
          content: `
            <h2 class="text-2xl font-bold">Interacting with Users</h2>
            <p class="mt-4">Outputting information and accepting user input are essential for interactive programs. This chapter covers the use of <code>std::cout</code> and <code>std::cin</code>.</p>
            <h3 class="text-xl font-semibold mt-6">Output with std::cout:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    
    int main() {
        std::cout &lt;&lt; "Enter your name: ";
        return 0;
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Input with std::cin:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    #include &lt;string&gt;
    
    int main() {
        std::string name;
        std::cout &lt;&lt; "Enter your name: ";
        std::cin &gt;&gt; name;
        std::cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; std::endl;
        return 0;
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Example Program:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;iostream&gt;
    #include &lt;string&gt;
    
    int main() {
        std::string name;
        int age;
    
        std::cout &lt;&lt; "Enter your name: ";
        std::cin &gt;&gt; name;
    
        std::cout &lt;&lt; "Enter your age: ";
        std::cin &gt;&gt; age;
    
        std::cout &lt;&lt; "Name: " &lt;&lt; name &lt;&lt; ", Age: " &lt;&lt; age &lt;&lt; std::endl;
        return 0;
    }
            </pre>
          `,
          videoUrl: "https://example.com/week1-io",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to C++ and Development Environment</h2>
            <p class="mt-4">In this week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Introduction to C++ and its development environment.</li>
              <li>Setting up Visual Studio Code and configuring necessary tools.</li>
              <li>Basic terminal commands for efficient navigation.</li>
              <li>Understanding variables, data types, and constants.</li>
              <li>Producing outputs and handling user input in C++.</li>
            </ul>
            <p class="mt-4">These foundational concepts are crucial as we move forward to more complex programming topics in the upcoming weeks.</p>
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
            question: "What is the purpose of the 'const' keyword in C++?",
            options: [
              "To declare a variable that can be modified.",
              "To declare a constant whose value cannot be changed.",
              "To create a new data type.",
              "To include external libraries.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 2
    {
      title: "Week 2: Working with Arrays",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Understanding Arrays in C++</h2>
            <p class="mt-4">Arrays are fundamental data structures that allow you to store multiple elements of the same type in contiguous memory locations. This week, we'll explore the basics of arrays, their declaration, initialization, and common operations.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the concept and importance of arrays.</li>
              <li>Learn how to declare, initialize, and access array elements.</li>
              <li>Explore multi-dimensional arrays and their applications.</li>
              <li>Perform common array operations like searching and sorting.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-intro",
        },
        {
          title: "Introduction to Arrays and Their Importance",
          content: `
            <h2 class="text-2xl font-bold">Why Use Arrays?</h2>
            <p class="mt-4">Arrays provide a way to store and manage collections of data efficiently. They are essential for handling large datasets and performing repetitive tasks.</p>
            <h3 class="text-xl font-semibold mt-6">Benefits of Using Arrays:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Efficient storage of multiple elements.</li>
              <li>Easy access to elements using indices.</li>
              <li>Facilitates the implementation of algorithms like sorting and searching.</li>
              <li>Supports multi-dimensional data representation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Scenario:</h3>
            <p class="mt-2">Storing the grades of students in a class allows you to perform operations like calculating the average grade or identifying the highest and lowest scores.</p>
          `,
          videoUrl: "https://example.com/week2-intro-arrays",
        },
        {
          title: "Declaring, Initializing, and Accessing Arrays",
          content: `
            <h2 class="text-2xl font-bold">Basics of Array Operations</h2>
            <p class="mt-4">This chapter covers how to declare, initialize, and access elements within arrays in C++.</p>
            <h3 class="text-xl font-semibold mt-6">Declaring Arrays:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Syntax
dataType arrayName[arraySize];

// Example
int scores[5];
            </pre>
            <h3 class="text-xl font-semibold mt-6">Initializing Arrays:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Partial Initialization
int numbers[5] = {1, 2, 3};

// Complete Initialization
double temperatures[3] = {98.6, 99.1, 100.2};
            </pre>
            <h3 class="text-xl font-semibold mt-6">Accessing Array Elements:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Accessing elements using indices (0-based)
scores[0] = 85;
scores[1] = 90;
std::cout &lt;&lt; "First score: " &lt;&lt; scores[0] &lt;&lt; std::endl;
            </pre>
            <h3 class="text-xl font-semibold mt-6">Iterating Over Arrays:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int main() {
    int scores[5] = {85, 90, 75, 88, 92};
    for (int i = 0; i &lt; 5; i++) {
        std::cout &lt;&lt; "Score " &lt;&lt; i+1 &lt;&lt; ": " &lt;&lt; scores[i] &lt;&lt; std::endl;
    }
    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week2-declaring-initializing",
        },
        {
          title: "Multi-Dimensional Arrays and Their Applications",
          content: `
            <h2 class="text-2xl font-bold">Expanding to Multiple Dimensions</h2>
            <p class="mt-4">Multi-dimensional arrays allow you to store data in more complex structures, such as matrices or tables.</p>
            <h3 class="text-xl font-semibold mt-6">Declaring Multi-Dimensional Arrays:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// 2D Array Declaration
int matrix[3][3];

// 3D Array Declaration
double tensor[2][3][4];
            </pre>
            <h3 class="text-xl font-semibold mt-6">Initializing Multi-Dimensional Arrays:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// 2D Array Initialization
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Accessing Elements
std::cout &lt;&lt; "Element at (0,1): " &lt;&lt; matrix[0][1] &lt;&lt; std::endl;
            </pre>
            <h3 class="text-xl font-semibold mt-6">Applications:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Storing and manipulating matrices for mathematical computations.</li>
              <li>Representing data tables in applications.</li>
              <li>Managing multi-dimensional game boards or grids.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-multi-dimensional-arrays",
        },
        {
          title: "Common Array Operations: Searching and Sorting",
          content: `
            <h2 class="text-2xl font-bold">Manipulating Arrays</h2>
            <p class="mt-4">Arrays are often manipulated through operations like searching for specific elements and sorting them in a particular order.</p>
            <h3 class="text-xl font-semibold mt-6">Searching an Array:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int target = 30;
    bool found = false;

    for (int i = 0; i &lt; 5; i++) {
        if (numbers[i] == target) {
            std::cout &lt;&lt; "Element " &lt;&lt; target &lt;&lt; " found at index " &lt;&lt; i &lt;&lt; std::endl;
            found = true;
            break;
        }
    }

    if (!found) {
        std::cout &lt;&lt; "Element " &lt;&lt; target &lt;&lt; " not found." &lt;&lt; std::endl;
    }

    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Sorting an Array (Bubble Sort):</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int main() {
    int numbers[5] = {50, 20, 40, 10, 30};
    int n = 5;

    // Bubble Sort Algorithm
    for (int i = 0; i &lt; n-1; i++) {
        for (int j = 0; j &lt; n-i-1; j++) {
            if (numbers[j] &gt; numbers[j+1]) {
                // Swap
                int temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }

    // Display sorted array
    std::cout &lt;&lt; "Sorted Array: ";
    for (int i = 0; i &lt; n; i++) {
        std::cout &lt;&lt; numbers[i] &lt;&lt; " ";
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Example Usage:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int main() {
    int grades[5] = {88, 75, 92, 67, 85};
    int searchGrade = 92;
    bool found = false;

    // Searching for a grade
    for (int i = 0; i &lt; 5; i++) {
        if (grades[i] == searchGrade) {
            std::cout &lt;&lt; "Grade " &lt;&lt; searchGrade &lt;&lt; " found at index " &lt;&lt; i &lt;&lt; std::endl;
            found = true;
            break;
        }
    }

    if (!found) {
        std::cout &lt;&lt; "Grade " &lt;&lt; searchGrade &lt;&lt; " not found." &lt;&lt; std::endl;
    }

    // Sorting grades
    for (int i = 0; i &lt; 4; i++) {
        for (int j = 0; j &lt; 4-i; j++) {
            if (grades[j] &gt; grades[j+1]) {
                int temp = grades[j];
                grades[j] = grades[j+1];
                grades[j+1] = temp;
            }
        }
    }

    // Display sorted grades
    std::cout &lt;&lt; "Sorted Grades: ";
    for (int i = 0; i &lt; 5; i++) {
        std::cout &lt;&lt; grades[i] &lt;&lt; " ";
    }
    std::cout &lt;&lt; std::endl;

    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week2-searching-sorting",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 2 Summary: Working with Arrays</h2>
            <p class="mt-4">This week, we've delved into:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The fundamental concepts and importance of arrays in C++.</li>
              <li>How to declare, initialize, and access array elements.</li>
              <li>Working with multi-dimensional arrays for complex data structures.</li>
              <li>Performing common array operations such as searching and sorting.</li>
            </ul>
            <p class="mt-4">Mastering arrays is essential for handling collections of data efficiently and lays the groundwork for more advanced programming concepts.</p>
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
              "How do you declare a two-dimensional array of integers with 3 rows and 4 columns in C++?",
            options: [
              "int array[3][4];",
              "int array(3,4);",
              "int array{3,4};",
              "int array{3}[4];",
            ],
            correctAnswer: 0,
          },
        },
      ],
    },
    // Week 3
    {
      title: "Week 3: Functions and Modular Programming",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Code with Functions</h2>
            <p class="mt-4">Functions are reusable blocks of code that perform specific tasks. They help in organizing code, making it more readable, and promoting reusability.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the definition and purpose of functions.</li>
              <li>Learn how to define, declare, and call functions.</li>
              <li>Explore function arguments, return types, and scope.</li>
              <li>Implement modular programming for better code organization.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-intro",
        },
        {
          title: "Defining and Calling Functions",
          content: `
            <h2 class="text-2xl font-bold">Creating Reusable Code Blocks</h2>
            <p class="mt-4">Functions allow you to encapsulate code for specific tasks, making your programs more organized and easier to manage.</p>
            <h3 class="text-xl font-semibold mt-6">Function Declaration (Prototype):</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Syntax
returnType functionName(parameterList);

// Example
int add(int a, int b);
            </pre>
            <h3 class="text-xl font-semibold mt-6">Function Definition:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Function Definition
int add(int a, int b) {
    return a + b;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Function Call:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Function Call
int result = add(5, 3);
            </pre>
            <h3 class="text-xl font-semibold mt-6">Example Program:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

// Function Declaration
int multiply(int x, int y);

int main() {
    int a = 4, b = 5;
    int product = multiply(a, b); // Function Call
    std::cout &lt;&lt; "Product: " &lt;&lt; product &lt;&lt; std::endl;
    return 0;
}

// Function Definition
int multiply(int x, int y) {
    return x * y;
}
            </pre>
          `,
          videoUrl: "https://example.com/week3-defining-calling-functions",
        },
        {
          title: "Function Arguments, Return Types, and Scope",
          content: `
            <h2 class="text-2xl font-bold">Advanced Function Concepts</h2>
            <p class="mt-4">Understanding how to pass arguments, specify return types, and manage variable scope within functions is crucial for writing effective C++ programs.</p>
            <h3 class="text-xl font-semibold mt-6">Function Arguments:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Pass by Value:</strong> Copies the actual value of an argument into the function parameter.</li>
              <li><strong>Pass by Reference:</strong> Passes the reference (address) of an argument, allowing the function to modify the original variable.</li>
              <li><strong>Pass by Pointer:</strong> Passes a pointer to the variable, enabling direct manipulation of memory addresses.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Return Types:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>void:</strong> Function does not return a value.</li>
              <li><strong>int, double, char, etc.:</strong> Function returns a value of the specified type.</li>
              <li><strong>Custom Types:</strong> Functions can return user-defined types like structs or classes.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Variable Scope:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Global Scope:</strong> Variables declared outside all functions; accessible throughout the program.</li>
              <li><strong>Local Scope:</strong> Variables declared within a function; accessible only within that function.</li>
              <li><strong>Block Scope:</strong> Variables declared within a specific block ({ ... }); accessible only within that block.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Program:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

// Function to swap two integers using pass by reference
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;
    std::cout &lt;&lt; "Before swap: x = " &lt;&lt; x &lt;&lt; ", y = " &lt;&lt; y &lt;&lt; std::endl;
    swap(x, y); // Function Call
    std::cout &lt;&lt; "After swap: x = " &lt;&lt; x &lt;&lt; ", y = " &lt;&lt; y &lt;&lt; std::endl;
    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week3-arguments-return-scope",
        },
        {
          title: "Breaking Programs into Modules for Better Organization",
          content: `
            <h2 class="text-2xl font-bold">Modular Programming in C++</h2>
            <p class="mt-4">Modular programming involves dividing a program into separate modules or functions, each responsible for a specific task. This approach enhances code readability, maintainability, and reusability.</p>
            <h3 class="text-xl font-semibold mt-6">Benefits of Modular Programming:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Improves code organization by separating concerns.</li>
              <li>Facilitates easier debugging and testing.</li>
              <li>Promotes code reuse across different parts of the program.</li>
              <li>Enhances collaboration by allowing multiple developers to work on different modules simultaneously.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Implementing Modular Programs:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

// Function to calculate the area of a rectangle
double calculateArea(double length, double width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
double calculatePerimeter(double length, double width) {
    return 2 * (length + width);
}

int main() {
    double len, wid;
    std::cout &lt;&lt; "Enter length: ";
    std::cin &gt;&gt; len;
    std::cout &lt;&lt; "Enter width: ";
    std::cin &gt;&gt; wid;
    
    double area = calculateArea(len, wid);
    double perimeter = calculatePerimeter(len, wid);
    
    std::cout &lt;&lt; "Area: " &lt;&lt; area &lt;&lt; std::endl;
    std::cout &lt;&lt; "Perimeter: " &lt;&lt; perimeter &lt;&lt; std::endl;
    
    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week3-modular-programming",
        },
        {
          title: "Benefits of Modular Programming for Scalability",
          content: `
            <h2 class="text-2xl font-bold">Scalable Codebases</h2>
            <p class="mt-4">As projects grow in complexity, modular programming becomes essential for maintaining scalability and manageability.</p>
            <h3 class="text-xl font-semibold mt-6">Scalability Benefits:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Easily add new features without affecting existing code.</li>
              <li>Enhance code readability by logically grouping related functions.</li>
              <li>Simplify maintenance by isolating bugs within specific modules.</li>
              <li>Facilitate team collaboration by assigning different modules to different developers.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Scenario:</h3>
            <p class="mt-2">In a large-scale application like an e-commerce platform, different modules can handle user authentication, product management, order processing, and payment integration independently.</p>
          `,
          videoUrl: "https://example.com/week3-benefits-scalability",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 3 Summary: Functions and Modular Programming</h2>
            <p class="mt-4">This week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>The definition and importance of functions in C++ programming.</li>
              <li>How to define, declare, and call functions effectively.</li>
              <li>Understanding function arguments, return types, and variable scope.</li>
              <li>Implementing modular programming to enhance code organization and scalability.</li>
            </ul>
            <p class="mt-4">Mastering functions and modular programming is essential for writing clean, efficient, and maintainable C++ code.</p>
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
            question: "What is the primary benefit of modular programming?",
            options: [
              "Increases the size of the codebase.",
              "Makes code harder to read.",
              "Enhances code organization and reusability.",
              "Reduces the number of functions in a program.",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 4
    {
      title: "Week 4: Integrating Concepts: Arrays, Functions, and Logic",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Bringing It All Together</h2>
            <p class="mt-4">This week focuses on integrating arrays, functions, and logical operations to solve more complex programming problems.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Combine arrays with functions to handle complex data processing.</li>
              <li>Build small modular projects that utilize all covered concepts.</li>
              <li>Enhance debugging skills to refine and optimize code.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-intro",
        },
        {
          title: "Combining Arrays with Functions to Solve Complex Problems",
          content: `
            <h2 class="text-2xl font-bold">Advanced Data Manipulation</h2>
            <p class="mt-4">By combining arrays with functions, you can create more efficient and organized code for handling complex data processing tasks.</p>
            <h3 class="text-xl font-semibold mt-6">Example: Calculating Average Grades</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

double calculateAverage(int grades[], int size) {
    int sum = 0;
    for (int i = 0; i &lt; size; i++) {
        sum += grades[i];
    }
    return static_cast<double>(sum) / size;
}

int main() {
    int studentGrades[5] = {85, 90, 78, 92, 88};
    double average = calculateAverage(studentGrades, 5);
    std::cout &lt;&lt; "Average Grade: " &lt;&lt; average &lt;&lt; std::endl;
    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Example: Finding the Maximum Value in an Array</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int findMax(int numbers[], int size) {
    int max = numbers[0];
    for (int i = 1; i &lt; size; i++) {
        if (numbers[i] &gt; max) {
            max = numbers[i];
        }
    }
    return max;
}

int main() {
    int data[6] = {12, 45, 7, 89, 34, 56};
    int maximum = findMax(data, 6);
    std::cout &lt;&lt; "Maximum Value: " &lt;&lt; maximum &lt;&lt; std::endl;
    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week4-combining-arrays-functions",
        },
        {
          title: "Building Small Modular Projects Using All Covered Concepts",
          content: `
            <h2 class="text-2xl font-bold">Hands-On Project Development</h2>
            <p class="mt-4">Applying the concepts learned so far, this chapter guides you through building small projects that integrate arrays, functions, and logical operations.</p>
            <h3 class="text-xl font-semibold mt-6">Project Idea: Student Grade Management System</h3>
            <p class="mt-2">Develop a program that allows teachers to input student grades, calculate the average, identify the highest and lowest grades, and display the results.</p>
            <h3 class="text-xl font-semibold mt-6">Implementation Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Declare an array to store student grades.</li>
              <li>Create functions to input grades, calculate average, find maximum and minimum grades.</li>
              <li>Implement a menu-driven interface for user interaction.</li>
              <li>Display the results based on user selections.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

// Function declarations
void inputGrades(int grades[], int size);
double calculateAverage(int grades[], int size);
int findMax(int grades[], int size);
int findMin(int grades[], int size);

int main() {
    const int numStudents = 5;
    int grades[numStudents];
    int choice;

    do {
        std::cout &lt;&lt; "\nStudent Grade Management System" &lt;&lt; std::endl;
        std::cout &lt;&lt; "1. Input Grades" &lt;&lt; std::endl;
        std::cout &lt;&lt; "2. Calculate Average" &lt;&lt; std::endl;
        std::cout &lt;&lt; "3. Find Maximum Grade" &lt;&lt; std::endl;
        std::cout &lt;&lt; "4. Find Minimum Grade" &lt;&lt; std::endl;
        std::cout &lt;&lt; "5. Exit" &lt;&lt; std::endl;
        std::cout &lt;&lt; "Enter your choice: ";
        std::cin &gt;&gt; choice;

        switch(choice) {
            case 1:
                inputGrades(grades, numStudents);
                break;
            case 2:
                std::cout &lt;&lt; "Average Grade: " &lt;&lt; calculateAverage(grades, numStudents) &lt;&lt; std::endl;
                break;
            case 3:
                std::cout &lt;&lt; "Maximum Grade: " &lt;&lt; findMax(grades, numStudents) &lt;&lt; std::endl;
                break;
            case 4:
                std::cout &lt;&lt; "Minimum Grade: " &lt;&lt; findMin(grades, numStudents) &lt;&lt; std::endl;
                break;
            case 5:
                std::cout &lt;&lt; "Exiting program." &lt;&lt; std::endl;
                break;
            default:
                std::cout &lt;&lt; "Invalid choice. Please try again." &lt;&lt; std::endl;
        }
    } while(choice != 5);

    return 0;
}

// Function definitions
void inputGrades(int grades[], int size) {
    std::cout &lt;&lt; "Enter " &lt;&lt; size &lt;&lt; " student grades:" &lt;&lt; std::endl;
    for(int i = 0; i &lt; size; i++) {
        std::cout &lt;&lt; "Grade " &lt;&lt; i+1 &lt;&lt; ": ";
        std::cin &gt;&gt; grades[i];
    }
}

double calculateAverage(int grades[], int size) {
    int sum = 0;
    for(int i = 0; i &lt; size; i++) {
        sum += grades[i];
    }
    return static_cast<double>(sum) / size;
}

int findMax(int grades[], int size) {
    int max = grades[0];
    for(int i = 1; i &lt; size; i++) {
        if(grades[i] &gt; max) {
            max = grades[i];
        }
    }
    return max;
}

int findMin(int grades[], int size) {
    int min = grades[0];
    for(int i = 1; i &lt; size; i++) {
        if(grades[i] &lt; min) {
            min = grades[i];
        }
    }
    return min;
}
            </pre>
          `,
          videoUrl: "https://example.com/week4-integrating-concepts",
        },
        {
          title: "Debugging and Refining Code for Efficiency",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Code Performance</h2>
            <p class="mt-4">Debugging is the process of identifying and resolving errors or bugs in your code. Refining code involves optimizing it for better performance and readability.</p>
            <h3 class="text-xl font-semibold mt-6">Debugging Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Using Debuggers:</strong> Tools like GDB can help step through code and inspect variables.</li>
              <li><strong>Print Statements:</strong> Insert <code>std::cout</code> statements to monitor variable values and program flow.</li>
              <li><strong>Code Reviews:</strong> Reviewing code manually or with peers can help spot errors.</li>
              <li><strong>Static Analysis Tools:</strong> Utilize tools that analyze code for potential errors without executing it.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Refining Code:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Remove redundant code to make it more concise.</li>
              <li>Optimize loops and conditional statements for better performance.</li>
              <li>Use meaningful variable and function names for better readability.</li>
              <li>Implement best practices like DRY (Don't Repeat Yourself) to reduce code duplication.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Optimizing a Search Function</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Inefficient Search Function
int search(int arr[], int size, int target) {
    for(int i = 0; i &lt; size; i++) {
        if(arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Optimized Search Function using Binary Search (Requires Sorted Array)
#include &lt;algorithm&gt;

int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while(left &lt;= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] == target) {
            return mid;
        }
        if(arr[mid] &lt; target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
            </pre>
          `,
          videoUrl: "https://example.com/week4-debugging-refining",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 4 Summary: Integrating Concepts: Arrays, Functions, and Logic</h2>
            <p class="mt-4">This week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Combining arrays with functions to handle complex data processing.</li>
              <li>Building small modular projects that utilize arrays, functions, and logical operations.</li>
              <li>Enhancing debugging skills to identify and resolve code issues.</li>
              <li>Refining code for improved efficiency and readability.</li>
            </ul>
            <p class="mt-4">Integrating these concepts allows you to write more organized, efficient, and maintainable C++ programs.</p>
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
            question: "What is the main advantage of using functions in C++?",
            options: [
              "They increase the size of the codebase.",
              "They make code less readable.",
              "They promote code reusability and better organization.",
              "They prevent the use of variables.",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Programming with Arduino and Microcontrollers",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Integrating Hardware with C++</h2>
            <p class="mt-4">This week, we'll explore how to bridge the gap between software and hardware by programming microcontrollers using C++. You'll learn to interact with sensors and actuators, laying the groundwork for creating interactive and functional projects.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the basics of microcontroller programming.</li>
              <li>Learn to set up and use the Arduino IDE.</li>
              <li>Write and upload C++ programs to microcontrollers.</li>
              <li>Interact with sensors and control output devices.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-intro",
        },
        {
          title: "Introduction to Arduino IDE and Basic Hardware Setup",
          content: `
            <h2 class="text-2xl font-bold">Getting Started with Arduino</h2>
            <p class="mt-4">Arduino is a popular open-source platform for building electronics projects. This chapter introduces the Arduino Integrated Development Environment (IDE) and guides you through the basic hardware setup.</p>
            <h3 class="text-xl font-semibold mt-6">Setting Up Arduino IDE:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Download and install the Arduino IDE from the official website.</li>
              <li>Connect your Arduino board to your computer using a USB cable.</li>
              <li>Select the appropriate board and port from the IDE settings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Basic Hardware Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Arduino Board:</strong> The main microcontroller board.</li>
              <li><strong>Breadboard:</strong> For prototyping circuits without soldering.</li>
              <li><strong>LEDs:</strong> Light Emitting Diodes for visual indicators.</li>
              <li><strong>Resistors:</strong> Limit current flow to protect components.</li>
              <li><strong>Jumper Wires:</strong> Connect components on the breadboard.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Setup:</h3>
            <p class="mt-2">Connect an LED to the Arduino board using a resistor and jumper wires. This setup will be used in the upcoming programming exercises.</p>
          `,
          videoUrl: "https://example.com/week5-arduino-ide-setup",
        },
        {
          title: "Writing and Uploading C++ Programs to Microcontrollers",
          content: `
            <h2 class="text-2xl font-bold">Programming the Arduino</h2>
            <p class="mt-4">Learn how to write C++ programs (sketches) for Arduino and upload them to the microcontroller to control hardware components.</p>
            <h3 class="text-xl font-semibold mt-6">Basic Sketch Structure:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Arduino Sketch Example
void setup() {
    // Initialize digital pin 13 as an output.
    pinMode(13, OUTPUT);
}

void loop() {
    digitalWrite(13, HIGH);   // Turn the LED on (HIGH is the voltage level)
    delay(1000);              // Wait for a second
    digitalWrite(13, LOW);    // Turn the LED off by making the voltage LOW
    delay(1000);              // Wait for a second
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Uploading the Sketch:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Connect your Arduino board to your computer via USB.</li>
              <li>Open the Arduino IDE and select the correct board and port.</li>
              <li>Write or open your C++ sketch.</li>
              <li>Click the "Upload" button to compile and transfer the code to the Arduino.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Blinking an LED</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Blink LED Connected to Pin 9
void setup() {
    pinMode(9, OUTPUT);
}

void loop() {
    digitalWrite(9, HIGH);
    delay(500); // Wait for 500 milliseconds
    digitalWrite(9, LOW);
    delay(500);
}
            </pre>
          `,
          videoUrl: "https://example.com/week5-writing-uploading",
        },
        {
          title: "Reading Input from Sensors and Controlling Output Devices",
          content: `
            <h2 class="text-2xl font-bold">Interacting with Hardware</h2>
            <p class="mt-4">This chapter explores how to read data from sensors and control output devices like LEDs and motors using C++ programs on microcontrollers.</p>
            <h3 class="text-xl font-semibold mt-6">Reading Sensor Data:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Example: Reading from a Temperature Sensor
int tempPin = A0; // Analog pin connected to the sensor
int temperature;

void setup() {
    Serial.begin(9600); // Initialize serial communication
}

void loop() {
    temperature = analogRead(tempPin); // Read sensor value
    Serial.println(temperature); // Print value to Serial Monitor
    delay(1000); // Wait for a second
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Controlling Output Devices:</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Example: Controlling a Servo Motor
#include &lt;Servo.h&gt;

Servo myServo;

void setup() {
    myServo.attach(9); // Attach servo to pin 9
}

void loop() {
    myServo.write(0);   // Move servo to 0 degrees
    delay(1000);
    myServo.write(90);  // Move servo to 90 degrees
    delay(1000);
    myServo.write(180); // Move servo to 180 degrees
    delay(1000);
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Example Project: Light Sensor Controlled LED</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;

int lightSensor = A1; // Analog pin for light sensor
int ledPin = 13;      // Digital pin for LED

void setup() {
    pinMode(ledPin, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int lightLevel = analogRead(lightSensor);
    Serial.println(lightLevel);
    
    if(lightLevel &lt; 500) { // Threshold for low light
        digitalWrite(ledPin, HIGH); // Turn LED on
    } else {
        digitalWrite(ledPin, LOW);  // Turn LED off
    }
    
    delay(500);
}
            </pre>
          `,
          videoUrl: "https://example.com/week5-reading-controlling",
        },
        {
          title: "Exploring Practical Applications with Hardware Integration",
          content: `
            <h2 class="text-2xl font-bold">Real-World Applications</h2>
            <p class="mt-4">Integrating hardware components with C++ programming opens up a wide range of practical applications, from simple LED projects to complex automated systems.</p>
            <h3 class="text-xl font-semibold mt-6">Project Ideas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Smart Home Systems:</strong> Automate lighting, temperature, and security.</li>
              <li><strong>Robotics:</strong> Build and program robots for various tasks.</li>
              <li><strong>Environmental Monitoring:</strong> Create systems to monitor temperature, humidity, and air quality.</li>
              <li><strong>Wearable Devices:</strong> Develop gadgets that interact with the user and environment.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Automated Plant Watering System</h3>
            <pre class="bg-gray-100 p-4 rounded">
// Automated Plant Watering System
int moistureSensor = A2;
int pumpPin = 8;

void setup() {
    pinMode(pumpPin, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    int moistureLevel = analogRead(moistureSensor);
    Serial.println(moistureLevel);
    
    if(moistureLevel &lt; 400) { // Threshold for dry soil
        digitalWrite(pumpPin, HIGH); // Turn pump on
        delay(5000); // Water for 5 seconds
        digitalWrite(pumpPin, LOW);  // Turn pump off
    }
    
    delay(1000);
}
            </pre>
            <p class="mt-4">This system uses a moisture sensor to detect dry soil and activates a water pump to hydrate the plant automatically.</p>
          `,
          videoUrl: "https://example.com/week5-practical-applications",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 5 Summary: Programming with Arduino and Microcontrollers</h2>
            <p class="mt-4">This week, we've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Setting up the Arduino IDE and configuring the development environment.</li>
              <li>Writing and uploading C++ programs (sketches) to Arduino microcontrollers.</li>
              <li>Reading input from sensors and controlling output devices like LEDs and motors.</li>
              <li>Exploring practical applications by integrating hardware components with software.</li>
            </ul>
            <p class="mt-4">These skills are essential for creating interactive and functional hardware projects, bridging the gap between software and electronics.</p>
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
              "Which function is used to initialize a pin as an output in Arduino?",
            options: [
              "digitalWrite()",
              "pinMode()",
              "analogRead()",
              "digitalRead()",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 6
    {
      title: "Week 6: File Handling in C++",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Managing Data with File Operations</h2>
            <p class="mt-4">File handling allows your programs to read from and write to files, enabling data storage and retrieval for persistent information management.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the basics of file handling in C++.</li>
              <li>Learn to read from and write to files using file streams.</li>
              <li>Implement error handling in file operations.</li>
              <li>Create programs that save and load data efficiently.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week6-intro",
        },
        {
          title: "Reading from and Writing to Files",
          content: `
            <h2 class="text-2xl font-bold">Basic File Operations</h2>
            <p class="mt-4">C++ provides file stream classes to handle file operations. This chapter covers how to read from and write to files.</p>
            <h3 class="text-xl font-semibold mt-6">Writing to a File:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;

int main() {
    std::ofstream outFile("output.txt"); // Create and open a text file
    if(outFile.is_open()) {
        outFile &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
        outFile &lt;&lt; "Writing to a file in C++." &lt;&lt; std::endl;
        outFile.close(); // Close the file
        std::cout &lt;&lt; "Data written to output.txt successfully." &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to open file." &lt;&lt; std::endl;
    }
    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Reading from a File:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ifstream inFile("output.txt"); // Open the text file
    std::string line;
    if(inFile.is_open()) {
        while(getline(inFile, line)) { // Read data from file line by line
            std::cout &lt;&lt; line &lt;&lt; std::endl;
        }
        inFile.close(); // Close the file
    } else {
        std::cout &lt;&lt; "Unable to open file." &lt;&lt; std::endl;
    }
    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week6-reading-writing-files",
        },
        {
          title: "Using File Streams for Data Storage and Retrieval",
          content: `
            <h2 class="text-2xl font-bold">Advanced File Stream Usage</h2>
            <p class="mt-4">File streams provide a flexible way to handle various types of data storage and retrieval operations in C++.</p>
            <h3 class="text-xl font-semibold mt-6">File Modes:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>std::ios::in:</strong> Open for reading.</li>
              <li><strong>std::ios::out:</strong> Open for writing.</li>
              <li><strong>std::ios::app:</strong> Append to the end of the file.</li>
              <li><strong>std::ios::binary:</strong> Open in binary mode.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Appending Data to a File</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ofstream outFile("log.txt", std::ios::app); // Open file in append mode
    if(outFile.is_open()) {
        std::string logEntry = "User logged in at 10:00 AM.";
        outFile &lt;&lt; logEntry &lt;&lt; std::endl;
        outFile.close();
        std::cout &lt;&lt; "Log entry added successfully." &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to open file." &lt;&lt; std::endl;
    }
    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Reading and Writing Binary Files:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;

struct Data {
    int id;
    double value;
};

int main() {
    Data dataWrite = {1, 99.99};

    // Writing binary data to a file
    std::ofstream outFile("data.bin", std::ios::binary);
    if(outFile.is_open()) {
        outFile.write(reinterpret_cast<char*>(&dataWrite), sizeof(Data));
        outFile.close();
        std::cout &lt;&lt; "Binary data written successfully." &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to open file." &lt;&lt; std::endl;
    }

    Data dataRead;

    // Reading binary data from a file
    std::ifstream inFile("data.bin", std::ios::binary);
    if(inFile.is_open()) {
        inFile.read(reinterpret_cast<char*>(&dataRead), sizeof(Data));
        inFile.close();
        std::cout &lt;&lt; "ID: " &lt;&lt; dataRead.id &lt;&lt; ", Value: " &lt;&lt; dataRead.value &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to open file." &lt;&lt; std::endl;
    }

    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week6-file-streams",
        },
        {
          title: "Error Handling in File Operations",
          content: `
            <h2 class="text-2xl font-bold">Ensuring Robust File Operations</h2>
            <p class="mt-4">Error handling is crucial when performing file operations to ensure that your program can gracefully handle unexpected issues like missing files or read/write errors.</p>
            <h3 class="text-xl font-semibold mt-6">Common Errors:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Attempting to open a non-existent file for reading.</li>
              <li>Insufficient permissions to write to a file.</li>
              <li>Disk space limitations preventing file creation.</li>
              <li>Corrupted or incompatible file formats.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Implementing Error Handling:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;

int main() {
    std::ifstream inFile("nonexistent.txt");
    if(!inFile) {
        std::cerr &lt;&lt; "Error: Unable to open file for reading." &lt;&lt; std::endl;
        return 1;
    }

    // Proceed with file operations
    inFile.close();
    return 0;
}
            </pre>
            <h3 class="text-xl font-semibold mt-6">Using try-catch Blocks:</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;exception&gt;

int main() {
    try {
        std::ifstream inFile("data.txt");
        if(!inFile.is_open()) {
            throw std::runtime_error("Unable to open file.");
        }

        // File operations
        inFile.close();
    }
    catch(const std::exception &e) {
        std::cerr &lt;&lt; "Exception: " &lt;&lt; e.what() &lt;&lt; std::endl;
    }

    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week6-error-handling",
        },
        {
          title: "Building Programs That Save and Load Data",
          content: `
            <h2 class="text-2xl font-bold">Persistent Data Management</h2>
            <p class="mt-4">Creating programs that can save data to files and load data from files is essential for applications that require data persistence.</p>
            <h3 class="text-xl font-semibold mt-6">Example: Saving User Preferences</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ofstream outFile("preferences.txt");
    if(outFile.is_open()) {
        std::string theme = "Dark";
        int fontSize = 14;
        outFile &lt;&lt; theme &lt;&lt; std::endl;
        outFile &lt;&lt; fontSize &lt;&lt; std::endl;
        outFile.close();
        std::cout &lt;&lt; "Preferences saved successfully." &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to save preferences." &lt;&lt; std::endl;
    }

    // Loading preferences
    std::ifstream inFile("preferences.txt");
    if(inFile.is_open()) {
        std::string loadedTheme;
        int loadedFontSize;
        std::getline(inFile, loadedTheme);
        inFile &gt;&gt; loadedFontSize;
        inFile.close();
        std::cout &lt;&lt; "Loaded Theme: " &lt;&lt; loadedTheme &lt;&lt; ", Font Size: " &lt;&lt; loadedFontSize &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Unable to load preferences." &lt;&lt; std::endl;
    }

    return 0;
}
            </pre>
          `,
          videoUrl: "https://example.com/week6-save-load-data",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 6 Summary: File Handling in C++</h2>
            <p class="mt-4">This week, we've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Reading from and writing to files using file streams.</li>
              <li>Utilizing file streams for efficient data storage and retrieval.</li>
              <li>Implementing robust error handling in file operations.</li>
              <li>Building programs that can save and load data for persistent information management.</li>
            </ul>
            <p class="mt-4">Mastering file handling is crucial for developing applications that require data persistence, such as configuration settings, user data, and logs.</p>
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
            question: "Which function is used to read data from a file in C++?",
            options: [
              "std::cin",
              "std::cout",
              "std::ifstream::read",
              "std::ofstream::write",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 7
    {
      title: "Week 7: Final Project",
      chapters: [
        {
          title: "Introduction",
          content: `
            <h2 class="text-2xl font-bold">Developing Your Comprehensive Project</h2>
            <p class="mt-4">The final project is an opportunity to apply all the concepts you've learned throughout the course. You'll design and implement a comprehensive C++ program that integrates arrays, functions, file handling, and, optionally, hardware interaction with Arduino.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Design a program that combines multiple C++ concepts.</li>
              <li>Integrate hardware components if desired.</li>
              <li>Implement best coding practices for readability and efficiency.</li>
              <li>Debug and test your program to ensure functionality.</li>
              <li>Prepare to present your project, highlighting key features and design choices.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week7-intro",
        },
        {
          title: "Designing and Implementing a Comprehensive Program",
          content: `
            <h2 class="text-2xl font-bold">Project Planning and Execution</h2>
            <p class="mt-4">Effective project development involves careful planning and systematic execution. This chapter guides you through the steps of designing and implementing your final project.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Develop Your Project:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Identify the Project Scope:</strong> Define what your program will do and its key features.</li>
              <li><strong>Design the Program Structure:</strong> Outline the main modules, functions, and data structures.</li>
              <li><strong>Implement the Code:</strong> Write the C++ code, ensuring modularity and reusability.</li>
              <li><strong>Test and Debug:</strong> Rigorously test your program to identify and fix bugs.</li>
              <li><strong>Document Your Code:</strong> Add comments and documentation for clarity.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Project Ideas:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Inventory Management System:</strong> Track products, quantities, and orders using arrays and file handling.</li>
              <li><strong>Personal Finance Tracker:</strong> Manage income and expenses, calculate budgets, and generate reports.</li>
              <li><strong>Library Management System:</strong> Handle book records, user information, and borrowing transactions.</li>
              <li><strong>Sensor Data Logger (Optional Hardware Integration):</strong> Collect data from sensors via Arduino and store it using C++ programs.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week7-design-implement-project",
        },
        {
          title:
            "Integrating Hardware (Optional for Those with Access to Microcontrollers)",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Projects with Hardware</h2>
            <p class="mt-4">If you have access to Arduino or other microcontrollers, integrating hardware components can add functionality and interactivity to your projects.</p>
            <h3 class="text-xl font-semibold mt-6">Hardware Integration Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify the hardware components needed for your project (sensors, actuators, etc.).</li>
              <li>Set up the hardware with your microcontroller.</li>
              <li>Write C++ code to interface with the hardware components.</li>
              <li>Test the hardware interactions and refine your program accordingly.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example: Temperature-Controlled Fan</h3>
            <pre class="bg-gray-100 p-4 rounded">
#include &lt;iostream&gt;
#include &lt;fstream&gt;

int main() {
    // This is a placeholder for hardware integration
    // Example: Read temperature from a sensor and control a fan accordingly
    // Actual implementation would require Arduino-specific libraries and hardware setup

    std::cout &lt;&lt; "Temperature-Controlled Fan System" &lt;&lt; std::endl;
    // Read temperature
    double temperature = 0.0;
    // Control fan based on temperature
    if(temperature &gt; 30.0) {
        std::cout &lt;&lt; "Temperature is high. Turning fan on." &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Temperature is normal. Turning fan off." &lt;&lt; std::endl;
    }
    return 0;
}
            </pre>
            <p class="mt-2">In a real-world scenario, you would replace the placeholders with actual sensor readings and actuator controls using Arduino libraries.</p>
          `,
          videoUrl: "https://example.com/week7-integrating-hardware",
        },
        {
          title: "Debugging, Testing, and Presenting the Final Project",
          content: `
            <h2 class="text-2xl font-bold">Finalizing Your Project</h2>
            <p class="mt-4">Once your project is implemented, it's crucial to thoroughly test and debug it to ensure it functions as intended. This chapter also covers best practices for presenting your final project.</p>
            <h3 class="text-xl font-semibold mt-6">Debugging Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use print statements to monitor variable values and program flow.</li>
              <li>Employ debugging tools to step through code and inspect states.</li>
              <li>Conduct code reviews to identify logical errors and inefficiencies.</li>
              <li>Test individual modules before integrating them into the main program.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Testing Your Program:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Develop test cases to cover various scenarios and edge cases.</li>
              <li>Ensure that all functionalities work as expected.</li>
              <li>Validate user inputs to prevent unexpected behavior.</li>
              <li>Optimize performance by analyzing and improving code efficiency.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Presenting Your Final Project:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Prepare a Demonstration:</strong> Showcase the features and functionalities of your project.</li>
              <li><strong>Create Documentation:</strong> Include a README file, user manual, and code comments.</li>
              <li><strong>Highlight Key Features:</strong> Explain the design choices and how different concepts were integrated.</li>
              <li><strong>Be Prepared for Questions:</strong> Anticipate queries regarding your project and its implementation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Presentation Outline:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Introduction:</strong> Brief overview of the project and its objectives.</li>
              <li><strong>Design and Implementation:</strong> Explain the architecture, modules, and key functionalities.</li>
              <li><strong>Demonstration:</strong> Live demo of the project in action.</li>
              <li><strong>Challenges and Solutions:</strong> Discuss any obstacles encountered and how they were overcome.</li>
              <li><strong>Conclusion:</strong> Summarize the project's achievements and potential future enhancements.</li>
            </ol>
          `,
          videoUrl: "https://example.com/week7-debugging-testing-presentation",
        },
        {
          title: "Best Practices for Future Learning and Advanced Topics",
          content: `
            <h2 class="text-2xl font-bold">Continuing Your C++ Journey</h2>
            <p class="mt-4">As you complete this course, it's important to continue building your C++ skills and explore more advanced topics to enhance your programming expertise.</p>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Regularly practice coding to reinforce your skills.</li>
              <li>Participate in coding challenges and competitions.</li>
              <li>Contribute to open-source projects to gain real-world experience.</li>
              <li>Stay updated with the latest C++ standards and features.</li>
              <li>Read C++ books and follow reputable online tutorials and courses.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Advanced Topics to Explore:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Object-Oriented Programming (OOP) and Design Patterns.</li>
              <li>Advanced Data Structures and Algorithms.</li>
              <li>Memory Management and Smart Pointers.</li>
              <li>Multithreading and Concurrency.</li>
              <li>Template Programming and the Standard Template Library (STL).</li>
              <li>Networking and Socket Programming.</li>
              <li>Graphical User Interfaces (GUIs) with libraries like Qt.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Resources for Further Learning:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Books:</strong> "C++ Primer" by Lippman, Lajoie, and Moo; "Effective C++" by Scott Meyers.</li>
              <li><strong>Online Courses:</strong> Platforms like Coursera, Udemy, and edX offer advanced C++ courses.</li>
              <li><strong>Communities:</strong> Join forums and communities like Stack Overflow, Reddit's r/cpp, and the C++ Discord server.</li>
              <li><strong>Documentation:</strong> Refer to the official C++ documentation and cppreference.com for detailed language features.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Path for Continued Learning:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Deep dive into Object-Oriented Programming and design patterns.</li>
              <li>Study advanced data structures and implement them in C++.</li>
              <li>Learn about memory management techniques and smart pointers.</li>
              <li>Explore multithreading to write concurrent programs.</li>
              <li>Master the Standard Template Library (STL) for efficient coding.</li>
              <li>Build complex projects that integrate multiple advanced concepts.</li>
            </ol>
          `,
          videoUrl: "https://example.com/week7-best-practices",
        },
        {
          title: "Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 7 Summary: Final Project</h2>
            <p class="mt-4">In this final week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Designing and implementing a comprehensive C++ program that integrates arrays, functions, and file handling.</li>
              <li>Optionally integrating hardware components using Arduino for enhanced functionality.</li>
              <li>Debugging and testing your project to ensure it meets the desired specifications.</li>
              <li>Presenting your final project, highlighting key features and design choices.</li>
              <li>Exploring best practices for continued learning and advanced C++ topics.</li>
            </ul>
            <p class="mt-4">Completing the final project showcases your ability to apply all the concepts learned throughout the course, preparing you for more advanced programming challenges.</p>
          `,
          videoUrl: "https://example.com/week7-summary",
        },
        {
          title: "Quiz",
          content: `
            <h2 class="text-2xl font-bold">Final Assessment</h2>
            <p class="mt-4">Test your comprehensive understanding of the concepts covered throughout the course.</p>
          `,
          videoUrl: "https://example.com/week7-final-quiz",
          quiz: {
            question:
              "Which of the following is a benefit of using modular programming?",
            options: [
              "Increased code duplication.",
              "Improved code organization and reusability.",
              "Difficulty in debugging.",
              "Reduced code readability.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
  ],
};
// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly
export default function CppCoursePage() {
  return <CoursePage courseData={CppCourseData} />;
}
