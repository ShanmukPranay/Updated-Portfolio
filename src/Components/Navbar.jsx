import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/skills', name: 'Skills' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' }
  ];

  const styles = {
    navbar: {
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
      transition: 'all 0.3s ease'
    },
    logo: {
      fontSize: '25px',
      color: 'var(--text)',
      textDecoration: 'none',
      fontWeight: 700
    },
    logoSpan: {
      color: 'var(--primary)'
    },
    navLinks: {
      display: 'flex',
      gap: '35px'
    },
    link: {
      fontSize: '18px',
      color: 'var(--text)',
      textDecoration: 'none',
      fontWeight: 500,
      transition: '0.3s'
    },
    menuToggle: {
      display: 'none',
      fontSize: '28px',
      color: 'var(--text)',
      cursor: 'pointer'
    },
    responsiveNavLinks: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      padding: '20px',
      background: 'rgba(0, 0, 0, 0.95)',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      display: 'none'
    }
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo} target="_blank">
        PRA<span style={styles.logoSpan}>NAY</span>
      </Link>
      <div 
        style={styles.menuToggle} 
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>
      <div 
        style={{
          ...styles.navLinks,
          ...(window.innerWidth <= 768 ? (menuOpen ? styles.responsiveNavLinks : { display: 'none' }) : {})
        }}
        className="nav-links"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            target="_blank"
            style={{
              ...styles.link,
              ...(location.pathname === link.path && { color: 'var(--primary)', textShadow: '0 0 10px var(--primary)' })
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;