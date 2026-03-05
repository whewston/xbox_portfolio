import React from 'react';
import Tile from './Tile';
import './TvMoviesDashboard.css';

export default function TvMoviesDashboard() {
    return (
        <div className="tv-grid">
            {/* Massive widescreen feature spanning the entire top area */}
            <Tile className="tv-feature" label="Featured Movie" subText="Rent or Buy Now" bgColor="#c4302b" />

            {/* Standard bottom row for apps and categories */}
            <Tile className="tv-apps" label="My Video Apps" bgColor="#0072c6" transparentLabel />
            <Tile className="tv-movies" label="Movies" bgColor="#5c2d91" />
            <Tile className="tv-shows" label="TV Shows" bgColor="#107C10" />
            <Tile className="tv-live" label="Live TV" bgColor="#4a4a4a" />
        </div>
    );
}