import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <h2 className="heading">Get In <span>Touch</span></h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '50px',
          marginTop: '50px'
        }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              background: '#1a1a1a', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid rgba(0, 238, 255, 0.1)',
              transition: '0.3s'
            }}>
              <i className="fas fa-phone" style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '55px', 
                height: '55px', 
                background: 'transparent', 
                border: '2px solid #0ef', 
                borderRadius: '50%', 
                fontSize: '24px', 
                color: '#0ef' 
              }}></i>
              <div>
                <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px' }}>Phone</h3>
                <a href="tel:+919014045474" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}>+91 9014045474</a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              background: '#1a1a1a', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid rgba(0, 238, 255, 0.1)',
              transition: '0.3s'
            }}>
              <i className="fas fa-envelope" style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '55px', 
                height: '55px', 
                background: 'transparent', 
                border: '2px solid #0ef', 
                borderRadius: '50%', 
                fontSize: '24px', 
                color: '#0ef' 
              }}></i>
              <div>
                <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px' }}>Email</h3>
                <a href="mailto:shanmukharaveeti77@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}>shanmukharaveeti77@gmail.com</a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              background: '#1a1a1a', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid rgba(0, 238, 255, 0.1)',
              transition: '0.3s'
            }}>
              <i className="fab fa-linkedin-in" style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '55px', 
                height: '55px', 
                background: 'transparent', 
                border: '2px solid #0ef', 
                borderRadius: '50%', 
                fontSize: '24px', 
                color: '#0ef' 
              }}></i>
              <div>
                <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px' }}>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/shanmuk-pranay-araveeti-66abb12ba/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}>Connect on LinkedIn</a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              background: '#1a1a1a', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid rgba(0, 238, 255, 0.1)',
              transition: '0.3s'
            }}>
              <i className="fab fa-github" style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '55px', 
                height: '55px', 
                background: 'transparent', 
                border: '2px solid #0ef', 
                borderRadius: '50%', 
                fontSize: '24px', 
                color: '#0ef' 
              }}></i>
              <div>
                <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px' }}>GitHub</h3>
                <a href="https://github.com/ShanmukPranay" target="_blank" rel="noopener noreferrer" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}>github.com/ShanmukPranay</a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              background: '#1a1a1a', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid rgba(0, 238, 255, 0.1)',
              transition: '0.3s'
            }}>
              <i className="fas fa-map-marker-alt" style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '55px', 
                height: '55px', 
                background: 'transparent', 
                border: '2px solid #0ef', 
                borderRadius: '50%', 
                fontSize: '24px', 
                color: '#0ef' 
              }}></i>
              <div>
                <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px' }}>Location</h3>
                <p style={{ fontSize: '16px', color: '#fff' }}>Vijayawada, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ 
            background: '#1a1a1a', 
            padding: '40px', 
            borderRadius: '20px', 
            border: '1px solid rgba(0, 238, 255, 0.2)' 
          }}>
            <h2 style={{ fontSize: '28px', color: '#0ef', marginBottom: '25px', textAlign: 'center' }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ position: 'relative', marginBottom: '30px' }} className="input-box">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    fontSize: '16px', 
                    color: '#fff', 
                    background: '#222', 
                    border: '2px solid #333', 
                    borderRadius: '10px', 
                    outline: 'none' 
                  }} 
                />
                <span style={{ 
                  position: 'absolute', 
                  left: '15px', 
                  top: '15px', 
                  fontSize: '16px', 
                  color: '#888', 
                  pointerEvents: 'none', 
                  transition: '0.3s' 
                }}>Full Name</span>
              </div>
              <div style={{ position: 'relative', marginBottom: '30px' }} className="input-box">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    fontSize: '16px', 
                    color: '#fff', 
                    background: '#222', 
                    border: '2px solid #333', 
                    borderRadius: '10px', 
                    outline: 'none' 
                  }} 
                />
                <span style={{ 
                  position: 'absolute', 
                  left: '15px', 
                  top: '15px', 
                  fontSize: '16px', 
                  color: '#888', 
                  pointerEvents: 'none', 
                  transition: '0.3s' 
                }}>Email Address</span>
              </div>
              <div style={{ position: 'relative', marginBottom: '30px' }} className="input-box">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    fontSize: '16px', 
                    color: '#fff', 
                    background: '#222', 
                    border: '2px solid #333', 
                    borderRadius: '10px', 
                    outline: 'none' 
                  }} 
                />
                <span style={{ 
                  position: 'absolute', 
                  left: '15px', 
                  top: '15px', 
                  fontSize: '16px', 
                  color: '#888', 
                  pointerEvents: 'none', 
                  transition: '0.3s' 
                }}>Subject</span>
              </div>
              <div style={{ position: 'relative', marginBottom: '30px' }} className="input-box">
                <textarea 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  style={{ 
                    width: '100%', 
                    padding: '15px', 
                    fontSize: '16px', 
                    color: '#fff', 
                    background: '#222', 
                    border: '2px solid #333', 
                    borderRadius: '10px', 
                    outline: 'none', 
                    resize: 'none' 
                  }}
                ></textarea>
                <span style={{ 
                  position: 'absolute', 
                  left: '15px', 
                  top: '15px', 
                  fontSize: '16px', 
                  color: '#888', 
                  pointerEvents: 'none', 
                  transition: '0.3s' 
                }}>Your Message</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/" className="btn-back" target="_blank">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;