import React from 'react';
import { assets } from '../assets/assets';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${assets.contact_img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              We’d love to hear from you! Here’s how you can reach us.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <img src={assets.email_icon} alt="Email" className="w-6" />
              <span className="text-gray-700">email@example.com</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img src={assets.phone_icon} alt="Phone" className="w-6" />
              <span className="text-gray-700">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={assets.location_icon} alt="Location" className="w-6" />
              <span className="text-gray-700">123 Main Street, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
