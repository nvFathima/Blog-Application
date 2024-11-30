import React from 'react';
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blogs" className="nav-link">Add Blogs</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default App;
