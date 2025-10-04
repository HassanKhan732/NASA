import React, { useState } from "react";  // <-- yahan se fix hoga

const Slider = () => {
  const [search, setSearch] = useState("");

  const articles = [
    "NASA launches new telescope",
    "SpaceX Starship updates",
    "AI in astronomy",
    "Life on Mars",
    "Satellites in orbit",
    "Black hole discoveries",
  ];

  const filteredArticles = articles.filter((a) =>
    a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-72 bg-gray-100 p-5 border-l border-gray-300">
      <h2 className="text-lg font-semibold mb-3">Search Articles</h2>
      <input
        type="text"
        placeholder="Type keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
      />
      <ul className="mt-4 space-y-2">
        {filteredArticles.map((article, idx) => (
          <li
            key={idx}
            className="bg-white shadow px-3 py-2 rounded-md hover:bg-blue-50 cursor-pointer"
          >
            {article}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Slider;
