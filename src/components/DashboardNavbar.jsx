import {FiMenu, FiBell, FiSettings, FiSearch} from "react-icons/fi";
import "../styles/dashboardNavbar.css";
import stocks from "../data/stocks";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function DashboardNavbar({setSidebarOpen}){

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const filteredStocks = stocks.filter((stock) =>
        stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
        stock.name.toLowerCase().includes(search.toLowerCase())
    );

    const userName = localStorage.getItem("userName") || "User";

    return(
        <header className="dashboard-navbar">
            <div className="dashboard-left">
                <FiMenu className="menu-icon" onClick={()=>setSidebarOpen(prev=>!prev)}/>

                <h2>NEPSE AI</h2>
            </div>

            <div className="dashboard-search">
                <FiSearch className="search-icon"/>

                <input
                    type="text"
                    placeholder="Search stocks, companies or AI insights..."
                    value={search}
                    onChange={(e)=>setSearch (e.target.value)}
                />

                {search && (
                    <div className="search-dropdown">
                        {filteredStocks.length > 0 ? (
                            filteredStocks.map((stock, index) => (
                                <div className="search-item" key={index}>
                                    <strong>{stock.symbol}</strong>

                                    <span>{stock.name}</span>
                                </div>
                            ))
                        ) : (

                            <div className="search-item">
                                No stock found
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="dashboard-right">
                <FiBell className="nav-icon" />

                <FiSettings className="nav-icon" />

                <div
                    className="profile-btn"
                    onClick={() => navigate("/profile")}
                >
                    <div className="profile-avatar">
                        {userName.charAt(0).toUpperCase()}
                    </div>

                    <span className="profile-name">
                        {userName}
                    </span>
                </div>
            </div>
        </header>
    );
}

export default DashboardNavbar;