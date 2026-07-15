import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

function AppearanceSettings() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        document.body.className = theme;

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (
        <div className="settings-card">
            <div className="card-header">
                <h2>Appearance</h2>

                <p>Customize how NEPSE AI looks.</p>
            </div>

            <div className="theme-options">
                <div
                    className={`theme-box ${theme==="dark" ? "active-theme" : ""}`}
                    onClick={() => setTheme("dark")}
                >
                    <FiMoon className="theme-icon"/>

                    <h3>Dark Theme</h3>

                    <span>Recommended</span>
                </div>

                <div
                    className={`theme-box ${theme==="light" ? "active-theme" : ""}`}
                    onClick={() => setTheme("light")}
                >
                    <FiSun className="theme-icon"/>

                    <h3>Light Theme</h3>

                    <span>Clean Interface</span>
                </div>
            </div>
        </div>
    );
}

export default AppearanceSettings;