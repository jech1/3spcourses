"use client";

import Head from "next/head";
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
              <li>Electric current only flows when the circuit is complete (closed). If the loop is broken, the current stops.</li>
              <li>Circuit components include resistors, capacitors, diodes, transistors, and more.</li>
              <li>We measure current in Amperes (A), voltage in Volts (V), and resistance in Ohms (Ω).</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Think of a circuit as a pathway that completes a loop, allowing energy to flow continuously—just like a water slide that circles around with no breaks.</p>
    
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Ohms Law:</strong> V = I x R</li>
              <li>Where:
                <ul class="list-disc list-inside ml-6">
                  <li>V is Voltage (in Volts)</li>
                  <li>I is Current (in Amperes)</li>
                  <li>R is Resistance (in Ohms)</li>
                </ul>
              </li>
              <li><strong>Power Formula:</strong> P = V x I (Power in Watts)</li>
            </ul>
    
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>If a circuit has a 9V battery and a resistor with 3Ω resistance, what is the current flowing through the circuit?</p>
            <p><strong>Solution:</strong> Use Ohms Law: I = V / R = 9V / 3Ω = 3A</p>
    
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In your home, when you flip a light switch, you're completing a circuit that allows current to flow to the light bulb. If the switch is off, the circuit is open and the light is off. This is the same principle behind almost every electronic device—from your phone charging cable to smart appliances.</p>
    
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In biomedical research, circuits are used in wearable health monitors. Engineers design small circuits to measure things like heart rate or oxygen levels. These circuits must be efficient and reliable, and understanding basic circuit principles is essential for developing such life-saving devices.</p>
    
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>A circuit is like a full loop road where electricity travels. If there's a break, the “cars” (electric current) can't keep going. We use circuits to power everything from tiny sensors to massive machines. We can calculate how electricity behaves using formulas like Ohm’s Law. This chapter teaches the basic ideas of circuits so you can start understanding how electronic devices actually work.</p>
    
            <li>Final submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
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
              <li><strong>Wiring:</strong> Involves connecting components with appropriate gauge wires and ensuring secure joints using solder or connectors.</li>
              <li><strong>Wire Gauge:</strong> Refers to the thickness of a wire. Thicker wires (lower gauge numbers) carry more current with less resistance.</li>
              <li><strong>Color Coding:</strong> Wires are often color-coded for safety and organization (e.g., red for power, black for ground).</li>
              <li>Proper wiring techniques ensure secure connections, minimize resistance, and prevent short circuits or overheating.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Using the correct wiring practices is critical for both circuit efficiency and safety. Always double-check your connections and use heat-shrink tubing or electrical tape when needed.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Resistivity Formula:</strong> R = ρ × (L / A)</li>
              <li>Where:
                <ul class="list-disc list-inside ml-6">
                  <li>R is Resistance (Ohms)</li>
                  <li>ρ (rho) is the resistivity of the material (Ω·m)</li>
                  <li>L is the length of the conductor (meters)</li>
                  <li>A is the cross-sectional area (m²)</li>
                </ul>
              </li>
              <li>This formula helps engineers select the right material and size of wire for a given electrical load.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You are using a copper wire (resistivity ρ = 1.68 × 10⁻⁸ Ω·m), 2 meters long, with a cross-sectional area of 1 mm² (1 × 10⁻⁶ m²). What is the resistance of the wire?</p>
            <p><strong>Solution:</strong> R = ρ × (L / A) = (1.68 × 10⁻⁸) × (2 / 1×10⁻⁶) = 0.0336 Ω</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In residential electrical systems, copper wires are used in walls to carry electricity to outlets and appliances. The gauge and insulation must match safety codes to avoid overheating or fire. Understanding how materials behave electrically helps electricians choose the right wire for every job.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In space exploration, engineers research advanced wiring materials like superconductors or carbon nanotubes to reduce resistance and weight in spacecraft circuits. These materials are tested in labs for durability and conductivity under extreme temperatures.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This chapter is about understanding which materials let electricity flow (conductors) and which ones stop it (insulators). It also shows you how wires are used to safely connect parts of a circuit. Choosing the right wire size and material keeps things running smoothly. We use a special formula to calculate how much a wire resists electricity. Knowing this helps us build circuits that work well and don’t overheat or break.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
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
              <li><strong>Voltage (V):</strong> The potential difference that drives the current. It’s like electrical “pressure” that pushes charge through a circuit.</li>
              <li><strong>Current (I):</strong> The flow of electric charge through a conductor, measured in Amperes (A). Think of it as the rate at which electrons flow.</li>
              <li><strong>Resistance (R):</strong> The opposition to current flow, measured in Ohms (Ω). It slows the movement of charges and affects how much current flows.</li>
              <li>All three are deeply connected—changing one can directly affect the others in a circuit.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Master these properties to effectively design and troubleshoot circuits. A small mistake in any of these values can cause components to underperform or even fail.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Conductance Formula:</strong> G = 1 / R</li>
              <li><strong>Current with Conductance:</strong> I = G × V</li>
              <li>Where:
                <ul class="list-disc list-inside ml-6">
                  <li>G is Conductance (Siemens, S)</li>
                  <li>V is Voltage (Volts)</li>
                  <li>I is Current (Amperes)</li>
                </ul>
              </li>
              <li>This is a re-arranged form of Ohm’s Law and is useful when working with high-conductance systems like power distribution networks.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>A circuit has a conductance of 0.2 S and is powered by a 10V source. What is the current flowing through the circuit?</p>
            <p><strong>Solution:</strong> I = G × V = 0.2 × 10 = 2 A</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Phone chargers use these properties to safely deliver the right amount of current to your device. Too much voltage or too little resistance could damage your phone. That’s why knowing how to balance voltage, current, and resistance is essential when designing consumer electronics.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In medical device engineering, researchers use precise electrical properties to develop equipment like pacemakers and EEG machines. These devices rely on very small currents and voltages to interact with the human body safely. Engineers must design circuits that provide accurate control over voltage and resistance to avoid harming tissues while still collecting useful data.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This chapter explains the three most important building blocks of any circuit: voltage, current, and resistance. Voltage pushes electricity through, current is how much flows, and resistance controls or limits the flow. Changing one changes the others. We can use different formulas to calculate these properties and apply them to real things like phone chargers or medical tools. Understanding these makes it way easier to troubleshoot and build working electronics.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week1-electrical-properties"
        },
        
        {
          title: "1.4 Reading Circuit Diagrams",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Reading Circuit Diagrams</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn to interpret schematics and blueprints essential for circuit assembly.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Reading circuit diagrams is one of the most foundational skills in electrical engineering. These diagrams serve as the language engineers use to communicate how a circuit is built and operates. Whether you're working on a simple LED circuit or designing a motherboard, schematics guide the placement and function of every component. In research settings, being able to read and modify diagrams allows you to rapidly prototype ideas, troubleshoot faults, and document your designs for replication or peer review. Circuit diagrams are also critical in manufacturing, where assembly lines rely on schematics to mass-produce consistent products. Without this skill, it would be nearly impossible to scale, communicate, or maintain electronics in any scientific or industrial environment.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Skills:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Identify symbols for components such as resistors, capacitors, inductors, switches, and power sources.</li>
              <li>Understand how these symbols are connected to show actual electrical paths and logic flow.</li>
              <li>Translate circuit diagrams into real-world, step-by-step assembly instructions for breadboards or PCBs.</li>
              <li>Distinguish between series and parallel wiring through schematic layout.</li>
              <li>Follow signal flow, power distribution, and grounding from left to right or top to bottom.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Practice reading different schematics to build your confidence in interpreting technical diagrams. Start with basic LED circuits and move to microcontroller-based designs.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Series Resistance:</strong> R<sub>total</sub> = R₁ + R₂ + R₃ + ...</li>
              <li><strong>Parallel Resistance:</strong> 1 / R<sub>total</sub> = 1 / R₁ + 1 / R₂ + 1 / R₃ + ...</li>
              <li>These equations help you determine the total resistance in a schematic, depending on whether components are in series (end-to-end) or parallel (side-by-side).</li>
              <li><strong>Voltage Division (Series):</strong> V<sub>x</sub> = (R<sub>x</sub> / R<sub>total</sub>) × V<sub>total</sub></li>
              <li>This formula shows how voltage is distributed across resistors in a series, which you can often identify directly from a schematic diagram.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>Given a circuit diagram with three resistors in series: R₁ = 100Ω, R₂ = 200Ω, and R₃ = 300Ω, connected to a 12V battery. What is the total resistance, and how much voltage does each resistor receive?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>R<sub>total</sub> = 100 + 200 + 300 = 600Ω</li>
              <li>Total current I = V / R = 12V / 600Ω = 0.02 A</li>
              <li>Voltage across R₁: V = I × R₁ = 0.02 × 100 = 2V</li>
              <li>Voltage across R₂: V = 0.02 × 200 = 4V</li>
              <li>Voltage across R₃: V = 0.02 × 300 = 6V</li>
            </ul>
            <p>This shows how understanding a simple diagram can help you predict how your circuit behaves even before you build it.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Engineers building robotics projects must read schematics to connect sensors, actuators, and control boards correctly. For example, wiring a distance sensor to an Arduino involves checking the data pin, voltage supply, and ground positions — all of which are visible in the schematic. Misinterpreting a diagram could cause the system to malfunction or even short out sensitive components.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In academic labs, researchers often build custom data acquisition circuits to monitor things like temperature, pressure, or pH in experiments. Circuit diagrams are used to design the sensor interfaces, amplifiers, and signal processors needed to capture this data. When the experiment is published, the diagram is included so other researchers can replicate the work and validate results.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Circuit diagrams are like maps that show you how all parts of an electrical system connect. Each symbol represents a part, like a resistor or a power source, and the lines show where the electricity flows. Being able to read these diagrams lets you build real circuits from paper, troubleshoot problems, and understand how everything works together. They're used everywhere from building robots to making medical tools. When you get good at reading them, you can understand almost any electronic device. Even if a circuit looks complicated, breaking it down into smaller parts makes it easier to follow. Practice is the key — start small, and you'll get faster at spotting what each section of a diagram is doing.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week1-circuit-diagrams"
        },
        
        {
          title: "1.5 Breadboarding Fundamentals",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Breadboarding Fundamentals</h2>
            <p class="mt-4"><strong>Objective:</strong> Gain hands-on experience assembling simple circuits on a breadboard.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Breadboards are critical tools in electrical engineering and prototyping. They allow students, engineers, and researchers to build and test circuits without soldering, making it easy to experiment, make changes, and troubleshoot. Breadboarding is commonly used in research and development labs where rapid iteration is needed before designing a printed circuit board (PCB). It’s also essential in classroom learning environments, hackathons, and robotics projects. Knowing how to properly use a breadboard helps bridge the gap between circuit theory and real-world hands-on application. In research, fast prototyping can save weeks of design time when testing sensors, microcontrollers, or analog subsystems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Learn how to properly insert and connect components on a breadboard using the horizontal and vertical rails.</li>
              <li>Use jumper wires to route power, ground, and signal lines safely and cleanly.</li>
              <li>Build basic circuits such as LED blinkers, voltage dividers, or sensor interfaces to test simple functionalities.</li>
              <li>Use a multimeter to verify voltage and continuity between nodes on the breadboard.</li>
              <li>Understand how breadboards facilitate rapid prototyping without requiring permanent assembly or solder.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Breadboarding is an essential skill for testing and iterating circuit designs quickly. Label your connections clearly and always test your power rails before inserting sensitive components.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Voltage Divider Formula:</strong> V<sub>out</sub> = (R₂ / (R₁ + R₂)) × V<sub>in</sub></li>
              <li>This equation is commonly used when building circuits on breadboards to reduce voltage from a source before sending it to a component (like a sensor or microcontroller input).</li>
              <li><strong>Capacitor Charging (for prototyping timing circuits):</strong> V(t) = V<sub>max</sub> × (1 - e<sup>-t/RC</sup>)</li>
              <li>This equation helps understand how a capacitor charges over time, which is essential in timing, filtering, or debounce circuits.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You are prototyping a circuit where an LED needs to receive only 3V from a 9V battery. You decide to use a voltage divider with resistors R₁ = 2kΩ and R₂ = 1kΩ. What voltage will be delivered to the LED?</p>
            <p><strong>Solution:</strong> Use the voltage divider formula:</p>
            <p>V<sub>out</sub> = (R₂ / (R₁ + R₂)) × V<sub>in</sub> = (1000 / (2000 + 1000)) × 9V = (1 / 3) × 9 = 3V</p>
            <p>This demonstrates how you can safely power lower-voltage components from higher-voltage sources using just resistors, all on a breadboard.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In startup companies and R&D teams, engineers use breadboards daily to test ideas before committing to a final PCB. For instance, a wearable device developer might test a heart rate sensor, button interface, and microcontroller logic on a breadboard before building a custom watch circuit. Quick changes can be made without reordering components or wasting materials.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In neuroscience labs, researchers breadboard signal amplification circuits to interface electrodes with microcontrollers and computers. These circuits often require fine-tuning resistors, capacitors, and operational amplifiers to pick up faint biological signals. By using breadboards, researchers can test dozens of configurations within hours before locking in a design for fabrication.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Breadboards let you build working circuits without permanently connecting anything. You can insert wires and components into the holes to test how things work together. It's like a LEGO set for electronics — super useful for learning, designing, and fixing things quickly. You’ll often use breadboards to test sensors, LEDs, buttons, or microcontrollers before building the final version. Knowing how to use a breadboard well saves time and keeps your projects organized. Breadboarding also helps you avoid costly mistakes by letting you try things out before soldering them. Over time, you’ll get faster at planning layouts and fixing problems just by glancing at your setup. Every electrical engineer, researcher, and inventor starts here — mastering breadboarding is the first step to real-world prototyping.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week1-breadboarding"
        },
        
        {
          title: "1.6 The Physics of Electricity",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: The Physics Behind Electricity</h2>
            <p class="mt-4"><strong>Objective:</strong> Explore the underlying physical principles that power electrical circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Electricity is more than just wires and blinking lights — it’s a physical phenomenon rooted in the behavior of charged particles. Understanding the physics behind electricity helps explain why circuits work, how energy moves, and how to control that energy. The rules governing electricity — like Ohm’s Law and Kirchhoff’s Laws — aren’t just equations, they’re observations of how electrons behave in materials. This knowledge is crucial in research where precision matters — from building medical devices that interact with neurons, to developing solar panels that optimize energy conversion. Mastering the physics of electricity gives you the power to design, analyze, and innovate with confidence, whether you’re troubleshooting a small circuit or engineering a new clean energy system.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Understanding <strong>Ohm’s Law</strong>, which shows the relationship between voltage (V), current (I), and resistance (R): V = I × R.</li>
              <li>Using <strong>Kirchhoff’s Current Law (KCL):</strong> The total current entering a node is equal to the total current leaving it.</li>
              <li>Using <strong>Kirchhoff’s Voltage Law (KVL):</strong> The sum of voltages around any closed loop in a circuit is zero.</li>
              <li>Recognizing how energy is <strong>transformed</strong> — from chemical to electrical (in batteries), electrical to thermal (in resistors), or electrical to light (in LEDs).</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A strong foundation in the physics of electricity enhances your ability to design and troubleshoot circuits effectively. Don’t just memorize laws — apply them in real problems!</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Kirchhoff’s Current Law (KCL):</strong> ΣI<sub>in</sub> = ΣI<sub>out</sub></li>
              <li><strong>Kirchhoff’s Voltage Law (KVL):</strong> ΣV (in loop) = 0</li>
              <li><strong>Power Dissipated in a Resistor:</strong> P = I² × R</li>
              <li><strong>Energy Consumed:</strong> E = P × t (where E is energy in Joules, t is time in seconds)</li>
              <li>These equations help explain how electricity behaves at connection points, how energy moves and is used, and why components heat up or fail if misused.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>In a closed loop circuit powered by a 12V battery, there are three resistors: R₁ = 100Ω, R₂ = 150Ω, and R₃ = 50Ω connected in series. What is the current flowing through the circuit, and how much power is dissipated across R₂?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Total resistance: R<sub>total</sub> = 100 + 150 + 50 = 300Ω</li>
              <li>Total current: I = V / R = 12 / 300 = 0.04 A</li>
              <li>Power across R₂: P = I² × R = (0.04)² × 150 = 0.24 W</li>
            </ul>
            <p>This shows how laws of physics apply directly to how much heat or energy a resistor uses, helping you choose safe and efficient components.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In power supply systems, engineers use Kirchhoff’s Laws to ensure that voltage drops don’t cause brownouts in critical equipment. Calculating the energy dissipated in resistors and power lines helps prevent overheating and fire hazards. Even in mobile phones, energy calculations are used to optimize battery life and prevent excess power loss in standby circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In bioelectronics research, scientists design ultra-low power circuits to interface with neurons using electrodes. Kirchhoff’s Laws are used to model signal flow from biological sources, and Ohm’s and power equations help determine how to safely power the interface without damaging tissues. Understanding energy flow at the microscopic level is key to developing devices like neural implants and brain-computer interfaces.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This lesson dives into the real science behind how electricity works. We look at how voltage, current, and resistance are all related through laws like Ohm’s Law and Kirchhoff’s Laws. These rules help you figure out where current is going, how much energy things use, and how circuits stay balanced. If you understand how energy flows and changes in a system, you can avoid mistakes like overheating parts or draining a battery too fast. This isn’t just theory — it’s what makes your phone charge safely and your robot sensors respond correctly. In research and real projects, these ideas help engineers and scientists design systems that are both powerful and efficient. Learning the physics gives you superpowers when you’re building or fixing electronics.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
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
          <li>Final submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>
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
          title: "1.8 Practice Assignment",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Practice Assignment – Breadboarding & Documentation</h2>
            <p class="mt-4"><strong>Objective:</strong> Reinforce foundational circuit concepts by building a real circuit on a breadboard and practicing technical documentation.</p>
        
            <h3 class="text-xl font-semibold mt-6">Overview:</h3>
            <p>This practice assignment is <strong>not graded</strong> but is <strong>highly important</strong> for your skill development. It bridges the gap between theory and hands-on work, preparing you for real-world labs and future capstone projects. The goal is to practice building, documenting, and reflecting on your first breadboarded circuit — a vital skill in electrical engineering and embedded system design.</p>
        
            <h3 class="text-xl font-semibold mt-6">What You'll Learn by Doing This:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>How to assemble a functional circuit from scratch using a breadboard</li>
              <li>How to interpret and create simple wiring diagrams</li>
              <li>Best practices in safety and proper component orientation</li>
              <li>How to document your work visually and descriptively — just like engineers do</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Instructions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Build:</strong> Create a simple LED blink circuit on your breadboard using an Arduino, 1 LED, a 220Ω resistor, and jumper wires.</li>
              <li><strong>Diagram:</strong> Sketch a clear diagram showing connections between the Arduino and each component. You may use drawing apps, Fritzing, or hand-draw it neatly on paper.</li>
              <li><strong>Photograph:</strong> Take 1-2 clear pictures of your actual circuit from above and at an angle so all components are visible.</li>
              <li><strong>Describe:</strong>
                <ul class="ml-6 list-disc">
                  <li>List the materials you used</li>
                  <li>Explain how you decided where to place each wire/component</li>
                  <li>Mention any challenges you encountered while wiring</li>
                  <li>Include at least 2 safety steps you followed while powering or handling the circuit</li>
                </ul>
              </li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Optional Enhancements:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Try modifying the code to blink the LED faster or slower</li>
              <li>Add a pushbutton to control when the LED turns on</li>
              <li>Use two LEDs and blink them in alternating patterns</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Reflection Prompt:</h3>
            <p>Take 5–10 minutes to reflect in your notes: What did you learn from building this circuit? What would you do differently if you rebuilt it? Where do you still feel confused? This reflection is for your own growth and will help you identify questions to bring to class or office hours.</p>
        
            <h3 class="text-xl font-semibold mt-6">Why This Matters:</h3>
            <p>In the field of electrical and computer engineering, documentation is everything. From lab notes to research reports to real-world debugging, clear records of your builds will help you succeed. Practicing now sets you up for success later — in this course and in future professional or academic projects.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This assignment helps you practice what you learned in Week 1 — how circuits work, how to build them safely, and how to explain your process clearly. You’ll build a real LED circuit, take pictures of it, write down what you did, and reflect on the experience. It’s not graded, but it’s one of the most important things you can do to get comfortable with electronics early on. Doing this will make all the upcoming lessons easier to understand and more fun to complete.</p>
        
            <li>Submition information and further documentation for your final project can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
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
    
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Transistors are among the most important inventions in electronics and computing. They allow small electrical signals to control much larger ones, making them essential for digital logic, amplification, and power control. Without transistors, we wouldn’t have modern computers, smartphones, or even microcontrollers. In switching mode, transistors act like controlled gates: a small current or voltage at one terminal (the base or gate) allows a much larger current to flow between two other terminals (collector and emitter, or drain and source). In research and development, transistors are used in embedded systems, robotics, biomedical devices, and energy systems. Whether you’re automating a sensor circuit or creating a logic gate, knowing how a transistor functions as a switch is critical to controlling electricity with precision.</p>
    
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>A <strong>transistor</strong> is a semiconductor device that can amplify current or act as a switch.</li>
              <li>Most common types include Bipolar Junction Transistors (BJT) and Field-Effect Transistors (FET).</li>
              <li>In a BJT, a small current at the <strong>base</strong> controls a larger current between the <strong>collector</strong> and <strong>emitter</strong>.</li>
              <li>In a switching circuit, the transistor operates in <strong>cut-off</strong> (OFF) and <strong>saturation</strong> (ON) regions.</li>
              <li>Used in digital circuits to turn components like LEDs or motors on and off using microcontrollers.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Visualize a transistor as a gatekeeper: a small signal says “yes” or “no” to a much bigger flow of current, letting your circuit act like a brain making decisions.</p>
    
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>For BJTs:</strong> I<sub>C</sub> = β × I<sub>B</sub></li>
              <li><strong>Saturation Voltage:</strong> V<sub>CE(sat)</sub> ≈ 0.2V (when fully ON)</li>
              <li><strong>Switching Condition:</strong> To turn ON: V<sub>BE</sub> ≥ 0.7V (for NPN transistor)</li>
              <li>These equations help determine how much current is needed at the base to drive the transistor fully ON and allow current flow from collector to emitter.</li>
            </ul>
    
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You are using an NPN transistor to switch on a 5V LED circuit that draws 100mA. If the transistor’s gain (β) is 200, what base current is required to fully turn the transistor ON?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>I<sub>C</sub> = 100mA</li>
              <li>I<sub>B</sub> = I<sub>C</sub> / β = 100mA / 200 = 0.5mA</li>
              <li>So you need at least 0.5mA base current to switch the LED circuit ON using this transistor.</li>
            </ul>
            <p>This lets you control power-hungry components with just a tiny output from a microcontroller, like an Arduino or Raspberry Pi.</p>
    
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In home automation, transistors allow a smart hub or voice assistant to control lights, fans, and devices. A small digital signal from a processor sends just enough current to a transistor’s base to activate relays or LEDs that require much more power than the processor alone can handle. This switching ability makes transistors the backbone of smart devices.</p>
    
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In wearable medical devices like heart monitors, transistors are used to switch low-power sensors ON/OFF to conserve energy. Researchers design low-power transistor circuits that activate only when a heartbeat is detected, extending battery life and reducing heat. These transistor-based switching systems are also used in brain-machine interfaces and low-noise bioelectric signal capture.</p>
    
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Transistors are tiny electronic parts that let you use a small signal to turn a bigger flow of electricity on or off. That’s why they’re often called switches. If your microcontroller doesn’t have enough power to run a motor or light, you can use a transistor to do it for you. By giving the transistor a little signal, it allows a larger current to pass through to your component. It’s kind of like pressing a small button that opens a heavy door — the button doesn’t do the heavy lifting, but it tells something else to do it. Once you understand how transistors work, you can build smarter circuits that react, automate, and think on their own.</p>
    
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week2-transistors"
        },
    
        {
          title: "2.2 Digital Logic Components",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Digital Logic Components</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the role of logic gates and switches in controlling circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Digital logic forms the backbone of all modern electronics—from smartphones and computers to microcontrollers and autonomous systems. Unlike analog circuits that deal with varying voltages, digital circuits operate on just two states: ON (1) and OFF (0). This binary logic enables precise decision-making, fast calculations, and programmable behavior. Logic gates like AND, OR, and NOT are the basic building blocks used to implement arithmetic, control flow, and memory. Switches, buttons, and sensors serve as inputs to these gates, and the outputs can control LEDs, motors, or even entire subsystems. In research and advanced applications, digital logic is used in artificial intelligence chips, brain-machine interfaces, space exploration hardware, and real-time sensor networks. Learning how logic gates work and combine lets you understand and create intelligent, responsive electronic systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Logic gates</strong> include AND, OR, NOT, NAND, NOR, XOR, and XNOR — each with a specific truth table defining its output.</li>
              <li><strong>Truth tables</strong> show how different combinations of inputs affect the output of a logic gate.</li>
              <li><strong>Switches</strong> or digital inputs change the state (1 or 0) within the circuit and determine how logic gates respond.</li>
              <li>Digital circuits follow a binary logic model: 1 = HIGH (often 5V or 3.3V), 0 = LOW (0V).</li>
              <li>Combining gates forms logic systems that can do arithmetic, store memory, or make decisions (like turning on a fan when a temperature threshold is passed).</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Mastery of digital logic is key to designing complex electronic systems. Once you can read and write truth tables, you’ll start seeing the hidden logic behind all modern tech.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Tables:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Boolean Algebra Rules:</strong></li>
              <ul class="list-disc list-inside ml-6">
                <li>AND: A · B = Output is 1 only if both A and B are 1</li>
                <li>OR: A + B = Output is 1 if either A or B is 1</li>
                <li>NOT: ¬A or A' = Output is opposite of A</li>
              </ul>
              <li><strong>Truth Table for AND Gate:</strong></li>
              <table class="table-auto border mt-2 mb-4">
                <thead><tr><th class="px-4 py-2 border">A</th><th class="px-4 py-2 border">B</th><th class="px-4 py-2 border">A · B</th></tr></thead>
                <tbody>
                  <tr><td class="px-4 py-2 border">0</td><td class="px-4 py-2 border">0</td><td class="px-4 py-2 border">0</td></tr>
                  <tr><td class="px-4 py-2 border">0</td><td class="px-4 py-2 border">1</td><td class="px-4 py-2 border">0</td></tr>
                  <tr><td class="px-4 py-2 border">1</td><td class="px-4 py-2 border">0</td><td class="px-4 py-2 border">0</td></tr>
                  <tr><td class="px-4 py-2 border">1</td><td class="px-4 py-2 border">1</td><td class="px-4 py-2 border">1</td></tr>
                </tbody>
              </table>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You are designing a safety system. A fan should turn ON only when two switches (A and B) are both ON. Which gate should you use, and what is the output if A = 1 and B = 0?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>This is an <strong>AND gate</strong> problem: Output = A · B</li>
              <li>If A = 1 and B = 0 → Output = 1 · 0 = 0</li>
              <li>The fan stays OFF until both switches are ON.</li>
            </ul>
            <p>This shows how simple digital logic can control real-world devices in safety systems, home automation, or robotics.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Digital logic is used in everything from microwaves to vending machines. For example, a vending machine checks if money is inserted (A = 1) AND a product is selected (B = 1) before dispensing an item. Logic gates handle all of that silently in the background, making decisions faster than any human ever could.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In neuroscience and AI research, digital logic is used in custom chips to simulate neurons using logic gates. Each neuron decision (like fire/don’t fire) is determined by thresholds encoded with AND/OR gates. Logic circuits also power the decision-making algorithms used in autonomous vehicles, drones, and spacecraft, where split-second choices must be made reliably and without human input.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Digital logic is how computers and electronics make decisions using just ONs and OFFs — or 1s and 0s. Logic gates like AND, OR, and NOT take these inputs and decide what should happen next. You can combine these gates to control anything from lights and motors to computers and sensors. Switches and sensors give the circuit inputs, and logic gates decide the outcome. Once you understand how to build these systems, you can create smart devices that respond to your environment. This is the same kind of logic used in self-driving cars, smart homes, and robots. Learning it gives you the power to control and automate your world with just a few tiny chips.</p>
        
            <li>Final submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week2-digital-logic"
        },
        
        {
          title: "2.3 Diodes and LEDs",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Diodes and LEDs</h2>
            <p class="mt-4"><strong>Objective:</strong> Discover how diodes regulate current flow and how LEDs serve as visual indicators in circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Diodes are fundamental components in electronics, acting like one-way doors for electricity. Their ability to restrict current to a single direction protects sensitive components from being damaged by reverse polarity. LEDs (Light Emitting Diodes) are special diodes that emit visible light when current flows through them. In modern electronics, both are everywhere — from power supplies to user interfaces. Diodes are used in rectifiers, voltage regulators, protection circuits, and even RF signal control. LEDs provide feedback, indicators, and illumination in embedded systems. In research and industry, understanding how to use and protect with diodes is key to building robust, energy-efficient, and safe circuits — especially in medical devices, environmental sensors, and low-power wearables.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Diodes:</strong> Semiconductor devices that allow current to flow in one direction only — from anode (+) to cathode (−).</li>
              <li><strong>Forward Bias:</strong> When voltage is applied in the correct direction, the diode conducts.</li>
              <li><strong>Reverse Bias:</strong> When voltage is applied in the opposite direction, the diode blocks current flow.</li>
              <li><strong>LEDs:</strong> Light-emitting diodes that emit light when forward biased — commonly used as visual indicators for power, data, or alerts.</li>
              <li><strong>Polarity Matters:</strong> Reversing the leads of a diode or LED can prevent operation or permanently damage it.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Ensure proper polarity when installing diodes and LEDs. The longer lead of an LED is usually the anode (+), and the flat side or shorter leg is the cathode (−).</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Diode Equation (Ideal Model):</strong> I = 0 when V<sub>D</sub> &lt; V<sub>th</sub>, and I > 0 when V<sub>D</sub> ≥ V<sub>th</sub></li>
              <li><strong>Threshold Voltage (V<sub>th</sub>):</strong> Typical values:
                <ul class="list-disc ml-6">
                  <li>Silicon diode: ~0.7V</li>
                  <li>LEDs: ~1.8V to 3.3V depending on color</li>
                </ul>
              </li>
              <li><strong>Power Consumption of an LED:</strong> P = V × I</li>
              <li>This helps calculate the correct resistor to place in series with an LED to limit current and prevent damage.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You want to connect a red LED (forward voltage = 2V, desired current = 20mA) to a 9V battery. What resistor should you use to protect the LED?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Voltage across resistor: 9V - 2V = 7V</li>
              <li>R = V / I = 7V / 0.02A = 350Ω</li>
              <li>Use the closest common resistor value ≥ 350Ω, such as 360Ω or 390Ω, to ensure safe operation.</li>
            </ul>
            <p>This shows how to safely power LEDs while managing voltage and current using simple resistor calculations.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Diodes are essential in battery charging circuits to prevent reverse flow when the power is off. LEDs are everywhere — in TV displays, cars, remote controls, and charging indicators. Engineers use them to give users real-time feedback or status indicators in embedded systems. For instance, a green LED might show that a sensor is powered and working properly, while a red LED warns of a fault.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In solar energy research, diodes are used to block backflow from battery storage systems at night, improving energy efficiency. In biomedical labs, LEDs are used in compact diagnostic tools and wearable biosensors. Knowing how to safely control brightness and prevent burnout is essential for both patient safety and experimental accuracy.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Diodes let electricity flow in just one direction, like a one-way street. They protect circuits from being damaged by electricity going the wrong way. LEDs are special diodes that light up when electricity flows through them the right way. You’ll see LEDs on nearly every circuit board — they show power, signal, or errors. To keep them safe, you need to add a resistor so they don’t burn out. Diodes are small, but they play a big role in keeping your circuits running safely. Whether you’re making an indicator light or a power circuit, diodes help keep everything flowing in the right direction — clean, controlled, and safe.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Resistors are one of the most common and essential components in any electronic circuit. They provide predictable opposition to electrical current, allowing engineers to control how much current flows and how voltage is distributed. This becomes critical when working with components like LEDs, microcontrollers, and sensors, which often require very specific operating conditions. In both product design and research, resistors prevent components from overheating, enable signal conditioning, and stabilize circuit behavior. Without resistors, most circuits would either short out or destroy sensitive parts. In research environments, precision resistors are used in instrumentation, sensors, and calibration equipment to ensure accurate readings and control systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Current Limiting:</strong> Resistors reduce the amount of current that flows through a component, protecting it from overload.</li>
              <li><strong>Voltage Division:</strong> By placing resistors in series, you can split voltage between two or more points.</li>
              <li><strong>Power Dissipation:</strong> Resistors convert electrical energy into heat — important to calculate to avoid burning out components.</li>
              <li><strong>Tolerance:</strong> Every resistor has a tolerance that tells you how much its actual resistance can vary from its labeled value (e.g., ±5%).</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Resistors are vital for preventing overcurrent conditions that can damage components. Always calculate your resistor value before powering up a new circuit!</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Ohm’s Law (reviewed):</strong> V = I × R</li>
              <li><strong>Solving for Resistance:</strong> R = V / I</li>
              <li><strong>Power in a Resistor:</strong> P = V² / R or P = I² × R</li>
              <li>Use these equations to select a resistor that will limit current to a safe level, and make sure it can handle the amount of power it will dissipate as heat.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You are powering a 5V circuit and want to limit current to 25mA for a connected sensor. What resistor value should you choose? How much power will the resistor dissipate?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>R = V / I = 5V / 0.025A = 200Ω</li>
              <li>P = V² / R = 25 / 200 = 0.125W</li>
              <li>Choose a 200Ω resistor rated at 1/4W (0.25W) or higher to ensure safe operation.</li>
            </ul>
            <p>This shows how resistors both control current and must be chosen carefully based on power ratings to avoid overheating.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In consumer electronics like smartphones and game consoles, resistors are used in voltage dividers and pull-up/pull-down configurations to manage logic levels. They're also embedded in sensors to condition analog signals, ensuring reliable data is read by a microcontroller. Every device you use daily has hundreds to thousands of tiny resistors hidden inside.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In environmental research, resistors are used in circuits for pH meters, water quality probes, and temperature sensors. These devices require stable voltage and current conditions to collect accurate, reproducible data. Variable resistors (potentiometers) are also used in lab calibration tools to adjust sensitivity and signal strength in real-time experiments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Resistors help slow down or control how much electricity flows through a circuit. They’re super important for making sure parts don’t get too much power and break. You use math (like Ohm’s Law) to figure out the right resistor for your circuit. Resistors also spread out voltage across a circuit, and they turn some of the electricity into heat. Every circuit — from your phone to a robot — uses resistors in some way. If you understand how they work, you can build safer and smarter projects. Always check the value and power rating to make sure your circuit stays stable and doesn’t overheat or fail. They may look small, but resistors do a lot of the heavy lifting when it comes to keeping your components safe and your signals clean.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Capacitors and inductors are passive components that play powerful roles in energy management, signal processing, and time-based control in circuits. Capacitors store energy in an electric field and release it almost instantly when needed — ideal for filtering out noise, smoothing power, and enabling timing functions. Inductors store energy in a magnetic field and resist changes in current, making them essential for signal filtering, voltage regulation, and power delivery. These components are central to both analog and digital systems. In research, capacitors are used in implantable medical devices to deliver quick bursts of energy, while inductors appear in wireless charging, electric vehicles, and communication systems. Mastering these components unlocks advanced circuit design in everything from audio systems to renewable energy grids.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Capacitors:</strong> Temporarily store and discharge electrical energy. They block DC current and allow AC signals to pass, making them great for filtering.</li>
              <li><strong>Inductors:</strong> Oppose changes in current by generating a magnetic field. Common in chokes, transformers, and tuning circuits.</li>
              <li><strong>RC Circuits:</strong> Combine resistors and capacitors to create timing functions like delays or smoothing spikes.</li>
              <li><strong>LC Circuits:</strong> Use inductors and capacitors to filter frequencies — useful in radios, antennas, and power systems.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Understanding these components is essential for designing circuits with proper timing and energy management. Think of capacitors as short-term energy banks and inductors as traffic regulators for current flow.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Capacitor Charging Equation:</strong> V(t) = V<sub>max</sub> × (1 - e<sup>-t/RC</sup>)</li>
              <li><strong>Capacitive Reactance:</strong> X<sub>C</sub> = 1 / (2πfC)</li>
              <li><strong>Inductive Reactance:</strong> X<sub>L</sub> = 2πfL</li>
              <li><strong>Energy Stored in a Capacitor:</strong> E = ½ × C × V²</li>
              <li><strong>Energy Stored in an Inductor:</strong> E = ½ × L × I²</li>
              <li>These equations help you calculate how capacitors and inductors behave at different frequencies and how much energy they store or resist.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Question:</h3>
            <p>You’re building a timer circuit using a 100µF capacitor and a 10kΩ resistor. How long does it take for the capacitor to charge to 63% of the supply voltage (1 time constant)? Also, how much energy is stored if the capacitor is charged to 9V?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Time constant: τ = R × C = 10,000 × 0.0001 = 1 second</li>
              <li>At 1τ, the capacitor reaches ~63% of supply voltage</li>
              <li>Energy stored: E = ½ × C × V² = 0.5 × 0.0001 × 81 = 0.00405 J</li>
            </ul>
            <p>This shows how capacitors are used in timing and how their energy storage can be precisely calculated in real circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Capacitors are used in phone cameras to provide a quick burst of flash power, while inductors are used in your phone charger to regulate power conversion. In car audio systems, capacitors stabilize voltage delivery to amplifiers. In renewable energy systems, inductors are part of converters that ensure power from solar panels or batteries flows smoothly and efficiently.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>Capacitors are used in biomedical devices like defibrillators to rapidly discharge stored energy. Inductors appear in experimental wireless power transfer setups, where researchers test coil designs for efficient energy transmission across short distances. Understanding how these components store and react to energy enables researchers to make circuits smarter, faster, and more reliable under real-world conditions.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Capacitors and inductors are like small batteries — they store energy and release it when needed. Capacitors charge and discharge quickly, which makes them great for controlling timing and cleaning up electrical noise. Inductors resist changes in current, which helps control how electricity flows through a circuit. You’ll see these parts in power supplies, radios, and even your phone charger. They help your circuit stay smooth and stable. By learning how they work and how to calculate their behavior, you can make electronics that are more efficient, more precise, and more powerful. Once you know how to use them together, you can filter signals, control timing, and manage energy like a pro.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Integration is where all your knowledge comes together — taking individual components like resistors, capacitors, diodes, transistors, and microcontrollers, and assembling them into one working system. This process is what turns a schematic into a real-world solution. Effective integration ensures not only that the circuit works, but also that it's safe, efficient, and reliable. It’s vital for prototyping new ideas, debugging unexpected issues, and scaling a design from lab to final product. In research, successful integration enables rapid development of tools for data collection, bio-sensing, environmental monitoring, and more. In industry, it's how smart devices are built to handle real-time feedback, power constraints, and complex control logic.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Use circuit diagrams:</strong> Always plan before you build. Schematics help visualize connections and prevent errors.</li>
              <li><strong>Apply proper wiring techniques:</strong> Minimize signal noise and power loss by using clean, short wire runs and keeping power and signal lines separate when possible.</li>
              <li><strong>Breadboarding:</strong> Assemble your components on a breadboard to quickly test and troubleshoot circuits without soldering.</li>
              <li><strong>Testing and iteration:</strong> Always verify functionality at each stage before moving forward with full assembly or PCB design.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Effective integration is the key to creating reliable circuits that perform their intended functions. Build in stages and test often to catch mistakes early.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Design Tools:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Node Voltage Method:</strong> Solve for unknown voltages at junctions in multi-component circuits.</li>
              <li><strong>Current Divider Rule (for parallel branches):</strong> I<sub>x</sub> = (R<sub>total</sub> / R<sub>x</sub>) × I<sub>total</sub></li>
              <li><strong>Total Power:</strong> P<sub>total</sub> = Σ (V × I) for all components</li>
              <li><strong>Continuity Checks:</strong> Use a multimeter to ensure complete paths for current in every part of your circuit.</li>
              <li>These tools and equations help validate your design when you're combining multiple component types with different requirements.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You’re building a motion-activated light system. It integrates a PIR sensor, an LED, a transistor for switching, a resistor for current limiting, and a 9V power supply. Describe how you would combine these components step-by-step.</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Step 1: Connect the PIR sensor’s output to the base of an NPN transistor through a 1kΩ resistor.</li>
              <li>Step 2: Connect the LED in series with a 330Ω resistor between the transistor’s collector and 9V power.</li>
              <li>Step 3: Ground the emitter of the transistor.</li>
              <li>Step 4: Power the PIR sensor with the same 9V and ensure its ground is shared.</li>
              <li>Step 5: When motion is detected, the PIR sensor outputs HIGH, switching the transistor ON, allowing current to flow and lighting the LED.</li>
            </ul>
            <p>This demonstrates how you integrate sensing, control, and output components into one practical, working circuit.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Smart home systems integrate sensors, relays, wireless modules, and logic to automate lighting, security, and energy use. In these designs, integration ensures that user input, sensor data, and system responses are connected logically and function seamlessly. Errors in integration can cause unexpected behavior or even total system failure.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In agricultural technology research, integrated systems collect temperature, soil moisture, and light data using different sensors. These signals are processed by a microcontroller and trigger irrigation or alert messages via wireless modules. Successful integration of all hardware ensures accurate real-time responses, helping researchers and farmers optimize resources.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Integrating components means putting everything together so your project actually works. It’s not just about connecting wires — it’s about thinking through how each part interacts with the others. Planning your layout, checking connections, and testing each section keeps your build clean and bug-free. Whether it’s a blinking LED or a smart robot, integration makes the parts come alive as one system. By understanding how to wire, power, and control components together, you can bring your ideas to life — safely and reliably. This is the step where everything you’ve learned finally connects in a real, working circuit.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
          <li>Submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>`,
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
        },
        {
          title: "2.8 Practice Assignment",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Practice Assignment – Understanding Circuit Analysis</h2>
            <p class="mt-4"><strong>Objective:</strong> Strengthen your ability to analyze circuits by recalling key concepts from both Week 1 and Week 2. This is a memory-boosting activity — no submission required — designed to reinforce long-term understanding.</p>
        
            <h3 class="text-xl font-semibold mt-6">Why This Is Important:</h3>
            <p>To build real-world electronic systems, you need more than just wiring skills — you must be able to analyze what’s happening inside your circuit. This means understanding how components interact, how voltage and current behave, and how to spot issues before they become problems. This activity combines knowledge from <strong>Week 1: Foundations</strong> and <strong>Week 2: Components & Functionality</strong> to help you become a confident circuit builder and troubleshooter.</p>
        
            <h3 class="text-xl font-semibold mt-6">Core Challenge:</h3>
            <p><strong>Scenario:</strong> You’ve built a simple circuit with the following components:</p>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>One transistor acting as a switch</li>
              <li>An LED with a 220Ω resistor in series</li>
              <li>A diode protecting the circuit from reverse polarity</li>
              <li>A motion sensor that triggers the transistor’s base</li>
            </ul>
        
            <p class="mt-4"><strong>Your Task:</strong> On paper or in your notebook, draw the circuit and answer the following:</p>
            <ol class="list-decimal list-inside ml-4 mt-2">
              <li>Which component in this circuit <em>controls</em> when current flows to the LED?</li>
              <li>Why is the resistor placed before the LED, and what might happen if you remove it?</li>
              <li>Explain what role the diode plays in terms of protecting the components.</li>
              <li>Estimate the voltage drop across the LED. What’s left for the resistor?</li>
              <li>Draw arrows showing current flow when the sensor detects motion.</li>
            </ol>
        
            <h3 class="text-xl font-semibold mt-6">Recall Check: Week 1 Flash Questions</h3>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>✅ What is a circuit, and why must it be closed?</li>
              <li>✅ What's the difference between a conductor and an insulator?</li>
              <li>✅ What does Ohm’s Law help you calculate?</li>
              <li>✅ What’s the unit of resistance?</li>
              <li>✅ Which pin on a breadboard row connects to all others?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Recall Check: Week 2 Flash Questions</h3>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>✅ What does a transistor do in switching mode?</li>
              <li>✅ Name 2 logic gates and describe their behavior.</li>
              <li>✅ What’s the main function of a capacitor in a circuit?</li>
              <li>✅ How does an inductor store energy?</li>
              <li>✅ What’s the importance of choosing the correct resistor value?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Hands-On Review Task (Optional):</h3>
            <p>Rebuild a small test circuit using any of these components you’ve covered:</p>
            <ul class="list-disc list-inside ml-4">
              <li>A diode + resistor + LED</li>
              <li>One transistor as a switch, controlled by a pushbutton</li>
              <li>Logic gate simulation (AND or NOT) using switches and LEDs (can be done with Tinkercad)</li>
            </ul>
            <p>Sketch your result, take notes on what worked and what didn’t, and reflect on how it connects to what you’ve learned so far.</p>
        
            <h3 class="text-xl font-semibold mt-6">Reflection Prompt:</h3>
            <p>Write or speak out loud: What are 3 things you now understand better from this exercise? What’s 1 thing that still confuses you? (You can bring this question to the next session or office hours.)</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This practice assignment brings together everything you’ve learned about circuits, components, and how electricity flows. You’ll review how resistors protect LEDs, how transistors switch circuits on, and how capacitors and diodes behave. The questions are here to help you remember — not test you. Try the sketch, answer the questions, rebuild a circuit if you can, and reflect on what you've learned. Doing this now makes the rest of the course much easier and sets you up for a successful final project.</p>
        
            <li>Submition information and futher documentation for your final project can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week2-practice-review"
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
    
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Hardware modules bring your circuits to life by letting them sense, respond, and communicate with the world. These modules are pre-packaged electronic subsystems that simplify complex functionality — making them perfect for prototyping, learning, and rapid development. Sensors collect data like temperature, movement, or light; actuators let you trigger physical changes like spinning a motor or moving a servo; and connectivity modules like Wi-Fi and Bluetooth open up communication with other devices, phones, or the cloud. In research and engineering, these modules are crucial in building smart systems — from wearable tech to environmental monitoring platforms and automated robots. Understanding how each type works and how to integrate them is key to building responsive, real-world-ready electronics.</p>
    
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Sensors:</strong> Devices that detect changes in physical conditions and convert them into electrical signals (e.g., temperature sensors, PIR motion detectors, light-dependent resistors).</li>
              <li><strong>Actuators:</strong> Hardware that performs actions — includes motors for continuous movement, and servos for precise angle-based motion.</li>
              <li><strong>Connectivity Modules:</strong> Include Bluetooth, Wi-Fi, Zigbee, and more. These enable devices to wirelessly communicate, share data, or be controlled remotely.</li>
              <li><strong>Microcontroller Integration:</strong> Most modules are connected to GPIO (general-purpose input/output) pins of a microcontroller and interact via analog, digital, I2C, or UART communication.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Familiarize yourself with each type of module, as they are the building blocks of interactive projects. Start with basic sensor-actuator pairs, then level up to connected systems using wireless modules.</p>
    
            <h3 class="text-xl font-semibold mt-6">Important Concepts & Equations:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Sensor Output Voltage (Analog):</strong> V<sub>out</sub> = (Physical Quantity / Max Range) × V<sub>ref</sub></li>
              <li><strong>Servo Positioning:</strong> Angle = ((Pulse Width - 1000µs) / 1000µs) × 180°</li>
              <li><strong>Wi-Fi Module Baud Rate:</strong> Commonly 9600 or 115200 bps (bits per second) for serial communication</li>
              <li><strong>Bluetooth Range:</strong> Typical modules like HC-05 = ~10 meters; BLE = ~50+ meters</li>
              <li>These concepts help when integrating and debugging modules based on expected input/output behavior or signal timing.</li>
            </ul>
    
            <h3 class="text-xl font-semibold mt-6">Example Integration:</h3>
            <p>You want to build a plant monitoring system that checks soil moisture and sends alerts over Wi-Fi when the plant needs watering. What modules would you use, and how would you wire them?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Use a capacitive soil moisture sensor (analog) connected to an analog input pin (e.g., A0 on an Arduino).</li>
              <li>Use an ESP8266 or ESP32 microcontroller with built-in Wi-Fi for internet connectivity.</li>
              <li>Write a program that reads the analog voltage from the sensor, maps it to moisture percentage, and sends data to an online dashboard or phone app.</li>
              <li>Optional: Add an RGB LED to provide visual moisture-level feedback (green = healthy, red = dry).</li>
            </ul>
            <p>This example demonstrates how sensors and connectivity modules combine to create real-world, practical systems with remote monitoring and alerts.</p>
    
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Smart agriculture systems use combinations of sensors (moisture, pH, temperature) and actuators (irrigation pumps) controlled wirelessly via microcontrollers. Environmental research stations deploy modular sensor networks with long-range communication modules like LoRaWAN or Wi-Fi to monitor ecosystems in real time. Understanding these modules allows engineers to rapidly prototype field-deployable, data-rich systems.</p>
    
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In wearable health technology research, developers integrate biometric sensors (heart rate, skin temperature), microcontrollers, and BLE modules to send data to mobile devices for analysis. These hardware modules enable low-cost, compact, and scalable health monitoring tools for patients and athletes alike — giving researchers continuous access to user data in real-time.</p>
    
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Hardware modules are ready-made building blocks that make your circuits smarter. Sensors detect things like temperature or movement, actuators let your project do something physical like turn a motor, and connectivity modules help it talk to your phone or send data online. You connect these modules to your microcontroller using simple wiring and control them with code. Learning how they all work together helps you build real projects like smart gardens, home alarms, or even wearable tech. These modules save time, add tons of power to your designs, and are used in both DIY and high-level research. Once you learn how to combine and control them, you can make projects that interact with the real world — and share it too.</p>
    
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Sensors are critical components in electronics, enabling circuits to perceive and respond to real-world stimuli. From detecting motion in a security system to measuring body temperature in medical wearables, sensors act as the “input layer” of an interactive project. Each type of sensor provides a specific kind of data — analog or digital — which must be interpreted correctly to trigger meaningful actions. Whether you're automating lighting, building an alert system, or logging environmental changes, using the right sensor—and understanding how it works—is key. In research, sensors collect high-resolution, real-time data that drives discoveries in fields like healthcare, agriculture, robotics, and climate science. Once you know how to apply sensors, you can build smart systems that see, feel, and adapt to their environment.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Temperature Sensors:</strong> Measure heat levels from the environment or a surface. Common types include thermistors, TMP36, and digital sensors like the DS18B20.</li>
              <li><strong>Light Sensors (LDRs/Photoresistors):</strong> Change resistance based on the amount of ambient light. Used for auto-brightness or night-light circuits.</li>
              <li><strong>Motion Sensors:</strong> Include PIR sensors for body movement and accelerometers/gyros for tilt, shake, or orientation sensing.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Understanding sensor outputs is crucial for processing data and automating responses in your projects. Always check whether your sensor gives analog or digital signals — it changes how you read and use the data.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Logic:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Analog-to-Digital Conversion (ADC):</strong> Voltage = (ADC Reading / 1023) × V<sub>ref</sub></li>
              <li><strong>Thermistor Temperature (Simplified):</strong> T (°C) ≈ (V<sub>ref</sub> - V<sub>out</sub>) × Scaling Factor (sensor-specific)</li>
              <li><strong>LDR Voltage Divider Output:</strong> V<sub>out</sub> = V<sub>in</sub> × (R<sub>LDR</sub> / (R<sub>fixed</sub> + R<sub>LDR</sub>))</li>
              <li>These formulas help you convert voltage readings from sensors into usable real-world values like degrees Celsius or brightness levels.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You want to build a smart night-light that turns on when it's dark and movement is detected. What sensors would you use, and how would the circuit work?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Use a Light Dependent Resistor (LDR) in a voltage divider to monitor ambient light levels.</li>
              <li>Use a PIR motion sensor to detect movement in the room.</li>
              <li>Connect both to a microcontroller. Write a program that turns on an LED only if the LDR voltage is below a “darkness” threshold AND the PIR detects motion.</li>
            </ul>
            <p>This shows how combining sensor data with conditional logic can lead to smarter behavior — only lighting up when both conditions are met.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Motion and light sensors are found in automatic streetlights, smart thermostats, and even fitness trackers. Temperature sensors are used in ovens, weather stations, and medical monitors. Understanding how to wire and code with sensors is essential in all industries that rely on environment-aware systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In biomedical research, temperature sensors are used in wearable devices to monitor fevers or inflammation. In environmental research, motion sensors track animal movement for conservation efforts. Sensors provide the raw data that scientists rely on for real-time insight and long-term trend analysis. Proper calibration and placement of sensors are essential for accuracy in both lab and field experiments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Sensors let your circuit “sense” what’s happening in the world — whether it’s heat, light, or motion. Temperature sensors help you know if something’s hot or cold, light sensors tell if it’s bright or dark, and motion sensors know when someone moves. These signals can trigger things like turning on a fan, a light, or sending an alert. You read the signals using a microcontroller and decide what happens next. Understanding how these sensors behave — and how to convert their signals into real measurements — lets you build smart systems that interact with their environment. Once you get the hang of it, you can build anything from automatic pet feeders to climate-tracking tools. Sensors make your projects come alive with awareness.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Actuators are essential for bringing your electronics projects to life by enabling them to perform physical actions. Whether it's spinning a wheel, waving a robotic arm, or opening a door, actuators make it happen. These devices convert electrical energy into mechanical motion. Servos allow precise control of position, while DC motors offer continuous rotation for applications like wheels or fans. Actuators are used in everything from industrial automation to robotics, drones, prosthetics, and even biomedical devices. In research settings, actuators are vital in experiments that require mechanical control, force application, or automation. Learning how to choose, power, and control actuators gives you the ability to build systems that move — intelligently and accurately.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Actuators:</strong> Devices that respond to a control signal and produce physical movement — includes motors, servos, and linear actuators.</li>
              <li><strong>Servos:</strong> Use internal control circuitry and feedback to move to and hold a specific angle (usually 0–180°).</li>
              <li><strong>DC Motors:</strong> Provide continuous rotation and require external control logic (like H-bridges) to change direction and speed.</li>
              <li><strong>Pulse Width Modulation (PWM):</strong> Used to control speed and angle of actuators by varying signal timing.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Ensure that you match the actuator type with your project requirements to achieve the desired motion control. Use servos for precision, and DC motors for speed or continuous motion.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>PWM Duty Cycle (%):</strong> = (Pulse Width / Period) × 100</li>
              <li><strong>Motor Speed Control (DC):</strong> Speed ∝ Average Voltage ∝ Duty Cycle</li>
              <li><strong>Servo Angle (Standard Servo):</strong> Angle ≈ ((Pulse Width in µs - 1000) / 1000) × 180</li>
              <li><strong>Power Calculation:</strong> P = V × I (especially important for powering motors safely)</li>
              <li>These equations help you translate digital signals into mechanical motion with accuracy and safety.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You're building an automated mini-blind system that opens and closes based on light levels. What actuator would you use, and how would you wire it?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Use a servo motor to rotate the blinds to a specific angle.</li>
              <li>Connect a light sensor (like an LDR) to an analog pin to detect brightness.</li>
              <li>Use PWM on a digital pin (e.g., D9 on Arduino) to send control signals to the servo.</li>
              <li>In your code, convert the LDR reading into an angle value and send it to the servo using the <code>servo.write(angle)</code> function.</li>
            </ul>
            <p>This demonstrates how sensor-actuator integration leads to automated physical responses, adding real-world functionality to your circuits.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Servos are used in drones for controlling camera gimbals, robotic arms for picking objects, and even in automatic door systems. DC motors are found in everything from cooling fans to conveyor belts and electric toothbrushes. Understanding how to integrate and control actuators is a must for robotics, mechatronics, and any project involving automation.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In prosthetics research, servos provide fine-grained control over finger or limb movement based on sensor data from muscle or nerve signals. In agricultural robotics, DC motors are used in autonomous harvesters and drones for crop dusting. Accurate actuator control makes it possible to mimic human motion, automate repetitive tasks, and build smarter machines that adapt to their environments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Actuators help your projects move. Whether you’re spinning a wheel or lifting a robotic arm, they turn electrical signals into physical motion. Servos are great when you need precise angle control — like making something turn exactly 90 degrees. DC motors are better for spinning things fast and continuously. You control them using special signals called PWM, which let you adjust speed and angle by changing the timing of the signal. Understanding how to power and program actuators makes it possible to build robots, gadgets, and anything that reacts with movement. Once you know how to control these, you can make your projects walk, grab, spin, or wave!</p>
        
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Communication modules are at the core of the Internet of Things (IoT), where physical devices collect and exchange data over a network. Whether you're building a smart home device, a wearable fitness tracker, or a data logger for scientific experiments, these modules enable real-time wireless communication. Bluetooth is great for short-range, low-power device-to-device connections, while Wi‑Fi modules like the ESP8266 and ESP32 allow broader, internet-enabled control. Integrating these modules allows you to build systems that are interactive, remote-controllable, and cloud-connected — which is why communication modules are vital in modern electronics. In research, communication modules transmit sensor data from remote locations, enable wireless control of experiments, and support mobile health monitoring systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Bluetooth Modules (e.g., HC-05, BLE):</strong> Ideal for pairing with mobile devices, offering low energy usage and short-range (typically 10–30m).</li>
              <li><strong>Wi‑Fi Modules (e.g., ESP8266, ESP32):</strong> Allow internet connectivity for real-time data logging, remote control, and integration with cloud platforms.</li>
              <li><strong>Serial Communication (UART):</strong> Many communication modules interact via UART, requiring careful configuration of baud rate and logic levels.</li>
              <li><strong>IoT Relevance:</strong> Enables telemetry, automation, and remote diagnostics across countless applications from home automation to industrial monitoring.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Choose the appropriate module based on the range and data requirements of your project. Bluetooth is better for local control; Wi‑Fi is better for cloud-connected systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Configs:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Baud Rate:</strong> Speed of serial communication, typically 9600, 38400, or 115200 bps.</li>
              <li><strong>Wi-Fi Power Consumption (ESP8266):</strong> ~80–170 mA during transmit, ~20 mA idle</li>
              <li><strong>Bluetooth Power Consumption (BLE):</strong> ~0.01–0.5 mA during transmit, ~1 µA idle</li>
              <li><strong>Data Rate (Theoretical):</strong> Wi‑Fi ≈ 11–150 Mbps, Bluetooth Classic ≈ 1–3 Mbps, BLE ≈ 1 Mbps</li>
              <li>Use these parameters to evaluate battery needs, speed, and feasibility in your wireless designs.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You're building a remote soil moisture monitoring system for a greenhouse. It needs to collect data and send it to your phone in real time. What communication module would you use and how?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Use an ESP8266 or ESP32 Wi‑Fi module to connect to a local network or hotspot.</li>
              <li>Connect a soil moisture sensor to an analog pin.</li>
              <li>Program the microcontroller to send moisture data via HTTP to a cloud dashboard or mobile app.</li>
              <li>Optionally, include a threshold to send alerts via email or push notifications when soil is too dry.</li>
            </ul>
            <p>This setup demonstrates how Wi‑Fi enables real-time remote monitoring and automation based on sensor feedback.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Smart home systems use Wi‑Fi and Bluetooth to control lights, thermostats, and alarms. Wearable fitness trackers sync with your phone via BLE. Agricultural IoT systems collect data from hundreds of sensors across a field and send updates to cloud dashboards for irrigation control. These technologies make systems smarter and more connected than ever before.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In environmental research, communication modules transmit data from sensors placed in remote forests, oceans, or mountains to centralized research labs. In clinical trials, wearable BLE-enabled biosensors stream real-time health data from participants to physicians, ensuring better monitoring and early detection. These modules help bridge the gap between physical experiments and digital infrastructure.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Communication modules let your project talk to other devices or even the internet. Bluetooth is great for nearby connections like phones or tablets, while Wi‑Fi lets your project go online and send data anywhere. You use these modules to share information from sensors, control devices remotely, or track things over time. These tools are how your circuit goes from just reacting to becoming part of a smart, connected system. Once you learn how to set up the wiring and write basic code to send or receive data, you’ll be able to build all kinds of projects — from weather stations to fitness monitors to remote alarms. Communication modules turn your electronics into part of the real-time, digital world.</p>
        
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Every circuit needs a reliable source of power, and managing that power efficiently is key to creating safe, long-lasting, and portable electronics. Whether you’re running your project from a wall adapter, USB port, or battery pack, understanding how to distribute and conserve power is essential. This involves selecting the right battery type, maintaining a stable voltage with regulators, and using techniques like sleep modes and duty cycling. Poor power design can lead to unstable operation, overheating, or premature battery drain. In research and industry, power management is a foundational consideration in wearable tech, sensor networks, robotics, aerospace systems, and medical devices. The more optimized your power system, the more dependable your entire project becomes.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Battery Types:</strong> Alkaline, Li-ion, Li-Po, NiMH — each with different voltage, energy density, and rechargeability characteristics.</li>
              <li><strong>Voltage Regulators:</strong> Linear (e.g., 7805) and switching (e.g., buck/boost converters) — maintain consistent voltage despite fluctuating input or load.</li>
              <li><strong>Power-Saving Strategies:</strong> Sleep modes, duty cycling, using lower clock speeds, and turning off unused components.</li>
              <li><strong>Current Draw Awareness:</strong> Always budget for how much current your sensors, actuators, and modules require.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Efficient power management is critical for both portable and stationary electronic projects. Designing with energy conservation in mind can drastically extend the life and reliability of your system.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Power Consumption:</strong> P = V × I</li>
              <li><strong>Battery Life Estimate:</strong> Battery Life (hrs) = Capacity (mAh) / Load Current (mA)</li>
              <li><strong>Voltage Drop in Linear Regulator:</strong> V<sub>drop</sub> = V<sub>in</sub> - V<sub>out</sub> (all excess power is lost as heat)</li>
              <li><strong>Efficiency (Switching Regulator):</strong> η = (V<sub>out</sub> × I<sub>out</sub>) / (V<sub>in</sub> × I<sub>in</sub>) × 100%</li>
              <li>These help you choose the right power source and regulator, and predict runtime and energy efficiency.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You’re building a wireless temperature sensor that uses an ESP8266 and runs off a 3.7V 2000mAh Li-Po battery. The average current draw is 100mA when transmitting. How long will the system run?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Battery Life = 2000mAh / 100mA = 20 hours</li>
              <li>To extend life, reduce transmission frequency and use deep sleep mode between readings.</li>
            </ul>
            <p>This shows the direct relationship between current usage and runtime — and why power optimization is essential in battery-powered projects.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In wearables like smartwatches or fitness trackers, optimizing power use determines how often a device needs to be recharged. In solar-powered IoT systems, careful energy budgeting allows for continuous operation even with limited sunlight. Devices that communicate over Wi-Fi or Bluetooth must balance data rates with battery constraints to perform reliably.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In field research, scientists use long-term battery-powered sensor systems to monitor wildlife, glaciers, or environmental conditions. These sensors may be deployed for months without maintenance. By using low-power microcontrollers and regulating data transmission intervals, researchers achieve extended operation without solar panels or human intervention.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Power is what keeps your circuit running, and managing it well means your project lasts longer and works more safely. Batteries come in different sizes and types — some last longer, some are rechargeable. Voltage regulators keep things steady so your components don’t burn out. And if you're running on battery, you’ll want to use power-saving tricks like sleep mode. With a few calculations, you can predict how long your system will last and how much energy it uses. Power management is one of the most important parts of building real electronics, especially if they’re wireless or portable. Learning how to use it right means your projects can go farther, run longer, and stay safer — whether they’re worn on the body or monitoring nature in the wild.</p>
        
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Advanced circuit design goes beyond individual components — it's about building complete systems that are efficient, scalable, and reliable. As you move from basic circuits to integrated projects, you'll need to understand how different components interact electrically and logically. This includes managing voltage levels, communication protocols, timing, and power consumption. Planning becomes critical: schematic diagrams help organize your ideas, while simulation tools allow for testing before any physical build. In professional engineering and research, advanced design techniques are used to prototype products, test systems before fabrication, and ensure compatibility across components. Whether you're building a wearable device, automation controller, or smart sensor array, mastery of circuit integration is what brings real-world systems to life.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Techniques:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Schematic Diagrams:</strong> Visual blueprints that show how all components connect, helping organize logic and flow.</li>
              <li><strong>Component Compatibility:</strong> Match voltage levels, data interfaces (I2C, SPI, UART), and power requirements to avoid damage or miscommunication.</li>
              <li><strong>Breadboarding & Simulation:</strong> Prototype and debug before soldering or designing a PCB. Use tools like Tinkercad, LTspice, or Proteus.</li>
              <li><strong>Modular Design:</strong> Break complex systems into subsystems like power, sensing, communication, and control for easier debugging.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Advanced circuit design requires careful planning and iterative testing to achieve a reliable final product. Think like a system architect — not just a builder.</p>
        
            <h3 class="text-xl font-semibold mt-6">Important Equations & Design Rules:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Total System Current:</strong> I<sub>total</sub> = Σ I<sub>components</sub> — for power supply sizing</li>
              <li><strong>Signal Voltage Thresholds:</strong> Ensure logic HIGH and LOW levels are compatible across all digital components</li>
              <li><strong>Bypass Capacitor Placement:</strong> Place 0.1µF capacitors near Vcc pins of ICs to stabilize local voltage</li>
              <li><strong>Noise Filtering:</strong> Use RC filters: f<sub>c</sub> = 1 / (2πRC) to remove unwanted high-frequency signals</li>
              <li>These concepts ensure signal stability, system reliability, and prevent interference between modules.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Example Project:</h3>
            <p>You’re designing a wearable health monitor that uses a temperature sensor, heart rate sensor, microcontroller, OLED display, and Bluetooth module. How would you plan and test the full system?</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-inside ml-6">
              <li>Start by drawing a full schematic diagram showing all connections and components, including power supply and data lines.</li>
              <li>Check that all modules use the same logic voltage (e.g., 3.3V or 5V) and add level shifters if needed.</li>
              <li>Prototype on a breadboard, testing one module at a time before combining them.</li>
              <li>Use serial output to debug sensor readings, and confirm that your microcontroller handles multiple inputs and outputs simultaneously.</li>
              <li>Implement power budgeting and consider deep sleep modes if battery-powered.</li>
            </ul>
            <p>This example shows how modular thinking, planning, and testing are essential to assembling a functioning full-system project.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Consumer products like smart watches, drones, and home automation hubs are examples of advanced circuit design. These systems combine sensors, displays, wireless chips, batteries, and processors in small, power-efficient layouts that require meticulous planning and integration — often developed using breadboarding and simulation first, followed by printed circuit board (PCB) design.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In neuroscience labs, researchers build multi-sensor circuits to collect neural signals, stimulate tissue, and transmit data — all in one integrated device. These advanced circuits must manage analog and digital signals, protect sensitive inputs from noise, and operate within strict power and timing constraints. Simulation and breadboarding are essential steps before fabricating experimental equipment.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Advanced circuit design means putting everything you’ve learned together — sensors, outputs, power, and communication — into one working system. You plan with diagrams, test each part, and fix problems before finalizing anything. It’s about thinking through how every wire, signal, and component works as a team. The more parts you have, the more planning matters. Even professional engineers build circuits step-by-step and test constantly before creating final boards. With good design habits, your circuits will be stronger, safer, and more reliable. This is how you go from experiments to real products that actually work in the real world.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
          <li>Submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>`,
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
        },
        {
          title: "3.8 Practice Assignment",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Practice Assignment – Advanced Circuit Design & Integration</h2>
            <p class="mt-4"><strong>Objective:</strong> Reinforce your understanding of advanced circuit design through practical integration of sensors, actuators, and communication modules. This assignment ties together lessons from Week 3 and prior weeks to help you build fully functional systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Why This Matters:</h3>
            <p>By this point, you’ve learned about core components, wiring, sensors, actuators, and communication modules. Now it’s time to apply those pieces together and think like a systems engineer. This exercise is meant to help you practice building a multi-component setup that resembles real-world embedded systems. No submission is required, but practicing these skills will make your final project easier, faster, and more impressive.</p>
        
            <h3 class="text-xl font-semibold mt-6">Hands-On Integration Task:</h3>
            <p><strong>Build a basic interactive system that includes:</strong></p>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>At least one <strong>sensor</strong> (e.g., temperature, light, or motion)</li>
              <li>One <strong>actuator</strong> (e.g., LED, buzzer, or servo motor)</li>
              <li>Optional: One <strong>communication module</strong> (e.g., Serial Monitor, or display like OLED or LCD)</li>
            </ul>
        
            <p><strong>Example Concept:</strong> "Motion-Activated Light Alert System"</p>
            <ul class="list-disc list-inside ml-6">
              <li>PIR sensor detects movement → microcontroller activates LED + buzzer</li>
              <li>Optional: Display “Motion Detected” on serial monitor or screen</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Documentation Checklist:</h3>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>Draw a labeled diagram of your circuit</li>
              <li>List all components and pin connections</li>
              <li>Include a short description of what your system does</li>
              <li>Write or paste your code (use modular functions where possible)</li>
              <li>Take a photo of your breadboarded circuit if you can</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Review & Reflect:</h3>
            <ul class="list-disc list-inside ml-4">
              <li> Which parts from <strong>Week 1</strong> did you use? (e.g., Ohm’s Law, breadboarding, circuit reading)</li>
              <li> Which concepts from <strong>Week 2</strong> did you apply? (e.g., resistors, diodes, capacitors, transistors)</li>
              <li> What did you learn about using sensors and modules from <strong>Week 3</strong>?</li>
              <li> What part was hardest to debug or wire correctly?</li>
            </ul>
        
            <p>Optional: Write a short paragraph in your notebook answering this question: <em>“If I had to redesign this system for the real world, what would I improve or change?”</em></p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This assignment is your chance to practice combining everything you’ve learned so far. You'll build a real circuit using sensors and actuators, connect the parts properly, write clean code to control them, and reflect on the process. This mirrors how real products are built — sensors trigger actions, outputs respond, and the code connects them all. Practicing now helps you prepare for your final project and gives you confidence to build your own systems from scratch.</p>
        
            <li>Submition information and futher documentation for your final project can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week3-practice-integration"
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
    
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>The Arduino IDE (Integrated Development Environment) is the software interface where you write, upload, and debug code for Arduino-compatible boards. It serves as the bridge between your ideas and your circuits — letting you program sensors, actuators, displays, and communication modules. Arduino’s open-source ecosystem has become the standard in educational electronics, rapid prototyping, and even research settings due to its ease of use, vast community support, and real-time testing capabilities. Understanding how to navigate the IDE is the first step toward making your hardware intelligent and interactive.</p>
    
            <h3 class="text-xl font-semibold mt-6">Key Points:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Download:</strong> Visit <a href="https://www.arduino.cc/en/software" target="_blank" class="text-blue-500 underline">arduino.cc</a> to download the IDE for your operating system (Windows, macOS, Linux).</li>
              <li><strong>Editor Window:</strong> Where you write your code (called sketches). Features syntax highlighting and auto-formatting tools.</li>
              <li><strong>Toolbar:</strong> Includes buttons to verify (checkmark), upload (right arrow), open serial monitor, and save.</li>
              <li><strong>Serial Monitor:</strong> Allows you to view real-time data from the Arduino via USB — essential for debugging and reading sensor values.</li>
              <li><strong>Board & Port Setup:</strong> Go to Tools > Board to select your board (e.g., Arduino Uno), and Tools > Port to select the correct COM port. This tells the IDE where to send your code.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> If uploads fail, double-check that you selected the correct board and COM port, and confirm that no other programs are using the same port.</p>
    
            <h3 class="text-xl font-semibold mt-6">Example Walkthrough:</h3>
            <p>You just unboxed an Arduino Uno. Let’s walk through how to test that it’s working properly:</p>
            <ul class="list-disc list-inside ml-6">
              <li>Step 1: Plug the board into your computer via USB.</li>
              <li>Step 2: Open the Arduino IDE and go to Tools > Board > “Arduino Uno”.</li>
              <li>Step 3: Go to Tools > Port and choose the port labeled “Arduino Uno” or similar (e.g., COM3).</li>
              <li>Step 4: Open File > Examples > 01.Basics > “Blink”. This sketch blinks the onboard LED (pin 13).</li>
              <li>Step 5: Click the Upload button. The LED should start blinking once per second.</li>
            </ul>
            <p>This is the classic “Hello World” of Arduino and proves your setup works.</p>
    
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Engineers and researchers use the Arduino IDE to develop proof-of-concept prototypes, validate sensor logic, and test communication workflows before moving to custom PCBs or embedded software environments. Even major companies start with Arduino to speed up R&D cycles.</p>
    
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In biomedical engineering, Arduino IDE is used with Arduino Nano and various biosensors to collect data like pulse, temperature, and motion. Researchers quickly deploy these systems for field studies, patient trials, or lab-controlled experiments with minimal setup time. The IDE’s real-time serial data display is critical for fast iteration.</p>
    
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>The Arduino IDE is the software where you tell your Arduino what to do. You type your code (called a sketch), press upload, and the Arduino runs it. You can also watch sensor readings using the Serial Monitor and change your code as needed. Setting the right board and COM port helps the IDE find your device. Once it’s set up, you can program LEDs to blink, sensors to measure, or motors to move — it’s the first step in turning ideas into interactive electronics.</p>
    
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Programming a microcontroller like an Arduino is about giving it step-by-step instructions to sense, decide, and act. These programs — or "sketches" — are written in a simplified version of C++ that's easy to learn and powerful enough for real-world applications. Every sketch must include at least two core functions: <code>setup()</code> and <code>loop()</code>. Understanding how these work, along with basic programming syntax, allows you to build code that interacts with sensors, controls lights or motors, and makes decisions based on input. Programming is where your project gains intelligence — it’s what transforms passive circuits into smart systems that think and react in real time.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Topics:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Sketch Structure:</strong> 
                <ul class="ml-6 list-disc">
                  <li><code>setup()</code>: Runs once when the program starts. Use it to initialize components (e.g., <code>pinMode()</code>).</li>
                  <li><code>loop()</code>: Runs continuously. Your program logic goes here.</li>
                </ul>
              </li>
              <li><strong>Syntax Basics:</strong> 
                <ul class="ml-6 list-disc">
                  <li>Data types: <code>int</code>, <code>float</code>, <code>bool</code>, <code>char</code>, <code>String</code></li>
                  <li>Variable declarations: <code>int ledPin = 13;</code></li>
                  <li>Control structures: <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>switch</code></li>
                </ul>
              </li>
              <li><strong>Code Comments:</strong> Use <code>//</code> for single-line and <code>/* */</code> for multi-line comments. Comments are essential for making your code readable and easier to maintain.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Start with simple examples like blinking an LED or reading a sensor before combining multiple functions into a larger program.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Sketch:</h3>
            <p>Here’s a simple example that blinks an LED connected to pin 13:</p>
            <pre class="bg-gray-100 p-4 rounded text-sm">
        <code>
        int ledPin = 13; // Set pin 13 as the LED pin
        
        void setup() {
          pinMode(ledPin, OUTPUT); // Set pin 13 as an output
        }
        
        void loop() {
          digitalWrite(ledPin, HIGH); // Turn LED on
          delay(1000);                // Wait 1 second
          digitalWrite(ledPin, LOW);  // Turn LED off
          delay(1000);                // Wait 1 second
        }
        </code>
            </pre>
            <p>This sketch demonstrates basic syntax, pin setup, and timing — a great first program to test your board and understand the logic flow.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In industrial automation, similar code structures are used to monitor sensors and control equipment like conveyor belts and robotic arms. Even simple microcontroller programs like these power parts of modern consumer electronics, from smart appliances to security systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In environmental field research, microcontroller programs are used to log data from sensors like temperature, humidity, or air quality. Researchers often deploy Arduinos with sketches that store readings to an SD card or transmit them wirelessly, allowing data to be collected from remote locations over long periods.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Programming a microcontroller is like writing instructions for a tiny computer. You use a language called C++ (simplified for Arduino) to control sensors, lights, motors, and more. Every program needs a <code>setup()</code> and a <code>loop()</code> — one to start things up, and one to keep everything running. You also learn to use variables and logic to make decisions in your code. By writing clear instructions and adding comments, you help the Arduino know what to do and make your code easier to understand later. Once you understand the basics, you can build projects that think, react, and automate tasks on their own!</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week4-programming-fundamentals"
        },
        
        {
          title: "4.3 Writing Your First Sketch",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Creating, Uploading & Running Your First Sketch</h2>
            <p class="mt-4"><strong>Objective:</strong> Write, compile, and upload a simple program (sketch) to your Arduino board.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Your first sketch marks the transition from hardware setup to interactive programming. This is where you see real-time feedback from the board and begin making the physical world respond to digital code. The Arduino sketch is a C++ program that runs directly on the board, and every interaction you’ll build — from blinking LEDs to sensor readings or wireless communication — begins with this upload process. Uploading a sketch compiles your code into machine instructions and transfers it to the Arduino’s memory. From there, the microcontroller runs the code continuously, restarting it every time the board is powered on or reset. This looped execution allows you to build dynamic, interactive systems that evolve in real time.</p>
        
            <h3 class="text-xl font-semibold mt-6">Steps:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li>Open the Arduino IDE and select your board (e.g., Arduino Uno) under <strong>Tools > Board</strong>.</li>
              <li>Select the correct port under <strong>Tools > Port</strong> (it will usually say “Arduino” or “COMX” on Windows).</li>
              <li>Write a simple sketch like the classic LED blink (see example below).</li>
              <li>Click the <strong>Upload</strong> button (right arrow icon). This compiles and transfers the code to your board.</li>
              <li>Watch the onboard LED (usually pin 13) blink, or use the <strong>Serial Monitor</strong> to view output.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Experiment with modifying delay values or pin numbers to change the blinking speed or output pin. This is a simple and effective way to learn by doing.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Sketch:</h3>
            <p>This basic sketch turns an LED on and off once every second:</p>
            <pre class="bg-gray-100 p-4 rounded text-sm">
        <code>
        void setup() {
          pinMode(13, OUTPUT); // Set pin 13 as output
        }
        
        void loop() {
          digitalWrite(13, HIGH); // Turn LED on
          delay(1000);            // Wait 1 second
          digitalWrite(13, LOW);  // Turn LED off
          delay(1000);            // Wait 1 second
        }
        </code>
            </pre>
            <p>Try changing <code>delay(1000)</code> to <code>delay(250)</code> or <code>delay(2000)</code> to control the blink speed. You can also switch pin 13 to another digital pin if you're using an external LED.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>This process is how nearly every modern smart device begins — with a microcontroller executing code that controls outputs based on inputs. Devices like smart thermostats, fitness bands, and remote sensors all start with a simple sketch, then evolve to include multiple components and communication protocols. The “blink” program is even used in factories to confirm that embedded systems are functioning before they’re shipped in products.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In university robotics labs, students use simple sketches to control motors, gather sensor data, or trigger experiments. By writing, uploading, and running sketches, researchers quickly validate prototypes before integrating them into larger autonomous systems. This ability to iterate code and test ideas rapidly is why Arduino remains a go-to tool in both education and field research.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Writing and uploading a sketch is how you tell your Arduino what to do. You start by writing your code, click “Upload,” and the board begins following your instructions right away. Your first sketch might blink an LED — but it teaches you how to send commands to the hardware. You can see changes instantly by adjusting things like timing or pin numbers. This is how you go from just connecting components to making them interact. Uploading sketches is how every project begins — from class demos to real-world devices.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>In every electronics project, the hardware (like sensors, motors, or LEDs) needs to work together with software — your Arduino sketch. This interface is what lets your code “talk” to physical components and respond to the world. Whether you’re blinking an LED, reading temperature data, or turning a servo, you’re mapping code instructions to real-world outputs. The Arduino board acts as the translator between digital commands and electrical signals. Understanding this bridge — how each pin on your board relates to the code and how libraries make complex devices easier to use — is key to building fully functional, smart systems. This is where your hardware stops being passive and starts responding to logic, math, and input.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Concepts:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Pin Mapping:</strong> Digital and analog pins are mapped to variables in your code to read inputs or control outputs. For example, <code>pinMode(8, OUTPUT);</code> configures pin 8 for an LED.</li>
              <li><strong>Component Libraries:</strong> Libraries are pre-written blocks of code that make it easier to use complex components like displays, sensors, or motors. Examples: <code>Servo.h</code>, <code>LiquidCrystal.h</code>, <code>DHT.h</code>.</li>
              <li><strong>Signal Flow:</strong> Hardware sends signals to the microcontroller (inputs) or receives them from it (outputs). Your code determines how and when these signals are used.</li>
              <li><strong>Digital vs Analog:</strong> Digital pins use <code>HIGH</code> or <code>LOW</code> signals, while analog pins read variable voltage levels using <code>analogRead()</code>.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> A well-integrated hardware-software interface is the backbone of functional electronics projects. Always test both the wiring and the code together — they work as one system.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Sketch:</h3>
            <p>This sketch reads a pushbutton input and turns on an LED when the button is pressed:</p>
            <pre class="bg-gray-100 p-4 rounded text-sm">
        <code>
        int buttonPin = 2;
        int ledPin = 13;
        int buttonState = 0;
        
        void setup() {
          pinMode(buttonPin, INPUT);
          pinMode(ledPin, OUTPUT);
        }
        
        void loop() {
          buttonState = digitalRead(buttonPin);
        
          if (buttonState == HIGH) {
            digitalWrite(ledPin, HIGH); // LED on
          } else {
            digitalWrite(ledPin, LOW);  // LED off
          }
        }
        </code>
            </pre>
            <p>This shows how digital pins are configured and how your code responds to real-world interaction — in this case, a button press.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In robotics, the hardware-software interface controls everything from motor speeds to distance sensors. In smart home systems, sensors detect temperature or motion, and software decides when to trigger heating, lighting, or alarms. This interaction is what makes systems intelligent and reactive.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In assistive technology research, hardware-software interfaces are used to create adaptive devices — like a hand-controlled wheelchair that responds to joystick input. The code interprets sensor signals and sends commands to actuators, allowing real-time response to user behavior. These interfaces also appear in biomedical wearables, where sensors track vitals and the code determines alerts or feedback to the user or healthcare provider.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This is where your circuit and your code work together. Your wires connect to pins on the Arduino — and your code tells the Arduino what those pins should do. You might read a sensor or turn on an LED. Libraries help you use complex parts like screens or motors without writing everything from scratch. Your program and your hardware need to match — when they do, your project becomes interactive. Once you learn how to link inputs and outputs through code, you can build systems that sense, decide, and act all on their own.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Theory:</h3>
            <p>Debugging is the process of finding and fixing problems in your code or circuit. Whether it’s an LED not blinking or a sensor giving incorrect readings, every maker runs into issues — and knowing how to fix them is what makes you an effective developer. In microcontroller projects, bugs can come from software (typos, logic errors) or hardware (loose wires, incorrect pin connections, power problems). The key is to troubleshoot systematically: test one part at a time, print values to the serial monitor, and don’t assume everything is correct. Mastering debugging turns frustration into learning and failure into progress — it’s how every real-world engineer grows and improves.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Strategies:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Use the Serial Monitor:</strong> Add <code>Serial.begin(9600);</code> in <code>setup()</code> and use <code>Serial.print()</code> or <code>Serial.println()</code> to check variable values, sensor readings, or program flow.</li>
              <li><strong>Check Breadboard Connections:</strong> Physically inspect each wire, component, and jumper. Look for misplaced or loose connections, incorrect orientation of components (like diodes or transistors), and power issues.</li>
              <li><strong>Isolate Components:</strong> Test parts like LEDs, sensors, or motors by themselves with simple code before adding them to a bigger project.</li>
              <li><strong>Read Error Messages Carefully:</strong> The Arduino IDE will tell you about missing semicolons, undefined variables, or syntax issues. Don’t ignore those red lines — they guide you to the problem.</li>
              <li><strong>Write in Small Steps:</strong> Build your project one piece at a time, testing after each addition. This makes it easier to find where things go wrong.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Patience and systematic troubleshooting are key to resolving issues efficiently. The best coders are also great debuggers — because they understand how their system behaves.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Debugging Scenario:</h3>
            <p><strong>Problem:</strong> Your LED won't turn on even though the code compiles and uploads correctly.</p>
            <ul class="list-disc list-inside ml-6">
              <li>Step 1: Check if <code>pinMode()</code> is set correctly in <code>setup()</code>.</li>
              <li>Step 2: Use <code>Serial.println("Loop running");</code> to confirm that <code>loop()</code> is executing.</li>
              <li>Step 3: Swap the LED with another one — it could be faulty.</li>
              <li>Step 4: Use a multimeter or continuity checker to verify power to the pin.</li>
              <li>Step 5: Make sure the LED’s longer leg is connected to the correct side (anode to output, cathode to ground).</li>
            </ul>
            <p>This shows how working through both code and hardware checks can quickly lead you to the root cause.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In professional embedded development, debugging tools include serial terminals, logic analyzers, and oscilloscopes. Engineers rely heavily on logs and test data to track bugs in products ranging from medical devices to aerospace controls. Debugging isn’t just fixing errors — it’s part of the design process itself.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In a lab studying plant hydration, researchers use Arduino-controlled pumps and sensors. When a pump fails to turn on, they debug by printing out sensor values and checking if the voltage threshold logic is working. They also use the serial monitor to confirm that the board is reading moisture correctly and that control signals are being sent. This allows experiments to run smoothly without damaging samples or wasting resources.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Debugging means figuring out why your project isn’t working and fixing it. Sometimes it’s the code, and sometimes it’s the wiring — often, it’s both. Start small, test each part, and use the serial monitor to see what’s happening inside your program. Even pros deal with bugs all the time. Learning how to find and fix them will make you a much better builder, and help you stay calm when things go wrong. Once you master debugging, you’ll be able to fix anything — and you’ll learn something every time you do it.</p>
          `,
          //videoUrl: "https://example.com/week4-debugging"
        },
        
        {
          title: "4.6 Guided Project Walkthrough",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Guided Project Walkthrough</h2>
            <p class="mt-4"><strong>Objective:</strong> Follow a complete project example that merges circuit design and Arduino programming.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Purpose:</h3>
            <p>After learning the individual building blocks — from programming basics to wiring circuits and debugging — this guided walkthrough helps you bring everything together into one complete system. Working on a full project improves your ability to think through a problem, plan a design, and troubleshoot in real time. It also gives you a blueprint for how real-world electronics and embedded systems are built: piece-by-piece, with a clear objective, lots of iteration, and an end goal that solves a problem or adds interactivity. Many research and commercial projects start with a small-scale version like this to prototype functionality before scaling up.</p>
        
            <h3 class="text-xl font-semibold mt-6">Project Overview:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Build an interactive LED control system that uses a light sensor (LDR) to adjust the brightness of an LED based on room lighting.</li>
              <li>Apply what you've learned about analog inputs, PWM outputs, circuit design, and code logic.</li>
              <li>Learn each step from wiring the circuit to writing and testing the program.</li>
              <li>Review best practices for design documentation and debugging.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use this walkthrough as a template for your own projects and adapt it to your specific requirements. Whether you're working on automation, robotics, or monitoring systems, the process is the same.</p>
        
            <h3 class="text-xl font-semibold mt-6">Materials Needed:</h3>
            <ul class="list-disc list-inside mt-2">
              <li>Arduino Uno (or similar)</li>
              <li>1 LDR (Light Dependent Resistor)</li>
              <li>1 10kΩ resistor</li>
              <li>1 LED</li>
              <li>1 220Ω resistor</li>
              <li>Breadboard and jumper wires</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Step-by-Step Build:</h3>
            <ol class="list-decimal list-inside mt-2">
              <li><strong>Wiring the LDR:</strong> Connect one end of the LDR to 5V and the other end to A0 and a 10kΩ resistor that goes to GND. This forms a voltage divider to measure light.</li>
              <li><strong>Wiring the LED:</strong> Connect the LED’s anode (long leg) to pin 9 through a 220Ω resistor. Connect the cathode (short leg) to GND.</li>
              <li><strong>Write the Code:</strong> Create a program that reads the light level using <code>analogRead()</code> and uses <code>analogWrite()</code> to adjust LED brightness using PWM.</li>
            </ol>
        
            <h3 class="text-xl font-semibold mt-6">Example Code:</h3>
            <pre class="bg-gray-100 p-4 rounded text-sm">
        <code>
        int ldrPin = A0;
        int ledPin = 9;
        
        void setup() {
          pinMode(ledPin, OUTPUT);
          Serial.begin(9600);
        }
        
        void loop() {
          int lightLevel = analogRead(ldrPin);
          int brightness = map(lightLevel, 0, 1023, 255, 0); // Brighter in darkness
          analogWrite(ledPin, brightness);
          Serial.println(lightLevel);
          delay(100);
        }
        </code>
            </pre>
            <p>This project integrates reading data from hardware, processing it in real-time, and producing a physical output. It’s a great example of input-processing-output logic — the foundation of all embedded systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>This is how automatic streetlights, smartphone screen brightness, and indoor lighting systems work. They use sensors and microcontrollers to respond to changes in the environment and adjust behavior automatically. The same principles are used in HVAC, agriculture, and even wearable tech.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In academic labs, similar prototypes are used for studying plant growth under different lighting conditions. Researchers build systems that adjust light levels automatically based on daylight or cloud cover to simulate natural environments. This helps test hypotheses without constant manual adjustments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This is your first full project — combining code and wiring into one working system. You’ll use a sensor to read real-world data (light), use your code to process it, and then use an output (LED) to show a response. You’ll write the code, test it, and adjust it until everything works the way you expect. This walkthrough teaches you how to go from idea to reality — and gives you a template you can use to build even bigger, more exciting projects. Once you finish this, you’ve officially built your first working smart system!</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
          <li>Submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>`,
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
        },
        {
          title: "4.8 Practice Assignment",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Practice Assignment – Integrating Circuit Design & Code</h2>
            <p class="mt-4"><strong>Objective:</strong> Reflect on how you've combined hardware and code using the Arduino IDE, while reviewing key concepts from Weeks 1 through 4 to reinforce your learning.</p>
        
            <h3 class="text-xl font-semibold mt-6">Why This Matters:</h3>
            <p>When you build real projects, you’re not just writing code or wiring components — you're integrating both into one intelligent system. The Arduino IDE helps you do that by bridging your circuit with your logic. This assignment is designed to strengthen that connection and improve your long-term memory of key concepts. The best way to truly understand what you’ve learned is to recall it without looking — that’s how your brain strengthens those pathways.</p>
        
            <p class="mt-4"><strong>Try your best to answer the questions below from memory first.</strong> You can check your notes afterward, but the goal is to practice remembering what you’ve already learned — this makes future lessons easier and helps you feel more confident.</p>
        
            <h3 class="text-xl font-semibold mt-6">Hands-On Reflection:</h3>
            <p>Think about the project or sketch you worked on in Week 4 (e.g., LED blink, sensor input, display output). Answer the following in your notes or notebook:</p>
            <ul class="list-disc list-inside ml-4 mt-2">
              <li>What did your circuit do? What components did it include?</li>
              <li>How did the <code>setup()</code> and <code>loop()</code> functions control the system?</li>
              <li>What was one issue you debugged — and how did you find the problem?</li>
              <li>Did you use the serial monitor? If yes, how did it help you?</li>
              <li>If you had to explain your sketch and circuit to someone new, how would you describe the flow from sensor → code → output?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Memory Check: Week 1</h3>
            <p><strong>Try answering these from memory:</strong></p>
            <ul class="list-disc list-inside ml-4">
              <li> What is a circuit, and what must happen for current to flow?</li>
              <li> What’s the function of a resistor?</li>
              <li> What’s the formula for Ohm’s Law?</li>
              <li> How do you read a basic schematic diagram?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Memory Check: Week 2</h3>
            <ul class="list-disc list-inside ml-4">
              <li> What does a transistor do in a circuit?</li>
              <li> What’s the difference between a diode and an LED?</li>
              <li> How do capacitors and inductors store energy differently?</li>
              <li> What is the purpose of a logic gate like AND or OR?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Memory Check: Week 3</h3>
            <ul class="list-disc list-inside ml-4">
              <li> What are sensors and actuators? Give an example of each.</li>
              <li> How does a breadboard help in testing complex circuits?</li>
              <li> What’s the purpose of a communication module like Bluetooth or Wi-Fi?</li>
              <li> Why is power management important for long-term performance?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Memory Check: Week 4</h3>
            <ul class="list-disc list-inside ml-4">
              <li> What are the two main functions in every Arduino sketch?</li>
              <li> What does <code>pinMode()</code> do?</li>
              <li> What tool do you use to print values to your screen for debugging?</li>
              <li> Why should you modularize your code using functions?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Wrap-Up Reflection:</h3>
            <p>Write down 3 things you feel confident about after completing Weeks 1–4. Then write 1–2 questions or areas that still feel confusing. These reflections will help you focus your learning in Week 5 and can also be great discussion points in peer review.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This assignment helps you connect the dots. You’ve learned how components work (Weeks 1–2), how they integrate into full systems (Week 3), and how to bring them alive with code (Week 4). Now you’re practicing how it all works together. Answering questions from memory makes the learning stick. This is how you go from a student to a real builder — someone who not only follows steps but truly understands what’s happening and why.</p>
        
            <li>Submition information and further documentation for your final project can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week4-practice-integration"
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
    
            <h3 class="text-xl font-semibold mt-6">Background & Importance:</h3>
            <p>Project planning is the first and most critical step toward building a successful capstone. It helps you move from ideas to implementation, ensuring your vision is realistic, achievable, and technically sound. Whether you're designing a smart plant monitor, a robotic arm, or a wearable sensor, careful planning gives you the clarity to avoid confusion later. In real-world engineering, product design starts with a written plan, sketches, and research — your capstone should be no different. Planning also helps you anticipate challenges, gather the right tools and components, and avoid last-minute issues. This is your opportunity to be both creative and strategic.</p>
    
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Define Project Scope:</strong> What does your project do? Who is it for? What’s the problem it solves or the experience it creates?</li>
              <li><strong>List Required Features:</strong> For example, "reads temperature," "controls LED brightness," or "sends data via Bluetooth."</li>
              <li><strong>Component Checklist:</strong> Identify sensors, microcontrollers, displays, power sources, and additional modules you’ll need.</li>
              <li><strong>Sketch or Diagram:</strong> Create a visual layout of the circuit, modules, and how they’ll interact with each other and the code.</li>
              <li><strong>Timeline & Milestones:</strong> Break down your build into stages: wiring, basic functionality, testing, and final presentation.</li>
            </ul>
    
            <h3 class="text-xl font-semibold mt-6">Example Project Concept:</h3>
            <p><strong>Project Idea:</strong> “Smart Desk Light”</p>
            <ul class="list-disc list-inside ml-6">
              <li><strong>Objective:</strong> Automatically adjust brightness based on room lighting and turn off after a period of inactivity.</li>
              <li><strong>Components:</strong> LDR sensor, PIR motion sensor, RGB LED strip, Arduino Uno, 9V power supply.</li>
              <li><strong>Function:</strong> LDR reads ambient light → PIR detects presence → Code adjusts LED strip brightness & color.</li>
              <li><strong>Bonus Feature:</strong> Add a pushbutton to toggle between manual and auto mode.</li>
            </ul>
            <p>This is a great example of integrating multiple inputs, outputs, and control logic for a responsive user-friendly system.</p>
    
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>This planning method mirrors how tech companies and researchers manage hardware development — starting with sketches and technical specs before any wiring begins. It saves time, improves collaboration, and increases project success rates.</p>
    
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In academic research, lab teams often write full design proposals before building prototypes — especially in fields like biomedical engineering, environmental monitoring, or wearable tech. These plans include goals, components, expected results, and troubleshooting considerations. This ensures their final build meets scientific or experimental standards.</p>
    
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Planning your project is like drawing a map before taking a trip. You figure out where you’re going, what you’ll need, and what the steps are to get there. You start by asking: what do I want my project to do? Then you list the parts you’ll need, draw a basic circuit layout, and decide what to build first. This saves time and prevents mistakes. With a good plan, your final project becomes easier and way more fun — because you’ll know exactly how to build something awesome from start to finish.</p>
    
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week5-project-planning"
        },
    
        {
          title: "5.2 Detailed Circuit Design",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Detailed Circuit Design</h2>
            <p class="mt-4"><strong>Objective:</strong> Create schematic diagrams and select the right components for your project.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Purpose:</h3>
            <p>Once your project concept is solid, it’s time to turn ideas into an actual design. Circuit schematics are like blueprints — they show how each component is connected and how power flows through your system. A clear schematic prevents wiring mistakes, helps with debugging, and allows others to understand your design. Choosing the right components is also critical. Each part — resistor, sensor, transistor, or capacitor — must match your circuit’s logic, voltage, and current needs. This slide helps you plan every connection before you ever touch a wire. In real-world engineering and research, schematics are required for every product and prototype — from circuit boards to aerospace systems.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Draft a Schematic:</strong> Use standard circuit symbols to map out all parts of your system. Common tools include Tinkercad Circuits, Fritzing, EasyEDA, and KiCad.</li>
              <li><strong>Label Connections:</strong> Indicate pin numbers, voltages, and connections to the microcontroller (e.g., A0, D9, GND, 5V).</li>
              <li><strong>Select Components:</strong> Choose resistors based on current-limiting needs, capacitors for filtering, and transistors for switching. Verify specs like voltage range, logic level, and power ratings.</li>
              <li><strong>Double-Check Compatibility:</strong> Make sure sensors, LEDs, and other modules operate at the correct voltage (3.3V vs 5V) and are safe to use with your microcontroller.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Clear, well-documented schematics are essential for troubleshooting and future modifications. If you plan to build a custom PCB later, this schematic is the foundation.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Circuit Plan:</h3>
            <p><strong>Project:</strong> Smart Motion-Activated Night Light</p>
            <ul class="list-disc list-inside ml-6">
              <li><strong>Schematic Elements:</strong> PIR sensor connected to digital pin D2, LED strip on pin D9 with 220Ω resistor, and 5V power supply.</li>
              <li><strong>Component Choices:</strong>
                <ul class="ml-6 list-disc">
                  <li>PIR Sensor: Operating voltage 5V, output HIGH on motion</li>
                  <li>LED Strip: 12V source (use MOSFET to control from 5V logic)</li>
                  <li>Resistor: 220Ω to limit current to onboard status LED</li>
                  <li>MOSFET: Logic-level N-channel (e.g., IRLZ44N) for switching higher voltage</li>
                </ul>
              </li>
              <li><strong>Planning Outcome:</strong> All components are connected logically, and voltage levels are protected.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Every commercial product with electronics — phones, drones, appliances, medical monitors — starts with a schematic diagram. Teams use these schematics to design printed circuit boards (PCBs), simulate performance, and test functionality before manufacturing. Poor schematics lead to expensive errors — great ones save time and lives.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In biomedical research, students and engineers design custom circuits to monitor heart rate, brain activity, or glucose levels. They often work with analog and digital sensors that must be precisely powered and filtered. Detailed schematics ensure accurate readings, safe operation, and reproducible results for future experiments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This is the part where you plan exactly how to wire everything together. Your schematic shows where each wire goes, what each component does, and how they all connect to the Arduino. You pick the right resistors, transistors, or sensors and make sure they work with the power you’re using. A good schematic helps you build faster, fix problems easier, and turn your idea into a real system. It’s like a map for your electronics — follow it carefully, and everything will work smoothly.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week5-circuit-design"
        },
        
        {
          title: "5.3 Assembly & Integration",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Assembly & Integration</h2>
            <p class="mt-4"><strong>Objective:</strong> Build your circuit and integrate all hardware components smoothly.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Purpose:</h3>
            <p>After finalizing your schematic and selecting components, it's time to bring your design to life. This stage involves physically building your circuit — either on a breadboard for prototyping or on a custom PCB if you're ready for a permanent version. Integration is the process of connecting all your components in a way that matches your schematic and works with your code. A solid assembly process minimizes errors and ensures your system runs reliably. Whether you're assembling a wearable sensor, environmental monitor, or robotic device, attention to detail here will save hours of debugging later.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Follow the Schematic Precisely:</strong> Double-check pin numbers and connections before inserting components. Label wires with masking tape or color codes if needed.</li>
              <li><strong>Use a Breadboard (or PCB):</strong> Breadboards are great for testing and prototyping. For permanent builds, consider soldering on perfboard or designing a PCB.</li>
              <li><strong>Verify Polarities and Orientations:</strong> Ensure diodes, LEDs, electrolytic capacitors, and transistors are correctly oriented — reversing them can damage components.</li>
              <li><strong>Secure Connections:</strong> Use firm pressure with jumper wires, avoid loose pins, and check voltage across key components using a multimeter.</li>
              <li><strong>Power Carefully:</strong> Power your board only after verifying your wiring. Start with low-voltage testing if possible (e.g., USB power before external supply).</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Careful assembly and thorough testing during integration prevent future troubleshooting headaches. Take your time — rushed wiring leads to unclear problems later.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Project Workflow:</h3>
            <p><strong>Project:</strong> Smart Plant Watering System</p>
            <ul class="list-disc list-inside ml-6">
              <li>Place soil moisture sensor in breadboard → connect analog output to A0.</li>
              <li>Connect relay module to pin D7 → wire 5V pump through relay normally open (NO) and common (COM).</li>
              <li>Wire 5V and GND rails → insert external power supply (with diode protection) for pump.</li>
              <li>Verify sensor readings and pump activation using <code>Serial.print()</code> and LED indicators before full test.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Engineers building real embedded systems follow the same workflow — prototype, assemble, verify, test. In product development, early hardware prototypes are often tested with breadboards before being finalized into compact PCBs for manufacturing. Teams often perform “integration testing” at this phase to ensure everything works together.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In environmental engineering labs, integrated sensor arrays are built to monitor air or water quality. Researchers assemble these systems on-site with portable microcontrollers and solar panels, testing each component after it’s wired. Successful integration ensures accurate data collection and minimal downtime in field studies.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This is where you build your circuit by hand. You take your plan and wire everything together, one piece at a time, on a breadboard or board. You check every connection, every wire, and make sure everything matches the diagram you drew. Then, you test — little by little — to make sure your system works the way you want. This is the moment your project goes from “on paper” to real. Take your time, follow your plan, and you’ll end up with a working, smart, functional system you built yourself.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Purpose:</h3>
            <p>Now that your circuit is assembled and your hardware is in place, it’s time to write the final code that ties everything together. Your program is what gives your system logic, behavior, and responsiveness. This step involves creating clean, modular code that’s easy to understand and update. It also means using feedback from testing — adjusting delay times, refining sensor thresholds, or reworking logic — to make your system more stable and accurate. This mirrors real-world embedded system development, where code often goes through multiple iterations before it's production-ready.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Steps:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Start Modular:</strong> Write separate functions for tasks like reading sensors, updating LEDs, or triggering outputs. This keeps your code organized.</li>
              <li><strong>Use Libraries:</strong> Integrate Arduino libraries for specific components such as <code>Servo.h</code>, <code>DHT.h</code>, <code>Adafruit_SSD1306.h</code>, etc. This saves time and ensures compatibility.</li>
              <li><strong>Test As You Code:</strong> Upload frequently and verify outputs via the serial monitor. Make sure each module works before adding complexity.</li>
              <li><strong>Refactor & Optimize:</strong> Replace repeated code with functions, remove unused variables, and clean up logic once your prototype is working.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Use the serial monitor and debugging techniques from earlier lessons to verify that your code is correctly communicating with your hardware in real time.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Function Structure:</h3>
            <pre class="bg-gray-100 p-4 rounded text-sm">
        <code>
        // Modular example for a sensor-controlled LED
        int ledPin = 9;
        int sensorPin = A0;
        
        void setup() {
          pinMode(ledPin, OUTPUT);
          Serial.begin(9600);
        }
        
        void loop() {
          int reading = readSensor();
          controlLED(reading);
          delay(200);
        }
        
        int readSensor() {
          int val = analogRead(sensorPin);
          Serial.println(val);
          return val;
        }
        
        void controlLED(int input) {
          int brightness = map(input, 0, 1023, 0, 255);
          analogWrite(ledPin, brightness);
        }
        </code>
            </pre>
            <p>This approach improves readability and makes future updates easier — exactly what professionals do when working with real devices.</p>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>Embedded systems developers use this exact process when building firmware for wearables, IoT devices, or even smart cars. Finalizing a program involves multiple testing loops, user input calibration, memory optimization, and often remote updates — all grounded in modular, maintainable code.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In public health projects, researchers use microcontrollers to run field-based sensors that detect water quality or environmental hazards. The programs powering these devices are optimized to wake periodically, collect data, store or transmit it, and conserve battery — all done through clean code refined by testing. Proper function flow and hardware synchronization are critical in these scenarios.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This is the final step where you give your project its “brain.” You write the code that controls everything — when things turn on, what sensors read, and how the system reacts. Break your code into small parts (functions) to keep it neat and easy to understand. Use the serial monitor to see what’s going on as you test. Then tweak your program until everything works just right. When your hardware and code are working together, you’ve built something real — something smart, and something uniquely yours.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
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
        
            <h3 class="text-xl font-semibold mt-6">Background & Importance:</h3>
            <p>Testing is where good projects become great. It’s not just about seeing if your system turns on — it’s about making sure it performs consistently, efficiently, and as expected in all conditions. Optimization is the process of improving performance, reducing power usage, refining timing, or improving user experience. Whether you're building a smart light or a wearable sensor, testing lets you find and fix real-world issues before final submission. This process mirrors what professional engineers do before launching products or publishing research: verify, refine, and repeat.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Actions:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Systematic Testing:</strong> Test one function at a time — isolate components to confirm they work individually and as part of the whole system.</li>
              <li><strong>Stress Testing:</strong> Try different inputs (e.g., low light, sudden movement, sensor limits) to see how your system responds in edge cases.</li>
              <li><strong>Code Optimization:</strong> Remove redundant code, streamline conditionals, and use functions to make your sketch faster and easier to maintain.</li>
              <li><strong>Hardware Optimization:</strong> Tighten wire layouts, reduce power draw where possible, and ensure signal integrity with short, clean connections.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Document your testing process and improvements. Take notes or photos of what failed, what changed, and what worked — this builds your engineering memory for future projects.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Optimization Steps:</h3>
            <p><strong>Project:</strong> Environmental Monitor with OLED Display</p>
            <ul class="list-disc list-inside ml-6">
              <li>Issue: The screen flickers and sensor values lag.</li>
              <li>Fix: Add <code>delay(200)</code> to slow the loop and prevent I2C overflow.</li>
              <li>Issue: Moisture sensor value reads erratically.</li>
              <li>Fix: Add software averaging by storing and averaging 5 readings.</li>
              <li>Hardware tweak: Use a bypass capacitor (0.1µF) near the sensor's power pin to reduce noise.</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In commercial products, entire teams are dedicated to testing and optimization. They simulate real-world conditions, automate tests, and ensure the device performs under stress. In wearables or medical devices, testing ensures user safety, while optimization improves battery life, reliability, and cost-efficiency.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In climate research, microcontroller-based devices deployed in forests or oceans must be tested for waterproofing, signal reliability, and data accuracy. Researchers fine-tune power consumption and code stability to make sure systems operate for weeks or months without failure — often in remote or extreme environments.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Now that your project works, it’s time to make sure it works well. You test every part — sensors, lights, buttons — and look for anything that’s slow, wrong, or not consistent. Then you fix those things. You clean up your code, adjust delays, maybe even change a wire or add a resistor. This is what engineers do: they improve and fine-tune until the system is solid. When you're done, your project will feel smoother, more reliable, and more like a finished product — because it is.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week5-testing"
        },
        
        {
          title: "5.6 Peer Review & Feedback",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Peer Review & Feedback</h2>
            <p class="mt-4"><strong>Objective:</strong> Engage in a final peer review session to critique and refine your project based on constructive feedback.</p>
        
            <h3 class="text-xl font-semibold mt-6">Background & Purpose:</h3>
            <p>Reviewing and presenting your project is a key part of engineering — it mirrors what happens in design reviews, code audits, and product launches. Peer feedback helps you see your work from another perspective, catch details you may have missed, and improve the clarity, usability, or performance of your system. It's not just about getting praise — it’s about making your project better through reflection and collaboration. And by reviewing others' work, you also sharpen your own technical eye.</p>
        
            <h3 class="text-xl font-semibold mt-6">Key Activities:</h3>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Present Your Project:</strong> Walk your peers through your project concept, circuit design, code structure, and final results.</li>
              <li><strong>Use a Feedback Checklist:</strong> Evaluate based on criteria such as functionality, clarity of documentation, innovation, code readability, and performance.</li>
              <li><strong>Give & Receive Feedback:</strong> Offer suggestions for improvement in a positive, constructive manner. Be specific and kind.</li>
              <li><strong>Apply What You Learn:</strong> Update your code, fix issues, or clarify presentation points based on peer insights.</li>
            </ul>
            <p class="mt-4"><em>Tip:</em> Constructive peer feedback is a valuable tool for ensuring your final project meets high standards. It also builds your confidence and communication skills — both essential for engineers.</p>
        
            <h3 class="text-xl font-semibold mt-6">Example Peer Review Checklist:</h3>
            <ul class="list-disc list-inside ml-6">
              <li> Project functions as described</li>
              <li> Wiring and schematic are clear and accurate</li>
              <li> Code is clean, modular, and well-commented</li>
              <li> Creative or innovative features are present</li>
              <li> Presenter explains logic and design choices clearly</li>
              <li> Suggestions for improvement provided</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Real-World Application:</h3>
            <p>In tech companies, peer reviews are used to improve circuit designs, codebases, and prototypes before a product is released. Product teams hold sprint reviews, UX feedback sessions, and engineering design reviews to strengthen ideas collaboratively. Every successful product is a team effort — and peer feedback is a powerful part of the process.</p>
        
            <h3 class="text-xl font-semibold mt-6">Research Example:</h3>
            <p>In university labs, student research teams regularly present project updates to mentors and classmates. These sessions help refine experimental designs, identify missed variables, and improve clarity before final publication or demonstration. Feedback from others ensures the project stands up to scrutiny and peer validation.</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>Now that your project is done, it’s time to share it and get feedback. You show what you built, explain how it works, and listen to what your classmates think. They’ll help you find little things to fix or make better. You’ll also learn from what others built. This is how engineers improve — by showing their work, explaining their thinking, and learning from others. It’s the final step in turning your project into something great — and it gets you ready for real-world presentations too.</p>
        
            <li>Submition information and futher documentation can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
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
          <li>Submition information and futher documentation can be found with the following Link:
                <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
              </li>`,
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
        },
        {
          title: "5.8 Practice Assignment: Capstone Project Reflection",
          content: `
            <h2 class="text-2xl font-bold">Slide 8: Practice Assignment – Capstone Project Reflection</h2>
            <p class="mt-4"><strong>Objective:</strong> Reflect on your entire learning journey by evaluating the integration of circuit design and code in your capstone project. Consider what you’ve learned, what challenged you, and how your knowledge from Weeks 1 through 5 contributed to your success.</p>
        
            <h3 class="text-xl font-semibold mt-6">Why This Matters:</h3>
            <p>Reflection is one of the most powerful tools for learning. By thinking critically about what worked and what didn’t, you deepen your understanding and improve your design mindset. This practice assignment is a space to look back, tie together everything you’ve learned, and recognize your progress as an engineer, builder, and problem solver.</p>
        
            <h3 class="text-xl font-semibold mt-6">Capstone Reflection Questions:</h3>
            <ul class="list-disc list-inside ml-4">
              <li> What was the most challenging part of your project — circuit wiring, coding, integration, or testing?</li>
              <li> How did you solve that challenge? What strategies, tools, or knowledge helped?</li>
              <li> How did your hardware (sensors, actuators, etc.) and software (Arduino sketch) work together?</li>
              <li> What is one thing you would improve if you built the project again?</li>
              <li> What feature are you most proud of? Why?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Memory Check – Your Journey from Week 1 to Week 5</h3>
            <p><strong>Try answering these without looking at notes first. Reflect and then review after.</strong></p>
        
            <h4 class="text-lg font-semibold mt-4">Week 1 – Circuit Foundations</h4>
            <ul class="list-disc list-inside ml-4">
              <li> What is a closed loop and why is it essential for current to flow?</li>
              <li> What does Ohm’s Law calculate, and why is it important?</li>
              <li> How does a breadboard help with prototyping?</li>
            </ul>
        
            <h4 class="text-lg font-semibold mt-4">Week 2 – Components & Functionality</h4>
            <ul class="list-disc list-inside ml-4">
              <li> What role does a transistor play in switching a circuit?</li>
              <li> How do capacitors and inductors differ in energy storage?</li>
              <li> What precautions must you take when working with diodes and resistors?</li>
            </ul>
        
            <h4 class="text-lg font-semibold mt-4">Week 3 – Hardware Integration</h4>
            <ul class="list-disc list-inside ml-4">
              <li> What’s the difference between a sensor and an actuator?</li>
              <li> How do Wi-Fi or Bluetooth modules enable communication in a project?</li>
              <li> Why is power management critical when combining components?</li>
            </ul>
        
            <h4 class="text-lg font-semibold mt-4">Week 4 – Arduino Programming</h4>
            <ul class="list-disc list-inside ml-4">
              <li> What are the roles of <code>setup()</code> and <code>loop()</code> in an Arduino sketch?</li>
              <li> How does the serial monitor help during debugging?</li>
              <li> Why is modular code important for maintaining and improving your program?</li>
            </ul>
        
            <h4 class="text-lg font-semibold mt-4">Week 5 – Capstone Execution</h4>
            <ul class="list-disc list-inside ml-4">
              <li> How did your planning (sketches, schematics, timeline) support your success?</li>
              <li> What testing strategies did you use to validate your circuit and code?</li>
              <li> What feedback or peer review suggestions helped improve your project?</li>
            </ul>
        
            <h3 class="text-xl font-semibold mt-6">Final Self-Reflection Prompt:</h3>
            <p><strong>Write 5–7 sentences in your notebook, answering this:</strong><br>“How has this course changed the way I think about electronics, design, and problem solving? What new skills do I feel confident in now — and what’s something I’m excited to build next?”</p>
        
            <h3 class="text-xl font-semibold mt-6">Simple Summary:</h3>
            <p>This final practice assignment gives you a chance to celebrate everything you’ve accomplished and reflect on what you’ve learned. You’ve gone from building simple circuits to creating full systems that integrate sensors, code, logic, and output. Reflecting on this journey helps you understand not just what you did — but why it matters. This reflection makes your learning stick, boosts your confidence, and prepares you for even more advanced challenges ahead.</p>
        
            <li>Submition information and further documentation for your final project can be found with the following Link:
              <a href="https://docs.google.com/document/d/102HvjMR2fsDhhiWrwZiaSoFYWUggAkppgXHxnVV0s4I/edit?usp=sharing" class="text-blue-500 underline" target="_blank">Submission Form</a>.
            </li>
          `,
          //videoUrl: "https://example.com/week5-capstone-reflection"
        }        
      ]
    }
    
    // You can add more weeks following the same structure if necessary
  ],
};

// The rest of the code remains the same as previously provided
// The code below is necessary for the component to function correctly

export default function CircuitCoursePage() {
  return (
    <>
      <Head>
        <title>Microcontroller & Circuit Design Course</title>
        <meta name="description" content="Learn about microcontroller and circuit design with hands-on projects, quizzes, and assignments." />
      </Head>
      <CoursePage courseData={CircuitCourseData} />
    </>
  );
}

