import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { HiOutlineCpuChip } from "react-icons/hi2";
import {FiSettings, FiMoon, FiSun} from "react-icons/fi";
import {useEffect, useState} from "react";
function Navbar(){
  const navigate=useNavigate();

  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("landingTheme") || "dark"
  );

  useEffect(() => {
    document.body.classList.remove("dark", "light");

    document.body.classList.add(theme);

    localStorage.setItem("landingTheme", theme);
  }, [theme]);

  return(
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-box">
          <HiOutlineCpuChip className="logo-icon"/>
        </div>
        
        <span className="logo-text">NEPSE AI</span>
      </div>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#journey">Process</a>
        <a href="#testimonials">Feedback</a>
      </div>

      <div className="nav-right">
        <button className="start-btn" onClick={()=>navigate("Login")}>Login</button>
        
        <div className="landing-settings">
          <button
            className="settings-btn-nav"
            onClick={() => setShowThemeMenu(!showThemeMenu)}
          >
            <FiSettings />
            Settings
          </button>

          {showThemeMenu && (
            <div className="theme-dropdown">
              <button
                onClick={() => {
                  setTheme("dark");
                setShowThemeMenu(false);
              }}
              >
                <FiMoon />
                Dark Mode
              </button>

              <button
                onClick={() => {
                  setTheme("light");
                  setShowThemeMenu(false);
                }}
              >
                <FiSun />
                Light Mode
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;