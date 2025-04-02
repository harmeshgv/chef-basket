import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Header will be common to all routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
