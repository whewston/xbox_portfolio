import React, { useState } from 'react';
import Tile from './Tile';
import StandardModal from './StandardModal';
import CvModal from './CvModal';
import './HomeDashboard.css';

import xboxLogo from '../assets/xbox_logo.png';
import cv from '../assets/CV.pdf';
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

// --- DATA BLOCKS ---
const profileData = {
    name: "William Hewston",
    gamerscore: "15,420",
    zone: "Software Development",
    location: "UK",
    joinDate: "2010",
    bio: "Hey, I'm a passionate Software Engineer who loves building clean, interactive user interfaces.<br/><br/>When I'm not writing React code or hunting down CSS bugs, you can usually find me exploring new tech stacks, designing game UI clones, or trying to beat my high scores.<br/><br/>My primary weapon of choice is JavaScript, but I'm always leveling up my skills in the backend and cloud infrastructure."
};

const experienceData = [
    { id: 1, title: "Client Projects & BSc Software Engineering", company: "Cardiff University", date: "2023 - 2026", details: "Studying Applied Software Engineering. Built an AI triage system for Signum Health (.NET, React, Python), a patient tracking system for the Welsh Blood Service (SpringBoot, Thymeleaf), and an accessible game discovery platform." },
    { id: 2, title: "Freelance Web Developer", company: "Self-Employed", date: "Ongoing", details: "Designed and deployed a personal portfolio using Spring Boot, CI/CD, and Docker. Created a house renting site handling 100+ monthly visitors, and developed a custom WordPress site for a local business." },
    { id: 3, title: "CyberFirst Attendee", company: "CyberFirst", date: "August 2022", details: "Attended the CyberFirst program in Belfast, gaining valuable insights into the cybersecurity industry, threat landscapes, and defensive strategies." },
    { id: 4, title: "Warehouse Assistant", company: "Bumble Hole Foods", date: "Summer 2025", details: "Managed booking and dispatch for 100+ weekly deliveries. Optimised warehouse layout to reduce picking time by 15% and maintained inventory organisation across 300+ SKUs." }
];

const skillsData = [
    { id: 1, title: "Frontend Development", subtitle: "React, JavaScript, HTML/CSS", details: "Experienced in building responsive and accessible user interfaces. Skilled in React, TailwindCSS, Bootstrap, and WordPress, with a focus on delivering high accessibility scores." },
    { id: 2, title: "Backend & Databases", subtitle: "Java, Python, C#, SQL", details: "Proficient in server-side development using Java (Spring Boot), Python (Flask), and C# (.NET). Experienced in relational database management with PostgreSQL, MySQL, and MariaDB." },
    { id: 3, title: "Tools & DevOps", subtitle: "Git, Docker, CI/CD", details: "Strong understanding of DevOps practices including continuous integration and deployment using Jenkins. Familiar with containerisation (Docker), infrastructure as code (Terraform), Git source control, and Agile methodologies." }
];

// NEW DATA BLOCK: Learn More
const learnMoreData = [
    { id: 1, title: "Project Desire", subtitle: "The Inspiration", details: "I grew up playing the Xbox 360, and its 'Metro' UI remains one of the most iconic, snappy, and satisfying digital interfaces ever designed. I built this portfolio as a tribute to that era, proving that highly interactive, controller-style navigation can still feel incredible on the modern web." },
    { id: 2, title: "Frontend Architecture", subtitle: "React & CSS Grid", details: "This entire dashboard is built in React. The layout relies heavily on CSS Grid for the authentic, tightly-packed Metro tile system. I utilized React Portals to ensure the pop-up modals break out of their containment blocks and render perfectly centered over the sliding canvas." },
    { id: 3, title: "Backend Infrastructure", subtitle: "Coming Soon...", details: "While the current version is primarily static, the architecture is designed to support a robust backend. The 'StandardModal' component is specifically structured to easily accept JSON payloads from a REST API or database, making future dynamic updates seamless." },
    { id: 4, title: "Keyboard Controls", subtitle: "Spatial Navigation", details: "To make it feel like a real console, I implemented a custom spatial navigation system. The app calculates physical distances between DOM elements so you can use your D-Pad (Arrow Keys) to naturally glide between tiles, Q/E to change tabs, and Enter to select—just like having a controller in your hands." },
    { id: 5, title: "Settings Page", subtitle: "Future Features", details: "The Settings tab is currently a fun visual easter egg, but future updates will wire these tiles to global React Contexts. This will allow users to toggle dark modes, change accent colors, and manage the website's background audio just like a real Xbox system menu." }
];

export default function HomeDashboard() {
    const [activeModal, setActiveModal] = useState(null);
    const closeModal = () => setActiveModal(null);

    return (
        <>
            {/* 1. Add 'learn' to our StandardModal checks */}
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

                {/* 2. Add the onClick handler to the Learn More tile! */}
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