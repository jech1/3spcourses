"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const CircuitCourseData: CourseData = {
  title: "Microcontroller & Circuit Design",
  weeks: [
    // Week 1
    {
      title: "Week 1: Introduction; Software Downloads and Online Resources",
      chapters: [
        {
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Welcome to Microcontroller & Circuit Design</h2>
            <p class="mt-4">This course is designed to equip you with the essential skills needed to build reliable prototypes. You'll learn to program microcontrollers using C++, design circuits, and solder components effectively.</p>
            <h3 class="text-xl font-semibold mt-6">Course Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understand the fundamentals of electronics and microcontroller programming.</li>
              <li>Set up the necessary software tools for development.</li>
              <li>Access and utilize online resources and communities for support.</li>
              <li>Familiarize yourself with hardware setup and connectivity basics.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-chapter1-video",
        },
        {
          title:
            "Chapter 2: Setting up Arduino IDE and Understanding Its Interface",
          content: `
            <h2 class="text-2xl font-bold">Arduino IDE Setup</h2>
            <p class="mt-4">The Arduino Integrated Development Environment (IDE) is a crucial tool for programming microcontrollers. This chapter guides you through the installation and navigation of the Arduino IDE.</p>
            <h3 class="text-xl font-semibold mt-6">Steps to Install Arduino IDE:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Download the Arduino IDE from the official website.</li>
              <li>Follow the installation prompts for your operating system.</li>
              <li>Launch the IDE and familiarize yourself with the interface.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Navigating the Interface:</h3>
            <p class="mt-4">The Arduino IDE consists of several key components:</p>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Menu Bar:</strong> Access various tools and settings.</li>
              <li><strong>Toolbar:</strong> Quick access to common functions like uploading code.</li>
              <li><strong>Editor:</strong> Write and edit your C++ code.</li>
              <li><strong>Console:</strong> View compilation and upload messages.</li>
              <li><strong>Board Selection:</strong> Choose the appropriate microcontroller board.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Customize the IDE theme for better readability.</li>
              <li>Install additional libraries as needed for your projects.</li>
              <li>Utilize the built-in examples to get started quickly.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-chapter2-video",
        },
        {
          title:
            "Chapter 3: Exploring Online Resources and Communities for Support",
          content: `
            <h2 class="text-2xl font-bold">Leveraging Online Resources</h2>
            <p class="mt-4">Engaging with online communities and utilizing available resources can significantly enhance your learning experience. This chapter introduces you to valuable platforms and tools.</p>
            <h3 class="text-xl font-semibold mt-6">Key Online Resources:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Arduino Official Website:</strong> Access documentation, tutorials, and project ideas.</li>
              <li><strong>Forums:</strong> Participate in discussions and seek help from experienced members.</li>
              <li><strong>GitHub:</strong> Explore repositories for code examples and collaborate on projects.</li>
              <li><strong>YouTube Channels:</strong> Watch tutorials and demonstrations.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Regularly check forums for solutions to common problems.</li>
              <li>Contribute to discussions to build a network of peers.</li>
              <li>Utilize GitHub for version control and project management.</li>
              <li>Stay updated with the latest tutorials and advancements.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-chapter3-video",
        },
        {
          title:
            "Chapter 4: Familiarizing with Hardware Setup and Connectivity Basics",
          content: `
            <h2 class="text-2xl font-bold">Hardware Setup Essentials</h2>
            <p class="mt-4">A proper hardware setup is vital for successful circuit design and microcontroller programming. This chapter covers the basics of hardware connectivity.</p>
            <h3 class="text-xl font-semibold mt-6">Components Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Microcontroller Boards:</strong> Understanding different types like Arduino Uno, Nano, etc.</li>
              <li><strong>Breadboards:</strong> Tools for building and testing circuits without soldering.</li>
              <li><strong>Jumper Wires:</strong> Essential for making connections on a breadboard.</li>
              <li><strong>Power Supplies:</strong> Methods to provide stable power to your circuits.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Connectivity Basics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding pin configurations on microcontroller boards.</li>
              <li>Safe handling of electronic components to prevent damage.</li>
              <li>Establishing reliable connections to ensure circuit functionality.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Safety Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Always power off components before making connections.</li>
              <li>Avoid short circuits by double-checking connections.</li>
              <li>Use appropriate resistors to protect sensitive components.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week1-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 1 Summary: Introduction</h2>
            <p class="mt-4">In the first week, we've covered the foundational aspects of Microcontroller & Circuit Design:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Introduction to the course and its objectives.</li>
              <li>Setting up the Arduino IDE and navigating its interface.</li>
              <li>Exploring valuable online resources and communities.</li>
              <li>Understanding hardware setup and connectivity basics.</li>
            </ul>
            <p class="mt-4">These topics lay the groundwork for the upcoming weeks, where we'll delve deeper into electrical components, microcontroller programming, and advanced circuit design.</p>
          `,
          videoUrl: "https://example.com/week1-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 1.</p>
          `,
          videoUrl: "https://example.com/week1-chapter6-video",
          quiz: {
            question: "What is the primary purpose of the Arduino IDE?",
            options: [
              "Designing circuit boards",
              "Programming microcontrollers",
              "Soldering components",
              "Testing electrical signals",
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
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Understanding Electrical Components</h2>
            <p class="mt-4">This week focuses on identifying and understanding essential electrical components used in circuit design.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify and understand resistors, capacitors, and diodes.</li>
              <li>Safely use breadboards and power supplies in circuits.</li>
              <li>Develop basic troubleshooting techniques for faulty components.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-chapter1-video",
        },
        {
          title:
            "Chapter 2: Identifying and Understanding Resistors, Capacitors, and Diodes",
          content: `
            <h2 class="text-2xl font-bold">Core Electronic Components</h2>
            <p class="mt-4">Resistors, capacitors, and diodes are fundamental components in electronic circuits. Understanding their functions and characteristics is crucial for effective circuit design.</p>
            <h3 class="text-xl font-semibold mt-6">Resistors:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Purpose: Limit current flow and divide voltages.</li>
              <li>Units: Ohms (Ω).</li>
              <li>Types: Fixed, variable, and specialty resistors.</li>
              <li>Color Coding: Method to identify resistor values.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Capacitors:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Purpose: Store and release electrical energy.</li>
              <li>Units: Farads (F), commonly microfarads (µF) and nanofarads (nF).</li>
              <li>Types: Ceramic, electrolytic, tantalum, and film capacitors.</li>
              <li>Applications: Filtering, timing circuits, and energy storage.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Diodes:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Purpose: Allow current to flow in one direction only.</li>
              <li>Types: Standard diodes, Zener diodes, LEDs, and Schottky diodes.</li>
              <li>Applications: Rectification, voltage regulation, and signal demodulation.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-chapter2-video",
        },
        {
          title:
            "Chapter 3: Safely Using Breadboards and Power Supplies in Circuits",
          content: `
            <h2 class="text-2xl font-bold">Breadboards and Power Management</h2>
            <p class="mt-4">Proper usage of breadboards and power supplies ensures safe and efficient circuit construction.</p>
            <h3 class="text-xl font-semibold mt-6">Using Breadboards:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding breadboard layout and connections.</li>
              <li>Placing components without soldering for easy modifications.</li>
              <li>Organizing circuits to avoid cross-connections and shorts.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Power Supplies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Types: USB power, battery packs, and regulated power supplies.</li>
              <li>Ensuring correct voltage and current ratings for components.</li>
              <li>Implementing protection measures like fuses and current-limiting resistors.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Safety Precautions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Double-check connections before powering the circuit.</li>
              <li>Avoid overloading power supplies.</li>
              <li>Use insulated tools to prevent accidental shorts.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-chapter3-video",
        },
        {
          title:
            "Chapter 4: Basic Troubleshooting Techniques for Faulty Components",
          content: `
            <h2 class="text-2xl font-bold">Diagnosing Circuit Issues</h2>
            <p class="mt-4">Troubleshooting is a critical skill in circuit design, enabling you to identify and fix issues effectively.</p>
            <h3 class="text-xl font-semibold mt-6">Common Issues:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Loose or incorrect connections.</li>
              <li>Component failures or damage.</li>
              <li>Short circuits and open circuits.</li>
              <li>Incorrect power supply voltage.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Troubleshooting Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Visual Inspection:</strong> Check for visible signs of damage or incorrect placements.</li>
              <li><strong>Use a Multimeter:</strong> Measure voltage, current, and resistance to identify anomalies.</li>
              <li><strong>Isolate Components:</strong> Test individual components to ensure they function correctly.</li>
              <li><strong>Verify Connections:</strong> Ensure all connections match the circuit diagram.</li>
              <li><strong>Replace Suspected Components:</strong> Swap out components to see if the issue resolves.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Tools for Troubleshooting:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Multimeter:</strong> Essential for measuring electrical values.</li>
              <li><strong>Soldering Iron:</strong> Useful for fixing or reworking connections.</li>
              <li><strong>Oscilloscope:</strong> Advanced tool for observing signal waveforms.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week2-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 2 Summary: Electrical Components</h2>
            <p class="mt-4">This week, we've delved into:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Identifying and understanding key electrical components: resistors, capacitors, and diodes.</li>
              <li>Safely using breadboards and power supplies in circuit construction.</li>
              <li>Developing basic troubleshooting techniques to diagnose and fix circuit issues.</li>
            </ul>
            <p class="mt-4">These foundational skills are essential as we advance to more complex topics in microcontroller programming and advanced circuitry.</p>
          `,
          videoUrl: "https://example.com/week2-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 2.</p>
          `,
          videoUrl: "https://example.com/week2-chapter6-video",
          quiz: {
            question:
              "What is the primary function of a resistor in a circuit?",
            options: [
              "Store electrical energy",
              "Allow current to flow in one direction",
              "Limit current flow",
              "Amplify signals",
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
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Programming Fundamentals</h2>
            <p class="mt-4">This week focuses on writing and uploading simple C++ programs to microcontrollers. You'll explore data types, variables, logic control structures, and the use of functions to organize your code.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Write and upload C++ programs to microcontrollers.</li>
              <li>Understand data types and variable declarations.</li>
              <li>Implement logic control structures like loops and conditionals.</li>
              <li>Use functions to organize and modularize code.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-chapter1-video",
        },
        {
          title:
            "Chapter 2: Writing and Uploading Simple C++ Programs to Microcontrollers",
          content: `
            <h2 class="text-2xl font-bold">Getting Started with C++ Programming</h2>
            <p class="mt-4">In this chapter, you'll learn how to write basic C++ programs and upload them to your microcontroller using the Arduino IDE.</p>
            <h3 class="text-xl font-semibold mt-6">Writing Your First Program:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Arduino.h&gt;
    
    void setup() {
        pinMode(LED_BUILTIN, OUTPUT); // Initialize the built-in LED pin as an output
    }
    
    void loop() {
        digitalWrite(LED_BUILTIN, HIGH); // Turn the LED on
        delay(1000); // Wait for one second
        digitalWrite(LED_BUILTIN, LOW); // Turn the LED off
        delay(1000); // Wait for one second
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Uploading the Program:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Connect your microcontroller board to your computer via USB.</li>
              <li>Open the Arduino IDE and select the correct board and port from the 'Tools' menu.</li>
              <li>Paste the above code into the editor.</li>
              <li>Click the 'Upload' button to compile and transfer the code to the microcontroller.</li>
              <li>Observe the built-in LED blinking to confirm successful upload.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Troubleshooting Upload Issues:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Ensure the correct board and port are selected in the Arduino IDE.</li>
              <li>Check the USB connection and cables for faults.</li>
              <li>Restart the Arduino IDE and try uploading again.</li>
              <li>Verify that the microcontroller board is functioning properly.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week3-chapter2-video",
        },
        {
          title:
            "Chapter 3: Understanding Data Types, Variables, and Logic Control Structures",
          content: `
            <h2 class="text-2xl font-bold">Core Programming Concepts</h2>
            <p class="mt-4">This chapter delves into the fundamental aspects of C++ programming, including data types, variables, and control structures that dictate the flow of your programs.</p>
            <h3 class="text-xl font-semibold mt-6">Data Types:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>int:</strong> Integer numbers (e.g., 1, 2, 3).</li>
              <li><strong>float:</strong> Single-precision floating-point numbers (e.g., 3.14).</li>
              <li><strong>double:</strong> Double-precision floating-point numbers.</li>
              <li><strong>char:</strong> Single characters (e.g., 'A').</li>
              <li><strong>bool:</strong> Boolean values (true or false).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Variables:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Containers for storing data values.</li>
              <li>Must be declared with a specific data type before use.</li>
              <li>Example: <code>int count = 10;</code></li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Control Structures:</h3>
            <h4 class="text-lg font-semibold mt-4">Conditional Statements:</h4>
            <pre class="bg-gray-100 p-4 rounded">
    if (condition) {
        // code to execute if condition is true
    } else {
        // code to execute if condition is false
    }
            </pre>
            <h4 class="text-lg font-semibold mt-4">Loops:</h4>
            <pre class="bg-gray-100 p-4 rounded">
    // For loop example
    for (int i = 0; i &lt; 5; i++) {
        Serial.println(i);
    }
    
    // While loop example
    int j = 0;
    while (j &lt; 5) {
        Serial.println(j);
        j++;
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Logical Operators:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>&&:</strong> Logical AND</li>
              <li><strong>||:</strong> Logical OR</li>
              <li><strong>!:</strong> Logical NOT</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Program:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Arduino.h&gt;
    
    int threshold = 50;
    
    void setup() {
        Serial.begin(9600);
    }
    
    void loop() {
        int sensorValue = analogRead(A0);
        if (sensorValue &gt; threshold) {
            Serial.println("Sensor value is above threshold.");
        } else {
            Serial.println("Sensor value is below threshold.");
        }
        delay(1000);
    }
            </pre>
            <p class="mt-4">This program reads a value from analog pin A0 and prints a message based on whether the value exceeds the threshold.</p>
          `,
          videoUrl: "https://example.com/week3-chapter3-video",
        },
        {
          title:
            "Chapter 4: Using Functions to Organize Code for Complex Operations",
          content: `
            <h2 class="text-2xl font-bold">Modular Programming with Functions</h2>
            <p class="mt-4">Functions help in organizing code into reusable blocks, making programs more manageable and scalable.</p>
            <h3 class="text-xl font-semibold mt-6">Defining Functions:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    // Function declaration
    void blinkLED(int pin, int delayTime);
    
    // Function definition
    void blinkLED(int pin, int delayTime) {
        digitalWrite(pin, HIGH);
        delay(delayTime);
        digitalWrite(pin, LOW);
        delay(delayTime);
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Calling Functions:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    void setup() {
        pinMode(LED_BUILTIN, OUTPUT);
    }
    
    void loop() {
        blinkLED(LED_BUILTIN, 500); // Blinks the LED with a 500ms interval
    }
            </pre>
            <h3 class="text-xl font-semibold mt-6">Benefits of Using Functions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Promotes code reusability and reduces redundancy.</li>
              <li>Enhances readability by breaking down complex operations.</li>
              <li>Facilitates easier debugging and maintenance.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Arduino.h&gt;
    
    // Function to initialize LEDs
    void initializeLED(int pin) {
        pinMode(pin, OUTPUT);
    }
    
    // Function to turn on LED
    void turnOnLED(int pin) {
        digitalWrite(pin, HIGH);
    }
    
    // Function to turn off LED
    void turnOffLED(int pin) {
        digitalWrite(pin, LOW);
    }
    
    void setup() {
        initializeLED(LED_BUILTIN);
    }
    
    void loop() {
        turnOnLED(LED_BUILTIN);
        delay(1000);
        turnOffLED(LED_BUILTIN);
        delay(1000);
    }
            </pre>
            <p class="mt-4">In this example, functions are used to initialize, turn on, and turn off the LED, making the code more organized and reusable.</p>
          `,
          videoUrl: "https://example.com/week3-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 3 Summary: Programming A Microcontroller</h2>
            <p class="mt-4">This week, we've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Writing and uploading simple C++ programs to microcontrollers using the Arduino IDE.</li>
              <li>Understanding data types, variables, and their declarations in C++.</li>
              <li>Implementing logic control structures like conditionals and loops.</li>
              <li>Using functions to organize and modularize code for complex operations.</li>
            </ul>
            <p class="mt-4">These programming fundamentals are essential for developing more advanced microcontroller applications in the coming weeks.</p>
          `,
          videoUrl: "https://example.com/week3-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 3.</p>
          `,
          videoUrl: "https://example.com/week3-chapter6-video",
          quiz: {
            question: "What is the purpose of a function in programming?",
            options: [
              "To store data values",
              "To perform specific tasks and promote code reusability",
              "To control the flow of the program",
              "To define data types",
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
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Building Basic Circuits</h2>
            <p class="mt-4">This week introduces you to constructing simple circuits using LEDs, resistors, and switches. You'll also learn about fundamental electrical relationships and safely testing circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Build basic circuits with LEDs, resistors, and switches.</li>
              <li>Understand voltage, current, and resistance relationships.</li>
              <li>Safely test circuits using a multimeter.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-chapter1-video",
        },
        {
          title:
            "Chapter 2: Building Basic Circuits with LEDs, Resistors, and Switches",
          content: `
            <h2 class="text-2xl font-bold">Hands-On Circuit Construction</h2>
            <p class="mt-4">Learn how to assemble basic circuits that incorporate LEDs, resistors, and switches. This practical exercise reinforces your understanding of component functions and circuit behavior.</p>
            <h3 class="text-xl font-semibold mt-6">Components Needed:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>LEDs (Light Emitting Diodes)</li>
              <li>Resistors (e.g., 220Ω)</li>
              <li>Switches</li>
              <li>Breadboard and jumper wires</li>
              <li>Microcontroller (e.g., Arduino Uno)</li>
              <li>Power supply (e.g., USB or battery pack)</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Circuit Diagram:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    [Microcontroller] --- [Switch] --- [Resistor] --- [LED] --- GND
            </pre>
            <h3 class="text-xl font-semibold mt-6">Steps to Build:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Place the LED on the breadboard, ensuring the longer leg (anode) is connected towards positive voltage.</li>
              <li>Connect a resistor to the anode of the LED to limit current flow.</li>
              <li>Attach a switch in series between the resistor and the microcontroller's output pin.</li>
              <li>Connect the cathode of the LED to the ground (GND) pin on the microcontroller.</li>
              <li>Power the circuit and test the switch functionality.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Safety Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Always start with power off when building circuits.</li>
              <li>Use appropriate resistor values to prevent LED burnout.</li>
              <li>Double-check connections to avoid short circuits.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-chapter2-video",
        },
        {
          title:
            "Chapter 3: Understanding Voltage, Current, and Resistance Relationships",
          content: `
            <h2 class="text-2xl font-bold">Ohm's Law and Electrical Fundamentals</h2>
            <p class="mt-4">A solid understanding of voltage, current, and resistance is essential for designing and analyzing circuits. This chapter covers Ohm's Law and how these parameters interrelate.</p>
            <h3 class="text-xl font-semibold mt-6">Ohm's Law:</h3>
            <p class="mt-4">Ohm's Law states that the current (I) through a conductor between two points is directly proportional to the voltage (V) across the two points and inversely proportional to the resistance (R) between them.</p>
            <pre class="bg-gray-100 p-4 rounded">
    V = I * R
    </pre>
            <h3 class="text-xl font-semibold mt-6">Voltage (V):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Measured in volts (V).</li>
              <li>Represents the electrical potential difference between two points.</li>
              <li>Acts as the 'push' that drives current through a circuit.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Current (I):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Measured in amperes (A).</li>
              <li>Represents the flow of electric charge through a conductor.</li>
              <li>Determines the operational functionality of components like LEDs.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Resistance (R):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Measured in ohms (Ω).</li>
              <li>Represents the opposition to current flow within a circuit.</li>
              <li>Controlled using components like resistors to protect sensitive elements.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Applying Ohm's Law:</h3>
            <p class="mt-4">Given any two parameters (V, I, R), you can calculate the third:</p>
            <ul class="list-disc list-inside mt-2">
              <li><strong>To find Voltage:</strong> V = I * R</li>
              <li><strong>To find Current:</strong> I = V / R</li>
              <li><strong>To find Resistance:</strong> R = V / I</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Practical Example:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    Suppose you have a resistor with 220Ω and you want a current of 0.02A (20mA) through an LED:
    
    V = I * R
    V = 0.02A * 220Ω
    V = 4.4V
    </pre>
            <p class="mt-4">Ensure your power supply provides at least 4.4V to achieve the desired current flow.</p>
          `,
          videoUrl: "https://example.com/week4-chapter3-video",
        },
        {
          title: "Chapter 4: Safely Testing Circuits with a Multimeter",
          content: `
            <h2 class="text-2xl font-bold">Using a Multimeter for Circuit Diagnostics</h2>
            <p class="mt-4">A multimeter is an essential tool for testing and diagnosing electrical circuits. This chapter covers the safe and effective use of a multimeter in your projects.</p>
            <h3 class="text-xl font-semibold mt-6">Multimeter Basics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Types of Measurements:</strong> Voltage (V), Current (A), and Resistance (Ω).</li>
              <li><strong>Probes:</strong> Red (positive) and black (negative) probes for connections.</li>
              <li><strong>Modes:</strong> Switch between different measurement modes using the dial.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Measuring Voltage:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Set the multimeter to the appropriate voltage range (AC or DC).</li>
              <li>Connect the red probe to the positive point and the black probe to the ground.</li>
              <li>Read the voltage value displayed on the multimeter.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Measuring Current:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Set the multimeter to the appropriate current range.</li>
              <li>Open the circuit and insert the multimeter probes in series with the component.</li>
              <li>Read the current value displayed.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Measuring Resistance:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Ensure the circuit is powered off and components are discharged.</li>
              <li>Set the multimeter to the resistance (Ω) mode.</li>
              <li>Touch the probes to either side of the component.</li>
              <li>Read the resistance value displayed.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Safety Precautions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Never measure resistance in a live circuit.</li>
              <li>Start with the highest measurement range to prevent damage.</li>
              <li>Avoid shorting the probes together, especially in high-voltage settings.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Practical Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use proper probe placement to ensure accurate readings.</li>
              <li>Regularly calibrate your multimeter for precise measurements.</li>
              <li>Familiarize yourself with your multimeter's manual and features.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week4-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 4 Summary: Circuit Basics</h2>
            <p class="mt-4">This week, we've covered:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Building basic circuits using LEDs, resistors, and switches.</li>
              <li>Understanding the relationships between voltage, current, and resistance through Ohm's Law.</li>
              <li>Safely testing and diagnosing circuits using a multimeter.</li>
            </ul>
            <p class="mt-4">These skills are foundational for more advanced circuit designs and microcontroller integrations in the upcoming weeks.</p>
          `,
          videoUrl: "https://example.com/week4-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 4.</p>
          `,
          videoUrl: "https://example.com/week4-chapter6-video",
          quiz: {
            question: "What does Ohm's Law state?",
            options: [
              "Voltage equals current multiplied by resistance.",
              "Current equals voltage divided by power.",
              "Resistance equals voltage divided by current.",
              "Power equals voltage times current.",
            ],
            correctAnswer: 0,
          },
        },
      ],
    },
    // Week 5
    {
      title: "Week 5: Advanced Circuit Schematics",
      chapters: [
        {
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Designing Complex Circuit Diagrams</h2>
            <p class="mt-4">This week focuses on designing and analyzing advanced circuit diagrams, creating PCB layouts, and integrating sensors and actuators for interactive systems.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Design and analyze complex circuit schematics.</li>
              <li>Create Printed Circuit Board (PCB) layouts for advanced projects.</li>
              <li>Integrate sensors and actuators into your systems for enhanced functionality.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week5-chapter1-video",
        },
        {
          title: "Chapter 2: Designing and Analyzing Complex Circuit Diagrams",
          content: `
            <h2 class="text-2xl font-bold">Advanced Circuit Design Techniques</h2>
            <p class="mt-4">Learn to create detailed circuit diagrams that incorporate multiple components and complex functionalities. Proper schematic design is essential for successful circuit implementation.</p>
            <h3 class="text-xl font-semibold mt-6">Tools for Circuit Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Eagle:</strong> PCB design software with schematic capture capabilities.</li>
              <li><strong>KiCad:</strong> Open-source tool for electronic design automation (EDA).</li>
              <li><strong>Fritzing:</strong> User-friendly tool for breadboard-based circuit design.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Design Principles:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Maintain clarity and readability in schematics.</li>
              <li>Use standardized symbols for components.</li>
              <li>Ensure correct connections and component placement.</li>
              <li>Plan for future modifications and scalability.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Analyzing Circuit Functionality:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify input and output points.</li>
              <li>Understand signal flow and component interactions.</li>
              <li>Simulate circuits to predict behavior before physical implementation.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Circuit:</h3>
            <pre class="bg-gray-100 p-4 rounded">
    [Microcontroller] --- [Sensor] --- [Amplifier] --- [Actuator]
            </pre>
            <p class="mt-4">This schematic represents a system where a sensor detects environmental data, which is amplified and then used to control an actuator.</p>
          `,
          videoUrl: "https://example.com/week5-chapter2-video",
        },
        {
          title: "Chapter 3: Creating PCB Layouts for Advanced Projects",
          content: `
            <h2 class="text-2xl font-bold">From Schematic to Physical Board</h2>
            <p class="mt-4">Printed Circuit Boards (PCBs) provide a durable and organized way to assemble complex circuits. This chapter guides you through the process of creating PCB layouts.</p>
            <h3 class="text-xl font-semibold mt-6">PCB Design Process:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Schematic Capture:</strong> Create a detailed circuit diagram using EDA software.</li>
              <li><strong>Component Placement:</strong> Strategically position components on the PCB layout.</li>
              <li><strong>Routing:</strong> Connect components with copper traces, ensuring minimal interference.</li>
              <li><strong>Design Rule Check (DRC):</strong> Validate the PCB layout for errors and adherence to design standards.</li>
              <li><strong>Generating Gerber Files:</strong> Prepare files needed for PCB manufacturing.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Keep trace lengths as short as possible to reduce resistance and inductance.</li>
              <li>Avoid crossing traces to minimize interference.</li>
              <li>Use ground planes to provide a stable reference and reduce noise.</li>
              <li>Label components clearly for easy assembly and troubleshooting.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example PCB Layout:</h3>
            <p class="mt-4">An example PCB layout for a temperature monitoring system includes sensor connections, microcontroller placement, and actuator interfaces, all organized for optimal performance.</p>
          `,
          videoUrl: "https://example.com/week5-chapter3-video",
        },
        {
          title:
            "Chapter 4: Integrating Sensors and Actuators for Interactive Systems",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Functionality with Sensors and Actuators</h2>
            <p class="mt-4">Sensors and actuators enable your systems to interact with the environment. This chapter explores their integration into your circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Types of Sensors:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Temperature Sensors:</strong> Measure ambient temperature (e.g., TMP36).</li>
              <li><strong>Light Sensors:</strong> Detect light intensity (e.g., LDR).</li>
              <li><strong>Motion Sensors:</strong> Sense movement (e.g., PIR sensor).</li>
              <li><strong>Proximity Sensors:</strong> Detect the presence of nearby objects (e.g., ultrasonic sensor).</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Types of Actuators:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>LEDs:</strong> Provide visual indicators.</li>
              <li><strong>Motors:</strong> Enable movement (e.g., DC motors, servos).</li>
              <li><strong>Buzzers:</strong> Generate sound signals.</li>
              <li><strong>Relays:</strong> Control high-power devices.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Integration Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Select appropriate sensors and actuators based on project requirements.</li>
              <li>Connect sensors to input pins and actuators to output pins on the microcontroller.</li>
              <li>Write code to read sensor data and control actuators accordingly.</li>
              <li>Test and calibrate sensor readings and actuator responses.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p class="mt-4">A basic environmental monitoring system that reads temperature and light levels, then activates LEDs and buzzers based on predefined thresholds.</p>
          `,
          videoUrl: "https://example.com/week5-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 5 Summary: Advanced Circuit Schematics</h2>
            <p class="mt-4">This week, we've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Designing and analyzing complex circuit diagrams.</li>
              <li>Creating PCB layouts for advanced projects using EDA tools.</li>
              <li>Integrating sensors and actuators to build interactive systems.</li>
            </ul>
            <p class="mt-4">These advanced skills are pivotal for developing sophisticated prototypes and transitioning from breadboard-based circuits to permanent PCB designs.</p>
          `,
          videoUrl: "https://example.com/week5-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 5.</p>
          `,
          videoUrl: "https://example.com/week5-chapter6-video",
          quiz: {
            question: "What is the primary purpose of creating a PCB layout?",
            options: [
              "To perform software debugging",
              "To create a permanent and organized circuit",
              "To program microcontrollers",
              "To test electrical components",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 6
    {
      title: "Week 6: Circuit Designs",
      chapters: [
        {
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Enhancing Circuit Design Skills</h2>
            <p class="mt-4">This week focuses on using software tools for PCB design and simulation, testing and refining circuits on breadboards, and exploring best practices for prototype assembly.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Utilize software tools for PCB design and simulation.</li>
              <li>Test and refine circuits on breadboards effectively.</li>
              <li>Adopt best practices for assembling reliable prototypes.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week6-chapter1-video",
        },
        {
          title:
            "Chapter 2: Using Software Tools for PCB Design and Simulation",
          content: `
            <h2 class="text-2xl font-bold">Advanced PCB Design and Simulation</h2>
            <p class="mt-4">Leveraging software tools like KiCad and Eagle enhances your ability to design intricate PCBs and simulate their behavior before physical implementation.</p>
            <h3 class="text-xl font-semibold mt-6">PCB Design Software:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>KiCad:</strong> Open-source EDA tool for schematic capture and PCB layout.</li>
              <li><strong>Eagle:</strong> Comprehensive tool with powerful features for PCB design.</li>
              <li><strong>Fritzing:</strong> User-friendly tool suitable for beginners.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Simulation Tools:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>LTspice:</strong> Software for simulating electronic circuits.</li>
              <li><strong>Proteus:</strong> Combines circuit simulation with microcontroller emulation.</li>
              <li><strong>Multisim:</strong> Comprehensive tool for circuit simulation and analysis.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Design Workflow:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Create a schematic diagram using PCB design software.</li>
              <li>Convert the schematic to a PCB layout, placing components strategically.</li>
              <li>Route the connections between components, adhering to design rules.</li>
              <li>Simulate the circuit to verify functionality and identify potential issues.</li>
              <li>Generate Gerber files for PCB manufacturing.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Plan component placement for optimal signal flow and minimal interference.</li>
              <li>Use ground planes to reduce noise and provide a stable reference.</li>
              <li>Maintain clear labeling for easy assembly and troubleshooting.</li>
              <li>Review and validate designs through simulation before manufacturing.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week6-chapter2-video",
        },
        {
          title: "Chapter 3: Testing and Refining Circuits on Breadboards",
          content: `
            <h2 class="text-2xl font-bold">Iterative Circuit Development</h2>
            <p class="mt-4">Testing circuits on breadboards allows for rapid prototyping and refinement before committing to a permanent PCB design. This chapter covers effective strategies for testing and optimizing your circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Testing Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Start with simple configurations to verify individual components.</li>
              <li>Gradually build up the circuit complexity, testing each stage.</li>
              <li>Use a multimeter and oscilloscope to monitor electrical signals.</li>
              <li>Implement test points in your breadboard layout for easier measurements.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Refining Circuits:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify and fix any issues or inefficiencies in the circuit design.</li>
              <li>Optimize component placement to reduce noise and improve performance.</li>
              <li>Ensure reliable connections to prevent intermittent faults.</li>
              <li>Document changes and iterations for future reference.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Common Challenges:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Managing complex wiring without creating clutter.</li>
              <li>Ensuring consistent power supply across the circuit.</li>
              <li>Preventing signal interference and cross-talk.</li>
              <li>Maintaining component orientation for correct functionality.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example:</h3>
            <p class="mt-4">Building a temperature monitoring system on a breadboard involves connecting the temperature sensor, microcontroller, and display module. Test each component individually before integrating them into the complete system.</p>
          `,
          videoUrl: "https://example.com/week6-chapter3-video",
        },
        {
          title: "Chapter 4: Exploring Best Practices for Prototype Assembly",
          content: `
            <h2 class="text-2xl font-bold">Assembling Reliable Prototypes</h2>
            <p class="mt-4">Following best practices in prototype assembly ensures the longevity and functionality of your circuits. This chapter outlines essential techniques and tips for effective assembly.</p>
            <h3 class="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Organize components systematically to enhance readability and ease of troubleshooting.</li>
              <li>Use color-coded jumper wires to differentiate connections.</li>
              <li>Secure components firmly to prevent movement and accidental disconnections.</li>
              <li>Label connections and components for quick identification.</li>
              <li>Avoid overcrowding the breadboard to reduce the risk of shorts.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Soldering Tips (for PCB Assembly):</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use a quality soldering iron with appropriate temperature settings.</li>
              <li>Practice proper soldering techniques to ensure strong connections.</li>
              <li>Work in a well-ventilated area to avoid inhaling fumes.</li>
              <li>Trim excess leads after soldering to maintain a clean layout.</li>
              <li>Inspect solder joints for any signs of defects or cold soldering.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Documentation and Iteration:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Maintain detailed records of your circuit designs and modifications.</li>
              <li>Iterate on your designs based on testing outcomes and feedback.</li>
              <li>Utilize version control systems for tracking changes in design files.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Assembly:</h3>
            <p class="mt-4">Assembling a prototype for an automated plant watering system involves organizing the sensor connections, microcontroller setup, and actuator controls systematically on the breadboard or PCB.</p>
          `,
          videoUrl: "https://example.com/week6-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 6 Summary: Circuit Designs</h2>
            <p class="mt-4">This week, we've explored:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Using software tools like KiCad and Eagle for PCB design and simulation.</li>
              <li>Testing and refining circuits on breadboards to ensure functionality.</li>
              <li>Adopting best practices for assembling reliable and efficient prototypes.</li>
            </ul>
            <p class="mt-4">These advanced design and assembly skills are critical for developing sophisticated electronic systems and transitioning from prototype to production-ready designs.</p>
          `,
          videoUrl: "https://example.com/week6-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Test Your Understanding</h2>
            <p class="mt-4">Assess your grasp of the key concepts from Week 6.</p>
          `,
          videoUrl: "https://example.com/week6-chapter6-video",
          quiz: {
            question:
              "What is the primary purpose of simulation tools in PCB design?",
            options: [
              "To manufacture the PCB",
              "To visualize the physical layout",
              "To predict circuit behavior and identify potential issues before fabrication",
              "To solder components accurately",
            ],
            correctAnswer: 2,
          },
        },
      ],
    },
    // Week 7
    {
      title: "Week 7: Combining Hardware and Software",
      chapters: [
        {
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Integrating Hardware with Software Logic</h2>
            <p class="mt-4">This week focuses on synchronizing hardware components with software logic to create functional and interactive systems. You'll learn to integrate sensors and actuators with microcontroller code and debug integrated systems effectively.</p>
            <h3 class="text-xl font-semibold mt-6">Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Integrate sensors and actuators with microcontroller code.</li>
              <li>Synchronize hardware functionality with software logic.</li>
              <li>Develop debugging techniques for integrated systems.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week7-chapter1-video",
        },
        {
          title:
            "Chapter 2: Integrating Sensors and Actuators with Microcontroller Code",
          content: `
            <h2 class="text-2xl font-bold">Enhancing System Interactivity</h2>
            <p class="mt-4">Integrating sensors and actuators with your microcontroller allows your system to interact with the environment and perform specific actions based on input data.</p>
            <h3 class="text-xl font-semibold mt-6">Steps for Integration:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Select appropriate sensors and actuators for your project.</li>
              <li>Connect sensors to input pins and actuators to output pins on the microcontroller.</li>
              <li>Write code to read sensor data and control actuators accordingly.</li>
              <li>Test each component individually before integrating into the complete system.</li>
              <li>Implement feedback mechanisms to ensure reliable operation.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Example: Automated LED Control Based on Light Sensor</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Arduino.h&gt;
    
    const int sensorPin = A0;
    const int ledPin = LED_BUILTIN;
    int sensorValue = 0;
    
    void setup() {
        pinMode(ledPin, OUTPUT);
        Serial.begin(9600);
    }
    
    void loop() {
        sensorValue = analogRead(sensorPin);
        Serial.println(sensorValue);
        
        if (sensorValue &lt; 500) { // If it's dark
            digitalWrite(ledPin, HIGH); // Turn LED on
        } else {
            digitalWrite(ledPin, LOW); // Turn LED off
        }
        delay(1000);
    }
            </pre>
            <p class="mt-4">In this example, the LED turns on when the ambient light level is below a certain threshold, demonstrating the integration of a light sensor with microcontroller code.</p>
          `,
          videoUrl: "https://example.com/week7-chapter2-video",
        },
        {
          title:
            "Chapter 3: Synchronizing Hardware Functionality with Software Logic",
          content: `
            <h2 class="text-2xl font-bold">Coordinating Hardware and Software</h2>
            <p class="mt-4">Effective synchronization between hardware components and software logic ensures seamless operation and responsiveness in your systems.</p>
            <h3 class="text-xl font-semibold mt-6">Techniques for Synchronization:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Interrupts:</strong> Handle asynchronous events by interrupting the main program flow.</li>
              <li><strong>Polling:</strong> Regularly check the status of inputs within the main loop.</li>
              <li><strong>State Machines:</strong> Manage different states of the system based on inputs and events.</li>
              <li><strong>Timers:</strong> Execute actions at specific time intervals.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Implementing Synchronization:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Define the desired behavior and interactions of your system.</li>
              <li>Map out how hardware inputs will influence software actions.</li>
              <li>Use appropriate synchronization techniques to manage interactions.</li>
              <li>Test the synchronized system to ensure reliable performance.</li>
              <li>Optimize the code to handle concurrent operations efficiently.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Example: Motion-Activated LED System</h3>
            <pre class="bg-gray-100 p-4 rounded">
    #include &lt;Arduino.h&gt;
    
    const int motionSensorPin = 2;
    const int ledPin = LED_BUILTIN;
    
    void setup() {
        pinMode(motionSensorPin, INPUT);
        pinMode(ledPin, OUTPUT);
        Serial.begin(9600);
    }
    
    void loop() {
        int motionDetected = digitalRead(motionSensorPin);
        Serial.println(motionDetected);
        
        if (motionDetected == HIGH) {
            digitalWrite(ledPin, HIGH); // Turn LED on when motion is detected
        } else {
            digitalWrite(ledPin, LOW); // Turn LED off otherwise
        }
        delay(500);
    }
            </pre>
            <p class="mt-4">This program turns the LED on when motion is detected by the sensor and turns it off when no motion is detected, showcasing synchronized hardware and software functionality.</p>
          `,
          videoUrl: "https://example.com/week7-chapter3-video",
        },
        {
          title: "Chapter 4: Debugging Issues in Integrated Systems",
          content: `
            <h2 class="text-2xl font-bold">Effective Debugging Strategies</h2>
            <p class="mt-4">Debugging integrated systems can be challenging due to the interaction between hardware and software. This chapter provides strategies to identify and resolve issues efficiently.</p>
            <h3 class="text-xl font-semibold mt-6">Common Issues in Integrated Systems:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Incorrect sensor readings due to wiring errors.</li>
              <li>Actuators not responding as expected.</li>
              <li>Software bugs causing unexpected behavior.</li>
              <li>Interference between multiple hardware components.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Debugging Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Serial Monitoring:</strong> Use the Serial Monitor in Arduino IDE to output debug messages and monitor sensor values.</li>
              <li><strong>LED Indicators:</strong> Utilize additional LEDs to indicate the status of different parts of the system.</li>
              <li><strong>Isolate Components:</strong> Test each component independently to ensure they function correctly before integration.</li>
              <li><strong>Use Breakpoints and Watch Variables:</strong> In advanced IDEs, set breakpoints and monitor variable values to identify issues.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Debugging Scenario:</h3>
            <p class="mt-4">Suppose the LED in your motion-activated system isn't turning on when motion is detected. Steps to debug:</p>
            <ol class="list-decimal list-inside mt-2">
              <li>Check the wiring between the motion sensor and the microcontroller.</li>
              <li>Use the Serial Monitor to verify if motion is being detected (i.e., sensor readings).</li>
              <li>Ensure the microcontroller's code correctly interprets sensor data and controls the LED.</li>
              <li>Test the LED separately to confirm it's functioning.</li>
              <li>Replace faulty components if necessary.</li>
            </ol>
          `,
          videoUrl: "https://example.com/week7-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 7 Summary: Combining Hardware and Software</h2>
            <p class="mt-4">This week, we've delved into:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Integrating sensors and actuators with microcontroller code to build interactive systems.</li>
              <li>Synchronizing hardware functionality with software logic for seamless operation.</li>
              <li>Developing effective debugging techniques to resolve issues in integrated systems.</li>
            </ul>
            <p class="mt-4">These skills are essential for creating sophisticated and responsive electronic projects, bridging the gap between hardware design and software programming.</p>
          `,
          videoUrl: "https://example.com/week7-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Final Assessment</h2>
            <p class="mt-4">Test your comprehensive understanding of the concepts covered throughout the course.</p>
          `,
          videoUrl: "https://example.com/week7-chapter6-video",
          quiz: {
            question:
              "Which debugging technique involves outputting messages to monitor sensor values?",
            options: [
              "LED Indicators",
              "Serial Monitoring",
              "Isolate Components",
              "Use Breakpoints",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // Week 8
    {
      title: "Week 8: Final Project and Review",
      chapters: [
        {
          title: "Chapter 1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Final Project Development</h2>
            <p class="mt-4">In the final week, you'll develop a comprehensive project that integrates all the skills learned throughout the course. This project will showcase your ability to design, build, and program a functional prototype.</p>
            <h3 class="text-xl font-semibold mt-6">Project Objectives:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Apply microcontroller programming and circuit design principles.</li>
              <li>Create a functional prototype that addresses a specific problem or need.</li>
              <li>Demonstrate proficiency in integrating hardware and software components.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Project Guidelines:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Choose a project that aligns with your interests and the course material.</li>
              <li>Develop a clear project plan outlining objectives, components, and steps.</li>
              <li>Design a detailed circuit schematic and PCB layout if applicable.</li>
              <li>Write and test the necessary C++ code to control the microcontroller and interact with hardware components.</li>
              <li>Assemble and refine your prototype based on testing and feedback.</li>
              <li>Prepare a presentation or demonstration of your project, highlighting its design, functionality, and challenges overcome.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week8-chapter1-video",
        },
        {
          title: "Chapter 2: Developing a Comprehensive Project",
          content: `
            <h2 class="text-2xl font-bold">Building Your Final Project</h2>
            <p class="mt-4">This chapter guides you through the process of developing a comprehensive project, integrating all the concepts learned throughout the course.</p>
            <h3 class="text-xl font-semibold mt-6">Project Selection:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify a problem or need you wish to address.</li>
              <li>Define the objectives and functionalities of your project.</li>
              <li>Ensure the project scope is manageable within the course timeframe.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Planning and Design:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Create a detailed project plan with milestones and deadlines.</li>
              <li>Design the circuit schematic, ensuring all components are correctly connected.</li>
              <li>Develop the PCB layout if transitioning from breadboard to permanent design.</li>
              <li>Outline the software logic and structure for your C++ code.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Implementation:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Assemble the hardware components on a breadboard or PCB.</li>
              <li>Write and upload the C++ code to control the microcontroller.</li>
              <li>Test individual components and functionalities.</li>
              <li>Integrate all parts to form the complete system.</li>
              <li>Iterate on the design based on testing outcomes and feedback.</li>
            </ol>
            <h3 class="text-xl font-semibold mt-6">Testing and Refinement:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Conduct thorough testing to ensure all functionalities work as intended.</li>
              <li>Identify and fix any bugs or issues in both hardware and software.</li>
              <li>Optimize the design for performance, reliability, and efficiency.</li>
              <li>Prepare documentation detailing the project development process.</li>
            </ul>
          `,
          videoUrl: "https://example.com/week8-chapter2-video",
        },
        {
          title:
            "Chapter 3: Presenting the Project with a Focus on Design and Functionality",
          content: `
            <h2 class="text-2xl font-bold">Showcasing Your Work</h2>
            <p class="mt-4">Effectively presenting your final project highlights your understanding and application of microcontroller programming and circuit design principles.</p>
            <h3 class="text-xl font-semibold mt-6">Presentation Components:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Introduction:</strong> Brief overview of the project and its objectives.</li>
              <li><strong>Design Process:</strong> Explain the circuit design, component selection, and software development.</li>
              <li><strong>Demonstration:</strong> Showcase the functioning prototype, highlighting key features.</li>
              <li><strong>Challenges and Solutions:</strong> Discuss any obstacles faced and how they were overcome.</li>
              <li><strong>Conclusion:</strong> Summarize the project's impact and potential future enhancements.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Presentation Tips:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Keep the presentation clear and concise, focusing on the most important aspects.</li>
              <li>Use visual aids like slides, diagrams, and live demonstrations to enhance understanding.</li>
              <li>Practice delivering the presentation to ensure smooth flow and timing.</li>
              <li>Engage the audience by explaining the real-world applications and benefits of your project.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Example Presentation Structure:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Title Slide: Project name, your name, and course details.</li>
              <li>Problem Statement: Define the problem your project addresses.</li>
              <li>Design Overview: Present the circuit schematic and software architecture.</li>
              <li>Implementation: Show the assembly process and code snippets.</li>
              <li>Demonstration: Live or video demonstration of the working prototype.</li>
              <li>Challenges: Describe any issues encountered and solutions implemented.</li>
              <li>Future Work: Suggest possible improvements or next steps for the project.</li>
              <li>Q&A: Open the floor for questions and discussions.</li>
            </ol>
          `,
          videoUrl: "https://example.com/week8-chapter3-video",
        },
        {
          title:
            "Chapter 4: Reviewing Key Concepts and Discussing Next Steps for Further Learning",
          content: `
            <h2 class="text-2xl font-bold">Course Review and Future Directions</h2>
            <p class="mt-4">As we conclude the course, it's important to review the key concepts learned and explore avenues for further development in microcontroller programming and circuit design.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts Reviewed:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Microcontroller programming using C++ and the Arduino IDE.</li>
              <li>Identification and utilization of essential electrical components.</li>
              <li>Building and testing basic to advanced circuits.</li>
              <li>Designing and simulating PCB layouts for permanent circuits.</li>
              <li>Integrating sensors and actuators to create interactive systems.</li>
              <li>Debugging and refining integrated hardware-software systems.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Next Steps for Further Learning:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Explore advanced microcontrollers like Raspberry Pi or ESP32.</li>
              <li>Learn about wireless communication protocols (e.g., Bluetooth, Wi-Fi).</li>
              <li>Delve into embedded systems programming and real-time operating systems (RTOS).</li>
              <li>Experiment with more complex projects involving robotics or home automation.</li>
              <li>Participate in maker communities and hackathons to collaborate and innovate.</li>
              <li>Study advanced PCB design techniques and manufacturing processes.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Resources for Continued Learning:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Online Courses:</strong> Platforms like Coursera, Udemy, and edX offer advanced courses in electronics and embedded systems.</li>
              <li><strong>Books:</strong> "The C++ Programming Language" by Bjarne Stroustrup, "Practical Electronics for Inventors" by Paul Scherz.</li>
              <li><strong>Forums and Communities:</strong> Engage with communities on platforms like Stack Overflow, Reddit's r/arduino, and the Arduino Forum.</li>
              <li><strong>Maker Spaces:</strong> Join local maker spaces to access tools, resources, and collaborate with others.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6">Final Thoughts:</h3>
            <p class="mt-4">Congratulations on completing the Microcontroller & Circuit Design course! Continue experimenting, building, and innovating to advance your skills and contribute to exciting technological developments.</p>
          `,
          videoUrl: "https://example.com/week8-chapter4-video",
        },
        {
          title: "Chapter 5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Week 8 Summary: Final Project and Review</h2>
            <p class="mt-4">In this final week, we've focused on:</p>
            <ul class="list-disc list-inside mt-2">
              <li>Developing a comprehensive project that integrates all course skills.</li>
              <li>Presenting your project with an emphasis on design and functionality.</li>
              <li>Reviewing key concepts and discussing future learning paths.</li>
            </ul>
            <p class="mt-4">Completing the final project demonstrates your proficiency in microcontroller programming and circuit design, preparing you for more advanced challenges in electronics and embedded systems.</p>
          `,
          videoUrl: "https://example.com/week8-chapter5-video",
        },
        {
          title: "Chapter 6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Final Quiz</h2>
            <p class="mt-4">Assess your comprehensive understanding of the concepts covered throughout the course.</p>
          `,
          videoUrl: "https://example.com/week8-chapter6-video",
          quiz: {
            question:
              "Which of the following best describes the purpose of integrating sensors and actuators in a microcontroller-based system?",
            options: [
              "To increase the system's power consumption",
              "To enable the system to interact with its environment",
              "To simplify the circuit design",
              "To reduce the number of components needed",
            ],
            correctAnswer: 1,
          },
        },
      ],
    },
    // You can add more weeks following the same structure if necessary
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function CircuitCoursePage() {
  return <CoursePage courseData={CircuitCourseData} />;
}
