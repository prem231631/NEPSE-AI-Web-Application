import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard(){
    const [showSidebar, setShowSidebar] = useState(false);

    return(
        <div className="dashboard-layout">
            <Navbar toggleSidebar={()=>setShowSidebar(!showSidebar)}/>
            
            {showSidebar && <Sidebar/>}

            <main className="dashboard-content">
                <h1>Dashboard</h1>
            </main>
        </div>
    );
}

export default Dashboard;