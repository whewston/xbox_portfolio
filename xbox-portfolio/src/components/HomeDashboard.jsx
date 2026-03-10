import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import StandardModal from './StandardModal';
import CvModal from './CvModal';
import './HomeDashboard.css';

import xboxLogo from '../assets/xbox_logo.png';
import cv from '../assets/portfolio_cv.pdf';
import fifa from '../assets/fifa13_bg.png';

// --- SVGs ---
const PinIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" /></svg>;
const ClockIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>;
const InfoIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg>;
const CvIcon = <svg fill="white" viewBox="0 0 24 24" width="80" height="80"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M8,15H16V17H8V15M8,11H16V13H8V11M8,7H11V9H8V7Z" /></svg>;

const DiskBadge = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5Z" />
    </svg>
);

export default function HomeDashboard() {
    const [activeModal, setActiveModal] = useState(null);
    const closeModal = () => setActiveModal(null);

    // State variables for database content ---
    const [profileData, setProfileData] = useState({});
    const [experienceData, setExperienceData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const [learnMoreData, setLearnMoreData] = useState([]);

    // Fetch data from the .NET API when the dashboard loads ---
    useEffect(() => {
        const fetchAllData = async () => {

            const API_BASE_URL = import.meta.env.VITE_API_URL;
            try {
                // We use Promise.all to fetch everything at the exact same time for speed
                const [profileRes, expRes, skillsRes, learnRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/profile`),
                    fetch(`${API_BASE_URL}/experiences`),
                    fetch(`${API_BASE_URL}/skills`),
                    fetch(`${API_BASE_URL}/learnmore`)
                ]);

                // Convert responses to JSON and update React State
                if (profileRes.ok) setProfileData(await profileRes.json());
                if (expRes.ok) setExperienceData(await expRes.json());
                if (skillsRes.ok) setSkillsData(await skillsRes.json());
                if (learnRes.ok) setLearnMoreData(await learnRes.json());

            } catch (error) {
                console.error("Failed to fetch data from API:", error);
            }
        };

        fetchAllData();
    }, []); // Empty dependency array means this only runs once when the component mounts

    return (
        <>
            {activeModal === 'about' && <StandardModal onClose={closeModal} title="Player Profile" variant="profile" data={profileData} />}
            {activeModal === 'exp' && <StandardModal onClose={closeModal} title="Experience" data={experienceData} />}
            {activeModal === 'skills' && <StandardModal onClose={closeModal} title="My Skills" data={skillsData} />}
            {activeModal === 'learn' && <StandardModal onClose={closeModal} title="Behind the Scenes" data={learnMoreData} />}

            {activeModal === 'cv' && <CvModal onClose={closeModal} cvFile={cv} />}

            <div className="dashboard-grid">

                <Tile
                    className="area-about"
                    label="About Me"
                    subText="Play Profile"
                    transparentLabel
                    badge={DiskBadge}
                    onClick={() => setActiveModal('about')}
                    bgImage={fifa}
                />

                <Tile
                    className="area-skills"
                    label="My Skills"
                    bgColor="#107C10"
                    icon={PinIcon}
                    transparentLabel
                    onClick={() => setActiveModal('skills')}
                />

                <Tile
                    className="area-exp"
                    label="Experience"
                    bgColor="#107C10"
                    icon={ClockIcon}
                    transparentLabel
                    onClick={() => setActiveModal('exp')}
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
                    bgColor="#8e44ad"
                    icon={CvIcon}
                    onClick={() => setActiveModal('cv')}
                />

                <Tile
                    className="area-learnmore"
                    label="Learn More..."
                    bgColor="#d35400"
                    icon={InfoIcon}
                    onClick={() => setActiveModal('learn')}
                />
            </div>
        </>
    );
}