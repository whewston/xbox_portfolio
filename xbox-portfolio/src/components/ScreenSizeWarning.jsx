import React, { useState, useEffect } from 'react';

// A clean warning icon
const WarningIcon = (
    <svg fill="#107C10" viewBox="0 0 24 24" width="80" height="80">
        <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
    </svg>
);

export default function ScreenSizeWarning({ children }) {
    const [isTooSmall, setIsTooSmall] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            // Adjust these numbers based on your exact layout needs!
            // 1280x720 is standard small-laptop size.
            if (window.innerWidth < 1280 || window.innerHeight < 720) {
                setIsTooSmall(true);
            } else {
                setIsTooSmall(false);
            }
        };

        // Check immediately on load
        checkSize();

        // Listen for the user resizing their browser window
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    // If the screen is too small, render the warning INSTEAD of the dashboard
    if (isTooSmall) {
        return (
            <div style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px',
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            }}>
                {WarningIcon}
                <h1 style={{ marginTop: '20px', fontSize: '2.5rem', fontWeight: '300' }}>
                    Display Too Small
                </h1>
                <p style={{ maxWidth: '500px', color: '#ccc', fontSize: '1.2rem', lineHeight: '1.5', marginTop: '10px' }}>
                    This Xbox 360 Dashboard experience requires a larger display to render correctly.
                    <br/><br/>
                    Please view this site on a desktop or laptop monitor, or maximize your browser window.
                </p>
            </div>
        );
    }

    // If the screen is big enough, render the actual app!
    return children;
}