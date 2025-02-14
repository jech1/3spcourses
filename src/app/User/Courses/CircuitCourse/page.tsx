"use client";

import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

// Complete course data with all weeks and chapters
const CircuitCourseData: CourseData = {
  title: "Microcontroller & Circuit Design",
  weeks: [
    // Week 1
    {
      title: "Week 1: Foundations of Circuits & Wiring",
      chapters: [
        {
          title: "1.1 Introduction to Circuits",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: What is a Circuit?</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand what a circuit is and its role in electronics.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>A circuit is a closed loop that allows electrical current to flow.</li>
              <li>It connects a power source to electronic components, enabling device operation.</li>
              <li>Circuits form the foundation of all electronic systems.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Think of a circuit as a pathway that completes a loop, allowing energy to flow continuously.</p>
            
          `,
          //videoUrl: "https://example.com/week1-introduction-to-circuits"
        },
        {
          title: "1.2 Materials & Wiring Basics",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Materials & Wiring Basics</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore common conductors, insulators, and proper wiring techniques for assembling circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Conductors:</strong> Materials such as copper and aluminum that allow electrical current to flow easily.</li>
              <li><strong>Insulators:</strong> Materials like rubber and plastic that prevent electrical conduction.</li>
              <li>Proper wiring techniques ensure secure connections and optimal circuit performance.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Using the correct wiring practices is critical for both circuit efficiency and safety.</p>
          `,
          //videoUrl: "https://example.com/week1-materials-wiring"
        },
        {
          title: "1.3 Electrical Properties",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Understanding Electrical Properties</h2>
            <p class="mt-4"><strong>Objective:</strong> Dive into the fundamentals of voltage, current, and resistance.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Voltage (V):</strong> The potential difference that drives the current.</li>
              <li><strong>Current (I):</strong> The flow of electric charge through a conductor.</li>
              <li><strong>Resistance (R):</strong> The opposition to current flow, measured in ohms.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Master these properties to effectively design and troubleshoot circuits.</p>
          `,
          //videoUrl: "https://example.com/week1-electrical-properties"
        },
        {
          title: "1.4 Reading Circuit Diagrams",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Reading Circuit Diagrams</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn to interpret schematics and blueprints essential for circuit assembly.</p>
            <h3 class="text-xl font-semibold mt-6">Key Skills:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify symbols for components such as resistors, capacitors, and power sources.</li>
              <li>Understand how these symbols are interconnected to form circuits.</li>
              <li>Translate circuit diagrams into step-by-step assembly instructions.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Practice reading different schematics to build your confidence in interpreting technical diagrams.</p>
          `,
          //videoUrl: "https://example.com/week1-circuit-diagrams"
        },
        {
          title: "1.5 Breadboarding Fundamentals",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Breadboarding Fundamentals</h2>
            <p class="mt-4"><strong>Objective:</strong> Gain hands-on experience assembling simple circuits on a breadboard.</p>
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Learn how to properly insert and connect components on a breadboard.</li>
              <li>Build basic circuits such as an LED blinker or a sensor interface.</li>
              <li>Understand how breadboards facilitate rapid prototyping without soldering.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Breadboarding is an essential skill for testing and iterating circuit designs quickly.</p>
          `,
          //videoUrl: "https://example.com/week1-breadboarding"
        },
        {
          title: "1.6 The Physics of Electricity",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: The Physics Behind Electricity</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore the underlying physical principles that power electrical circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding Ohm’s Law, which relates voltage, current, and resistance.</li>
              <li>Exploring Kirchhoff’s Laws for current and voltage in circuits.</li>
              <li>Examining how energy is converted and utilized in electrical systems.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A strong foundation in the physics of electricity enhances your ability to design and troubleshoot circuits effectively.</p>
          `,
          //videoUrl: "https://example.com/week1-physics-electricity"
        },
        {
          title: "1.7 Quiz: Foundations of Circuits & Wiring",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Understanding Circuits & Wiring</h2>
            <p class="mt-4"><strong>Objective:</strong> Assess your understanding of what a circuit is and why proper wiring fundamentals are essential for safe and effective circuit design.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Question:</h3>
            <p class="mt-2"><strong>Question:</strong> What is a circuit, and why is understanding wiring fundamentals essential for safe and effective circuit design?</p>
            <p class="mt-4"><em>Tip:</em> Reflect on the importance of a complete circuit loop and proper wiring practices to prevent hazards and ensure optimal performance.</p>
          `,
          quiz: {
            question: "What is a circuit, and why is understanding wiring fundamentals essential for safe and effective circuit design?",
            options: [
              "A circuit is a series of interconnected components; proper wiring prevents short circuits and ensures functionality.",
              "A circuit is a power source; wiring is only important for connecting devices.",
              "A circuit is a method of data transmission; wiring ensures clear communication.",
              "A circuit is an isolated system; wiring is not crucial for safety."
            ],
            correctAnswer: 0
          }
        },
        {
          title: "1.8 Assignment Submission",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Assignment Submission</h2>
            <p class="mt-4"><strong>Objective:</strong> Document and submit your lab report on the practical breadboarding exercise.</p>
            <h3 class="text-xl font-semibold mt-6">Submission Instructions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Build a simple circuit on a breadboard (e.g., an LED blinking circuit).</li>
              <li>Document your circuit assembly process, including a clear diagram and photographs of your setup.</li>
              <li>Describe the materials used, wiring techniques, and safety practices followed.</li>
              <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clear documentation and detailed diagrams will showcase your practical understanding and adherence to safety protocols.</p>
          `,
          //videoUrl: "https://example.com/week1-assignment-submission"
        }
      ]
    },
    
    
    // Week 2
    {
      title: "Week 2: Electrical Components & Functionality",
      chapters: [
        {
          title: "2.1 Transistors as Switches",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Transistors as Switches</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how transistors amplify signals and act as electronic switches in circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>A transistor is a semiconductor device used to amplify or switch electronic signals.</li>
              <li>In switching applications, it controls the flow of current between its collector and emitter based on a small current at its base.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Visualize a transistor as a controlled gate that opens or closes to allow current flow.</p>
            
            <p class="mt-4">
              <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
            </p>
          `,
          //videoUrl: "https://example.com/week2-transistors"
        },
        {
          title: "2.2 Digital Logic Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Digital Logic Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the role of logic gates and switches in controlling circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Logic gates (AND, OR, NOT, etc.) perform basic logical functions essential for digital circuits.</li>
              <li>Switches control the state (ON/OFF) within these circuits.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Mastery of digital logic is key to designing complex electronic systems.</p>
            
            <p class="mt-4">
              <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
            </p>
          `,
          //videoUrl: "https://example.com/week2-digital-logic"
        },
        {
          title: "2.3 Diodes and LEDs",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Diodes and LEDs</h2>
            <p class="mt-4"><strong>Objective:</strong> Discover how diodes regulate current flow and how LEDs serve as visual indicators in circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Diodes:</strong> Allow current to flow in one direction only, protecting circuits from reverse polarity.</li>
              <li><strong>LEDs (Light Emitting Diodes):</strong> Convert electrical energy into light, serving as indicators.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Ensure proper polarity when installing diodes and LEDs to avoid damage.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week2-diodes-leds"
        },
        {
          title: "2.4 Resistors & Current Control",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Resistors & Current Control</h2>
            <p class="mt-4"><strong>Objective:</strong> Examine how resistors manage voltage levels and protect circuit integrity by controlling current.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Resistors limit current flow and adjust voltage levels within circuits.</li>
              <li>Understanding Ohm's Law is crucial for calculating appropriate resistor values.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Resistors are vital for preventing overcurrent conditions that can damage components.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week2-resistors"
        },
        {
          title: "2.5 Capacitors & Inductors",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Capacitors & Inductors</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore components that store and release energy, such as capacitors and inductors, and their roles in filtering and timing circuits.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Capacitors:</strong> Store electrical charge and release it when needed, often used in filtering and smoothing circuits.</li>
              <li><strong>Inductors:</strong> Store energy in a magnetic field and are used in filtering, tuning, and energy storage applications.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Understanding these components is essential for designing circuits with proper timing and energy management.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week2-capacitors-inductors"
        },
        {
          title: "2.6 Integrating Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Integrating Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn techniques for combining various electronic components into a cohesive, functioning circuit.</p>
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use circuit diagrams to plan the integration of components.</li>
              <li>Apply proper wiring techniques to ensure signal integrity and safety.</li>
              <li>Assemble the components on a breadboard for rapid prototyping and testing.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Effective integration is the key to creating reliable circuits that perform their intended functions.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week2-integrating-components"
        },
        {
          title: "2.7 Quiz: Electrical Components & Functionality",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Understanding Component Integration</h2>
            <p class="mt-4"><strong>Objective:</strong> Test your understanding of how components like transistors, diodes, and resistors work together to control and manage electrical flow in a circuit.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Question:</h3>
            <p class="mt-2"><strong>Question:</strong> How do components such as transistors, diodes, and resistors work together in a circuit to control electrical flow? Provide an example.</p>
            <p class="mt-4"><em>Tip:</em> Think about a simple circuit where a transistor acts as a switch, a resistor limits current, and a diode protects the circuit from reverse polarity.</p>
          `,
          quiz: {
            question: "Which of the following best describes how transistors, diodes, and resistors work together in a circuit?",
            options: [
              "The transistor acts as a switch to control the circuit, the resistor limits the current to protect components, and the diode ensures current flows in the correct direction.",
              "The resistor amplifies the signal, the diode stores energy, and the transistor blocks current flow.",
              "The diode supplies power, the resistor converts voltage, and the transistor measures current.",
              "Each component operates independently without influencing one another."
            ],
            correctAnswer: 0
          }
        }
      ]
    },
    
    // Week 3
    {
      title: "Week 3: Hardware Integration & Project Components",
      chapters: [
        {
          title: "3.1 Overview of Hardware Modules",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Exploring Hardware Modules</h2>
            <p class="mt-4"><strong>Objective:</strong> Get acquainted with a range of hardware modules including sensors, actuators, and connectivity components.</p>
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the purpose of different sensors (e.g., temperature, light, motion).</li>
              <li>Overview of actuators, including motors and servos, and their role in adding movement.</li>
              <li>Introduction to connectivity modules like Bluetooth and Wi‑Fi for device communication.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Familiarize yourself with each type of module, as they are the building blocks of interactive projects.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-hardware-modules"
        },
        {
          title: "3.2 Sensor Applications",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Sensor Applications</h2>
            <p class="mt-4"><strong>Objective:</strong> Delve into how various sensors—such as temperature, light, and motion sensors—are used to create interactive projects.</p>
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Temperature sensors measure environmental or body temperature.</li>
              <li>Light sensors adjust system behavior based on ambient light levels.</li>
              <li>Motion sensors detect movement to trigger events.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Understanding sensor outputs is crucial for processing data and automating responses in your projects.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-sensor-applications"
        },
        {
          title: "3.3 Actuators and Servos",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Actuators & Servos</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how to incorporate motors, servos, and other actuators to introduce movement into your projects.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Actuators convert electrical signals into physical movement.</li>
              <li>Servos provide precise control over angular position.</li>
              <li>DC motors offer continuous rotation for varied applications.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Ensure that you match the actuator type with your project requirements to achieve the desired motion control.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-actuators-servos"
        },
        {
          title: "3.4 Communication Modules",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Communication Modules</h2>
            <p class="mt-4"><strong>Objective:</strong> Investigate connectivity options, including Bluetooth and Wi‑Fi modules, to enable communication between devices.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Bluetooth modules enable short-range wireless communication.</li>
              <li>Wi‑Fi modules, such as ESP8266 or ESP32, offer broader connectivity and network integration.</li>
              <li>Integration of communication modules is essential for IoT projects and remote monitoring.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Choose the appropriate module based on the range and data requirements of your project.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-communication-modules"
        },
        {
          title: "3.5 Power Management",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Power Management</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn about batteries, voltage regulators, and strategies for efficient power usage in electronic projects.</p>
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Different types of batteries and their characteristics.</li>
              <li>Using voltage regulators to provide stable power to circuits.</li>
              <li>Implementing power-saving strategies for long-term operation.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Efficient power management is critical for both portable and stationary electronic projects.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-power-management"
        },
        {
          title: "3.6 Advanced Circuit Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Advanced Circuit Design</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn techniques for integrating multiple hardware components into a cohesive, functional circuit.</p>
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use schematic diagrams to plan the layout of complex circuits.</li>
              <li>Ensure compatibility among components through proper wiring and component selection.</li>
              <li>Test and troubleshoot integrated circuits using breadboarding and simulation tools.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Advanced circuit design requires careful planning and iterative testing to achieve a reliable final product.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week3-advanced-circuit-design"
        },
        {
          title: "3.7 Quiz: Integration of Hardware Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Hardware Integration</h2>
            <p class="mt-4"><strong>Objective:</strong> Assess your understanding of how integrating sensors, actuators, and communication modules can enhance a project's functionality.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Question:</h3>
            <p class="mt-2"><strong>Question:</strong> How can integrating sensors, actuators, and communication modules enhance a project’s functionality? Explain with one practical scenario.</p>
            <p class="mt-4"><em>Tip:</em> Consider a project scenario such as an automated environmental monitoring system that uses sensors to detect changes, actuators to adjust conditions, and communication modules to transmit data remotely.</p>
          `,
          quiz: {
            question: "How can integrating sensors, actuators, and communication modules enhance a project’s functionality?",
            options: [
              "They allow the project to operate independently of any external inputs.",
              "They enable the project to sense environmental changes, act upon them, and communicate results, thereby creating an interactive and responsive system.",
              "They simplify the design by reducing the number of components required.",
              "They are primarily used for decorative purposes."
            ],
            correctAnswer: 1
          }
        }
      ]
    },
    
    // Week 4
    {
      title: "Week 4: Arduino IDE & Programming Integration",
      chapters: [
        {
          title: "4.1 Introduction to Arduino IDE",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Getting Started with the Arduino IDE</h2>
            <p class="mt-4"><strong>Objective:</strong> Set up and familiarize yourself with the Arduino development environment.</p>
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Download and install the Arduino IDE from the official website.</li>
              <li>Learn the layout: editor, serial monitor, and toolbar options.</li>
              <li>Configure your board and COM port under the "Tools" menu.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Ensure that your board and port settings are correct to avoid upload issues.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week4-arduino-ide"
        },
        {
          title: "4.2 Programming Fundamentals",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Basic Coding for Microcontrollers</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn the basic coding principles tailored for microcontroller projects using C++ in the Arduino IDE.</p>
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding the structure of an Arduino sketch: <code>setup()</code> and <code>loop()</code> functions.</li>
              <li>Basic syntax: variable declarations, data types, control structures (if, for, while).</li>
              <li>Using comments to document your code for clarity and maintenance.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Start with simple examples to build a solid foundation in microcontroller programming.</p>
          `,
          //videoUrl: "https://example.com/week4-programming-fundamentals"
        },
        {
          title: "4.3 Writing Your First Sketch",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Creating, Uploading & Running Your First Sketch</h2>
            <p class="mt-4"><strong>Objective:</strong> Write, compile, and upload a simple program (sketch) to your Arduino board.</p>
            <h3 class="text-xl font-semibold mt-6">Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Open the Arduino IDE and select your board and port from the Tools menu.</li>
              <li>Write a simple sketch, for example, an LED blink program.</li>
              <li>Click "Upload" to compile and transfer the code to your board.</li>
              <li>Monitor the serial output (if applicable) to verify successful operation.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Experiment with modifying delay values or pin assignments to see real-time changes on your board.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week4-first-sketch"
        },
        {
          title: "4.4 Hardware-Software Interface",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Connecting Hardware to Your Code</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how to connect and control hardware components through your Arduino code.</p>
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Mapping digital pins to sensors and actuators.</li>
              <li>Using libraries to interface with components (e.g., Servo, LiquidCrystal).</li>
              <li>Understanding signal flow from hardware to software and vice versa.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-integrated hardware-software interface is the backbone of functional electronics projects.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week4-hardware-interface"
        },
        {
          title: "4.5 Debugging & Error Resolution",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Debugging Techniques for Arduino Projects</h2>
            <p class="mt-4"><strong>Objective:</strong> Develop strategies for identifying and resolving coding and circuit issues.</p>
            <h3 class="text-xl font-semibold mt-6">Key Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Use the serial monitor to print debug messages and diagnose issues.</li>
              <li>Step through your code and check connections on your breadboard.</li>
              <li>Test individual components before integrating them into a complete circuit.</li>
              <li>Iteratively refine your code based on error messages and observed behavior.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Patience and systematic troubleshooting are key to resolving issues efficiently.</p>
          `,
          //videoUrl: "https://example.com/week4-debugging"
        },
        {
          title: "4.6 Guided Project Walkthrough",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Guided Project Walkthrough</h2>
            <p class="mt-4"><strong>Objective:</strong> Follow a complete project example that merges circuit design and Arduino programming.</p>
            <h3 class="text-xl font-semibold mt-6">Project Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Build an interactive project (e.g., a sensor-based LED control system) that integrates hardware and code.</li>
              <li>Learn each step from circuit assembly to code implementation and debugging.</li>
              <li>Review best practices in design, integration, and testing.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use this walkthrough as a template for your own projects and adapt it to your specific requirements.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week4-guided-project"
        },
        {
          title: "4.7 Quiz: Arduino IDE Integration",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Integration of Hardware & Software</h2>
            <p class="mt-4"><strong>Objective:</strong> Evaluate your understanding of how the Arduino IDE facilitates the integration of hardware and software in a project. Provide specific examples.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <p class="mt-2"><strong>Question:</strong> In what ways does the Arduino IDE facilitate the integration of hardware and software in a project? Give specific examples.</p>
            <p class="mt-4"><em>Tip:</em> Consider examples such as using the serial monitor for debugging, simple code structure for rapid prototyping, and built-in libraries for hardware interfacing.</p>
          `,
          quiz: {
            question: "In what ways does the Arduino IDE facilitate the integration of hardware and software in a project? Provide specific examples.",
            options: [
              "It offers a streamlined coding environment with a simplified structure, built-in libraries for interfacing with hardware (e.g., Servo.h, LiquidCrystal.h), and a serial monitor for debugging.",
              "It requires manual configuration of every component, making integration more challenging.",
              "It focuses solely on coding without providing tools for hardware troubleshooting.",
              "It automatically builds circuits without user intervention."
            ],
            correctAnswer: 0
          }
        }
      ]
    },
    
    // Week 5
    {
      title: "Week 5: Capstone Project & Final Review",
      chapters: [
        {
          title: "5.1 Project Planning & Conceptualization",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Project Planning & Conceptualization</h2>
            <p class="mt-4"><strong>Objective:</strong> Outline your final project and establish clear design objectives.</p>
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Define your project scope and objectives.</li>
              <li>Create a detailed project plan that includes a timeline, required components, and potential challenges.</li>
              <li>Develop a rough sketch or diagram to visually outline your project idea.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A thorough project plan sets the stage for a successful capstone by clarifying your goals and the steps needed to achieve them.</p>
          `,
          //videoUrl: "https://example.com/week5-project-planning"
        },
        {
          title: "5.2 Detailed Circuit Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Detailed Circuit Design</h2>
            <p class="mt-4"><strong>Objective:</strong> Create schematic diagrams and select the right components for your project.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Draft circuit schematics using standard symbols.</li>
              <li>Choose appropriate components (resistors, capacitors, transistors, etc.) based on your design.</li>
              <li>Ensure proper integration by verifying component compatibility.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clear, well-documented schematics are essential for troubleshooting and future modifications.</p>
            
          `,
          //videoUrl: "https://example.com/week5-circuit-design"
        },
        {
          title: "5.3 Assembly & Integration",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Assembly & Integration</h2>
            <p class="mt-4"><strong>Objective:</strong> Build your circuit and integrate all hardware components smoothly.</p>
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Assemble your circuit on a breadboard or PCB following your schematic.</li>
              <li>Verify all connections, component orientations, and wiring integrity.</li>
              <li>Perform initial testing to ensure that the circuit functions as intended.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Careful assembly and thorough testing during integration prevent future troubleshooting headaches.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week5-assembly"
        },
        {
          title: "5.4 Final Programming Implementation",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Final Programming Implementation</h2>
            <p class="mt-4"><strong>Objective:</strong> Write and refine the code that controls your project.</p>
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Develop a clear and modular sketch using the Arduino IDE (or your preferred platform).</li>
              <li>Integrate libraries and functions to control hardware components.</li>
              <li>Iterate your code based on testing feedback to optimize performance.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use the serial monitor and debugging techniques to verify that your code works seamlessly with your hardware.</p>
            <li>Submit your assignment using the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
          `,
          //videoUrl: "https://example.com/week5-programming"
        },
        {
          title: "5.5 Testing & Optimization",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Testing & Optimization</h2>
            <p class="mt-4"><strong>Objective:</strong> Rigorously test your project, troubleshoot issues, and optimize both hardware and software for best performance.</p>
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Conduct systematic tests to verify circuit functionality and code performance.</li>
              <li>Identify and resolve any issues in component integration or code logic.</li>
              <li>Optimize your design by refining both the circuit layout and the programming code.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Document your testing process and improvements, as this information is critical for troubleshooting and future projects.</p>
          `,
          //videoUrl: "https://example.com/week5-testing"
        },
        {
          title: "5.6 Peer Review & Feedback",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Peer Review & Feedback</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a final peer review session to critique and refine your project based on constructive feedback.</p>
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Present your project to a panel of peers.</li>
              <li>Use structured checklists to provide and receive detailed feedback.</li>
              <li>Revise your project based on the insights gathered during the review.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive peer feedback is a valuable tool for ensuring your final project meets high standards.</p>
          `,
          //videoUrl: "https://example.com/week5-peer-review"
        },
        {
          title: "5.7 Quiz: Capstone Project Reflection",
          content: `
            <h2 class="text-2xl font-bold">Slide 7: Quiz - Reflecting on Your Capstone Project</h2>
            <p class="mt-4"><strong>Objective:</strong> Reflect on how the integration of circuit design and programming enabled your project's effective performance, and identify improvements for future projects.</p>
            <h3 class="text-xl font-semibold mt-6">Quiz Task:</h3>
            <p class="mt-2"><strong>Question:</strong> How did the integration of detailed circuit design with programming enhance your project's performance? Provide one practical example and suggest one improvement for future projects.</p>
            <p class="mt-4"><em>Tip:</em> Consider aspects such as responsiveness, reliability, and efficiency when reflecting on your project.</p>
          `,
          quiz: {
            question: "How did integrating detailed circuit design with programming enhance your project's performance, and what improvement would you suggest for future projects?",
            options: [
              "Integration allowed for seamless operation—e.g., a sensor-based system that automatically adjusts output based on environmental conditions. One improvement might be to optimize the code for faster response times.",
              "The hardware and software functioned separately, which simplified troubleshooting, but future projects should integrate them further.",
              "The circuit design was perfect; only the programming needed improvement.",
              "Integration did not impact performance significantly; improvements are unnecessary."
            ],
            correctAnswer: 0
          }
        }
      ]
    }
    
    // You can add more weeks following the same structure if necessary
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function CircuitCoursePage() {
  return <CoursePage courseData={CircuitCourseData} />;
}
