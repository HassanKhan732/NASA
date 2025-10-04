
import React, { useState } from "react";
import { Link } from "react-router-dom";

const articlesData = [
  { id: 1, category: "Plants", title: "The Secret Life of Plants", content: "Exploring how plants communicate and survive." },
  { id: 2, category: "Plants", title: "Medicinal Plants", content: "How plants are used in medicine across cultures." },
  { id: 3, category: "Sun", title: "The Power of the Sun", content: "The importance of solar energy for Earth." },
  { id: 4, category: "Sun", title: "Solar Storms", content: "Understanding the effects of solar flares." },
  { id: 5, category: "Moon", title: "Mysteries of the Moon", content: "How the moon affects tides and human life." },
  { id: 6, category: "Moon", title: "Moon Missions", content: "The story of Apollo and future lunar missions." },
  { id: 7, category: "Stars", title: "Birth of Stars", content: "The science behind how stars are formed." },
  { id: 8, category: "Stars", title: "Supernovas", content: "Explosive deaths of massive stars." },
  { id: 9, category: "Earth", title: "Earth’s Ecosystem", content: "How all life on Earth is interconnected." },
  { id: 10, category: "Earth", title: "Climate Change", content: "The challenges of global warming." },
];

const categories = ["All", "Plants", "Sun", "Moon", "Stars", "Earth"];

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="body-container">
      <h1 className="main-heading">Space Insights Articles</h1>

      {/* Category Buttons */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Articles */}
      <div className="articles-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-content">
                {article.content.substring(0, 80)}...
              </p>
              <span className="article-category">
                Category: {article.category}
              </span>
              <Link to={`/article/${article.id}`} className="read-more">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
