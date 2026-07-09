import {FiMenu, FiBell, FiUser} from "react-icons/fi";
import "../styles/dashboardNavbar.css";

function DashboardNavbar({setSidebarOpen}){
    return(
        <header className="dashboard-navbar">
            <div className="dashboard-left">
                <FiMenu className="menu-icon" onClick={()=>setSidebarOpen(prev=>!prev)}/>

                <h2>NEPSE AI</h2>
            </div>

            <div className="dashboard-right">
                <FiBell/>
                <FiUser/>
            </div>
        </header>
    );
}

export default DashboardNavbar;