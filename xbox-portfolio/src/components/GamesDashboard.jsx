import React from 'react';
import Tile from './Tile';
import './GamesDashboard.css';

export default function GamesDashboard() {
    return (
        <div className="games-grid">
            {/* Massive vertical tile for the 'disc in tray' or last played game */}
            <Tile className="games-main" label="Play Halo 3" subText="Xbox 360 Game" bgColor="#107C10" />

            {/* Wide tile for library */}
            <Tile className="games-mygames" label="My Games" bgColor="#107C10" transparentLabel />

            {/* Standard square tiles for store browsing */}
            <Tile className="games-store" label="Game Store" bgColor="#4a4a4a" />
            <Tile className="games-demos" label="Demos" bgColor="#8e44ad" />

            {/* Wide tile at the bottom */}
            <Tile className="games-sales" label="Sales & Specials" bgColor="#d35400" />
        </div>
    );
}