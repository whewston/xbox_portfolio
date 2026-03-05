import { useState } from 'react';
import HomeDashboard from './components/HomeDashboard';
import SocialDashboard from './components/SocialDashboard';
import './App.css';
import TvMoviesDashboard from "./components/TvMoviesDashboard.jsx";
import GamesDashboard from "./components/GamesDashboard.jsx";
import AppsDashboard from "./components/AppsDashboard.jsx";
import MusicDashboard from "./components/MusicDashboard.jsx";
import SettingsDashboard from "./components/SettingsDashboard.jsx";

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = ['bing', 'home', 'social', 'games', 'tv & movies', 'music', 'apps', 'settings'];

    const activeIndex = tabs.indexOf(activeTab);

    // We bring back your routing system, but use it to render individual slides!
    const renderSlideContent = (tab) => {
        switch (tab) {
            case 'home':
                return <HomeDashboard />;
            case 'social':
                return <SocialDashboard />;
            case 'games':
                return <GamesDashboard />;
            case 'tv & movies':
                return <TvMoviesDashboard />;
            case 'music':
                return <MusicDashboard />;
            case 'apps':
                return <AppsDashboard />;
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
                        {/* We map through the tabs, and call our switch statement for each one */}
                        {tabs.map((tab) => (
                            <div key={tab} className="dashboard-slide">
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