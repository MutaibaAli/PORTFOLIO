// src/components/Contact.js
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-pink-400 mb-12">
          Get in Touch
        </h2>

        {/* Subheading */}
        <p className="text-center text-lg text-gray-400 mb-8">
          I'd love to hear from you!, feel free to drop a message.
        </p>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-400" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:bg-gray-600 transition duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-400" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:bg-gray-600 transition duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-400" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 hover:bg-gray-600 transition duration-300"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
