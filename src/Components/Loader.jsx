// Loader.js
import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center w-full h-screen bg-gray-100">
    <div className="text-center">
      {/* Icon */}
      <FaTools className="text-6xl text-yellow-500 animate-spin mb-4" />
      
      {/* Text */}
      <p className="text-2xl font-semibold text-indigo-800">
        Loading the best quality products...
      </p>
      
      {/* Spinner */}
      <span className="loading loading-infinity loading-lg mt-4"></span>
    </div>
  </div>
);

export default Loader;
