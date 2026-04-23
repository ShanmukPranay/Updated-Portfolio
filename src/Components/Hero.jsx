import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../assets/Profileimage.png';

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

  // CSS styles matching your cyan/blue theme
  const hoverStyles = `
    .social-icon-hover {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      background: transparent;
      border: 2px solid #0ef;
      border-radius: 50%;
      font-size: 22px;
      color: #0ef;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .social-icon-hover:hover {
      background: #0ef;
      border-color: #0ef;
      color: #000;
      box-shadow: 0 0 25px #0ef;
      transform: translateY(-5px) scale(1.1);
    }
    
    /* Optional: Add a subtle pulse animation on hover */
    .social-icon-hover:hover i {
      animation: iconPulse 0.3s ease;
    }
    
    @keyframes iconPulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
      <section style={styles.hero}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            ARAVEETI <span style={styles.titleSpan}>SHANMUK PRANAY</span>
          </h1>
          <h3 style={styles.subtitle}>Full-Stack Developer & AI Enthusiast</h3>
          <p style={styles.description}>
            I'm a Full-Stack Developer passionate about building intelligent web applications using Python, React, and Flask. 
            I specialize in creating scalable solutions with automated scheduling, conflict resolution, and responsive user interfaces.
          </p>
          
          <div style={styles.socialMedia}>
            <a 
              href="https://www.linkedin.com/in/shanmuk-pranay-araveeti-66abb12ba/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-hover"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/ShanmukPranay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-hover"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="mailto:shanmukharaveeti77@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-hover"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <Link to="/contact" className="btn" target="_blank">
            Let's Connect
          </Link>
        </div>
        
        <div style={styles.heroImage}>
          <img src={ProfileImage} alt="Shanmuk Pranay" style={styles.image} />
        </div>
      </section>
    </>
  );
};

export default Hero;