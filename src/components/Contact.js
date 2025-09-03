import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
    if (!subject.trim()) return 'Subject is required';
    if (!message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'manojb2654@gmail.com',
      link: 'mailto:manojb2654@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 6361942749',
      link: 'tel:+916361942749'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manojb26',
      link: 'https://linkedin.com/in/manojb26'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/Manoj-B-26',
      link: 'https://github.com/Manoj-B-26'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/manojb26', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/Manoj-B-26', label: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://x.com/manojb_26', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/manojb_26/', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div ref={sectionRef} className="contact-content fade-up">
          <div className="section-header">
            <span className="section-badge">Get In Touch</span>
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in new opportunities, collaborations, and 
              interesting projects. Let's connect!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="info-card"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h3>Follow Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Your Email</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Subject</label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input"
                ></textarea>
                <label className="form-label">Your Message</label>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
