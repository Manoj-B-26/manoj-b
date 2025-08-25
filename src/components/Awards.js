import React, { useEffect, useRef, useState } from 'react';
import { FaAward, FaCertificate, FaTrophy, FaMedal } from 'react-icons/fa';

const Awards = () => {
  const sectionRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);

  const achievements = [
    {
      id: 1,
      type: 'certification',
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: '2024',
      icon: <FaCertificate />,
      color: '#3b82f6'
    },
    {
      id: 2,
      type: 'certification',
      title: 'Computer Vision',
      issuer: 'NPTEL',
      date: '2024',
      icon: <FaCertificate />,
      color: '#10b981'
    },
    {
      id: 3,
      type: 'certification',
      title: 'AI Primer Certification',
      issuer: 'Infosys Springboard',
      date: '2024',
      icon: <FaAward />,
      color: '#f59e0b'
    },
    {
      id: 4,
      type: 'certification',
      title: 'Python Foundation Certification',
      issuer: 'Infosys Springboard',
      date: '2024',
      icon: <FaCertificate />,
      color: '#ef4444'
    },
    {
      id: 5,
      type: 'certification',
      title: 'Python Data Analytics',
      issuer: 'Mevi Technologies',
      date: '2024',
      icon: <FaCertificate />,
      color: '#8b5cf6'
    },
    {
      id: 6,
      type: 'certification',
      title: 'Applied Artificial Intelligence',
      issuer: 'TechSaksham',
      date: '2024',
      icon: <FaAward />,
      color: '#06b6d4'
    },
    {
      id: 7,
      type: 'certification',
      title: 'Human Computer Interaction',
      issuer: 'NPTEL',
      date: '2024',
      icon: <FaCertificate />,
      color: '#84cc16'
    }
  ];

  const stats = [
    { label: 'Certifications', value: 7, suffix: '+' },
    { label: 'Projects Completed', value: 5, suffix: '+' },
    { label: 'CGPA', value: 8.7, suffix: '' },
    { label: 'Leadership Roles', value: 3, suffix: '' }
  ];

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(progress * end);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [countersStarted, end, duration]);

    return (
      <span className="counter-value">
        {Math.floor(count * 10) / 10}{suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target.classList.contains('stats-grid')) {
              setCountersStarted(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-up, .stats-grid');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" className="awards">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Recognition</span>
          <h2>Awards & Achievements</h2>
          <p>
            Recognition of my dedication to learning and excellence in 
            artificial intelligence and data science.
          </p>
        </div>

        <div ref={sectionRef} className="awards-content">
          <div className="stats-grid fade-up">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <FaTrophy />
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-timeline fade-up">
            <h3>Certifications & Awards</h3>
            <div className="timeline-container">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className="achievement-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="achievement-icon"
                    style={{ backgroundColor: achievement.color }}
                  >
                    {achievement.icon}
                  </div>
                  
                  <div className="achievement-content">
                    <div className="achievement-header">
                      <h4>{achievement.title}</h4>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                    <p className="achievement-issuer">
                      Issued by <strong>{achievement.issuer}</strong>
                    </p>
                  </div>

                  <div className="achievement-badge">
                    <FaMedal />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
