import React from 'react';
import Tile from './Tile';
import './AppsDashboard.css';

export default function AppsDashboard() {
    return (
        <div className="apps-grid">
            {/* Tall vertical list tile for installed apps */}
            <Tile className="apps-myapps" label="My Apps" bgColor="#107C10" transparentLabel />

            {/* Massive central feature for a top-tier app like Netflix/YouTube */}
            <Tile className="apps-feature" label="Netflix" subText="Watch TV Shows & Movies" bgColor="#c4302b" />

            {/* Smaller utilities on the top right */}
            <Tile className="apps-search" label="Search Apps" bgColor="#4a4a4a" />
            <Tile className="apps-browse" label="Browse Apps" bgColor="#0072c6" />

            {/* Bottom row of suggested apps */}
            <Tile className="apps-app1" label="YouTube" bgColor="#ffffff" textColor="#000" />
            <Tile className="apps-app2" label="Internet Explorer" bgColor="#0072c6" />
            <Tile className="apps-app3" label="Twitch" bgColor="#5c2d91" />
            <Tile className="apps-app4" label="Hulu" bgColor="#107C10" />
        </div>
    );
}