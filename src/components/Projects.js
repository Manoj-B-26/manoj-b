import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Real-Time Sign Language Translator',
      description: 'MediaPipe + LSTM-based system for real-time sign language recognition, enabling translation of hand signs to text for assistive communication.',
      category: 'ai',
      technologies: ['Python', 'MediaPipe', 'LSTM', 'TensorFlow', 'OpenCV'],
      features: [
        'Frame-by-frame prediction pipeline',
        'Real-time hand sign recognition',
        'Text translation for communication'
      ],
      image: '/assets/Real-Time Sign Language Translator.png',
      github: 'https://github.com/Niveditha1234-bit/Indian-Sign-Language-TRANSLATOR',
      demo: 'https://github.com/Niveditha1234-bit/Indian-Sign-Language-TRANSLATOR',
      featured: false
    },
    {
      id: 2,
      title: 'Next-Gen Attendance System',
      description: 'Web-based attendance management system with QR code scanning and facial recognition for automated identity verification.',
      category: 'web',
      technologies: ['Python', 'OpenCV', 'Flask', 'JavaScript', 'Excel'],
      features: [
        'QR code scanning for quick attendance',
        'Facial recognition verification',
        'Automated Excel sheet logging'
      ],
      image: '/assets/Next-Gen Attendance System.png',
      github: 'https://github.com/Manoj-B-26/NEXT-GEN-ATTENDANCE-SYSTEM-QR-COMPUTER-VISION',
      demo: 'https://github.com/Manoj-B-26/NEXT-GEN-ATTENDANCE-SYSTEM-QR-COMPUTER-VISION',
      featured: false
    },
    {
      id: 3,
      title: 'AAROHANA 2025 – College Fest Website',
      description: 'Responsive, dynamic website for college fest with event schedules, registration forms, and gallery features.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Render'],
      features: [
        'Responsive design for all devices',
        'Event registration system',
        'High availability hosting'
      ],
      image: '/assets/AAROHANA 2025 – College Fest Website.png',
      github: 'https://aarohana-2025.onrender.com/',
      demo: 'https://aarohana-2025.onrender.com/',
      featured: true
    },
    {
      id: 4,
      title: 'MelanoAI: Skin Cancer Screening',
      description: 'Intelligent medical image analysis system for skin cancer detection using deep learning frameworks.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Medical Imaging'],
      features: [
        'Deep learning model training',
        'Medical image dataset analysis',
        'Automated screening pipeline'
      ],
      image: '/assets/MelanoAI Skin Cancer Screening.png',
      github: 'https://github.com/trapti19singhal/AI_Melano_Infosys_Internship_Oct2024/tree/main/Manoj_B',
      demo: 'https://github.com/trapti19singhal/AI_Melano_Infosys_Internship_Oct2024/tree/main/Manoj_B',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Development' }
  ];

  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    setFilteredProjects(filtered);
  }, [filter]);

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

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div ref={sectionRef} className="projects-content fade-up">
          <div className="section-header">
            <span className="section-badge">Portfolio</span>
            <h2>Featured Projects</h2>
            <p>
              A collection of projects showcasing my expertise in AI, machine learning, 
              and web development.
            </p>
          </div>

          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <FaFilter />
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <FaGithub />
                      </a>
                      <a href={project.demo} className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  
                  <p>{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
