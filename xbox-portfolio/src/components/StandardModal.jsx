import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './StandardModal.css';

export default function StandardModal({
                                          onClose,
                                          title,
                                          data = [],
                                          variant = 'list', // 'list' is the default, 'profile' is for About Me
                                          initialIndex = 0
                                      }) {
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (variant === 'list') {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : prev));
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, data.length, variant]);

    // Render Logic for "About Me" Profile
    const renderProfile = () => (
        <>
            <div className="modal-left-pane" style={{ alignItems: 'center', padding: '30px 20px' }}>
                <div style={{ width: '150px', height: '150px', backgroundColor: '#ddd', border: '4px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    <svg viewBox="0 0 24 24" fill="#999" width="100%" height="100%">
                        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                </div>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.8rem' }}>{data.name || 'Your Name'}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                    <span style={{ backgroundColor: '#107C10', color: 'white', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>G</span>
                    <span style={{ fontSize: '1.2rem', color: '#333', fontWeight: 'bold' }}>{data.gamerscore || '15,420'}</span>
                </div>
                <div style={{ width: '100%', textAlign: 'left', marginTop: '20px', padding: '0 20px' }}>
                    <p style={{ margin: '5px 0', color: '#666' }}><strong>Rep:</strong> ★★★★★</p>
                    <p style={{ margin: '5px 0', color: '#666' }}><strong>Zone:</strong> {data.zone || 'Pro Developer'}</p>
                    <p style={{ margin: '5px 0', color: '#666' }}><strong>Location:</strong> {data.location || 'Earth'}</p>
                </div>
            </div>
            <div className="modal-right-pane">
                <div className="detail-header">
                    <h2>Bio</h2>
                    <p className="detail-date">Joined Xbox Live: {data.joinDate || '2010'}</p>
                </div>
                {/* Allows us to pass HTML strings for line breaks */}
                <p className="detail-body" dangerouslySetInnerHTML={{ __html: data.bio }}></p>
            </div>
        </>
    );

    // Render Logic for Lists (Skills, Experience, Interests)
    const renderList = () => {
        if (!data || data.length === 0) return null;
        const activeItem = data[activeIndex];

        return (
            <>
                <div className="modal-left-pane">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className={`list-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className="list-title">{item.title}</span>
                            {/* Gracefully handles both 'subtitle' and 'company' property names */}
                            <span className="list-subtitle">{item.subtitle || item.company}</span>
                        </div>
                    ))}
                </div>
                <div className="modal-right-pane">
                    <div className="detail-header">
                        <h2>{activeItem.title}</h2>
                        <p className="detail-date">{activeItem.date || activeItem.subtitle || activeItem.company}</p>
                    </div>
                    <p className="detail-body">{activeItem.details}</p>
                </div>
            </>
        );
    };

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
                <h1 className="modal-header-text">{title}</h1>
                <div className="modal-content-box">
                    {variant === 'profile' ? renderProfile() : renderList()}
                </div>
            </div>

            <footer className="modal-footer-controls">
                {variant === 'list' && (
                    <div className="control">
                        <span className="btn-a">A</span> Select
                    </div>
                )}
                <div className="control" onClick={onClose} style={{ cursor: 'pointer' }}>
                    <span className="btn-b">B</span> Back
                </div>
            </footer>
        </div>,
        document.body
    );
}