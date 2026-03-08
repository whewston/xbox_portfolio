import React, { useState } from 'react';
import Tile from './Tile';
import InterestsModal from './InterestsModal';
import './InterestsDashboard.css';

import halo3 from '../assets/halo3_a.jpeg';

const RugbyIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C14.81,4 17.26,5.43 18.67,7.63C16.89,8.5 14.56,9 12,9C9.44,9 7.11,8.5 5.33,7.63C6.74,5.43 9.19,4 12,4M5.33,16.37C7.11,15.5 9.44,15 12,15C14.56,15 16.89,15.5 18.67,16.37C17.26,18.57 14.81,20 12,20C9.19,20 6.74,18.57 5.33,16.37M4,12C4,11.23 4.1,10.47 4.28,9.75C6.54,10.68 9.17,11.2 12,11.2C14.83,11.2 17.46,10.68 19.72,9.75C19.9,10.47 20,11.23 20,12C20,12.77 19.9,13.53 19.72,14.25C17.46,13.32 14.83,12.8 12,12.8C9.17,12.8 6.54,13.32 4.28,14.25C4.1,13.53 4,12.77 4,12Z" /></svg>;
const PlaneIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" /></svg>;
const MentorIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" /></svg>;
const TennisIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M21.5,2.5L20.06,3.94L20.07,4C20.4,5.83 19.34,7.66 17.58,8.27L12.56,10L12.55,10L13.91,11.36L20.27,5H20.28L21.5,3.78L22.91,5.19L21.5,6.61V6.62L15.14,12.97L16.5,14.34L16.5,14.33L18.26,9.31C18.87,7.55 20.7,6.5 22.53,6.82L22.54,6.83L23.97,5.4L21.5,2.5M11.5,11L8.83,13.67L12.36,17.2L15.03,14.53L11.5,11M7.42,15.08L2.47,20.03L4.59,22.15L9.54,17.2L7.42,15.08Z" /></svg>;

export default function InterestsDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to track WHICH tile was clicked so the modal opens to the right tab
    const [modalIndex, setModalIndex] = useState(0);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    return (
        <>
            {isModalOpen && <InterestsModal onClose={() => setIsModalOpen(false)} initialIndex={modalIndex} />}

            <div className="interests-grid">

                {/* Touch Rugby - Massive 2x2 Feature */}
                <Tile
                    className="int-rugby"
                    label="Touch Rugby"
                    subText="Cardiff Uni & Wales Touch"
                    bgColor="#107C10"
                    icon={RugbyIcon}
                    onClick={() => openModal(0)}
                />

                {/* Air Cadets - Tall 1x2 Vertical */}
                <Tile
                    className="int-cadets"
                    label="Air Cadets"
                    bgColor="#0072c6"
                    icon={PlaneIcon}
                    onClick={() => openModal(1)}
                />

                {/* Padel - Tall 1x2 Vertical */}
                <Tile
                    className="int-padel"
                    label="Padel"
                    bgColor="#c4302b"
                    icon={TennisIcon}
                    onClick={() => openModal(3)}
                />

                {/* Halo 3 - Classic 1x1 Corner Tile */}
                <Tile
                    className="int-halo"
                    label="Halo 3"
                    subText="Sponsored"
                    bgImage={halo3}
                />

                {/* Mentoring - Massive 3x1 Wide Bar Across the Bottom */}
                <Tile
                    className="int-mentor"
                    label="Student Mentoring"
                    subText="Supporting transition & development"
                    bgColor="#5c2d91"
                    icon={MentorIcon}
                    onClick={() => openModal(2)}
                />

            </div>
        </>
    );
}