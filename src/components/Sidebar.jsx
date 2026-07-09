import { Link } from "react-router-dom";
import "./../styles/sidebar.css";
import {FiGrid, FiTrendingUp, FiCpu, FiStar, FiBell, FiSettings, FiLogOut} from "react-icons/fi";

function Sidebar({sidebarOpen}) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-menu">
        <div className="sidebar-item active">
          <FiGrid/>
          <span>Dashboard</span>
        </div>

        <div className="sidebar-item">
          <FiTrendingUp/>
          <span>Market Analysis</span>
        </div>

        <div className="sidebar-item">
          <FiCpu/>
          <span>Prediction</span>
        </div>

        <div className="sidebar-item">
          <FiStar/>
          <span>Watchlist</span>
        </div>

        <div className="sidebar-item">
          <FiSettings/>
          <span>Settings</span>
        </div>
      </div>

      <div className="sidebar-logout">
        <FiLogOut/>
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;