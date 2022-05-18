import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Project from "./pages/project/Project";
import AddComment from "./pages/project/addComment";

const App = () => {
  return (
    <div className="container-web">
      <Router>
        <div className="nav-me">
          <div className="title">My Portfolio</div>
          <div className="link-wrap">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/skills" className="link">
              Skills
            </Link>
            <Link to="/project" className="link">
              Project
            </Link>
          </div>
        </div>

        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/add" element={<AddComment />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
