import React from 'react';
import Tile from './Tile';
import './MusicDashboard.css';

export default function MusicDashboard() {
    return (
        <div className="music-grid">
            {/* Big 2x2 square for the featured artist or "Now Playing" */}
            <Tile className="music-hero" label="Xbox Music Pass" subText="Stream millions of songs" bgColor="#107C10" />

            {/* Wide stacked tiles for library and store */}
            <Tile className="music-library" label="My Music" bgColor="#0072c6" transparentLabel />
            <Tile className="music-store" label="Music Store" bgColor="#4a4a4a" />

            {/* Bottom row for specific music apps/shortcuts */}
            <Tile className="music-app1" label="iHeartRadio" bgColor="#c4302b" />
            <Tile className="music-app2" label="Last.fm" bgColor="#d35400" />
            <Tile className="music-app3" label="Podcasts" bgColor="#8e44ad" />
            <Tile className="music-app4" label="Search Music" bgColor="#5c2d91" />
        </div>
    );
}