import React, { useState } from "react";

const FindCVs = () => {
  const [search, setSearch] = useState("");
  const [skills] = useState([
    { name: "Rakib Hasan", title: "Frontend Developer", skill: "React, Tailwind, JS" },
    { name: "Nusrat Jahan", title: "Graphic Designer", skill: "Photoshop, Illustrator" },
    { name: "Sabbir Ahmed", title: "Backend Developer", skill: "Django, Python, MySQL" },
  ]);

  const filtered = skills.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-[800px] px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Find CVs
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by skill or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/3 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div className="grid gap-4">
        {filtered.length > 0 ? (
          filtered.map((person, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h2>
              <p className="text-gray-600">{person.title}</p>
              <p className="text-gray-500 text-sm mt-1">
                Skills: {person.skill}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No CVs found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default FindCVs;
