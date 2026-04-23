import React, { useState } from 'react';

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

  // Add this style to make icons bright cyan on hover
  const hoverStyles = `
    .contact-item-link {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .contact-item-link:hover {
      transform: translateX(10px);
      border-color: #0ef !important;
      box-shadow: 0 0 20px rgba(0, 238, 255, 0.3);
    }
    
    .contact-item-link:hover i {
      background: #0ef !important;
      color: #000 !important;
      box-shadow: 0 0 25px #0ef !important;
      transform: scale(1.1);
    }
    
    .contact-item-link:hover h3 {
      color: #0ef !important;
      text-shadow: 0 0 8px rgba(0, 238, 255, 0.5);
    }
    
    .contact-item-link:hover p {
      color: #0ef !important;
    }
    
    /* Icon base styling */
    .contact-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
      background: transparent;
      border: 2px solid #0ef;
      border-radius: 50%;
      font-size: 24px;
      color: #0ef;
      transition: all 0.3s ease;
    }
    
    .btn-back {
      display: inline-block;
      margin-top: 30px;
      padding: 12px 28px;
      background: #0ef;
      border-radius: 40px;
      color: #000;
      text-decoration: none;
      font-weight: 600;
      transition: 0.5s;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
    
    .btn-back:hover {
      box-shadow: 0 0 20px #0ef;
      transform: translateY(-5px);
      background: #0ef;
      color: #000;
    }
  `;

  return (
    <>
      <style>{hoverStyles}</style>
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
              {/* Phone */}
              <a 
                href="tel:+919014045474" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item-link"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: '#1a1a1a', 
                  padding: '20px', 
                  borderRadius: '15px', 
                  border: '1px solid rgba(0, 238, 255, 0.1)',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i className="fas fa-phone contact-icon"></i>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px', transition: '0.3s' }}>Phone</h3>
                  <p style={{ fontSize: '16px', color: '#fff', transition: '0.3s' }}>+91 9014045474</p>
                </div>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:shanmukharaveeti77@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item-link"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: '#1a1a1a', 
                  padding: '20px', 
                  borderRadius: '15px', 
                  border: '1px solid rgba(0, 238, 255, 0.1)',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i className="fas fa-envelope contact-icon"></i>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px', transition: '0.3s' }}>Email</h3>
                  <p style={{ fontSize: '16px', color: '#fff', transition: '0.3s' }}>shanmukharaveeti77@gmail.com</p>
                </div>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/shanmuk-pranay-araveeti-66abb12ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item-link"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: '#1a1a1a', 
                  padding: '20px', 
                  borderRadius: '15px', 
                  border: '1px solid rgba(0, 238, 255, 0.1)',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i className="fab fa-linkedin-in contact-icon"></i>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px', transition: '0.3s' }}>LinkedIn</h3>
                  <p style={{ fontSize: '16px', color: '#fff', transition: '0.3s' }}>Connect on LinkedIn</p>
                </div>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/ShanmukPranay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item-link"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: '#1a1a1a', 
                  padding: '20px', 
                  borderRadius: '15px', 
                  border: '1px solid rgba(0, 238, 255, 0.1)',
                  transition: '0.3s',
                  textDecoration: 'none'
                }}
              >
                <i className="fab fa-github contact-icon"></i>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px', transition: '0.3s' }}>GitHub</h3>
                  <p style={{ fontSize: '16px', color: '#fff', transition: '0.3s' }}>github.com/ShanmukPranay</p>
                </div>
              </a>
              
              {/* Location */}
              <div 
                className="contact-item-link"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: '#1a1a1a', 
                  padding: '20px', 
                  borderRadius: '15px', 
                  border: '1px solid rgba(0, 238, 255, 0.1)',
                  transition: '0.3s'
                }}
              >
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <div>
                  <h3 style={{ fontSize: '20px', color: '#0ef', marginBottom: '5px', transition: '0.3s' }}>Location</h3>
                  <p style={{ fontSize: '16px', color: '#fff', transition: '0.3s' }}>Vijayawada, India</p>
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
                  <button type="submit" className="btn" style={{
                    background: '#0ef',
                    color: '#000',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '40px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
          {/* <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="btn-back"
            >
              ← Back to Home
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Contact;