import {useState} from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

function Dashboard(){
    const [showSidebar, setShowSidebar]=useState(false);

    return(
        <div>
            <DashboardNavbar toggleSidebar={()=> setShowSidebar(!showSidebar)}/>

            <div className="dashboard-content">
                Dashboard Content
            </div>
        </div>
    );
}

export default Dashboard;