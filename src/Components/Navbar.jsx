import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProjectsInNewTab = () => {
    window.open('/projects-page', '_blank');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px 10%',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
    }}>
      <div onClick={() => handleScroll('home')} style={{ fontSize: '25px', color: '#fff', textDecoration: 'none', fontWeight: 700, cursor: 'pointer' }}>
        PRA<span style={{ color: '#0ef' }}>NAY</span>
      </div>
      <div 
        style={{ display: 'none', fontSize: '28px', color: '#fff', cursor: 'pointer' }}
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>
      <div style={{ display: 'flex', gap: '35px' }} className="nav-links">
        <div onClick={() => handleScroll('home')} style={{ fontSize: '18px', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: '0.3s', cursor: 'pointer' }}>
          Home
        </div>
        <div onClick={() => handleScroll('about')} style={{ fontSize: '18px', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: '0.3s', cursor: 'pointer' }}>
          About
        </div>
        <div onClick={() => handleScroll('skills')} style={{ fontSize: '18px', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: '0.3s', cursor: 'pointer' }}>
          Skills
        </div>
        <div onClick={() => handleScroll('projects')} style={{ fontSize: '18px', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: '0.3s', cursor: 'pointer' }}>
          Projects
        </div>
        <div onClick={() => handleScroll('contact')} style={{ fontSize: '18px', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: '0.3s', cursor: 'pointer' }}>
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;