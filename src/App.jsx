import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Body from "./Body";
import Body from "./Components/body";
// import ArticleDetail from "./ArticleDetail";
import ArticleDetail from "./Components/ArticleDetail";
// import Header from "./Header";
import Header from "./Components/header";
// import Footer from "./Footer";
import Footer from "./Components/footer";
// import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;







// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard"; 
// import ArticlePage from "./Components/ArticlePage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/article/:id" element={<ArticlePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

