import { NavLink } from "react-router-dom";
import "./../styles/sidebar.css";
import {FiGrid, FiTrendingUp, FiCpu, FiStar, FiBell, FiSettings, FiLogOut} from "react-icons/fi";

function Sidebar({sidebarOpen}) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-menu">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/marketAnalysis" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FiTrendingUp />
          <span>Market Analysis</span>
        </NavLink>

        <NavLink to="/prediction" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FiCpu />
          <span>Prediction</span>
        </NavLink>

        <NavLink to="/watchlist" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FiStar />
          <span>Watchlist</span>
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
          <FiSettings />
          <span>Settings</span>
        </NavLink>
      </div>

      <div className="sidebar-logout">
        <FiLogOut/>
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;