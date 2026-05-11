import React from 'react';
import { Link } from 'react-router-dom';

// Import your project images from assets folder
import SlotFissionImage from '../assets/slotfission.png';
import TendonImage from '../assets/tendon.png';

const Projects = () => {
  const projects = [
    {
      title: 'SlotFission - Timetable Generator',
      description: 'Built a full-stack timetable generator using Python and Flask with automated scheduling, conflict resolution, and responsive UI.',
      image: SlotFissionImage,
      tech: ['React', 'JavaScript', 'Python', 'Flask'],
      github: 'https://github.com/ShanmukPranay/slotfission-project'
    },
    {
      title: 'Tendon - Cybersecurity Platform',
      description: 'A cybersecurity project where I worked as the Frontend Developer. Built a responsive and secure UI for cybersecurity tools.',
      image: TendonImage,
      tech: ['React', 'JavaScript', 'REST API'],
      github: 'https://github.com/tendon-project26/tendon-frontend'
    }
  ];

  const styles = {
    section: {
      padding: '120px 10% 100px',
      minHeight: '100vh'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '35px',
      marginTop: '50px',
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    card: {
      background: '#1a1a1a',
      borderRadius: '15px',
      overflow: 'hidden',
      transition: '0.5s',
      border: '1px solid rgba(0, 238, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column'
    },
    cardImg: {
      height: '220px',
      overflow: 'hidden',
      backgroundColor: '#0a0a0a'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: '0.5s'
    },
    content: {
      padding: '25px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      fontSize: '22px',
      marginBottom: '12px',
      color: '#0ef'
    },
    description: {
      fontSize: '14px',
      marginBottom: '20px',
      lineHeight: 1.6,
      color: '#ccc',
      flex: 1
    },
    techContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px'
    },
    tech: {
      background: 'rgba(0, 238, 255, 0.15)',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      color: '#0ef'
    },
    links: {
      display: 'flex',
      gap: '15px',
      marginTop: 'auto'
    }
  };

  const hoverStyles = `
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 20px rgba(0, 238, 255, 0.2);
      border-color: #0ef;
    }
    
    .project-card:hover .project-img {
      transform: scale(1.08);
    }
    
    .github-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: transparent;
      border: 2px solid #0ef;
      border-radius: 40px;
      font-size: 14px;
      color: #0ef;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .github-btn:hover {
      background: #0ef;
      color: #000;
      box-shadow: 0 0 15px #0ef;
      transform: translateY(-3px);
    }
    
    .github-btn:hover i {
      color: #000;
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
      <section style={styles.section}>
        <h2 className="heading">Featured <span>Projects</span></h2>
        <div style={styles.container}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card} className="project-card">
              <div style={styles.cardImg}>
                <img src={project.image} alt={project.title} style={styles.image} className="project-img" />
              </div>
              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.techContainer}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={styles.tech}>{tech}</span>
                  ))}
                </div>
                <div style={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    <i className="fab fa-github"></i> GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        </div>
      </section>
    </>
  );
};

export default Projects;