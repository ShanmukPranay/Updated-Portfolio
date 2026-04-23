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
import ProjectsPage from './Components/ProjectsPage.jsx';

function App() {
  return (
    <Router>
      <div className="app">

        <Navbar />

        {/* Main Single Page - All sections visible on scroll */}
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
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          {/* Separate route for Projects page that opens in new tab */}
          <Route path="/projects-page" element={<ProjectsPage />} />
        </Routes>

        <footer className="modern-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-text">PRA<span>NAY</span></span>
            </div>
            <div className="footer-text">
              <p>© 2026 A.S. PRANAY | All Rights Reserved</p>
            </div>
            <div className="footer-social">
              <a href="https://github.com/ShanmukPranay" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/shanmuk-pranay-araveeti-66abb12ba/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:shanmukharaveeti77@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;