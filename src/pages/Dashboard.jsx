import {useState} from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeBanner from "../components/WelcomeBanner";

function Dashboard(){
    const [showSidebar, setShowSidebar]=useState(false);

    return(
        <div>
            <DashboardNavbar toggleSidebar={()=> setShowSidebar(!showSidebar)}/>

            {showSidebar && <Sidebar/>}

            <div className="dashboard-content">
                <WelcomeBanner/>
            </div>
        </div>
    );
}

export default Dashboard;