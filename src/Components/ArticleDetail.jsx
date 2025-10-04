import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const articlesData = [
  { id: 1, category: "Plants", title: "The Secret Life of Plants", content: "Exploring how plants communicate and survive in depth. Plants adapt to environments in ways unseen." },
  { id: 2, category: "Plants", title: "Medicinal Plants", content: "How plants are used in medicine across cultures. From Ayurveda to modern science." },
  { id: 3, category: "Sun", title: "The Power of the Sun", content: "The importance of solar energy for Earth and human civilization." },
  { id: 4, category: "Sun", title: "Solar Storms", content: "Understanding the effects of solar flares and how they impact Earth." },
  { id: 5, category: "Moon", title: "Mysteries of the Moon", content: "How the moon affects tides, human psychology, and exploration missions." },
  { id: 6, category: "Moon", title: "Moon Missions", content: "The story of Apollo, Artemis, and future lunar missions." },
  { id: 7, category: "Stars", title: "Birth of Stars", content: "The science behind how stars are born and evolve in galaxies." },
  { id: 8, category: "Stars", title: "Supernovas", content: "Explosive deaths of massive stars that seed galaxies with elements." },
  { id: 9, category: "Earth", title: "Earth’s Ecosystem", content: "How ecosystems function and the delicate balance of life on Earth." },
  { id: 10, category: "Earth", title: "Climate Change", content: "The challenges of global warming and possible solutions." },
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articlesData.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className="no-results">Article not found</p>;
  }

  return (
    <div className="article-detail">
      <h1 className="detail-title">{article.title}</h1>
      <p className="detail-category">Category: {article.category}</p>
      <p className="detail-content">{article.content}</p>

      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
    </div>
  );
};

export default ArticleDetail;
