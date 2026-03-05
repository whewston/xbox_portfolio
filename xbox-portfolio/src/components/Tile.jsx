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
                                 transparentLabel = false // NEW: defaults to false so the dark bar stays unless we say otherwise
                             }) {
    const tileStyle = {
        backgroundColor: bgColor || '#333',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        color: textColor,
    };

    return (
        <div className={`tile ${className}`} style={tileStyle}>
            {icon && <div className="tile-icon-center">{icon}</div>}

            {/* NEW: We add 'transparent-bg' class if the prop is passed */}
            <div className={`tile-label-container ${transparentLabel ? 'transparent-bg' : ''}`}>
                <span className="tile-label">{label}</span>
                {subText && <span className="tile-subtext">{subText}</span>}
            </div>
        </div>
    );
}