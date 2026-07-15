import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

import "../styles/settings.css";

function Settings() {

    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") !== "light"
    );

    const [notifications, setNotifications] = useState({
        price: true,
        prediction: true,
        market: true,
        news: true,
        watchlist: true
    });

    useEffect(() => {

        if (darkMode) {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        }

    }, [darkMode]);

    return (
        <div className="dashboard-layout">
            <Sidebar sidebarOpen={sidebarOpen} />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="settings-container">
                    <h1>Settings</h1>

                    {/* Appearance */}

                    <div className="settings-card">
                        <h2>Appearance</h2>

                        <div className="setting-row">
                            <div>
                                <h4>Dark Mode</h4>

                                <p>Switch between Dark and Light theme.</p>
                            </div>

                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />

                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    {/* Notifications */}

                    <div className="settings-card">
                        <h2>Notifications</h2>

                        {Object.keys(notifications).map((key) => (
                            <div
                                className="setting-row"
                                key={key}
                            >
                                <h4>
                                    {key.charAt(0).toUpperCase() + key.slice(1)} Alerts
                                </h4>

                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={notifications[key]}
                                        onChange={() =>
                                            setNotifications({
                                                ...notifications,
                                                [key]: !notifications[key]
                                            })
                                        }
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Security */}

                    <div className="settings-card">
                        <h2>Security</h2>

                        <button
                            className="settings-btn"
                            onClick={() => navigate("/profile")}
                        >
                            Change Password
                        </button>
                    </div>

                    {/* Account */}

                    <div className="settings-card">
                        <h2>Account</h2>

                        <button
                            className="settings-btn"
                            onClick={() => navigate("/profile")}
                        >
                            Open Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;