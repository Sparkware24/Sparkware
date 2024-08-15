import React from "react";
import { Link } from "react-router-dom";

import SlideShow from "../components/SlideShow";
import ImageCarousel from "../components/ImageCarousel";
import CounterExp from "../components/CounterExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../constants/images/icons/Icon1.png";
import icon2 from "../constants/images/icons/Icon2.png";

import leftImage from "../constants/images/left.jpg";

import leftTopImage from "../constants/images/home_head_1.jpg";
import leftBottomImage from "../constants/images/leftBottom.jpg";


import LeatestProjects from "../components/LeatestProjects";
import "./Styles.css";

function Home() {
  return (
    <div>
      <div className="h-[60vh] sm:h-[90vh]">
        <SlideShow />
      </div>

      <div className="flex flex-col lg:flex-row md:pb-5 xl:pb-20">
        <div className="w-full lg:w-1/2  flex justify-center items-center p-4 relative">
          <img
            src={leftImage}
            alt="Description"
            className="max-w-full max-h-full h-auto p-4"
          />
          <div className="w-full absolute top-4 left-4">
            <img
              src={leftTopImage}
              alt="Icon 1"
              className="w-2/5 h-auto transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="w-full flex absolute bottom-4 right-4 justify-end">
            <img
              src={leftBottomImage}
              alt="Icon 4"
              className="w-2/5 h-auto transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center p-4">
          <div className="cursor-defalt">
            <h1 className="mb-4 lg:mb-10 font-bold">
              <span className="text-red-600 text-2xl lg:text-4xl xl:text-5xl transform transition-transform duration-300 hover:translate-x-2">
                We provide the best{" "}
              </span>
              <span className="text-red-800 text-3xl lg:text-5xl xl:text-6xl">
                IT{" "}
              </span>
              <br />
              <span className="text-red-800 text-3xl lg:text-5xl xl:text-6xl">
                Solution
              </span>
              <span className="text-red-600 text-2xl lg:text-4xl xl:text-5xl">
                {" "}
                services
              </span>
            </h1>
            <p className="text-black text-lg lg:text-xl">
              We offer one of the most comprehensive, affordably-priced service
              and maintenance IT support plans in the IT industry.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4 mt-5">
              <div className="">
                <ul className="list-none text-lg text-black lg:text-xl">
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Understand Customer Challenges
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Collect Clients Needs
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Craft the right solutions
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="list-none text-lg text-black lg:text-xl">
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Deliver Quality Services
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Ensure Customer Satisfaction
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Provide Ongoing Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start mt-8">
              <a
                href="/Company/Contactus"
                className="border-2 border-red-700 bg-red-700 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-center py-4">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-2 cursor-defalt">
          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon1}
              alt="Web Application Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Web Application Development</h2>
            <p className="text-lg">
              To help businesses successfully communicate with their intended
              demographic, Xcrop Technology provides services that include the
              complete spectrum of the software development life cycle.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon2}
              alt="Mobile App Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Mobile App Development</h2>
            <p className="text-lg">
              To achieve our client's business objectives, we design and build
              feature-rich handheld apps for a wide range of mobile platforms,
              with a particular emphasis on delivering superior user experience
              and making use of cutting-edge mobile technology.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            to="/service"
            className="border-2 border-red-700 bg-red-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
          >
            Explore in detail
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col py-5">
        <div className="text-center py-6">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR VALUES
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            Their commitment to customer satisfaction is evident in every
            interaction. They listen to our needs, respond promptly, and go
            above and beyond to ensure we're completely satisfied.
          </p>
        </div>
        <div className="p-4 sm:px-10 lg:px-20 xl:Px-32">
          <CustomerReviews />
        </div>
      </div>{" "}*/}

      <div className="flex flex-col py-5">
        <div className="text-center py-4">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR PROJECTS
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            We create bespoke web solutions that cater to unique business needs
            and objectives. From highly interactive websites to complex web
            applications, our projects are designed to deliver exceptional user
            experiences and functionality.
          </p>
        </div>
        <div className="p-4 sm:px-10 lg:px-20 xl:Px-32">
          <LeatestProjects />
        </div>
        <div className="flex justify-center">
          <Link
            to="/project"
            className="border-2 border-red-700 bg-red-700 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
          >
            Explore more projects
          </Link>
        </div>
      </div>
      <div className="py-4 px-2 sm:px-4">
        <ImageCarousel />
      </div>
      
      <div className="px-2 sm:px-4 lg:px-10 py-4 ">
        <CounterExp />
      </div>
      {/* Contact Form */}
      <div className="mt-24">
        <h2 className="text-blue-900 font-bold text-3xl text-center font-sans mt-24">
          GET IN TOUCH
        </h2>
        <p
          className="text-gray-800 text-center text-lg mt-4"
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}
        >
          Thank you for reaching out to Sparkware. We are here to assist you
          with any inquiries or issues you may have.
          <br />
          Please fill out the form below, and we will respond to your query via
          email within 24 hours.
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
        <form
          id="contact-form"
          className="max-w-xl mx-auto p-4 bg-white border border-gray-300 rounded-md"
        >
          <label htmlFor="name" className="block text-left text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label htmlFor="email" className="block text-left text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label
            htmlFor="subject"
            className="block text-left text-gray-700 mb-1"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label
            htmlFor="message"
            className="block text-left text-gray-700 mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-y"
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="w-full p-2 text-white bg-blue-900 rounded-md cursor-pointer hover:bg-blue-800"
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
