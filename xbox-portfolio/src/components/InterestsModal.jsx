import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ExperienceModal.css'; // Reusing your perfectly centered split-pane layout!

export default function InterestsModal({ onClose, initialIndex = 0 }) {
    const interestsData = [
        {
            id: 1,
            title: "Touch Rugby",
            subtitle: "Cardiff Uni & Wales Touch Association",
            details: "Second Team Captain for Cardiff University, where I coach 25+ players and organize weekly training sessions[cite: 35, 36]. I also coach the Girls 15s team in East Wales for national competitions, training 16 athletes [cite: 37], and serve as a qualified International referee, officiating at the Touch Euros[cite: 38]."
        },
        {
            id: 2,
            title: "Air Cadets",
            subtitle: "KSW CCF",
            details: "Served for 5 years and was promoted to Cadet Flight Sergeant[cite: 42, 43]. During my service, I led training for 15+ junior cadets in the Part II syllabus and participated in 5+ flight and gliding field days[cite: 44]."
        },
        {
            id: 3,
            title: "Student Mentoring",
            subtitle: "Cardiff University",
            details: "Started as a mentor for 8 first-year students, supporting their academic and social transition[cite: 40]. Promoted to Senior Student Mentor, where I oversee 6 new mentors and coordinate structured development sessions[cite: 39, 41]."
        },
        {
            id: 4,
            title: "Padel",
            subtitle: "Recreational & Competitive",
            details: "Active player in the local Padel community. Enjoy the strategic, fast-paced nature of the game and regularly participate in matches to stay sharp and maintain fitness."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(initialIndex);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((prev) => (prev < interestsData.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, interestsData.length]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
                <h1 className="modal-header-text">My Interests</h1>
                <div className="modal-content-box">

                    <div className="modal-left-pane">
                        {interestsData.map((interest, index) => (
                            <div
                                key={interest.id}
                                className={`list-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className="list-title">{interest.title}</span>
                                <span className="list-subtitle">{interest.subtitle}</span>
                            </div>
                        ))}
                    </div>

                    <div className="modal-right-pane">
                        <div className="detail-header">
                            <h2>{interestsData[activeIndex].title}</h2>
                            <p className="detail-date">{interestsData[activeIndex].subtitle}</p>
                        </div>
                        <p className="detail-body">{interestsData[activeIndex].details}</p>
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