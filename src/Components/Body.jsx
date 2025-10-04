// import React from "react";

// const Body = () => {
//   const articles = [
//     { id: 1, title: "Exploring Mars: NASA’s New Mission", desc: "Discover how NASA is preparing for the next journey to the Red Planet." },
//     { id: 2, title: "Black Holes: Mysteries of Space", desc: "A deep dive into the science behind black holes and their impact on the universe." },
//     { id: 3, title: "The Future of Space Travel", desc: "Will humans colonize Mars or explore beyond the solar system?" },
//   ];

//   return (
//     <div className="space-y-6">
//       {articles.map((article) => (
//         <div
//           key={article.id}
//           className="bg-white shadow-md p-5 rounded-xl hover:shadow-xl transition cursor-pointer"
//         >
//           <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
//           <p className="text-gray-600 mt-2">{article.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Body;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import "../styles/Body.css";

const Body = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://sxcontent9668.azureedge.us/cms-assets/assets/Mobile_v4_HB_e1d2eda88f.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Animated Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-heading"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Space Exploration 🚀
        </motion.h1>

        <motion.p
          className="hero-excerpt"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
        >
          Humanity’s greatest adventure begins beyond the sky. Explore the
          unknown, chase the stars, and discover the future of space travel...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Link to="/article" className="hero-button">
            Read More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Body;
