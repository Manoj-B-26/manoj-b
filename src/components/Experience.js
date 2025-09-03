import React, { useEffect, useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const sectionRef = useRef(null);

    const experiences = [
        {
            id: 1,
            title: 'AI Intern',
            company: 'Infosys Springboard',
            period: 'June - July 2025',
            location: 'Remote',
            description: 'Worked on MelanoAI: Intelligent Skin Cancer Screening project.',
            responsibilities: [
                'Enhanced skills in Python and deep learning frameworks like TensorFlow/Keras',
                'Gained expertise in exploratory data analysis (EDA) for medical image datasets.',
                'Worked on training, validating, and optimizing deep learning models to achieve better accuracy.',
                'Collaborated with team to deliver project requirements and deliverables.'
            ],
            technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Model Deployment'],
            logo: require("./images/projects/Infosys_Springboard.png"),
        },
        {
            id: 2,
            title: 'AI&ML Intern',
            company: 'IBM SkillsBuild Platform',
            period: 'October - December 2024',
            location: 'Remote',
            description: 'Built a salary prediction model using Random Forest.',
            responsibilities: [
                'Performed EDA and feature engineering to improve accuracy.',
                'Developed a Streamlit web app for interactive predictions.',
                'Worked on training, validating, and optimizing deep learning models',
                'Tuned model parameters and deployed an end-to-end ML solution.'
            ],
            technologies: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Random Forest'],
            logo: require("./images/projects/IBM_SkillsBuild.png"),
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * 200);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            const cards = sectionRef.current.querySelectorAll('.experience-card');
            cards.forEach(card => observer.observe(card));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Experience</span>
                    <h2>Professional Journey</h2>
                    <p>
                        My internship experiences have provided hands-on exposure to cutting-edge
                        AI and machine learning technologies.
                    </p>
                </div>

                <div ref={sectionRef} className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="experience-card fade-up">
                            <div className="card-header">
                                <div className="company-info">
                                    <div className="company-logo">
                                        {exp.logo ? (
                                            <img src={exp.logo} alt={`${exp.company} logo`} />
                                        ) : (
                                            <div className="logo-placeholder">
                                                <span>{exp.company.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="job-details">
                                        <h3>{exp.title}</h3>
                                        <h4>{exp.company}</h4>
                                        <div className="job-meta">
                                            <span className="period">
                                                <FaCalendarAlt />
                                                {exp.period}
                                            </span>
                                            <span className="location">
                                                <FaMapMarkerAlt />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-content">
                                <p className="description">{exp.description}</p>

                                <div className="responsibilities">
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {exp.responsibilities.map((responsibility, respIndex) => (
                                            <li key={respIndex}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="technologies-used">
                                    <h5>Technologies Used:</h5>
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
