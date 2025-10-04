import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import NextPage from "./Pages/NextPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/article" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
