import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// ✅ Correct imports based on your folder
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Project.jsx'; 
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>© 2026 A.S. PRANAY | All Rights Reserved</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;