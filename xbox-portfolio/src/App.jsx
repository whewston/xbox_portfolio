import { useState, useEffect } from 'react';
import HomeDashboard from './components/HomeDashboard';
import SocialDashboard from './components/SocialDashboard';
import InterestsDashboard from './components/InterestsDashboard';
import SettingsDashboard from './components/SettingsDashboard';
import ScreenSizeWarning from './components/ScreenSizeWarning';
import './App.css';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = ['home', 'interests', 'social', 'settings'];
    const activeIndex = tabs.indexOf(activeTab);

    // --- THE KEYBOARD CONTROLLER LOGIC ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (document.querySelector('.modal-overlay')) {
                return;
            }

            // 1. LB / RB NAVIGATION (Q and E keys)
            if (e.key === 'q' || e.key === 'Q') {
                if (activeIndex > 0) setActiveTab(tabs[activeIndex - 1]);
            }
            if (e.key === 'e' || e.key === 'E') {
                if (activeIndex < tabs.length - 1) setActiveTab(tabs[activeIndex + 1]);
            }

            // 2. D-PAD NAVIGATION (Arrow Keys)
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();

                const tiles = Array.from(document.querySelectorAll('.tile'));
                const currentFocus = document.activeElement;

                if (!tiles.includes(currentFocus)) {
                    if (tiles.length > 0) tiles[0].focus({ preventScroll: true });
                    return;
                }

                const currentRect = currentFocus.getBoundingClientRect();
                let closestTile = null;
                let minDistance = Infinity;

                tiles.forEach(tile => {
                    if (tile === currentFocus) return;
                    const rect = tile.getBoundingClientRect();

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
                    closestTile.focus({ preventScroll: true });                    
                    const parentSlide = closestTile.closest('.dashboard-slide');
                    if (parentSlide) {
                        const targetTab = parentSlide.getAttribute('data-tab');
                        if (targetTab && targetTab !== tabs[activeIndex]) {
                            setActiveTab(targetTab);
                        }
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, tabs]);

    const renderSlideContent = (tab) => {
        switch (tab) {
            case 'home': return <HomeDashboard />;
            case 'social': return <SocialDashboard />;
            case 'interests': return <InterestsDashboard />;
            case 'settings': return <SettingsDashboard />;
            default: return <div className="placeholder-dash">{tab} Dashboard (Coming Soon...)</div>;
        }
    };

    return (
        // 2. WRAP EVERYTHING IN THE WARNING COMPONENT
        <ScreenSizeWarning>
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
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(calc(-${activeIndex} * (1328px + 250px)))` }}
                    >
                        {tabs.map((tab) => (
                            <div key={tab} className="dashboard-slide" data-tab={tab}>
                                {renderSlideContent(tab)}
                            </div>
                        ))}
                    </div>
                </main>

                <footer className="footer-controls">
                    <div className="control"><span className="btn-a">A</span> Select</div>
                    <div className="control"><span className="btn-y">Y</span> Eject</div>
                </footer>
            </div>
        </ScreenSizeWarning>
    );
}