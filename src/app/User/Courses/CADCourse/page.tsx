import CoursePage from "../../Components/CoursePage";
import { CourseData } from "../../types/courseTypes";

const CADCourseData: CourseData = {
  title: "3D Printing & CAD with Onshape",
  weeks: [
    // Week 1: Introduction to CAD and Software Setup
    {
      title: "Week 1: Introduction to CAD and Software Setup",
      chapters: [
    {
            title: "Chapter 1.1: Introduction",
              content: `
                <h2 class="text-2xl font-bold">Slide 1: Welcome to CAD and 3D Printing with Onshape</h2>
                <p class="mt-4"><strong>Objective:</strong> Understand the purpose of CAD and get an overview of this course.</p>
                <h3>What You Will Learn:</h3>
                <ul>
                  <li>The basics of CAD and its role in modern design.</li>
                  <li>How Onshape serves as your digital workshop.</li>
                  <li>Steps you’ll follow during this course.</li>
                  <li>Final assessment expectations and project planning.</li>
                </ul>
                <h3>Step-by-Step:</h3>
                <ol>
                  <li>Read the slide carefully to understand the course objectives.</li>
                  <li>Recognize that CAD is the blueprint for building functional designs.</li>
                  <li>Familiarize yourself with the final assessment: you’ll create a comprehensive project integrating these steps.</li>
                </ol>
                <p class="mt-4"><em>Tip:</em> Keep a notebook of key points and steps to refer back to during your project work.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
      },
      {
              title: "Chapter 1.2: Setting up the CAD Environment in Onshape",
              content: `
                <h2 class="text-2xl font-bold">Slide 2: Setting Up Your Onshape Workspace</h2>
                <p class="mt-4"><strong>Objective:</strong> Create and configure your Onshape account and workspace.</p>
                <h3>Step-by-Step Instructions:</h3>
                <ol>
                  <li>Open your browser and navigate to <a href="https://www.onshape.com/" target="_blank">Onshape.com</a>.</li>
                  <li>Click on "Sign Up" and fill in the registration form with your email address.</li>
                  <li>Verify your email, then log in to your new account.</li>
                  <li>Explore the dashboard:
                    <ul>
                      <li>Locate the main toolbar at the top.</li>
                      <li>Review the document list on the left.</li>
                      <li>Identify the workspace area where you will design.</li>
                    </ul>
                  </li>
                  <li>Create a new document titled "Week 1 Setup" and save it.</li>
                </ol>
                <p class="mt-4"><em>Note:</em> Begin with the default settings; you can adjust your workspace later as you become more familiar.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
            },
            {
              title: "Chapter 1.3: Overview of the CAD Interface and Tools",
              content: `
                <h2 class="text-2xl font-bold">Slide 3: Navigating the Onshape Interface</h2>
                <p class="mt-4"><strong>Objective:</strong> Familiarize yourself with the Onshape interface and its key tools.</p>
                <h3>Key Areas to Explore:</h3>
                <ul>
                  <li><strong>Toolbar:</strong> Located at the top, contains tools like Sketch, Extrude, and Dimension.</li>
                  <li><strong>Feature List:</strong> Shown on the left; lists operations used in your design.</li>
                  <li><strong>Workspace:</strong> The central area where your models appear.</li>
                  <li><strong>Properties Panel:</strong> Displays details about selected items.</li>
                </ul>
                <h3>Step-by-Step Exploration:</h3>
                <ol>
                  <li>Hover over each section to view tooltips and descriptions.</li>
                  <li>Click the "Sketch" tool and observe the new options.</li>
                  <li>Practice selecting, moving, and deleting objects in the workspace.</li>
                  <li>Take a screenshot of your workspace layout for future reference.</li>
                </ol>
                <p class="mt-4"><em>Tip:</em> Familiarize yourself with these areas to improve your workflow efficiency.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
            },
            {
              title: "Chapter 1.4: Understanding Design Principles and Sketching Basics",
              content: `
                <h2 class="text-2xl font-bold">Slide 4: Design Fundamentals & Sketching Techniques</h2>
                <p class="mt-4"><strong>Objective:</strong> Learn essential design principles and begin basic sketching.</p>
                <h3>Design Principles:</h3>
                <ul>
                  <li><strong>Balance:</strong> Ensure visual elements are evenly distributed.</li>
                  <li><strong>Proportion:</strong> Maintain proper size relationships among elements.</li>
                  <li><strong>Symmetry:</strong> Achieve harmony and consistency in your design.</li>
                </ul>
                <h3>Sketching Steps:</h3>
                <ol>
                  <li>Draw basic shapes on paper (circles, rectangles, triangles).</li>
                  <li>Practice freehand sketching to understand proportions.</li>
                  <li>Log in to Onshape and open a new sketch document.</li>
                  <li>Draw a simple rectangle using the sketch tool.</li>
                  <li>Add dimensions using the dimension tool to check accuracy.</li>
                  <li>Save your sketch and compare it with your paper drawing.</li>
                </ol>
                <p class="mt-4"><em>Remember:</em> Mastering these basics is crucial for all future designs.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
            },
            {
              title: "Chapter 1.5: Creating Simple 2D Sketches and Extrusions",
              content: `
                <h2 class="text-2xl font-bold">Slide 5: Converting 2D Sketches into 3D Models</h2>
                <p class="mt-4"><strong>Objective:</strong> Transform a 2D sketch into a 3D object using the extrusion tool.</p>
                <h3>Step-by-Step Process:</h3>
                <ol>
                  <li>Open your Onshape document and start a new sketch on the top plane.</li>
                  <li>Draw a simple shape (e.g., a circle or square) using the sketch tools.</li>
                  <li>Dimension the shape using the dimension tool for accuracy.</li>
                  <li>Exit sketch mode.</li>
                  <li>Select the "Extrude" tool from the toolbar.</li>
                  <li>Click your sketch to highlight it and drag to set the extrusion depth (or enter a value manually).</li>
                  <li>Confirm the operation to generate a 3D object from your 2D sketch.</li>
                </ol>
                <p class="mt-4"><em>Tip:</em> Experiment with different shapes and extrusion depths to build your confidence.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
            },
            {
              title: "Chapter 1.6: Summary",
              content: `
                <h2 class="text-2xl font-bold">Slide 6: Week 1 Recap and Final Assessment Preparation</h2>
                <p class="mt-4"><strong>Review:</strong> In Week 1 you have:</p>
                <ul>
                  <li>Understood the role of CAD in modern design.</li>
                  <li>Created and configured your Onshape account and workspace.</li>
                  <li>Explored the Onshape interface and learned the basic tools.</li>
                  <li>Learned essential design principles and practiced sketching.</li>
                  <li>Created a simple 2D sketch and extruded it into a 3D model.</li>
                </ul>
                <h3>Final Assessment Preparation:</h3>
                <ol>
                  <li>Outline a final project idea incorporating the skills learned this week.</li>
                  <li>List the tools and techniques you practiced (e.g., sketching, dimensioning, extruding).</li>
                  <li>Draft a brief design plan outlining your project’s objectives.</li>
                  <li>Review each slide to ensure you can confidently repeat each step.</li>
                </ol>
                <p class="mt-4"><em>Note:</em> Your final project will showcase your ability to create a complete model from scratch. Use this week’s lessons as your foundation.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
            },
            {
              title: "Chapter 1.7: Quiz",
              content: `
                <h2 class="text-2xl font-bold">Slide 7: Quiz - Fundamentals of CAD and Onshape</h2>
                <p class="mt-4">Test your understanding with this quiz question. Follow these steps to arrive at the correct answer:</p>
                <h3>Question:</h3>
                <p>What is the primary function of the extrusion tool in Onshape?</p>
                <h3>How to Answer:</h3>
                <ol>
                  <li>Recall the process of converting a 2D sketch into a 3D object.</li>
                  <li>Remember that extrusion adds depth to a flat sketch.</li>
                  <li>Select the answer that best reflects this conversion process.</li>
                </ol>
                <p class="mt-4">Your answer will be evaluated, and feedback provided to reinforce your understanding.</p>
                <p class="mt-4">
                  <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                    Click here for additional details and assessment info.
                  </a>
                </p>
              `,
                quiz: {
                  question: "What is the primary function of the extrusion tool in Onshape?",
                  options: [
                    "To add color and textures to a model",
                    "To convert a 2D sketch into a 3D object by adding depth",
                    "To measure the dimensions of a sketch",
                    "To combine multiple sketches into a single design"
                  ],
                  correctAnswer: 1
                },
              },
            ],
          },
                
    // Week 2: Mastering Basic 3D Modeling Techniques
    {
      title: "Week 2: Mastering Basic 3D Modeling Techniques",
      chapters: [
        {
          title: "Chapter 2.1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Mastering Basic 3D Modeling Techniques</h2>
            <p class="mt-4">In this week, we’ll focus on modeling simple 3D objects using basic shapes...</p>
            <p class="mt-4">It’s like working with building blocks: Start with a simple shape and then modify it to create something new and functional!</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
          videoUrl: "https://example.com/week2-introduction",
        },
        {
          title: "Chapter 2.2: Working with Primitives like Cubes, Spheres, and Cylinders",
          content: `
            <h2 class="text-2xl font-bold">Working with Primitives</h2>
            <p class="mt-4">We will start by creating simple 3D objects such as cubes, spheres, and cylinders...</p>
            <p class="mt-4">These basic shapes are like the raw ingredients in cooking: You can combine them in various ways to create complex dishes (designs).</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
        },
        {
          title: "Chapter 2.3: Modifying Shapes Using Extrude, Revolve, and Loft Tools",
          content: `
            <h2 class="text-2xl font-bold">Using Extrude, Revolve, and Loft Tools</h2>
            <p class="mt-4">In this chapter, you’ll learn how to modify your shapes using the extrude, revolve, and loft tools...</p>
            <p class="mt-4">It’s like taking a flat piece of dough and rolling it, bending it, or stretching it into a custom shape.</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
        },
        {
          title: "Chapter 2.4: Combining and Subtracting Shapes (Boolean Operations)",
          content: `
            <h2 class="text-2xl font-bold">Boolean Operations</h2>
            <p class="mt-4">Boolean operations allow you to combine or subtract shapes to create more complex designs...</p>
            <p class="mt-4">Imagine cutting pieces from a block of clay to form a unique sculpture. It’s all about refining the design!</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
        },
        {
          title: "Chapter 2.5: Building Simple 3D Objects with Precision",
          content: `
            <h2 class="text-2xl font-bold">Building with Precision</h2>
            <p class="mt-4">Precision is key in creating 3D models, so let’s focus on designing with accuracy...</p>
            <p class="mt-4">Just like measuring ingredients for a cake, precision ensures that all parts of your design fit perfectly together.</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
        },
        {
          title: "Chapter 2.6: Summary of Week 2",
          content: `
            <h2 class="text-2xl font-bold">Recap of Week 2</h2>
            <p class="mt-4">This week, you learned how to build 3D objects with precision, using basic shapes and advanced modification tools...</p>
            <p class="mt-4">With these skills, you're now ready to design more intricate objects in the upcoming lessons.</p>
            <p class="mt-4"><a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">Click here for the Final Assessment, Due Dates, and Badge Information.</a></p>
          `,
          quiz: {
            question: "Which of the following is a benefit of using parametric modeling in CAD?",
            options: [
              "It allows you to create designs without any predefined dimensions",
              "It helps in automating repetitive tasks in design",
              "It only works with simple designs",
              "It requires no user input for designing models"
            ],
            correctAnswer: 1
          },
        },
      ],
    },

    {
      title: "Week 3: Rendering and Visualization",
      chapters: [
        {
          title: "Chapter 3.1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Welcome to Rendering and Visualization</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the role of rendering and visualization in transforming your 3D models into realistic presentations.</p>
            <h3>What You Will Learn:</h3>
            <ul>
              <li>The importance of rendering for design presentations.</li>
              <li>How materials, textures, and lighting work together to enhance realism.</li>
              <li>An overview of the rendering process.</li>
            </ul>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Review the concept of rendering as the process of converting your 3D model into a lifelike image.</li>
              <li>Understand that visualization techniques help communicate your design's story.</li>
              <li>Familiarize yourself with the upcoming topics in this week’s slides.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Write down key terms such as "materials," "textures," and "lighting" for reference.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 3.2: Applying Materials and Textures to Models",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Applying Materials and Textures</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to apply and adjust materials and textures to give your models a realistic appearance.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Open your 3D model in Onshape and locate the material properties panel.</li>
              <li>Select a material (e.g., metal, plastic, glass) from the library.</li>
              <li>Apply the chosen material to your model and observe the changes in surface appearance.</li>
              <li>Adjust settings such as glossiness, reflectivity, and transparency as needed.</li>
              <li>Try applying different textures to different parts of your model to see varied effects.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Experiment with various materials to understand how each one interacts with light.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },

        {
          title: "Chapter 3.3: Setting up Lighting and Creating Realistic Renders",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Setting Up Lighting for Realistic Renders</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand how to configure lighting to enhance the realism of your rendered images.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Review the different types of lighting available (ambient, point, directional, spotlight).</li>
              <li>Set up a basic lighting environment in your scene.</li>
              <li>Adjust light intensity, color, and direction to create natural-looking shadows and highlights.</li>
              <li>Experiment with multiple light sources to add depth and dimension.</li>
              <li>Take note of the settings that produce the best visual impact.</li>
            </ol>
            <p class="mt-4"><em>Note:</em> Lighting can change the mood of your scene drastically. Try several configurations to see which one suits your model best.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 3.4: Exporting High-Quality Images and Animations",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Exporting Your Renders</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to export your rendered images and animations in high quality.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>After rendering, locate the export options in Onshape.</li>
              <li>Choose the appropriate file format (e.g., PNG for images, MP4 for animations).</li>
              <li>Set the resolution and quality settings to ensure your output is sharp and detailed.</li>
              <li>For animations, configure the frame rate and duration.</li>
              <li>Export the file and review the final output for any adjustments.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Experiment with different export settings to determine the optimal quality for your needs.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 3.5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 3 Recap</h2>
            <p class="mt-4"><strong>Review:</strong> This week you learned how to bring your 3D models to life through rendering and visualization.</p>
            <ul>
              <li>Applied materials and textures to enhance your model's appearance.</li>
              <li>Configured lighting setups to create realistic effects.</li>
              <li>Exported high-quality images and animations for presentation.</li>
            </ul>
            <h3>Final Steps:</h3>
            <ol>
              <li>Review each technique and document your preferred settings.</li>
              <li>Take screenshots of your best render settings for future reference.</li>
              <li>Reflect on how these techniques improve the presentation of your designs.</li>
            </ol>
            <p class="mt-4"><em>Note:</em> The skills you learned this week will be essential for showcasing your final projects.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 3.6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - Rendering and Visualization</h2>
            <p class="mt-4">Test your understanding by answering the following question:</p>
            <h3>Question:</h3>
            <p>Which of the following is most critical for achieving a realistic render?</p>
            <h3>Steps to Answer:</h3>
            <ol>
              <li>Review how materials, textures, and lighting interact in your scene.</li>
              <li>Consider the impact of each element on the final image quality.</li>
              <li>Select the answer that best describes the key factor in realism.</li>
            </ol>
            <p class="mt-4">Your answer will be evaluated, and you will receive detailed feedback to reinforce your learning.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "Which of the following is most critical for achieving a realistic render?",
            options: [
              "High polygon count",
              "Accurate material and texture application",
              "Advanced Boolean operations",
              "Precise extrusion techniques"
            ],
            correctAnswer: 1
          }
        }
      ],
    },

    {
      title: "Week 4: 3D Printing and Prototyping",
      chapters: [
        {
          title: "Chapter 4.1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Welcome to 3D Printing and Prototyping</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the process of turning your digital designs into physical prototypes using 3D printing.</p>
            <h3>What You Will Learn:</h3>
            <ul>
              <li>The basics of 3D printing and its significance in design.</li>
              <li>How to prepare a digital model for printing.</li>
              <li>An overview of common challenges and troubleshooting methods.</li>
            </ul>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Review the concept of 3D printing as a method to transform digital models into real objects.</li>
              <li>Familiarize yourself with key terms like "slicing," "infill," and "support structures."</li>
              <li>Understand that prototyping helps validate design functionality before mass production.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Write down any questions you have about the printing process to research later.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 4.2: Preparing Models for 3D Printing with Slicing Software",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: Slicing Your Model for Printing</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to prepare your 3D model for printing using slicing software.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Open your finished 3D model in Onshape.</li>
              <li>Export the model in a suitable file format (such as STL).</li>
              <li>Import the file into your preferred slicing software.</li>
              <li>Adjust key settings:
                <ul>
                  <li><strong>Layer Height:</strong> Determine the thickness of each printed layer.</li>
                  <li><strong>Infill Density:</strong> Choose how solid the internal structure should be.</li>
                  <li><strong>Support Structures:</strong> Enable supports if your model has overhangs.</li>
                </ul>
              </li>
              <li>Preview the sliced model to check for any errors or areas that need adjustments.</li>
              <li>Save your settings and export the sliced file to be used by the 3D printer.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Experiment with different settings to understand how each parameter affects print quality.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 4.3: Troubleshooting and Refining Designs for Printability",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Troubleshooting 3D Print Issues</h2>
            <p class="mt-4"><strong>Objective:</strong> Identify common 3D printing issues and learn techniques to resolve them.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Review common printing problems such as warping, layer shifting, and stringing.</li>
              <li>Examine your sliced model and printed samples to identify potential issues.</li>
              <li>Adjust slicing settings as needed:
                <ul>
                  <li>Reduce print speed or adjust temperature settings if warping occurs.</li>
                  <li>Modify support structures to prevent stringing.</li>
                  <li>Ensure proper bed adhesion by cleaning and calibrating your print bed.</li>
                </ul>
              </li>
              <li>Re-slice and reprint the model after making adjustments.</li>
              <li>Document each troubleshooting step to build a reference guide for future prints.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Keep a log of adjustments and outcomes to track what works best for your printer and model.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 4.4: Understanding Real-World Applications of Prototypes",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Real-World Prototyping Applications</h2>
            <p class="mt-4"><strong>Objective:</strong> Discover how 3D printed prototypes are used in various industries to validate and improve designs.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Review case studies on prototyping in fields such as product design, engineering, and healthcare.</li>
              <li>List the benefits of prototyping:
                <ul>
                  <li>Quick iteration and design testing.</li>
                  <li>Cost-effective method for validating ideas.</li>
                  <li>Ability to physically assess ergonomics and functionality.</li>
                </ul>
              </li>
              <li>Discuss how rapid prototyping accelerates product development cycles.</li>
              <li>Reflect on how you can apply these principles to your own projects.</li>
            </ol>
            <p class="mt-4"><em>Note:</em> Understanding real-world applications can help you better tailor your designs to meet industry needs.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 4.5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Week 4 Recap and Final Assessment Preparation</h2>
            <p class="mt-4"><strong>Review:</strong> This week, you learned the essential steps to bring your digital designs into the physical world.</p>
            <ul>
              <li>Prepared and sliced your 3D models for printing.</li>
              <li>Troubleshooted common print issues and refined your designs.</li>
              <li>Explored real-world applications of 3D printed prototypes.</li>
            </ul>
            <h3>Final Steps:</h3>
            <ol>
              <li>Review the adjustments you made during troubleshooting and note which settings worked best.</li>
              <li>Compile your findings and screenshots to document your workflow.</li>
              <li>Begin outlining ideas for your final project, using the techniques learned this week as a foundation.</li>
            </ol>
            <p class="mt-4"><em>Note:</em> Your final project will integrate these prototyping techniques—use this recap to guide your planning.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 4.6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - 3D Printing and Prototyping</h2>
            <p class="mt-4">Test your understanding by answering the following question:</p>
            <h3>Question:</h3>
            <p>What is the primary purpose of slicing software in the 3D printing process?</p>
            <h3>Steps to Answer:</h3>
            <ol>
              <li>Recall that slicing converts a 3D model into layers suitable for printing.</li>
              <li>Consider how each layer contributes to the final printed object.</li>
              <li>Select the answer that best describes this conversion process.</li>
            </ol>
            <p class="mt-4">Your answer will be reviewed and feedback provided to reinforce your learning.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "What is the primary purpose of slicing software in the 3D printing process?",
            options: [
              "To design a 3D model from scratch",
              "To convert a 3D model into a series of printable layers",
              "To troubleshoot printing errors",
              "To add textures and materials to the model"
            ],
            correctAnswer: 1
          }
        }
      ],
    },
    
    
    {
      title: "Week 5: Final Project",
      chapters: [
        {
          title: "Chapter 5.1: Introduction",
          content: `
            <h2 class="text-2xl font-bold">Slide 1: Final Project Overview</h2>
            <p class="mt-4"><strong>Objective:</strong> Understand the capstone final project and how it integrates everything you've learned throughout the course.</p>
            <h3>What You Will Do:</h3>
            <ul>
              <li>Review the final project requirements and guidelines.</li>
              <li>Understand the deliverables: a complete design project that includes concept development, 3D modeling, rendering, and documentation.</li>
              <li>Learn how your project will be evaluated based on technical skills, creativity, and presentation.</li>
            </ul>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Carefully read the final project brief.</li>
              <li>Identify key objectives and deliverables outlined in the project guidelines.</li>
              <li>Create a timeline that breaks the project into manageable tasks (concept, modeling, rendering, documentation).</li>
              <li>Prepare a list of tools and techniques (from previous weeks) that you plan to use in your project.</li>
              <li>Begin brainstorming ideas and sketching rough drafts on paper or digitally.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Start early and iterate on your concept to refine your ideas over time.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 5.2: Developing a Complete Design from Concept to Final Render",
          content: `
            <h2 class="text-2xl font-bold">Slide 2: From Concept to Final Render</h2>
            <p class="mt-4"><strong>Objective:</strong> Master the entire workflow from initial concept through to a final rendered image.</p>
            <h3>Step-by-Step Process:</h3>
            <ol>
              <li><strong>Concept Development:</strong>
                <ul>
                  <li>Brainstorm design ideas and select one concept to pursue.</li>
                  <li>Create initial sketches and mood boards to explore your idea visually.</li>
                </ul>
              </li>
              <li><strong>Detailed Design:</strong>
                <ul>
                  <li>Refine your sketches into detailed drawings using Onshape’s sketch tools.</li>
                  <li>Plan the dimensions and functional aspects of your design.</li>
                </ul>
              </li>
              <li><strong>3D Modeling:</strong>
                <ul>
                  <li>Convert your refined sketches into a detailed 3D model.</li>
                  <li>Apply constraints and dimensions to ensure accuracy and functionality.</li>
                </ul>
              </li>
              <li><strong>Rendering:</strong>
                <ul>
                  <li>Apply materials and textures to your model.</li>
                  <li>Set up lighting and environment parameters to produce realistic renders.</li>
                  <li>Generate high-quality images of your final design.</li>
                </ul>
              </li>
              <li><strong>Review and Iterate:</strong>
                <ul>
                  <li>Critically analyze your final render and note any areas for improvement.</li>
                  <li>Iterate on your design to refine both aesthetics and functionality.</li>
                </ul>
              </li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Save multiple iterations to document your design evolution.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 5.3: Incorporating Advanced Modeling Techniques",
          content: `
            <h2 class="text-2xl font-bold">Slide 3: Advanced Modeling Techniques</h2>
            <p class="mt-4"><strong>Objective:</strong> Enhance your design using advanced modeling tools and techniques to achieve a professional finish.</p>
            <h3>Advanced Techniques Include:</h3>
            <ul>
              <li><strong>Complex Surface Modeling:</strong> Create smooth, organic curves and surfaces.</li>
              <li><strong>Parametric Modifications:</strong> Use parameters to dynamically adjust your design.</li>
              <li><strong>Multi-Body Modeling:</strong> Combine separate components into an integrated model.</li>
              <li><strong>Detailing:</strong> Apply features such as fillets, chamfers, and embossing for refined details.</li>
            </ul>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li>Identify parts of your design that would benefit from advanced detailing.</li>
              <li>Use Onshape's advanced tools to add complex curves and shapes.</li>
              <li>Experiment with parametric controls to see how adjustments affect your design.</li>
              <li>Combine multiple bodies using Boolean operations if needed.</li>
              <li>Continuously check your model for both aesthetic appeal and functional integrity.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> Document each advanced technique with screenshots and detailed notes for your portfolio.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 5.4: Presenting and Documenting the Design Process",
          content: `
            <h2 class="text-2xl font-bold">Slide 4: Documenting Your Design Journey</h2>
            <p class="mt-4"><strong>Objective:</strong> Learn how to effectively present and document your design process to showcase your technical and creative skills.</p>
            <h3>Step-by-Step Instructions:</h3>
            <ol>
              <li><strong>Documentation:</strong>
                <ul>
                  <li>Record each phase of your design process with screenshots and notes.</li>
                  <li>Include initial sketches, modeling iterations, and render settings.</li>
                </ul>
              </li>
              <li><strong>Presentation:</strong>
                <ul>
                  <li>Create a portfolio or slide deck that narrates your design journey.</li>
                  <li>Annotate your images to explain the techniques and decisions made.</li>
                  <li>Prepare a written summary of challenges, solutions, and key learnings.</li>
                </ul>
              </li>
              <li>Practice presenting your work to peers or mentors to gather feedback.</li>
            </ol>
            <p class="mt-4"><em>Tip:</em> A well-documented process not only demonstrates your technical ability but also your problem-solving and storytelling skills.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 5.5: Summary",
          content: `
            <h2 class="text-2xl font-bold">Slide 5: Final Project Recap</h2>
            <p class="mt-4"><strong>Review:</strong> You have integrated everything from concept development to advanced modeling and documentation in your final project.</p>
            <ul>
              <li>Your project encompasses a full design workflow—from initial sketches to a high-quality final render.</li>
              <li>Advanced modeling techniques have been applied to enhance the design.</li>
              <li>Your process has been thoroughly documented and presented.</li>
              <li>The final project showcases both your technical expertise and creative vision.</li>
            </ul>
            <h3>Final Steps:</h3>
            <ol>
              <li>Review your entire project to ensure all deliverables are complete.</li>
              <li>Refine any aspects that need improvement based on your documentation.</li>
              <li>Prepare your final project presentation and portfolio package.</li>
              <li>Ensure that every stage of your design process is clearly recorded and accessible.</li>
            </ol>
            <p class="mt-4"><em>Note:</em> This final project is the culmination of your learning journey—take pride in the comprehensive work you have accomplished.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
        },
        {
          title: "Chapter 5.6: Quiz",
          content: `
            <h2 class="text-2xl font-bold">Slide 6: Quiz - Final Project Comprehension</h2>
            <p class="mt-4">Test your understanding of the final project process with the following question:</p>
            <h3>Question:</h3>
            <p>Which step in the final project process is most critical for ensuring your design meets both technical and creative standards?</p>
            <h3>Steps to Answer:</h3>
            <ol>
              <li>Review each phase of the project: concept development, 3D modeling, advanced detailing, rendering, and documentation.</li>
              <li>Consider which step best integrates the technical precision with creative presentation.</li>
              <li>Select the answer that most comprehensively represents this integration.</li>
            </ol>
            <p class="mt-4">Your answer will be evaluated, and detailed feedback will be provided to reinforce your understanding.</p>
            <p class="mt-4">
              <a href="https://docs.google.com/document/d/1V2G0G06cyJDKKFyzV-BnPVOz5UbBVqgy1xxGxUp1e3Y/edit?usp=sharing" target="_blank" class="text-blue-600 underline">
                Click here for additional details and assessment info.
              </a>
            </p>
          `,
          quiz: {
            question: "Which step in the final project process is most critical for ensuring your design meets both technical and creative standards?",
            options: [
              "Concept development and brainstorming",
              "Advanced modeling and detailing",
              "Rendering and visualization",
              "Documenting and presenting the design process"
            ],
            correctAnswer: 3
          }
        }
      ],
    }
    
    
    
    // Week 3, Week 4, and Week 5 can be filled out in a similar fashion with analogies, explanations, and quizzes.
  ],
};

export default function CADCoursePage() {
  return <CoursePage courseData={CADCourseData} />;
}
