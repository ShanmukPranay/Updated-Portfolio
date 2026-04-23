import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// ✅ Correct imports based on your folder
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Projects from './Components/Project.jsx'; 
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="app">

        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
        </Routes>

        <footer className="modern-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <h3>PRA<span>NAY</span></h3>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 A.S. PRANAY | All Rights Reserved</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;