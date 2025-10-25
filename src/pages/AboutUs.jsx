import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto max-w-[1000px] px-6 py-12 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        About JobFlick
      </h1>

      <p className="text-gray-600 leading-relaxed mb-8">
        JobFlick is a modern job platform designed to connect employers with the
        right candidates quickly and efficiently. Whether you're looking for
        skilled workers or searching for your next career opportunity, JobFlick
        makes the process simple, transparent, and effective.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-8 text-left">
        <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-blue-700">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To empower job seekers and employers by providing a platform that
            bridges the gap between opportunity and talent with ease and trust.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-green-700">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become the most reliable and user-friendly job marketplace in the
            region, promoting fairness and opportunity for everyone.
          </p>
        </div>
      </div>

      <p className="text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} JobFlick. All rights reserved.
      </p>
    </div>
  );
};

export default AboutUs;
