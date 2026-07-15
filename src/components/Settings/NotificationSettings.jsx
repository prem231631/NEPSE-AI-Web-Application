import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

function NotificationSettings() {

    const [settings, setSettings] = useState({
        email: true,
        market: true,
        ai: true,
        watchlist: false
    });

    useEffect(() => {

        const saved = localStorage.getItem("notificationSettings");

        if (saved) {
            setSettings(JSON.parse(saved));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem(
            "notificationSettings",
            JSON.stringify(settings)
        );
    }, [settings]);

    const handleToggle = (key) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="settings-card">
            <div className="card-header">
                <h2>Notifications</h2>

                <p>Choose what updates you want to receive.</p>
            </div>

            <div className="notification-list">
                <div className="notification-item">
                    <div>
                        <h4>Email Notifications</h4>
                        <span>Receive account updates.</span>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.email}
                        onChange={() => handleToggle("email")}
                    />
                </div>

                <div className="notification-item">
                    <div>
                        <h4>Market Alerts</h4>
                        <span>Notify when the market opens.</span>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.market}
                        onChange={() => handleToggle("market")}
                    />
                </div>

                <div className="notification-item">
                    <div>
                        <h4>AI Recommendations</h4>
                        <span>Daily AI investment suggestions.</span>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.ai}
                        onChange={() => handleToggle("ai")}
                    />
                </div>

                <div className="notification-item">
                    <div>
                        <h4>Watchlist Alerts</h4>
                        <span>Notify when favourite stocks move.</span>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.watchlist}
                        onChange={() => handleToggle("watchlist")}
                    />
                </div>
            </div>
        </div>
    );
}

export default NotificationSettings;