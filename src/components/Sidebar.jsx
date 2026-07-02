import { Link } from "react-router-dom";
import "./../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/dashboard">Dashboard</Link>

      <Link to ="/market">Market</Link>

      <Link to ="/prediction">AI Prediction</Link>

      <Link to ="/watchlist">Watchlist</Link>

      <Link to ="/notification">Notification</Link>

      <link to ="/settings">Settings</link>
      
    </aside>
  );
}

export default Sidebar;