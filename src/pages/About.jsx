import React from 'react';
import { assets } from '../assets/assets'; // Assuming you have images here

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white">
        <img
          src={assets.about_img}
          alt="About Us Hero"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-10">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a team of passionate individuals dedicated to delivering the
            best products and services to our customers. With years of
            experience in the industry, we strive for excellence in every
            project we undertake.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="mb-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to innovate and provide top-notch solutions that
              empower businesses and individuals to achieve their goals. We are
              committed to sustainability, quality, and customer satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where technology bridges gaps, solves
              challenges, and enhances lives. Our goal is to lead this journey
              with innovation, responsibility, and unwavering dedication.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Member */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={assets.team_member_1}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
              <p className="text-gray-500">CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={assets.team_member_2}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">Jane Smith</h4>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={assets.team_member_3}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">Mike Johnson</h4>
              <p className="text-gray-500">Head of Design</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
