import React from 'react';
import Tile from './Tile';
import './HomeDashboard.css';

// Simple SVG Icons for our tiles
const PinIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" /></svg>;
const ClockIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>;

export default function Dashboard() {
    return (
        <div className="dashboard-grid">
            {/* Left Items */}
            <Tile className="area-about" label="About Me" subText="Play Profile" bgColor="#0072c6" transparentLabel />
            <Tile className="area-skills" label="My Skills" bgColor="#107C10" icon={PinIcon} transparentLabel />
            <Tile className="area-exp" label="Experience" bgColor="#107C10" icon={ClockIcon} transparentLabel />

            {/* Center Items */}
            <Tile className="area-feature" label="Featured Project" subText="React Web App" bgColor="#4a4a4a" />
            <Tile className="area-proj2" label="Project 2" bgColor="#8e44ad" />
            <Tile className="area-proj3" label="Project 3" bgColor="#d35400" />

            {/* Right Items */}
            <Tile className="area-blog" label="My Blog" bgColor="#5c2d91" />
            <Tile className="area-linkedin" label="LinkedIn" bgColor="#c4302b" />
            <Tile className="area-github" label="GitHub" bgColor="#ffffff"/>
        </div>
    );
}