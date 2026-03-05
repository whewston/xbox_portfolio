import { useState } from 'react';
import './App.css';

export default function App() {
    const [activeTab, setActiveTab] = useState('home');

    // The exact tabs from the Xbox 360 dashboard image
    const tabs = ['bing', 'home', 'social', 'games', 'tv & movies', 'music', 'apps', 'settings'];

    return (
        <>
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
                {/* We will build the grid and drop it here next */}
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
        </>
    );
}