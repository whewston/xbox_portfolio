import React from 'react';
import Tile from './Tile';
import './HomeDashboard.css';

import xboxLogo from '../assets/xbox_logo.png';
// cv import is here if you need it for an onClick later!
import cv from '../assets/CV.pdf';

const PinIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" /></svg>;
const ClockIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>;

export default function HomeDashboard() {
        return (
            <div className="dashboard-grid">
                    {/* Left Items */}
                    <Tile className="area-about" label="About Me" subText="Play Profile" bgColor="#0072c6" transparentLabel />
                    <Tile className="area-skills" label="My Skills" bgColor="#107C10" icon={PinIcon} transparentLabel />
                    <Tile className="area-exp" label="Experience" bgColor="#107C10" icon={ClockIcon} transparentLabel />

                    {/* Center & Right Items (Expanded) */}
                    <Tile
                        className="area-feature"
                        label="Featured Project"
                        subText="React Web App"
                        bgColor="#f2f2f2"
                        icon={<img src={xboxLogo} alt="Xbox 360 Logo" className="logo-center-feature" />}
                    />

                    <Tile className="area-cv" label="CV" bgColor="#8e44ad" />
                    <Tile className="area-proj3" label="Project 3" bgColor="#d35400" />
            </div>
        );
}