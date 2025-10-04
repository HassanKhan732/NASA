import React from "react";
// import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Space Insights. All Rights Reserved.
      </p>
      <p className="footer-subtext">
        Designed with <span className="highlight">Vanilla CSS</span>
      </p>
    </footer>
  );
};

export default Footer;
