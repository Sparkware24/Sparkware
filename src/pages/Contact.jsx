import React from "react";
import buildingIcon from "../constants/images/contact/building.png";
import communicateIcon from "../constants/images/contact/communicate.png";
import openIcon from "../constants/images/contact/open.png";
import contactUs from "../constants/images/contact/contact-us.jpg";
import heading from "../constants/images/company/slide2.jpg";

const Contact = () => {
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

      <section id="contact" className="bg-gray-100 py-10 text-center">
        <h1 className="text-4xl font-serif text-blue-900 mb-12 mt-12 inline-block">
          GET IN TOUCH WITH US
        </h1>

        {/* Image */}
        <div className="text-center">
          <img
            src={contactUs}
            alt="Contact Us"
            className="mx-auto max-w-full h-auto max-h-[400px] rounded"
          />
        </div>

        {/* Info Boxes */}
        <div className="flex flex-wrap justify-around mt-8 mb-12">
          <div className="flex-1 p-4 bg-white border-4 border-blue-900 rounded-md m-2 max-w-xs text-center">
            <h2 className="text-blue-900 font-bold text-2xl">
              Visit Our Place
            </h2>
            <img
              src={buildingIcon}
              alt="Visit Our Place"
              className="mx-auto w-24 h-24 mb-4"
            />
            <p>
              Sparkware, Galle - Udugama Road
              <br />
              Tellambura, Nakiyadeniya. 80000
            </p>
          </div>

          <div className="flex-1 p-4 bg-white border-4 border-blue-900 rounded-md m-2 max-w-xs text-center">
            <h2 className="text-blue-900 font-bold text-2xl">Contact</h2>
            <img
              src={communicateIcon}
              alt="Contact"
              className="mx-auto w-24 h-24 mb-4"
            />
            <p className="text-blue-900">
              sparkware24@gmail.com
              <br />
              078 654 2882
            </p>
          </div>

          <div className="flex-1 p-4 bg-white border-4 border-blue-900 rounded-md m-2 max-w-xs text-center">
            <h2 className="text-blue-900 font-bold text-2xl">Open Hours</h2>
            <img src={openIcon} alt="Open" className="mx-auto w-24 h-24 mb-4" />
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="text-center mt-5 mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.423759782264!2d80.21731011477525!3d6.027387395637197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b44cc9ce5cf%3A0x5d3e4b840b0867b7!2sGalle%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1624169248318!5m2!1sen!2sus"
            title="map"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] max-w-[1000px] border-0 mx-auto"
          ></iframe>
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
            Please fill out the form below, and we will respond to your query
            via email within 24 hours.
          </p>
        </div>

        <div className="text-center mt-5 mb-5">
          <form
            id="contact-form"
            className="max-w-xl mx-auto p-4 bg-white border border-gray-300 rounded-md"
          >
            <label
              htmlFor="name"
              className="block text-left text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />

            <label
              htmlFor="email"
              className="block text-left text-gray-700 mb-1"
            >
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
      </section>
    </div>
  );
};

export default Contact;
