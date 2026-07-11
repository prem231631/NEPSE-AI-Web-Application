import {FiMenu, FiBell, FiUser, FiSettings, FiSearch} from "react-icons/fi";
import "../styles/dashboardNavbar.css";

function DashboardNavbar({setSidebarOpen}){
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
                />
            </div>

            <div className="dashboard-right">
                <FiBell/>
                <FiSettings/>
                <FiUser/>
            </div>
        </header>
    );
}

export default DashboardNavbar;