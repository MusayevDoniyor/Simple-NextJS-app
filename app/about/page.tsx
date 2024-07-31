import React from "react";

const AboutPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        We are a dedicated team committed to providing excellent content and
        services. Our goal is to deliver value and make a positive impact.
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default AboutPage;
