import { useState, useEffect } from 'react'; // <-- ADD useEffect HERE
import HomeDashboard from './components/HomeDashboard';
import SocialDashboard from './components/SocialDashboard';
import InterestsDashboard from './components/InterestsDashboard';
import SettingsDashboard from './components/SettingsDashboard';
import './App.css';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    // Your simplified tabs!
    const tabs = ['home', 'social', 'interests', 'settings'];
    const activeIndex = tabs.indexOf(activeTab);

    // --- THE KEYBOARD CONTROLLER LOGIC ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            // 1. LB / RB NAVIGATION (Q and E keys)
            if (e.key === 'q' || e.key === 'Q') {
                if (activeIndex > 0) setActiveTab(tabs[activeIndex - 1]);
            }
            if (e.key === 'e' || e.key === 'E') {
                if (activeIndex < tabs.length - 1) setActiveTab(tabs[activeIndex + 1]);
            }

            // 2. D-PAD NAVIGATION (Arrow Keys)
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault(); // Stops the browser from scrolling the page

                // Find all focusable tiles currently rendered
                const tiles = Array.from(document.querySelectorAll('.tile'));
                const currentFocus = document.activeElement;

                // If nothing is focused yet, focus the first tile on the screen
                if (!tiles.includes(currentFocus)) {
                    if (tiles.length > 0) tiles[0].focus();
                    return;
                }

                // Get physical position of the currently focused tile
                const currentRect = currentFocus.getBoundingClientRect();
                let closestTile = null;
                let minDistance = Infinity;

                tiles.forEach(tile => {
                    if (tile === currentFocus) return;
                    const rect = tile.getBoundingClientRect();

                    // Basic Spatial Math to find the nearest tile in the direction pressed
                    let isCandidate = false;
                    let distance = 0;

                    if (e.key === 'ArrowRight' && rect.left >= currentRect.right - 10) {
                        isCandidate = true; distance = Math.hypot(rect.left - currentRect.right, rect.top - currentRect.top);
                    } else if (e.key === 'ArrowLeft' && rect.right <= currentRect.left + 10) {
                        isCandidate = true; distance = Math.hypot(currentRect.left - rect.right, rect.top - currentRect.top);
                    } else if (e.key === 'ArrowDown' && rect.top >= currentRect.bottom - 10) {
                        isCandidate = true; distance = Math.hypot(rect.left - currentRect.left, rect.top - currentRect.bottom);
                    } else if (e.key === 'ArrowUp' && rect.bottom <= currentRect.top + 10) {
                        isCandidate = true; distance = Math.hypot(rect.left - currentRect.left, currentRect.top - rect.bottom);
                    }

                    if (isCandidate && distance < minDistance) {
                        minDistance = distance;
                        closestTile = tile;
                    }
                });

                if (closestTile) {
                    closestTile.focus();

                    // --- NEW LOGIC: DETECT PAGE TURNS ---
                    // Traverse up from the focused tile to find its parent slide
                    const parentSlide = closestTile.closest('.dashboard-slide');
                    if (parentSlide) {
                        const targetTab = parentSlide.getAttribute('data-tab');

                        // If the tile we just focused is on a new page, slide the camera!
                        if (targetTab && targetTab !== tabs[activeIndex]) {
                            setActiveTab(targetTab);
                        }
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, tabs]); // Re-run if tabs change

    // ... rest of your App.jsx code (renderSlideContent, etc.) ...
    const renderSlideContent = (tab) => {
        switch (tab) {
            case 'home':
                return <HomeDashboard />;
            case 'social':
                return <SocialDashboard />;
            case 'interests':
                return <InterestsDashboard />;
            case 'settings':
                return <SettingsDashboard />;
            default:
                return <div className="placeholder-dash">{tab} Dashboard (Coming Soon...)</div>;
        }
    };

    return (
        <>
            <div className="user-profile">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
            </div>

            <div className="app-container">

                <header className="top-nav">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </header>

                <main className="dashboard-container">

                    {/* The slider track with our 250px gap math */}
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(calc(-${activeIndex} * (1328px + 250px)))` }}
                    >
                        {/* 1. ADD data-tab={tab} TO THIS DIV */}
                        {tabs.map((tab) => (
                            <div key={tab} className="dashboard-slide" data-tab={tab}>
                                {renderSlideContent(tab)}
                            </div>
                        ))}
                    </div>

                </main>

                <footer className="footer-controls">
                    <div className="control">
                        <span className="btn-a">A</span> Select
                    </div>
                    <div className="control">
                        <span className="btn-y">Y</span> Eject
                    </div>
                </footer>

            </div>
        </>
    );
}