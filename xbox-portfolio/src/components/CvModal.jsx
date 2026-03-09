import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './StandardModal.css';

export default function CvModal({ onClose, cvFile }) {

    // Listen for the Escape key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()} style={{ height: '80vh' }}>

                <h1 className="modal-header-text">Curriculum Vitae</h1>

                {/* We make this box a simple flex container to hold the PDF */}
                <div className="modal-content-box" style={{ padding: '10px', backgroundColor: '#333' }}>

                    {/* The iframe natively renders your PDF inside the modal */}
                    <iframe
                        src={cvFile}
                        title="My CV"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', backgroundColor: 'white' }}
                    />

                </div>
            </div>

            <footer className="modal-footer-controls">
                {/* A hidden anchor tag that handles the actual download when 'A' or clicked */}
                <a href={cvFile} download="My_CV.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="control" style={{ cursor: 'pointer' }}>
                        <span className="btn-a">A</span> Download PDF
                    </div>
                </a>

                <div className="control" onClick={onClose} style={{ cursor: 'pointer' }}>
                    <span className="btn-b">B</span> Back
                </div>
            </footer>
        </div>,
        document.body
    );
}