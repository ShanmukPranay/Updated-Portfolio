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

  const footerStyles = {
    footer: {
      padding: '30px 10%',
      background: '#111',
      textAlign: 'center'
    },
    footerText: {
      fontSize: '16px'
    }
  };

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

        <footer style={footerStyles.footer}>
          <div style={footerStyles.footerText}>
            <p>© 2026 A.S. PRANAY | All Rights Reserved</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
