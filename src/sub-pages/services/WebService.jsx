import React from "react";

import heading from "../../constants/images/services/web1.png";
import service from "../../constants/images/services/web2.jpg";
import service1 from "../../constants/images/services/web3.jpg";
import icon1 from "../../constants/images/services/personal-info.png"; // Replace with actual paths
import icon2 from "../../constants/images/services/e-learning.png";
import icon3 from "../../constants/images/services/analytics.png";
import icon4 from "../../constants/images/services/travel-website.png";
import icon5 from "../../constants/images/services/order-food.png";
import icon6 from "../../constants/images/services/doctor.png";
import icon7 from "../../constants/images/services/coding.png";
import icon8 from "../../constants/images/services/online-shop.png";
import icon9 from "../../constants/images/services/computer.png";



const boxes = [
  {
    title: "Back-end Development",
    description:
      "At the core of our web application development, we engineer robust, scalable, and secure server-side solutions. Our expertise lies in knitting together advanced databases and server technologies, forming the backbone of high-performance web applications.",
    icon: icon1,
  },
  {
    title: "Front-end Development",
    description:
      "We excel in crafting front-end designs for web apps, focusing on intuitive, user-friendly interfaces. Harnessing the latest technological advancements, we ensure our applications are not just visually appealing but also offer seamless interactivity.",
    icon: icon2,
  },
  {
    title: "Custom Web App Development",
    description:
      "We delve into creating custom web app development that resonates with your specific business needs and focuses on the user experience, user interface, scalability and flexibility, offering tailor-made digital solutions.",
    icon: icon4,
  },
  {
    title: "Web Portal Development",
    description:
      "As a part of our service spectrum, we develop dynamic web portals with several integration capabilities. These portals amalgamate various online services into one engaging platform, thereby enriching user interaction and experience.",
    icon: icon5,
  },
  {
    title: "Progressive Web Apps Development",
    description:
      "We are at the forefront of creating Progressive Web Apps (PWAs), blending the best features of web and mobile applications with cross-platform capabilities. These PWAs are engineered for high performance and reliability, ensuring seamless functionality across all devices.",
    icon: icon6,
  },
  {
    title: "Mobile Responsive Web Apps",
    description:
      "Our focus on mobile-responsive web apps ensures optimal viewing and functionality across a multitude of devices, catering to the modern user's needs with responsive design techniques and fluid grid layouts.",
    icon: icon7,
  },
  {
    title: "Integration and Testing",
    description:
      "The team seamlessly integrates third-party services and APIs, conducting thorough unit, integration, and user acceptance testing to identify and resolve bugs, ensuring high-quality web applications tailored to your specific needs.",
    icon: icon8,
  },
  {
    title: "Application Support & Maintenance",
    description:
      "Our commitment extends beyond deployment. We provide continuous support and maintenance with ongoing technical support, ensuring the web applications remain up-to-date with upgrades and security management.",
    icon: icon9,
  },
];

const Web = () => {
  return (
    <div className="min-h-screen relative">
      {/* Header Image Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={heading}
          className="object-cover w-full h-full"
          alt="Web Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Web Development
          </h1>
        </div>
      </div>

      {/* Centered H1 Header */}
      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Elevate Your Online Presence with Cutting-Edge Web Development
        </h1>
      </div>

      {/* Card with Image and Paragraph */}
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mb-8">
          <img
            src={service}
            alt="Web Development Overview"
            className="object-cover w-full"
          />
          <div className="p-6">
            <p className="text-lg text-gray-700">
              At Sparkware, we specialize in crafting exceptional websites that
              not only look stunning but also deliver top-notch functionality.
              Our web development services blend the latest technologies with
              innovative design principles to ensure your website stands out in
              today’s competitive digital landscape. Whether you need a sleek
              corporate site, a dynamic e-commerce platform, or a custom web
              application, our team of experts is dedicated to bringing your
              vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Explore Our Services
        </h1>
      </div>

      {/* 3x3 Grid of Boxes with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-4 lg:px-20 mb-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon1} alt="Service 1 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">
            Personal/Portfolio Website
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon2} alt="Service 2 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Education Website</h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon3} alt="Service 3 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Business Website</h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon4} alt="Service 4 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Travel Website</h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon5} alt="Service 5 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">
            Food & Restaurant Website
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon6} alt="Service 6 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">
            Health & Fitness Website
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon7} alt="Service 7 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Custom Website</h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon8} alt="Service 8 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">Ecommerce Website</h2>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
          <img src={icon9} alt="Service 9 Icon" className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-bold text-center">
            Custom Web Applications
          </h2>
        </div>
      </div>

      {/* Left Side Image and Right Side Paragraph */}
      <div className="flex flex-col md:flex-row items-center mt-12 px-4 lg:px-20 mb-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={service1}
            alt="Web Development"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg text-gray-700">
            Our approach to web development is all about balancing form and
            function. We focus on creating user-centric designs that not only
            captivate your audience but also drive engagement and conversions.
            From responsive layouts to intuitive interfaces, every aspect of our
            development process is tailored to meet your specific needs and
            objectives. Let us help you build a digital presence that makes a
            lasting impression.
          </p>
        </div>
      </div>
      <section className="p-10 bg-gray-200 text-center lg:mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-5 font-serif">
          Our Web Application Development Services
        </h1>
        <p className="text-xl text-gray-700 mb-10 sm:px-5 lg:px-232 xl:px-52">
          Embarking on a digital transformation journey, our company emerges as
          a vanguard in web application development services. Our team's
          commitment extends from the germination of an idea to its flourishing
          into a fully-fledged digital entity, ensuring meticulous attention to
          every detail throughout the process.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="relative bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md flex flex-col items-start h-auto sm:h-[450px] md:h-[400px] w-72 md:w-80 mx-auto"
              >
                <img
                  src={box.icon}
                  className="absolute top-4 left-4 w-12 h-12"
                  alt={`Icon ${index + 1}`}
                />
                <h2 className="text-xl font-semibold text-blue-600 mt-14 mb-2 text-start">
                  {box.title}
                </h2>
                <p className="text-start text-lg text-gray-700">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web;
