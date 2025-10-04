// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
//         <h1 className="text-2xl font-bold tracking-wide text-blue-400">
//           Space Insights 🚀
//         </h1>
//         <nav className="space-x-6">
//           <a href="#" className="hover:text-blue-300 transition">Home</a>
//           <a href="#" className="hover:text-blue-300 transition">Articles</a>
//           <a href="#" className="hover:text-blue-300 transition">About</a>
//           <a href="#" className="hover:text-blue-300 transition">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React from "react";
// import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Space Insights 🚀</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Articles</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
