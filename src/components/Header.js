import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Manoj B</h2>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            {['home', 'about', 'projects', 'experience', 'awards', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="nav-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <div className="social-links">
              <a href="https://linkedin.com/in/manojb26" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Manoj-B-26" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://x.com/manojb_26" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/manojb_26/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>

            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
