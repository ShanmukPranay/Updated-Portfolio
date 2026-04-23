import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 className="heading">About <span>Me</span></h2>
        <div style={{
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '28px', marginBottom: '20px', color: '#0ef' }}>AI Enthusiast & Full-Stack Developer</h3>
          <p style={{ fontSize: '16px', marginBottom: '20px', lineHeight: 1.7, textAlign: 'justify' }}>
            I'm a passionate developer with a strong focus on full-stack development, AI integration, and building intelligent systems. 
            Currently exploring machine learning algorithms and modern web frameworks to create impactful solutions.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '20px', lineHeight: 1.7, textAlign: 'justify' }}>
            With expertise in Python, Flask, React, JavaScript, and database management, I build responsive, scalable web applications. 
            My problem-solving skills and understanding of Data Structures help me write efficient, clean, and maintainable code.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '30px', lineHeight: 1.7, textAlign: 'justify' }}>
            I thrive in collaborative environments and am always eager to learn emerging technologies. When not coding, 
            I contribute to open-source projects and sharpen my skills in cybersecurity and development tools.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/" className="btn-back" target="_blank">← Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;