import {useState} from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeBanner from "../components/WelcomeBanner";
import "../styles/dashboard.css";
function Dashboard(){
    const [sidebarOpen, setSidebarOpen]=useState(true);

    return (
        <div className="dashboard-layout">
            <Sidebar
                sidebarOpen={sidebarOpen}
            />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar
                setSidebarOpen={setSidebarOpen}
                />

                <WelcomeBanner/>
            </div>
        </div>
  );
}

export default Dashboard;