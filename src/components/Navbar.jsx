import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { HiOutlineCpuChip } from "react-icons/hi2";
import {FiSettings} from "react-icons/fi";

function Navbar(){
  const navigate=useNavigate();
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
        <FiSettings className="settings-icon"/>
      </div>
    </nav>
  );
}

export default Navbar;