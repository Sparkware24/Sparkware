import React from "react";

function ContactForm() {
  return (
    <div>
      <div className="text-center py-4 mt-16">
        <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif text-blue-950 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
          GET IN TOUCH
        </h1>

        <p
          className="text-gray-800 text-center text-lg mt-4"
          style={{
            fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}>
          Thank you for reaching out to Sparkware. We are here to assist you with any inquiries or issues you
          may have.
          <br />
          Please fill out the form below, and we will respond to your query via email within 24 hours.
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
        <form id="contact-form" className="max-w-xl mx-auto p-4 bg-white border border-gray-300 rounded-md">
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

          <label htmlFor="subject" className="block text-left text-gray-700 mb-1">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label htmlFor="message" className="block text-left text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-y"></textarea>

          <input
            type="submit"
            value="Submit"
            className="w-full p-2 text-white bg-blue-950 rounded-md cursor-pointer hover:bg-blue-400"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
