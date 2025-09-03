import React, { useEffect, useRef } from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    });

    const initParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 116, 139, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particles-canvas" />
      <div className="hero-gradient" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>👋 Hello, I'm</span>
            </div>

            <h1 className="hero-title">
              <span className="name-highlight">Manoj B</span>
              <br />
              AI & Data Science
              <br />
              <span className="gradient-text">Undergraduate</span>
            </h1>

            <p className="hero-description">
              Passionate about artificial intelligence and data science, with expertise in
              machine learning, deep learning, and web development. I build innovative
              solutions that solve real-world problems and create meaningful impact.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">8.7</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch <FaArrowRight />
              </button>
              <a
                href="/Manoj B.pdf"
                download="Manoj-B-Resume.pdf"
                className="btn btn-secondary"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img 
                  src={require("./images/manojb.jpeg")} 
                  alt="Manoj B Portrait" 
                  loading="eager"
                  fetchpriority="high"
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                <div className="floating-card tech-card">
                  <span>Python</span>
                </div>
                <div className="floating-card tech-card">
                  <span>TensorFlow</span>
                </div>
                <div className="floating-card tech-card">
                  <span>OpenCV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
