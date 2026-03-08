import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
// We can actually just reuse the exact same CSS file since the layout is identical!
import './ExperienceModal.css';

export default function SkillsModal({ onClose }) {
    const skillsData = [
        {
            id: 1,
            title: "Frontend Development",
            subtitle: "React, JavaScript, HTML/CSS",
            details: "Experienced in building responsive and accessible user interfaces. Skilled in React, TailwindCSS, Bootstrap, and WordPress, with a focus on delivering high accessibility scores."
        },
        {
            id: 2,
            title: "Backend & Databases",
            subtitle: "Java, Python, C#, SQL",
            details: "Proficient in server-side development using Java (Spring Boot), Python (Flask), and C# (.NET). Experienced in relational database management with PostgreSQL, MySQL, and MariaDB."
        },
        {
            id: 3,
            title: "Tools & DevOps",
            subtitle: "Git, Docker, CI/CD",
            details: "Strong understanding of DevOps practices including continuous integration and deployment using Jenkins. Familiar with containerisation (Docker), infrastructure as code (Terraform), Git source control, and Agile methodologies."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Listen for the Escape key to close the modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault(); // Stop the page from scrolling
                // Move down the list, but stop at the bottom
                setActiveIndex((prev) => (prev < skillsData.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                // Move up the list, but stop at the top
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, skillsData.length]); // Add skillsData.length to the dependency array

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>

                <h1 className="modal-header-text">My Skills</h1>

                <div className="modal-content-box">
                    {/* Left Pane: Categories */}
                    <div className="modal-left-pane">
                        {skillsData.map((skill, index) => (
                            <div
                                key={skill.id}
                                className={`list-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="list-title">{skill.title}</span>
                                <span className="list-subtitle">{skill.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Pane: Details */}
                    <div className="modal-right-pane">
                        <div className="detail-header">
                            <h2>{skillsData[activeIndex].title}</h2>
                            <p className="detail-date">{skillsData[activeIndex].subtitle}</p>
                        </div>
                        <p className="detail-body">{skillsData[activeIndex].details}</p>
                    </div>
                </div>
            </div>

            <footer className="modal-footer-controls">
                <div className="control">
                    <span className="btn-a">A</span> Select
                </div>
                <div className="control" onClick={onClose} style={{ cursor: 'pointer' }}>
                    <span className="btn-b">B</span> Back
                </div>
            </footer>
        </div>,
        document.body
    );
}