import React, { useState } from 'react';
import Tile from './Tile';
import ExperienceModal from './ExperienceModal';
import SkillsModal from './SkillsModal';
import CvModal from './CvModal';
import AboutModal from './AboutModal';
import './HomeDashboard.css';

import xboxLogo from '../assets/xbox_logo.png';
import cv from '../assets/CV.pdf';
import cvBg from '../assets/cv_bg2.png';
import fifa from '../assets/fifa13_bg.png';

const PinIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" /></svg>;
const ClockIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>;
    
const DiskBadge = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5Z" />
    </svg>
);

export default function HomeDashboard() {
    const [isExpOpen, setIsExpOpen] = useState(false);
    const [isSkillsOpen, setIsSkillsOpen] = useState(false);
    const [isCvOpen, setIsCvOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false); // <-- 3. ADD ABOUT STATE

    return (
        <>
            {/* Render all the modals! */}
            {isExpOpen && <ExperienceModal onClose={() => setIsExpOpen(false)} />}
            {isSkillsOpen && <SkillsModal onClose={() => setIsSkillsOpen(false)} />}
            {isCvOpen && <CvModal onClose={() => setIsCvOpen(false)} cvFile={cv} />}
            {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}

            <div className="dashboard-grid">

                {/* 5. ADD THE BADGE AND onClick TO THE ABOUT TILE */}
                <Tile
                    className="area-about"
                    label="About Me"
                    subText="Play Profile"
                    transparentLabel
                    badge={DiskBadge}
                    onClick={() => setIsAboutOpen(true)}
                    bgImage={fifa} /* <-- USE bgImage INSTEAD OF ICON/BGGCOLOR */
                />

                <Tile
                    className="area-skills"
                    label="My Skills"
                    bgColor="#107C10"
                    icon={PinIcon}
                    transparentLabel
                    onClick={() => setIsSkillsOpen(true)}
                />

                <Tile
                    className="area-exp"
                    label="Experience"
                    bgColor="#107C10"
                    icon={ClockIcon}
                    transparentLabel
                    onClick={() => setIsExpOpen(true)}
                />

                <Tile
                    className="area-feature"
                    label="Featured Project"
                    subText="React Web App"
                    bgColor="#f2f2f2"
                    icon={<img src={xboxLogo} alt="Xbox 360 Logo" className="logo-center-feature" />}
                />

                <Tile
                    className="area-cv"
                    label="CV"
                    bgImage={cvBg}
                    onClick={() => setIsCvOpen(true)}
                />

                <Tile className="area-proj3" label="Project 3" bgColor="#d35400" />
            </div>
        </>
    );
}