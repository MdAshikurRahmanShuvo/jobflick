import React, { useState } from "react";

const PostAJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    workerType: "",
    duration: "",
    amount: "",
    location: "",
    skill: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Your job post has been submitted (demo only).");
    setFormData({
      title: "",
      workerType: "",
      duration: "",
      amount: "",
      location: "",
      skill: "",
    });
  };

  return (
    <div className="container mx-auto max-w-[700px] px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Post a Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Work Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Web Developer Needed"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Worker Type
          </label>
          <input
            type="text"
            name="workerType"
            value={formData.workerType}
            onChange={handleChange}
            placeholder="e.g. Designer, Developer, Electrician"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g. 3 months"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="e.g. 15000"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Dhaka, Bangladesh"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Required Skill
          </label>
          <input
            type="text"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            placeholder="e.g. JavaScript, React, UI Design"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostAJob;
