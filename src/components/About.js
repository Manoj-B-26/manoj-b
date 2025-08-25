import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: 'Programming', items: ['Python', 'C'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'React.js', 'Flask', 'Streamlit'] },
    { category: 'ML/AI', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'MediaPipe'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Data Visualization', 'EDA'] },
    { category: 'Databases', items: ['MySQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Jupyter', 'VS Code'] }
  ];

  const languages = ['English', 'Kannada', 'Hindi', 'Tamil', 'Telugu'];

  return (
    <section id="about" className="about">
      <div className="workspace-bg" />
      
      <div className="container">
        <div ref={sectionRef} className="about-content fade-up">
          <div className="section-header">
            <span className="section-badge">About Me</span>
            <h2>Passionate AI & Data Science Student</h2>
            <p>
              Currently pursuing BE in Artificial Intelligence and Data Science at 
              K. S. School Of Engineering and Management with a CGPA of 8.7.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <div className="text-content">
                <p>
                  I'm a dedicated AI and Data Science undergraduate with hands-on experience 
                  in machine learning, deep learning, and web development. Through various 
                  internships and projects, I've developed expertise in building intelligent 
                  systems that solve real-world problems.
                </p>
                
                <p>
                  My journey includes working on cutting-edge projects like MelanoAI for 
                  intelligent skin cancer screening, real-time sign language translation 
                  systems, and advanced attendance management solutions using computer vision.
                </p>

                <div className="leadership-roles">
                  <h4>Leadership & Activities</h4>
                  <ul>
                    <li><strong>Chair</strong> - IEEE Communications Society</li>
                    <li><strong>President</strong> - Department Technical Club</li>
                    <li><strong>Secretary</strong> - Rotaract Club Of KSSEM</li>
                  </ul>
                </div>

                <div className="languages-section">
                  <h4>Languages</h4>
                  <div className="language-tags">
                    {languages.map((lang, index) => (
                      <span key={index} className="language-tag">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div ref={skillsRef} className="skills-section fade-up">
              <h3>Technical Expertise</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h4>{skillGroup.category}</h4>
                    <div className="skill-items">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
