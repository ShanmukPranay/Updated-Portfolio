import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10%',
      background: 'radial-gradient(circle at 30% 10%, rgba(0, 238, 255, 0.08), #000000 80%)',
      gap: '50px'
    },
    content: {
      maxWidth: '600px'
    },
    title: {
      fontSize: '56px',
      fontWeight: 700,
      marginBottom: '20px',
      animation: 'slideRight 1s ease forwards'
    },
    titleSpan: {
      color: 'var(--primary)'
    },
    subtitle: {
      fontSize: '32px',
      fontWeight: 700,
      color: 'var(--primary)',
      marginBottom: '15px',
      animation: 'slideBottom 1s ease forwards',
      animationDelay: '0.7s',
      opacity: 0,
      animationFillMode: 'forwards'
    },
    description: {
      fontSize: '18px',
      marginBottom: '30px',
      lineHeight: 1.7,
      animation: 'slideLeft 1s ease forwards',
      animationDelay: '0.7s',
      opacity: 0,
      animationFillMode: 'forwards'
    },
    socialMedia: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      animation: 'slideTop 1s ease forwards',
      animationDelay: '1s',
      opacity: 0,
      animationFillMode: 'forwards'
    },
    socialIcon: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '45px',
      height: '45px',
      background: 'transparent',
      border: '2px solid var(--primary)',
      borderRadius: '50%',
      fontSize: '22px',
      color: 'var(--primary)',
      textDecoration: 'none',
      transition: '0.5s'
    },
    heroImage: {
      width: '380px',
      height: '380px',
      borderRadius: '50%',
      border: '5px solid var(--primary)',
      boxShadow: '0 0 30px rgba(0, 238, 255, 0.5)',
      overflow: 'hidden',
      animation: 'floatImage 4s ease-in-out infinite',
      background: '#1a1a1a'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          ARAVEETI <span style={styles.titleSpan}>SHANMUK PRANAY</span>
        </h1>
        <h3 style={styles.subtitle}>AI Enthusiast & Full-Stack Developer</h3>
        <p style={styles.description}>
          Passionate developer skilled in Python, React, and Flask. I build intelligent applications 
          with automated scheduling, conflict resolution, and responsive user interfaces.
        </p>
        
        <div style={styles.socialMedia}>
          <a href="https://www.linkedin.com/in/shanmuk-pranay-araveeti-66abb12ba/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ShanmukPranay" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:shanmukharaveeti77@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <Link to="/contact" className="btn" target="_blank">
          Let's Connect
        </Link>
      </div>
      
      <div style={styles.heroImage}>
        <img src="/PROFILEPIC.png" alt="Shanmuk Pranay" style={styles.image} />
      </div>
    </section>
  );
};

export default Hero;