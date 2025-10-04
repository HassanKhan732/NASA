import React from "react";
// import "../styles/Body.css"; // same css for background

const NextPage = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://sxcontent9668.azureedge.us/cms-assets/assets/Mobile_v4_HB_e1d2eda88f.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1 className="hero-heading">Full Article: Space Exploration 🚀</h1>
        <p>
          Space exploration is one of humanity's greatest achievements. It represents the quest to
          discover the unknown, to expand beyond the boundaries of Earth, and to understand our
          place in the universe. From the Apollo missions to modern-day Mars rovers, space
          exploration has pushed technology, science, and imagination to new heights.
        </p>
        <p>
          Today, private companies like SpaceX and Blue Origin are continuing the dream of space
          colonization. The Moon and Mars are next steps, and humanity’s future might lie among the
          stars. 🚀✨
        </p>
      </div>
    </section>
  );
};

export default NextPage;
