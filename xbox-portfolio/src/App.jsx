import { useState } from 'react';
import HomeDashboard from './components/HomeDashboard';
import './App.css';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = ['bing', 'home', 'social', 'games', 'tv & movies', 'music', 'apps', 'settings'];

    // This acts as our routing system for the different tabs
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomeDashboard />;
            case 'social':
                return <div className="placeholder-dash">Social Dashboard (Coming Soon...)</div>;
            case 'games':
                return <div className="placeholder-dash">Games Dashboard (Coming Soon...)</div>;
            default:
                return <div className="placeholder-dash">{activeTab} Dashboard (Coming Soon...)</div>;
        }
    };

    return (
        <>
            {/* Absolute positioned user profile icon */}
            <div className="user-profile">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                    {/* A simple default user/avatar SVG */}
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
            </div>

            <div className="app-container">

                {/* Top Navigation */}
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

                {/* Main Content Area */}
                <main className="dashboard-container">
                    {renderContent()}
                </main>

                {/* Footer Controls */}
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