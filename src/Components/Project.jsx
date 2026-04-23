import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'SlotFission - Timetable Generator',
      description: 'Built a full-stack timetable generator using Python and Flask with automated scheduling, conflict resolution, and responsive UI.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tech: ['React', 'JavaScript', 'Python', 'Flask'],
      github: 'https://github.com/ShanmukPranay/slotfission-project'
    },
    {
      title: 'Tendon - Cybersecurity Platform',
      description: 'A cybersecurity project where I worked as the Frontend Developer. Built a responsive and secure UI for cybersecurity tools.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
      tech: ['React', 'JavaScript', 'REST API'],
      github: 'https://github.com/tendon-project26/tendon-frontend'
    }
  ];

  return (
    <section style={{
      padding: '120px 10% 100px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 className="heading">Featured <span>Projects</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '35px',
          marginTop: '50px',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: '#1a1a1a',
              borderRadius: '15px',
              overflow: 'hidden',
              transition: '0.5s',
              border: '1px solid rgba(0, 238, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }} />
              </div>
              <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#0ef' }}>{project.title}</h3>
                <p style={{ fontSize: '14px', marginBottom: '20px', lineHeight: 1.6, color: '#ccc', flex: 1 }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{ background: 'rgba(0, 238, 255, 0.15)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', color: '#0ef' }}>{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    background: 'transparent',
                    border: '2px solid #0ef',
                    borderRadius: '40px',
                    fontSize: '14px',
                    color: '#0ef',
                    textDecoration: 'none',
                    transition: '0.3s'
                  }}>
                    <i className="fab fa-github"></i> GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/" className="btn-back" target="_blank">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;