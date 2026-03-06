import React from 'react';
import './Tile.css';

export default function Tile({
                                 className = '',
                                 label,
                                 subText,
                                 bgColor,
                                 bgImage,
                                 textColor = 'white',
                                 icon,
                                 badge,
                                 transparentLabel = false,
                                 onClick
                             }) {
    const tileStyle = {
        backgroundColor: bgColor || '#333',
        backgroundImage: bgImage
            ? `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${bgImage})`
            : 'none',
        color: textColor,
    };

    // This allows the "Enter" key to act exactly like a mouse click!
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`tile ${className}`}
            style={tileStyle}
            onClick={onClick}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {/* 2. ADD THE BADGE CONTAINER HERE */}
            {badge && <div className="tile-badge-top-right">{badge}</div>}

            {icon && <div className="tile-icon-center">{icon}</div>}

            <div className={`tile-label-container ${transparentLabel ? 'transparent-bg' : ''}`}>
                <span className="tile-label">{label}</span>
                {subText && <span className="tile-subtext">{subText}</span>}
            </div>
        </div>
    );
}