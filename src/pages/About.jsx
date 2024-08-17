import React from "react";
import CounterExp from "../components/CounterExp";
import heading from "../constants/images/about/slide2.jpg";
import left from "../constants/images/home/left.jpg";
import cardImage from "../constants/images/about/vision-mission.png"; // Replace with your actual image path

const CompanyPage = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            About Us
          </h1>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row md:pb-5 xl:pb-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 relative">
          <img
            src={left}
            alt="Description"
            className="max-w-full max-h-full h-auto p-4"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
          <div className="cursor-defalt">
            <h1 className="mb-4 lg:mb-10 font-bold">
              <span className="text-blue-400 text-2xl lg:text-4xl xl:text-5xl transform transition-transform duration-300 hover:translate-x-2">
                Innovating Your<br></br>{" "}
              </span>
              <span className="text-blue-950 text-3xl lg:text-5xl xl:text-6xl">
                IT Solutions{" "}
              </span>
              <br />
            </h1>
            <p className="text-black text-lg lg:text-xl">
              At Sparkware, we provide top-tier IT solutions designed to meet
              your unique needs with precision and excellence. Our comprehensive
              range of services, including web development, mobile development,
              graphic design, software maintenance, and embedded systems,
              ensures that we offer the most effective and innovative solutions
              available in the industry.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4 mt-5">
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="flex justify-center sm:justify-start mt-8">
              <a
                href="/about"
                className="border-2 border-blue-950 bg-blue-950 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-blue-700 transition duration-500 flex items-center"
              >
                <span className="mr-2">Read Our Story</span>
                <i className="fa fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Card with Vision and Mission */}
      <div className="flex justify-center items-center my-16">
        <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <img
              src={cardImage}
              alt="Card"
              className="h-64 object-contain" // Increased the height from h-48 to h-64
            />
          </div>
          <div className="p-8 lg:flex lg:space-x-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-xl font-bold mb-4 text-blue-950">
                Our Vision
              </h2>
              <p className="text-blue-950 text-base font-bold">
                To be the leading provider of innovative and transformative IT
                solutions, empowering businesses to achieve their fullest
                potential through technology.
              </p>{" "}
              <br></br>{" "}
              <p className="text-gray-700 text-base">
                At Sparkware, we envision a future where technology seamlessly
                integrates with business processes to drive growth and success.
                We aim to set the standard for excellence in IT solutions by
                constantly pushing the boundaries of innovation and delivering
                exceptional value to our clients.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-xl font-bold mb-4 text-blue-950">
                Our Mission
              </h2>
              <p className=" text-base text-blue-950 font-bold">
                To deliver high-quality, customized IT solutions that address
                the unique needs of our clients, while fostering long-term
                partnerships through exceptional service and support.
              </p>
              <br></br>
              <p className="text-gray-700 text-base">
                Our mission is to provide comprehensive web development, mobile
                development, graphic design, software maintenance, and embedded
                system development services that are tailored to each client's
                requirements. We are dedicated to understanding our clients'
                challenges, crafting effective solutions, and ensuring their
                satisfaction through ongoing support and collaboration. We
                strive to be a trusted partner in their journey towards
                technological advancement and business success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 sm:px-4 lg:px-10 py-4 ">
        <CounterExp />
      </div>
    </div>
  );
};

export default CompanyPage;
