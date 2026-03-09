import React from 'react';
import Tile from './Tile';
import './SettingsDashboard.css';

import minecraftAd from '../assets/mc_3.png';

// Classic System Icons
const GearIcon = <svg fill="white" viewBox="0 0 24 24" width="64" height="64"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.43,2.42C14.39,2.18 14.18,2 13.93,2H9.93C9.68,2 9.47,2.18 9.43,2.42L8.93,5.07C8.32,5.32 7.76,5.65 7.24,6.05L4.75,5.05C4.53,4.96 4.26,5.05 4.14,5.27L2.14,8.73C2.02,8.95 2.07,9.22 2.26,9.37L4.37,11.02C4.33,11.34 4.3,11.66 4.3,12C4.3,12.34 4.33,12.66 4.37,12.98L2.26,14.63C2.07,14.78 2.02,15.05 2.14,15.27L4.14,18.73C4.26,18.95 4.53,19.04 4.75,18.95L7.24,17.95C7.76,18.35 8.32,18.68 8.93,18.93L9.43,21.58C9.47,21.82 9.68,22 9.93,22H13.93C14.18,22 14.39,21.82 14.43,21.58L14.93,18.93C15.54,18.68 16.1,18.35 16.62,17.95L19.11,18.95C19.33,19.04 19.6,18.95 19.72,18.73L21.72,15.27C21.84,15.05 21.79,14.78 21.6,14.63L19.43,12.98Z" /></svg>;
const StorageIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H13V18H20M15,10H18V12H15V10Z" /></svg>;
const PowerIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M11,3V13H13V3H11Z" /></svg>;
// NEW: Slick Padlock Icon for Privacy
const PrivacyIcon = <svg fill="white" viewBox="0 0 24 24" width="60" height="60"><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>;

export default function SettingsDashboard() {
        return (
            <div className="settings-grid">

                    {/* The Real UI Element: System / Theme Settings (Massive 2x2) */}
                    <Tile
                        className="set-system"
                        label="Website Settings"
                        subText="Console & UI Preferences"
                        bgColor="#4a4a4a"
                        icon={GearIcon}
                        
                    />

                    {/* The Advertisement (NOW A MASSIVE 2x2!) */}
                    <Tile
                        className="set-ad"
                        label="Minecraft: Xbox 360 Edition"
                        subText="Sponsored"
                        bgImage={minecraftAd}
                    />

                    {/* Changelog (1x1) */}
                    <Tile
                        className="set-changelog"
                        label="Changelog"
                        bgColor="#8e44ad"
                        icon={StorageIcon}
                        transparentLabel
                    />

                    {/* Fake Utility: Privacy (1x1) */}
                    <Tile
                        className="set-privacy"
                        label="Privacy"
                        bgColor="#107C10"
                        icon={PrivacyIcon}
                        transparentLabel
                    />

                    {/* Easter Egg: Turn Off Console (Wide 2x1) */}
                    <Tile
                        className="set-power"
                        label="Turn Off Console"
                        bgColor="#c4302b"
                        icon={PowerIcon}
                        transparentLabel
                    />

            </div>
        );
}