import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillsData = {
    programming: [
      { name: 'Python', level: 'Intermediate', width: '70%', color: '#ff9500' },
      { name: 'Java', level: 'Basics', width: '45%', color: '#ff2d75' },
      { name: 'C Programming', level: 'Intermediate', width: '70%', color: '#ff9500' },
      { name: 'Data Structures', level: 'Intermediate', width: '70%', color: '#ff9500' }
    ],
    web: [
      { name: 'HTML5 & CSS3', level: 'Advanced', width: '85%', color: '#0ef' },
      { name: 'JavaScript', level: 'Intermediate', width: '70%', color: '#ff9500' },
      { name: 'React.js', level: 'Basics', width: '45%', color: '#ff2d75' },
      { name: 'Flask (Python)', level: 'Intermediate', width: '70%', color: '#ff9500' }
    ],
    tools: [
      { name: 'MySQL (Workbench)', level: 'Intermediate', width: '70%', color: '#ff9500' },
      { name: 'PostgreSQL', level: 'Familiar', width: '45%', color: '#ff2d75' },
      { name: 'Git & VS Code', level: 'Intermediate', width: '70%', color: '#ff9500' },
      { name: 'Postman', level: 'Intermediate', width: '70%', color: '#ff9500' }
    ]
  };

  // Animation for skill bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-fill-bar');
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const getLevelClass = (level) => {
    if (level === 'Advanced') return 'advanced';
    if (level === 'Intermediate') return 'intermediate';
    return 'beginner';
  };

  return (
    <section style={{
      padding: '120px 10% 100px',
      minHeight: '100vh',
      background: '#111',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div ref={skillsRef} style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 className="heading">Technical <span>Skills</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '35px',
          marginTop: '50px',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {/* Programming Languages */}
          <div style={{
            background: '#1a1a1a',
            padding: '30px',
            borderRadius: '15px',
            transition: '0.5s',
            border: '1px solid rgba(0, 238, 255, 0.2)'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '25px', color: '#0ef', borderLeft: '3px solid #0ef', paddingLeft: '15px' }}>Programming Languages</h3>
            {skillsData.programming.map((skill, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 500 }}>
                  <span>{skill.name}</span>
                  <span style={{ color: skill.color === '#0ef' ? '#0ef' : (skill.color === '#ff9500' ? '#ff9500' : '#ff2d75') }}>{skill.level}</span>
                </div>
                <div style={{ 
                  height: '10px', 
                  background: '#333', 
                  borderRadius: '5px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div 
                    className="skill-fill-bar"
                    data-width={skill.width}
                    style={{ 
                      width: '0%', 
                      height: '100%', 
                      background: skill.color === '#0ef' ? 'linear-gradient(90deg, #0ef, #07f56b)' : (skill.color === '#ff9500' ? 'linear-gradient(90deg, #ff9500, #ffbb00)' : 'linear-gradient(90deg, #ff2d75, #ff6b8b)'),
                      borderRadius: '5px',
                      transition: 'width 1.5s ease-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Web Development */}
          <div style={{
            background: '#1a1a1a',
            padding: '30px',
            borderRadius: '15px',
            transition: '0.5s',
            border: '1px solid rgba(0, 238, 255, 0.2)'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '25px', color: '#0ef', borderLeft: '3px solid #0ef', paddingLeft: '15px' }}>Web Development</h3>
            {skillsData.web.map((skill, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 500 }}>
                  <span>{skill.name}</span>
                  <span style={{ color: skill.color === '#0ef' ? '#0ef' : (skill.color === '#ff9500' ? '#ff9500' : '#ff2d75') }}>{skill.level}</span>
                </div>
                <div style={{ 
                  height: '10px', 
                  background: '#333', 
                  borderRadius: '5px', 
                  overflow: 'hidden'
                }}>
                  <div 
                    className="skill-fill-bar"
                    data-width={skill.width}
                    style={{ 
                      width: '0%', 
                      height: '100%', 
                      background: skill.color === '#0ef' ? 'linear-gradient(90deg, #0ef, #07f56b)' : (skill.color === '#ff9500' ? 'linear-gradient(90deg, #ff9500, #ffbb00)' : 'linear-gradient(90deg, #ff2d75, #ff6b8b)'),
                      borderRadius: '5px',
                      transition: 'width 1.5s ease-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Databases & Tools */}
          <div style={{
            background: '#1a1a1a',
            padding: '30px',
            borderRadius: '15px',
            transition: '0.5s',
            border: '1px solid rgba(0, 238, 255, 0.2)'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '25px', color: '#0ef', borderLeft: '3px solid #0ef', paddingLeft: '15px' }}>Databases & Tools</h3>
            {skillsData.tools.map((skill, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 500 }}>
                  <span>{skill.name}</span>
                  <span style={{ color: skill.color === '#0ef' ? '#0ef' : (skill.color === '#ff9500' ? '#ff9500' : '#ff2d75') }}>{skill.level}</span>
                </div>
                <div style={{ 
                  height: '10px', 
                  background: '#333', 
                  borderRadius: '5px', 
                  overflow: 'hidden'
                }}>
                  <div 
                    className="skill-fill-bar"
                    data-width={skill.width}
                    style={{ 
                      width: '0%', 
                      height: '100%', 
                      background: skill.color === '#0ef' ? 'linear-gradient(90deg, #0ef, #07f56b)' : (skill.color === '#ff9500' ? 'linear-gradient(90deg, #ff9500, #ffbb00)' : 'linear-gradient(90deg, #ff2d75, #ff6b8b)'),
                      borderRadius: '5px',
                      transition: 'width 1.5s ease-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/" className="btn-back" target="_blank">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;