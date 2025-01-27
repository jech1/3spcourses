"use client";

//import { useState, useEffect, useCallback } from "react";
//import { Button } from "@/components/ui/button";
//import { Play } from "lucide-react";
import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

//import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { CourseData, Progress } from "@/types/courseTypes";
// import Image from 'next/image'

// Complete course data with all weeks and chapters
const CADCourseData: CourseData = {
  title: "3D Modeling CAD",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction to CAD and Software Setup",
      chapters: [
        {
          title: "Chapter 1.1: Introduction",
          content: `
                <h2 class="text-2xl font-bold">Welcome to 3D Modeling CAD</h2>
                <p class="mt-4">Embark on your journey into the world of Computer-Aided Design (CAD) with this comprehensive course. Learn to build reliable models through effective 3D design.</p>
                <h3 class="text-xl font-semibold mt-6">Course Overview:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Setting up the CAD environment in Onshape</li>
                  <li>Exploring online resources and communities for support</li>
                  <li>Familiarizing with hardware setup and connectivity basics</li>
                </ul>
                
              `,
          videoUrl: "https://example.com/week1-introduction",
        },
        {
          title: "Chapter 1.2: Setting up Onshape and Understanding the Interface",
          content: `
                <h2 class="text-2xl font-bold">Getting Started with Onshape</h2>
                <p class="mt-4">Learn how to set up Onshape, a powerful cloud-based CAD tool, and navigate its user-friendly interface.</p>
                <h3 class="text-xl font-semibold mt-6">Steps to Set Up:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Creating an Onshape account and logging in.</li>
                  <li>Exploring the dashboard and workspace.</li>
                  <li>Customizing toolbars and shortcuts for efficient workflow.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Interface Overview:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Understanding the main toolbar and its functions.</li>
                  <li>Navigating the feature tree and document management.</li>
                  <li>Utilizing view controls for better model visualization.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week1-setting-up-onshape",
        },
        {
          title: "Chapter 1.3: Exploring Online Resources and Communities",
          content: `
                <h2 class="text-2xl font-bold">Leveraging Online Support</h2>
                <p class="mt-4">Discover valuable online resources and communities that can enhance your learning experience and provide support throughout your CAD journey.</p>
                <h3 class="text-xl font-semibold mt-6">Key Resources:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Official Onshape tutorials and documentation.</li>
                  <li>CAD forums and discussion boards for troubleshooting.</li>
                  <li>Online courses and webinars for advanced learning.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Engaging with Communities:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Participating in CAD-related social media groups.</li>
                  <li>Attending virtual meetups and workshops.</li>
                  <li>Collaborating on projects with peers.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week1-online-resources",
        },
        {
          title: "Chapter 1.4: Familiarizing with Hardware Setup and Connectivity Basics",
          content: `
                <h2 class="text-2xl font-bold">Understanding Hardware Integration</h2>
                <p class="mt-4">Gain foundational knowledge of hardware components and their integration with CAD software to create functional prototypes.</p>
                <h3 class="text-xl font-semibold mt-6">Hardware Components:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Microcontrollers and their roles in prototypes.</li>
                  <li>Sensors, actuators, and their applications.</li>
                  <li>Basic electronic components and their functions.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Connectivity Basics:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Wiring principles and best practices.</li>
                  <li>Using breadboards for prototyping circuits.</li>
                  <li>Power supply considerations and safety measures.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week1-hardware-setup",
        },
        {
          title: "Chapter 1.5: Summary",
          content: `
                <h2 class="text-2xl font-bold">Week 1 Summary: Introduction to CAD and Software Setup</h2>
                <p class="mt-4">In this week, you've learned:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>How to set up and navigate the Onshape CAD environment.</li>
                  <li>Key online resources and communities to support your learning.</li>
                  <li>Fundamentals of hardware setup and connectivity basics.</li>
                </ul>
                <p class="mt-4">These foundational skills are essential as you advance to more complex CAD and circuit design concepts in the coming weeks.</p>
              `,
          // videoUrl removed
        },
        {
          title: "Chapter 1.6: Quiz",
          content: `
                <h2 class="text-2xl font-bold">Test Your Understanding</h2>
                <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
              `,
          // videoUrl removed
          quiz: {
            question:
              "What is the primary purpose of using a breadboard in circuit design?",
            options: [
              "To permanently solder components.",
              "To prototype and test circuits without soldering.",
              "To increase the power supply.",
              "To store electronic components.",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 2
    {
      title: "Week 2: Electrical Components",
      chapters: [
        {
          title: "Chapter 2.1: Introduction",
          content: `
                <h2 class="text-2xl font-bold">Exploring Essential Electrical Components</h2>
                <p class="mt-4">This week focuses on identifying and understanding key electrical components used in circuit design.</p>
                <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Identify and understand resistors, capacitors, and diodes.</li>
                  <li>Safely use breadboards and power supplies in circuits.</li>
                  <li>Learn basic troubleshooting techniques for faulty components.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week2-intro",
        },
        {
          title:
            "Chapter 2.2: Identifying and Understanding Resistors, Capacitors, and Diodes",
          content: `
                <h2 class="text-2xl font-bold">Key Passive Components</h2>
                <p class="mt-4">Learn about resistors, capacitors, and diodes—fundamental components in electronic circuits.</p>
                <h3 class="text-xl font-semibold mt-6">Resistors:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Function: Limit current flow and divide voltages.</li>
                  <li>Types: Fixed, variable (potentiometers), and specialized resistors.</li>
                  <li>Color Coding: Understanding resistor color bands for value identification.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Capacitors:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Function: Store and release electrical energy.</li>
                  <li>Types: Ceramic, electrolytic, tantalum, and film capacitors.</li>
                  <li>Applications: Filtering, timing circuits, and energy storage.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Diodes:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Function: Allow current to flow in one direction only.</li>
                  <li>Types: Standard diodes, Zener diodes, and LEDs.</li>
                  <li>Applications: Rectification, voltage regulation, and signal demodulation.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week2-components",
        },
        {
          title: "Chapter 2.3: Safely Using Breadboards and Power Supplies in Circuits",
          content: `
                <h2 class="text-2xl font-bold">Prototyping Safely</h2>
                <p class="mt-4">Ensure safety and efficiency when using breadboards and power supplies in your circuit designs.</p>
                <h3 class="text-xl font-semibold mt-6">Breadboards:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Function: Allow for easy and temporary connections of electronic components.</li>
                  <li>Layout: Understanding the power rails and terminal strips.</li>
                  <li>Best Practices: Organizing components to avoid short circuits and clutter.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Power Supplies:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Types: Batteries, DC power adapters, and bench power supplies.</li>
                  <li>Voltage and Current: Selecting appropriate power sources for your circuits.</li>
                  <li>Safety Measures: Avoiding overvoltage, current overloads, and proper grounding.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week2-safely-using-breadboards",
        },
        {
          title: "Chapter 2.4: Basic Troubleshooting Techniques for Faulty Components",
          content: `
                <h2 class="text-2xl font-bold">Ensuring Circuit Reliability</h2>
                <p class="mt-4">Learn how to identify and fix common issues in your electronic circuits.</p>
                <h3 class="text-xl font-semibold mt-6">Common Issues:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Loose connections and poor solder joints.</li>
                  <li>Incorrect component placement.</li>
                  <li>Faulty or damaged components.</li>
                  <li>Short circuits and unintended paths.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Troubleshooting Steps:</h3>
                <ol class="list-decimal list-inside mt-2">
                  <li>Visual Inspection: Check for obvious signs of damage or incorrect connections.</li>
                  <li>Testing Components: Use a multimeter to verify the functionality of resistors, capacitors, and diodes.</li>
                  <li>Isolation: Simplify the circuit to isolate the faulty section.</li>
                  <li>Verification: Ensure all connections match the circuit diagram.</li>
                </ol>
                <h3 class="text-xl font-semibold mt-6">Using a Multimeter:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Measuring Voltage: Verify power supply voltages.</li>
                  <li>Measuring Resistance: Check resistor values and detect open circuits.</li>
                  <li>Diode Testing: Confirm the directionality and functionality of diodes.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week2-troubleshooting",
        },
        {
          title: "Chapter 2.5: Summary",
          content: `
                <h2 class="text-2xl font-bold">Week 2 Summary: Electrical Components</h2>
                <p class="mt-4">This week, you've delved into:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>Identifying and understanding resistors, capacitors, and diodes.</li>
                  <li>Safely using breadboards and power supplies in circuit designs.</li>
                  <li>Basic troubleshooting techniques to ensure circuit reliability.</li>
                </ul>
                <p class="mt-4">Mastering these components and safety practices is crucial for building effective and dependable electronic prototypes.</p>
              `,
          // videoUrl removed
        },
        {
          title: "Chapter 2.6: Quiz",
          content: `
                <h2 class="text-2xl font-bold">Test Your Understanding</h2>
                <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
              `,
          // videoUrl removed
          quiz: {
            question:
              "What is the primary function of a resistor in a circuit?",
            options: [
              "To store electrical energy",
              "To allow current to flow in one direction",
              "To limit current flow and divide voltages",
              "To amplify signals",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 3
    {
      title: "Week 3: Programming A Microcontroller",
      chapters: [
        {
          title: "Chapter 3.1: Introduction",
          content: `
                <h2 class="text-2xl font-bold">Getting Started with Microcontroller Programming</h2>
                <p class="mt-4">Dive into the essentials of programming microcontrollers using C++. Learn how to write and upload code to create interactive and functional prototypes.</p>
                <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Write and upload simple C++ programs to microcontrollers.</li>
                  <li>Understand data types, variables, and logic control structures.</li>
                  <li>Use functions to organize code for complex operations.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week3-intro",
        },
        {
          title:
            "Chapter 3.2: Writing and Uploading Simple C++ Programs to Microcontrollers",
          content: `
                <h2 class="text-2xl font-bold">Creating Your First Microcontroller Program</h2>
                <p class="mt-4">Learn the step-by-step process of writing and uploading C++ code to a microcontroller to perform basic tasks.</p>
                <h3 class="text-xl font-semibold mt-6">Steps:</h3>
                <ol class="list-decimal list-inside mt-2">
                  <li>Connecting the microcontroller to your computer.</li>
                  <li>Writing a simple C++ program (e.g., blinking an LED).</li>
                  <li>Compiling and uploading the code using the Arduino IDE.</li>
                  <li>Testing the program to ensure it runs correctly.</li>
                </ol>
                <h3 class="text-xl font-semibold mt-6">Example Program:</h3>
                <pre class="bg-gray-100 p-4 rounded">
        #include &lt;Arduino.h&gt;
        
        int ledPin = 13;
        
        void setup() {
            pinMode(ledPin, OUTPUT);
        }
        
        void loop() {
            digitalWrite(ledPin, HIGH); // Turn the LED on
            delay(1000); // Wait for a second
            digitalWrite(ledPin, LOW); // Turn the LED off
            delay(1000); // Wait for a second
        }
                </pre>
              `,
          videoUrl: "https://example.com/week3-uploading-programs",
        },
        {
          title:
            "Chapter 3.3: Understanding Data Types, Variables, and Logic Control Structures",
          content: `
                <h2 class="text-2xl font-bold">Fundamental Programming Concepts</h2>
                <p class="mt-4">Deepen your understanding of data types, variables, and logic control structures essential for effective programming.</p>
                <h3 class="text-xl font-semibold mt-6">Data Types:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li><strong>int:</strong> Integer numbers.</li>
                  <li><strong>float:</strong> Single-precision floating-point numbers.</li>
                  <li><strong>double:</strong> Double-precision floating-point numbers.</li>
                  <li><strong>char:</strong> Single characters.</li>
                  <li><strong>bool:</strong> Boolean values (true or false).</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Variables:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Storage locations with a name and type.</li>
                  <li>Example: <code>int count = 0;</code></li>
                  <li>Scope and lifetime of variables.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Logic Control Structures:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li><strong>if, else if, else:</strong> Conditional execution based on boolean expressions.</li>
                  <li><strong>switch:</strong> Selecting execution paths based on variable values.</li>
                  <li><strong>Logical Operators:</strong> AND (&&), OR (||), NOT (!).</li>
                </ul>
              `,
          videoUrl: "https://example.com/week3-data-types-variables",
        },
        {
          title: "Chapter 3.4: Using Functions to Organize Code for Complex Operations",
          content: `
                <h2 class="text-2xl font-bold">Enhancing Code Structure with Functions</h2>
                <p class="mt-4">Functions help in breaking down complex operations into manageable and reusable code blocks.</p>
                <h3 class="text-xl font-semibold mt-6">Defining Functions:</h3>
                <pre class="bg-gray-100 p-4 rounded">
// Function declaration
void turnOnLED() {
    digitalWrite(ledPin, HIGH);
}

// Function declaration with parameters
void setLEDState(int state) {
    digitalWrite(ledPin, state);
}
                </pre>
                <h3 class="text-xl font-semibold mt-6">Calling Functions:</h3>
                <pre class="bg-gray-100 p-4 rounded">
void loop() {
    turnOnLED();
    delay(1000);
    setLEDState(LOW);
    delay(1000);
}
                </pre>
                <h3 class="text-xl font-semibold mt-6">Benefits of Using Functions:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Promotes code reusability.</li>
                  <li>Enhances readability and maintainability.</li>
                  <li>Facilitates debugging and testing.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week3-functions",
        },
        {
          title: "Chapter 3.5: Summary",
          content: `
                <h2 class="text-2xl font-bold">Week 3 Summary: Programming A Microcontroller</h2>
                <p class="mt-4">This week, you've explored:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>Writing and uploading simple C++ programs to microcontrollers.</li>
                  <li>Understanding fundamental programming concepts like data types, variables, and logic control structures.</li>
                  <li>Using functions to organize and manage complex code operations.</li>
                </ul>
                <p class="mt-4">These skills are essential for developing interactive and functional prototypes using microcontrollers.</p>
              `,
          // videoUrl removed
        },
        {
          title: "Chapter 3.6: Quiz",
          content: `
                <h2 class="text-2xl font-bold">Test Your Understanding</h2>
                <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
              `,
          // videoUrl removed
          quiz: {
            question:
              "What is the primary benefit of using functions in your code?",
            options: [
              "Increases the execution time of programs",
              "Promotes code reusability and organization",
              "Reduces the number of variables needed",
              "Eliminates the need for debugging",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 4
    {
      title: "Week 4: Circuit Basics",
      chapters: [
        {
          title: "Chapter 4.1: Introduction",
          content: `
                <h2 class="text-2xl font-bold">Building Basic Circuits</h2>
                <p class="mt-4">Understand the fundamentals of constructing simple circuits using LEDs, resistors, and switches.</p>
                <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Build basic circuits with LEDs, resistors, and switches.</li>
                  <li>Understand voltage, current, and resistance relationships.</li>
                  <li>Safely test circuits using a multimeter.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week4-intro",
        },
        {
          title: "Chapter 4.2: Building Basic Circuits with LEDs, Resistors, and Switches",
          content: `
                <h2 class="text-2xl font-bold">Creating Simple LED Circuits</h2>
                <p class="mt-4">Learn how to set up and test basic LED circuits to understand fundamental electronic principles.</p>
                <h3 class="text-xl font-semibold mt-6">Components Needed:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>LEDs</li>
                  <li>Resistors</li>
                  <li>Switches</li>
                  <li>Breadboard and connecting wires</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Circuit Diagram:</h3>
                <pre class="bg-gray-100 p-4 rounded">
[Switch] --- [Resistor] --- [LED] --- GND
                </pre>
                <h3 class="text-xl font-semibold mt-6">Building Steps:</h3>
                <ol class="list-decimal list-inside mt-2">
                  <li>Connect the switch to the power rail on the breadboard.</li>
                  <li>Attach the resistor to the switch output.</li>
                  <li>Connect the resistor to the anode (longer leg) of the LED.</li>
                  <li>Connect the cathode (shorter leg) of the LED to the ground rail.</li>
                  <li>Power the circuit and test the switch functionality.</li>
                </ol>
              `,
          videoUrl: "https://example.com/week4-building-basic-circuits",
        },
        {
          title: "Chapter 4.3: Understanding Voltage, Current, and Resistance Relationships",
          content: `
                <h2 class="text-2xl font-bold">Ohm's Law and Electrical Principles</h2>
                <p class="mt-4">Delve into the relationships between voltage, current, and resistance using Ohm's Law.</p>
                <h3 class="text-xl font-semibold mt-6">Ohm's Law:</h3>
                <p class="mt-2"><strong>V = I × R</strong></p>
                <ul class="list-disc list-inside mt-2">
                  <li><strong>V (Voltage):</strong> The electric potential difference, measured in volts (V).</li>
                  <li><strong>I (Current):</strong> The flow of electric charge, measured in amperes (A).</li>
                  <li><strong>R (Resistance):</strong> The opposition to current flow, measured in ohms (Ω).</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Practical Applications:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Calculating required resistor values for specific LED brightness.</li>
                  <li>Designing circuits with desired current flows.</li>
                  <li>Troubleshooting voltage drops in circuits.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Example Calculation:</h3>
                <p class="mt-2">If you have a 9V power supply and want to run an LED with a forward voltage of 2V and a desired current of 20mA, the required resistor value is:</p>
                <pre class="bg-gray-100 p-4 rounded">
R = (V_supply - V_LED) / I
R = (9V - 2V) / 0.02A
R = 7V / 0.02A
R = 350Ω
                </pre>
              `,
          videoUrl: "https://example.com/week4-ohms-law",
        },
        {
          title: "Chapter 4.4: Safely Testing Circuits with a Multimeter",
          content: `
                <h2 class="text-2xl font-bold">Using a Multimeter for Circuit Testing</h2>
                <p class="mt-4">Learn how to use a multimeter to measure voltage, current, and resistance in your circuits safely and accurately.</p>
                <h3 class="text-xl font-semibold mt-6">Multimeter Basics:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Types of Multimeters: Analog vs. Digital.</li>
                  <li>Understanding multimeter settings and probes.</li>
                  <li>Safety precautions when using a multimeter.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Measuring Voltage:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Setting the multimeter to voltage mode.</li>
                  <li>Placing probes across the component or section to measure potential difference.</li>
                  <li>Interpreting voltage readings to assess circuit performance.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Measuring Current:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Setting the multimeter to current mode.</li>
                  <li>Breaking the circuit to insert the multimeter in series.</li>
                  <li>Understanding current flow and ensuring measurements are within safe ranges.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Measuring Resistance:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Setting the multimeter to resistance mode.</li>
                  <li>Ensuring the circuit is powered off before measuring resistance.</li>
                  <li>Comparing measured resistance with expected values for component verification.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week4-testing-circuits",
        },
        {
          title: "Chapter 4.5: Summary",
          content: `
                <h2 class="text-2xl font-bold">Week 4 Summary: Circuit Basics</h2>
                <p class="mt-4">This week, you've learned:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>How to build basic circuits using LEDs, resistors, and switches.</li>
                  <li>The fundamental relationships between voltage, current, and resistance.</li>
                  <li>Safe and effective techniques for testing circuits using a multimeter.</li>
                </ul>
                <p class="mt-4">These foundational skills are crucial for designing and troubleshooting more complex electronic systems in the upcoming weeks.</p>
              `,
          // videoUrl removed
        },
        {
          title: "Chapter 4.6: Quiz",
          content: `
                <h2 class="text-2xl font-bold">Test Your Understanding</h2>
                <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
              `,
          // videoUrl removed
          quiz: {
            question:
              "According to Ohm's Law, how do you calculate resistance?",
            options: ["R = V × I", "R = V / I", "R = I / V", "R = V + I"],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Advanced Circuit Schematics",
      chapters: [
        {
          title: "Chapter 5.1: Introduction",
          content: `
                <h2 class="text-2xl font-bold">Designing Complex Circuits</h2>
                <p class="mt-4">This week delves into advanced circuit schematics, teaching you how to design and analyze complex electronic systems.</p>
                <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Design and analyze complex circuit diagrams.</li>
                  <li>Create PCB layouts for advanced projects.</li>
                  <li>Integrate sensors and actuators for interactive systems.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week5-intro",
        },
        {
          title: "Chapter 5.2: Designing and Analyzing Complex Circuit Diagrams",
          content: `
                <h2 class="text-2xl font-bold">Creating Detailed Schematics</h2>
                <p class="mt-4">Learn how to design intricate circuit diagrams that accurately represent complex electronic systems.</p>
                <h3 class="text-xl font-semibold mt-6">Components of Complex Schematics:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Multiple interconnected components and modules.</li>
                  <li>Use of integrated circuits and microcontrollers.</li>
                  <li>Incorporating communication interfaces like I2C, SPI, and UART.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Design Principles:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Modularity: Breaking down circuits into manageable sections.</li>
                  <li>Clarity: Ensuring readability and logical flow in schematics.</li>
                  <li>Accuracy: Precise representation of component values and connections.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Example:</h3>
                <p class="mt-4">"Design a temperature monitoring system using a microcontroller, temperature sensor, and display module, ensuring proper connections and data flow."</p>
              `,
          videoUrl: "https://example.com/week5-designing-schematics",
        },
        {
          title: "Chapter 5.3: Creating PCB Layouts for Advanced Projects",
          content: `
                <h2 class="text-2xl font-bold">From Schematics to Physical Boards</h2>
                <p class="mt-4">Transition your circuit designs from schematics to Printed Circuit Board (PCB) layouts, essential for creating durable and compact prototypes.</p>
                <h3 class="text-xl font-semibold mt-6">PCB Design Process:</h3>
                <ol class="list-decimal list-inside mt-2">
                  <li>Importing circuit schematics into PCB design software.</li>
                  <li>Placing components on the PCB canvas.</li>
                  <li>Routing electrical connections between components.</li>
                  <li>Design rule checks to ensure manufacturability.</li>
                  <li>Generating Gerber files for PCB fabrication.</li>
                </ol>
                <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Optimizing component placement for minimal space and efficient routing.</li>
                  <li>Ensuring adequate spacing between traces to prevent short circuits.</li>
                  <li>Using ground planes and power planes for stable voltage distribution.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Tools and Software:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Onshape's PCB design tools.</li>
                  <li>Other popular PCB design software like KiCad and Eagle.</li>
                  <li>Utilizing online resources and tutorials for advanced PCB techniques.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week5-pcb-layouts",
        },
        {
          title: "Chapter 5.4: Integrating Sensors and Actuators for Interactive Systems",
          content: `
                <h2 class="text-2xl font-bold">Enhancing Prototypes with Interactive Components</h2>
                <p class="mt-4">Learn how to incorporate sensors and actuators into your circuits to create responsive and interactive systems.</p>
                <h3 class="text-xl font-semibold mt-6">Sensors:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Types: Temperature, light, motion, and more.</li>
                  <li>Connecting sensors to microcontrollers for data acquisition.</li>
                  <li>Interpreting sensor data to drive system behavior.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Actuators:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Types: Motors, servos, relays, and LEDs.</li>
                  <li>Controlling actuators through microcontroller outputs.</li>
                  <li>Implementing feedback mechanisms for dynamic control.</li>
                </ul>
                <h3 class="text-xl font-semibold mt-6">Interactive System Design:</h3>
                <ul class="list-disc list-inside mt-2">
                  <li>Combining multiple sensors and actuators for complex interactions.</li>
                  <li>Programming logic to respond to sensor inputs.</li>
                  <li>Testing and refining interactive prototypes for reliability.</li>
                </ul>
              `,
          videoUrl: "https://example.com/week5-integrating-sensors-actuators",
        },
        {
          title: "Chapter 5.5: Summary",
          content: `
                <h2 class="text-2xl font-bold">Week 5 Summary: Advanced Circuit Schematics</h2>
                <p class="mt-4">This week, you've explored:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>Designing and analyzing complex circuit diagrams.</li>
                  <li>Creating PCB layouts for advanced projects.</li>
                  <li>Integrating sensors and actuators to build interactive systems.</li>
                </ul>
                <p class="mt-4">These advanced skills are essential for developing sophisticated prototypes and preparing for real-world applications in circuit design.</p>
              `,
          // videoUrl removed
        },
        {
          title: "Chapter 5.6: Quiz",
          content: `
                <h2 class="text-2xl font-bold">Test Your Understanding</h2>
                <p class="mt-4">Assess your grasp of the key concepts from this week.</p>
              `,
          // videoUrl removed
          quiz: {
            question:
              "What is the purpose of creating Gerber files in PCB design?",
            options: [
              "To simulate the circuit behavior.",
              "To program the microcontroller.",
              "To fabricate the physical PCB.",
              "To visualize the 3D model.",
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

export default function CADCoursePage() {
  return <CoursePage courseData={CADCourseData} />;
}
