import { Link } from "react-router-dom";
import "./../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>NEPSE AI</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/market">Market</Link>

      <Link to="/prediction">AI Prediction</Link>

      <Link to="/watchlist">Watchlist</Link>

      <Link to="/settings">Settings</Link>

    </div>
  );
}

export default Sidebar;