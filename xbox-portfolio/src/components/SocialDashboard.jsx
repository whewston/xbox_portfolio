import React from 'react';
import Tile from './Tile';
import './HomeDashboard.css'; // We can reuse the exact same grid CSS!

export default function SocialDashboard() {
    return (
        <div className="dashboard-grid">
            {/* Just a few tiles to prove the slide works */}
            <Tile className="area-feature" label="Friends Online" bgColor="#107C10" transparentLabel />
            <Tile className="area-proj2" label="Messages" bgColor="#0072c6" />
            <Tile className="area-proj3" label="Party" bgColor="#8e44ad" />
            <Tile className="area-about" label="Beacons" bgColor="#d35400" />
            <Tile className="area-skills" label="Activity" bgColor="#c4302b" />
        </div>
    );
}