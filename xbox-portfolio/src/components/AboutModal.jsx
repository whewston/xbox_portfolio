import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ExperienceModal.css'; // Reusing your layout styles!

export default function AboutModal({ onClose }) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>

                <h1 className="modal-header-text">Player Profile</h1>

                <div className="modal-content-box">

                    {/* Left Pane: The Avatar and "Gamer" Stats */}
                    <div className="modal-left-pane" style={{ alignItems: 'center', padding: '30px 20px' }}>

                        {/* Fake Avatar Square */}
                        <div style={{ width: '150px', height: '150px', backgroundColor: '#ddd', border: '4px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                            {/* You can replace this SVG with an <img> of yourself later! */}
                            <svg viewBox="0 0 24 24" fill="#999" width="100%" height="100%">
                                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                            </svg>
                        </div>

                        <h2 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>Your Name</h2>

                        {/* Gamerscore / Stats */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                            <span style={{ backgroundColor: '#107C10', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>G</span>
                            <span style={{ fontSize: '1.2rem', color: '#333', fontWeight: 'bold' }}>15,420</span>
                        </div>

                        <div style={{ width: '100%', textAlign: 'left', marginTop: '20px', padding: '0 20px' }}>
                            <p style={{ margin: '5px 0', color: '#666' }}><strong>Rep:</strong> ★★★★★</p>
                            <p style={{ margin: '5px 0', color: '#666' }}><strong>Zone:</strong> Pro Developer</p>
                            <p style={{ margin: '5px 0', color: '#666' }}><strong>Location:</strong> Earth</p>
                        </div>
                    </div>

                    {/* Right Pane: The Bio */}
                    <div className="modal-right-pane">
                        <div className="detail-header">
                            <h2>Bio</h2>
                            <p className="detail-date">Joined Xbox Live: 2010</p>
                        </div>
                        <p className="detail-body">
                            Hey, I'm a passionate Software Engineer who loves building clean, interactive user interfaces.
                            <br/><br/>
                            When I'm not writing React code or hunting down CSS bugs, you can usually find me exploring new tech stacks, designing game UI clones, or trying to beat my high scores.
                            <br/><br/>
                            My primary weapon of choice is JavaScript, but I'm always leveling up my skills in the backend and cloud infrastructure.
                        </p>
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