import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // <-- 1. IMPORT THIS
import './ExperienceModal.css';

export default function ExperienceModal({ onClose }) {
    const experiences = [
        {
            id: 1,
            title: "Client Projects & BSc Software Engineering",
            company: "Cardiff University",
            date: "2023 - 2026",
            details: "Studying Applied Software Engineering. Built an AI triage system for Signum Health (.NET, React, Python), a patient tracking system for the Welsh Blood Service (SpringBoot, Thymeleaf), and an accessible game discovery platform."
        },
        {
            id: 2,
            title: "Freelance Web Developer",
            company: "Self-Employed",
            date: "Ongoing",
            details: "Designed and deployed a personal portfolio using Spring Boot, CI/CD, and Docker. Created a house renting site handling 100+ monthly visitors, and developed a custom WordPress site for a local business."
        },
        {
            id: 3,
            title: "CyberFirst Attendee",
            company: "CyberFirst",
            date: "August 2022",
            details: "Attended the CyberFirst program in Belfast, gaining valuable insights into the cybersecurity industry, threat landscapes, and defensive strategies."
        },
        {
            id: 4,
            title: "Warehouse Assistant",
            company: "Bumble Hole Foods",
            date: "Summer 2025",
            details: "Managed booking and dispatch for 100+ weekly deliveries. Optimised warehouse layout to reduce picking time by 15% and maintained inventory organisation across 300+ SKUs."
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
                setActiveIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                // Move up the list, but stop at the top
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, experiences.length]); // Add experiences.length to the dependency array

    // 2. WRAP THE RETURN STATEMENT IN createPortal
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>

            {/* e.stopPropagation() stops the click from passing through the white box to the background */}
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>

                <h1 className="modal-header-text">Experience</h1>

                <div className="modal-content-box">
                    <div className="modal-left-pane">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`list-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="list-title">{exp.title}</span>
                                <span className="list-subtitle">{exp.company}</span>
                            </div>
                        ))}
                    </div>

                    <div className="modal-right-pane">
                        <div className="detail-header">
                            <h2>{experiences[activeIndex].title}</h2>
                            <p className="detail-date">{experiences[activeIndex].date}</p>
                        </div>
                        <p className="detail-body">{experiences[activeIndex].details}</p>
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
        document.body // <-- 3. TELL IT TO RENDER IN THE BODY
    );
}