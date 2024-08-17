// src/components/ProjectPage.js
import React from "react";
import heading from "../constants/images/projects/slide4.jpg";
import image1 from "../constants/images/projects/slide4.jpg"; // Example images
import image2 from "../constants/images/projects/slide4.jpg";
import image3 from "../constants/images/projects/slide4.jpg";
import image4 from "../constants/images/projects/slide4.jpg";

const ProjectPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            PROJECTS
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-12 px-6 text-center">
        {/* Centered Title and Paragraph */}
        <h2 className="text-xl lg:text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-md lg:text-lg text-gray-600 max-w-3xl mx-auto">
          At Sparkware, we take pride in the diverse range of projects we've
          successfully delivered. Each project reflects our commitment to
          innovation, quality, and client satisfaction. Explore some of our
          recent work to see how we’ve helped businesses like yours achieve
          their goals with tailored IT solutions.
        </p>
      </section>

      {/* New Section with Background Color, Title, and Paragraph */}
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">
            Web Development Projects
          </h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            We’ve crafted dynamic, responsive websites that not only look
            stunning but also perform flawlessly. Our web development projects
            range from e-commerce platforms to corporate websites, all designed
            to enhance user experience and drive engagement.
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image1}
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image2}
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 2</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image3}
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 3</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image4}
              alt="Project 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 4</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* New Section with Background Color, Title, and Paragraph */}
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">
            {" "}
            Embedded System Development Projects
          </h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            Our expertise in embedded systems is showcased through innovative
            projects that integrate custom hardware and software. Whether it’s
            IoT devices or specialized hardware solutions, our projects
            demonstrate our ability to meet complex technical requirements.
          </p>
        </div>
      </section>

      {/* Boxes Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image1}
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image2}
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 2</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image3}
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 3</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image4}
              alt="Project 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 4</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* New Section with Background Color, Title, and Paragraph */}
      {/*
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            At Sparkware, our approach is centered around understanding our
            clients' unique needs and delivering tailored solutions that drive
            results. We emphasize collaboration, innovation, and excellence in
            every project we undertake. Our team of experts is dedicated to
            providing top-notch services, from the initial concept to final
            delivery, ensuring that our clients are fully satisfied with the
            outcome.
          </p>
        </div>
      </section>

       Boxes Section 
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image1}
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 2 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image2}
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 2</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 3 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image3}
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 3</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 4 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image4}
              alt="Project 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 4</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* New Section with Background Color, Title, and Paragraph 
      <section className="bg-[#f8f9fa] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl lg:text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-md lg:text-lg text-gray-700 text-justify">
            At Sparkware, our approach is centered around understanding our
            clients' unique needs and delivering tailored solutions that drive
            results. We emphasize collaboration, innovation, and excellence in
            every project we undertake. Our team of experts is dedicated to
            providing top-notch services, from the initial concept to final
            delivery, ensuring that our clients are fully satisfied with the
            outcome.
          </p>
        </div>
      </section>

      {/* Boxes Section 
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image1}
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 2 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image2}
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 2</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 3 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image3}
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 3</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>

          {/* Box 4 
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={image4}
              alt="Project 4"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Project Title 4</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here, highlighting the key
              aspects and outcomes.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default ProjectPage;
