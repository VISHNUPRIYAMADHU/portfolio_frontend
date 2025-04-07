import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import SkillSet from "./pages/SkillSet";


//import Navbar from "./components/Navbar";
//<Navbar />

function App() {
  return (
    <Router> 
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skillset" element={<SkillSet />} />
      </Routes>
    </Router>
  );
}

export default App;


