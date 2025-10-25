import React from "react";

const Home = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-blue-50 to-white min-h-[80vh]">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">JobFlick</span>
      </h1>
      <p className="text-gray-600 max-w-[600px] mx-auto mb-8">
        Connecting employers and skilled workers across Bangladesh. Post jobs,
        discover talent, and grow your career — all in one place.
      </p>
      <div className="space-x-4">
        <a
          href="/post-a-job"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Post a Job
        </a>
        <a
          href="/find-cvs"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Find CVs
        </a>
      </div>
    </div>
  );
};

export default Home;
