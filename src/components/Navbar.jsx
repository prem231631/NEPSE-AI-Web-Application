import "../styles/navbar.css";

import { HiOutlineCpuChip } from "react-icons/hi2";
import {FiSettings} from "react-icons/fi";
function Navbar(){
  return(
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-box">
          <HiOutlineCpuChip className="logo-icon"/>
        </div>
        
        <span className="logo-text">NEPSE AI</span>
      </div>

      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Process</a>
        <a href="#">Dashboard</a>
      </div>

      <div className="nav-right">
        <button className="start-btn">Get Started</button>
        <FiSettings className="settings-icon"/>
      </div>
    </nav>
  );
}

export default Navbar;