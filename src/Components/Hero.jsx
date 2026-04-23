import React from 'react';
import ProfileImage from '../assets/Profileimage.png';

const Hero = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProjectsInNewTab = () => {
    window.open('/projects-page', '_blank');
  };

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10%',
      background: 'radial-gradient(circle at 30% 10%, rgba(0, 238, 255, 0.08), #000000 80%)',
      gap: '50px',
      flexWrap: 'wrap'
    },
    content: {
      maxWidth: '700px',
      flex: 1,
      minWidth: '280px'
    },
    title: {
      fontSize: 'clamp(24px, 4vw, 48px)',
      fontWeight: 700,
      marginBottom: '20px',
      animation: 'slideRight 1s ease forwards',
      lineHeight: 1.3,
      wordBreak: 'keep-all',
      whiteSpace: 'normal'
    },
    titleNormal: {
      color: '#fff'
    },
    titleSpan: {
      color: 'var(--primary)'
    },
    subtitle: {
      fontSize: 'clamp(18px, 3.5vw, 28px)',
      fontWeight: 700,
      color: 'var(--primary)',
      marginBottom: '15px',
      animation: 'slideBottom 1s ease forwards',
      animationDelay: '0.7s',
      opacity: 0,
      animationFillMode: 'forwards'
    },
    description: {
      fontSize: 'clamp(14px, 2.5vw, 18px)',
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
      animationFillMode: 'forwards',
      flexWrap: 'wrap'
    },
    heroImage: {
      width: 'clamp(250px, 30vw, 380px)',
      height: 'clamp(250px, 30vw, 380px)',
      borderRadius: '50%',
      border: '5px solid var(--primary)',
      boxShadow: '0 0 30px rgba(0, 238, 255, 0.5)',
      overflow: 'hidden',
      animation: 'floatImage 4s ease-in-out infinite',
      background: '#1a1a1a',
      flexShrink: 0
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  };

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
    
    .btn-projects {
      display: inline-block;
      padding: 12px 28px;
      background: transparent;
      border: 2px solid #0ef;
      border-radius: 40px;
      font-size: 16px;
      color: #0ef;
      font-weight: 600;
      transition: 0.5s;
      cursor: pointer;
      text-decoration: none;
      margin-left: 15px;
    }
    
    .btn-projects:hover {
      background: #0ef;
      color: #000;
      box-shadow: 0 0 20px #0ef;
      transform: translateY(-5px);
    }
    
    .btn-contact {
      display: inline-block;
      padding: 12px 28px;
      background: #0ef;
      border-radius: 40px;
      box-shadow: 0 0 10px #0ef;
      font-size: 16px;
      color: #000;
      font-weight: 600;
      transition: 0.5s;
      cursor: pointer;
      border: none;
    }
    
    .btn-contact:hover {
      box-shadow: 0 0 20px #0ef;
      transform: translateY(-5px);
    }
    
    .button-group {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      animation: slideTop 1s ease forwards;
      animation-delay: 1.2s;
      opacity: 0;
      animationFillMode: forwards;
    }

    /* Make sure text doesn't overflow on small screens */
    @media (max-width: 768px) {
      .btn-projects, .btn-contact {
        padding: 10px 20px;
        font-size: 14px;
      }
      .social-icon-hover {
        width: 38px;
        height: 38px;
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      .btn-projects, .btn-contact {
        padding: 8px 16px;
        font-size: 12px;
      }
      .button-group {
        gap: 12px;
      }
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
      <section style={styles.hero}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            <span style={styles.titleNormal}>ARAVEETI </span>
            <span style={styles.titleSpan}>SHANMUK PRANAY</span>
          </h1>
          <h3 style={styles.subtitle}>Full-Stack Developer</h3>
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
          
          <div className="button-group">
            <button onClick={() => handleScroll('contact')} className="btn-contact">
              Let's Connect
            </button>
            <button onClick={openProjectsInNewTab} className="btn-projects">
              View Projects →
            </button>
          </div>
        </div>
        
        <div style={styles.heroImage}>
          <img src={ProfileImage} alt="Shanmuk Pranay" style={styles.image} />
        </div>
      </section>
    </>
  );
};

export default Hero;