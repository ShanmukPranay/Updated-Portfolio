import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'KL University, Guntur',
      degree: 'Computer Science & Engineering - B.Tech',
      period: 'July 2023 - Present',
      score: 'CGPA: 8.93',
      icon: 'fas fa-university'
    },
    {
      institution: 'Kamala Junior College, Markapur',
      degree: 'MPC (Mathematics, Physics, Chemistry) - Intermediate',
      period: 'July 2021 - May 2023',
      score: 'Percentage: 80.01%',
      icon: 'fas fa-school'
    },
    {
      institution: 'Sri Chaitanya Techno School, Markapur',
      degree: 'SSC - High School',
      period: '2020 - 2021',
      score: 'Percentage: 98.83%',
      icon: 'fas fa-graduation-cap'
    }
  ];

  const styles = {
    section: {
      padding: '100px 10%',
      background: '#111'
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto'
    },
    timeline: {
      position: 'relative',
      padding: '20px 0'
    },
    timelineItem: {
      display: 'flex',
      gap: '30px',
      marginBottom: '40px',
      position: 'relative',
      padding: '25px',
      background: '#1a1a1a',
      borderRadius: '15px',
      border: '1px solid rgba(0, 238, 255, 0.15)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    timelineIcon: {
      flexShrink: 0,
      width: '60px',
      height: '60px',
      background: 'rgba(0, 238, 255, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      color: '#0ef',
      transition: 'all 0.3s ease'
    },
    timelineContent: {
      flex: 1
    },
    institution: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#0ef',
      marginBottom: '8px'
    },
    degree: {
      fontSize: '16px',
      color: '#fff',
      marginBottom: '8px',
      fontWeight: 500
    },
    period: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    score: {
      fontSize: '16px',
      color: '#0ef',
      fontWeight: 600,
      marginTop: '8px',
      display: 'inline-block',
      padding: '4px 12px',
      background: 'rgba(0, 238, 255, 0.1)',
      borderRadius: '20px'
    }
  };

  const hoverStyles = `
    .education-item:hover {
      transform: translateX(10px);
      border-color: #0ef;
      box-shadow: 0 0 20px rgba(0, 238, 255, 0.2);
    }
    
    .education-item:hover .education-icon {
      background: #0ef;
      color: #000;
      box-shadow: 0 0 20px #0ef;
      transform: scale(1.1);
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
      <section style={styles.section} id="education">
        <h2 className="heading">My <span>Education</span></h2>
        <div style={styles.container}>
          <div style={styles.timeline}>
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                style={styles.timelineItem} 
                className="education-item"
              >
                <div style={styles.timelineIcon} className="education-icon">
                  <i className={edu.icon}></i>
                </div>
                <div style={styles.timelineContent}>
                  <h3 style={styles.institution}>{edu.institution}</h3>
                  <p style={styles.degree}>{edu.degree}</p>
                  <p style={styles.period}>
                    <i className="fas fa-calendar-alt" style={{ fontSize: '12px' }}></i>
                    {edu.period}
                  </p>
                  <span style={styles.score}>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;