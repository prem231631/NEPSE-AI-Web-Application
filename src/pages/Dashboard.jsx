import {useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import SummaryCards from "../components/SummaryCards";
import AIRecommendation from "../components/AIRecommendation";
import MarketOverview from "../components/MarketOverview";
import TrendingStocks from "../components/TrendingStocks";
import WatchlistPreview from "../components/WatchlistPreview";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

import "../styles/dashboard.css";
import { useLocation } from "react-router-dom";
function Dashboard(){
    const [sidebarOpen, setSidebarOpen]=useState(true);

    const location = useLocation();
    const [showPopup, setShowPopup] = useState(
        location.state?.showWelcome || false
    );

    const user = location.state?.user;

    useEffect(() => {

        if(showPopup){

            const timer = setTimeout(() => {

                setShowPopup(false);

            },5000);

            return ()=>clearTimeout(timer);
        }

    },[showPopup]);

    return (
     
        <div className="dashboard-layout">

        {showPopup && (
            <div className="welcome-popup">
                <h3>Welcome, {user?.name}! 👋</h3>
                <p>Successfully logged in to NEPSE AI.</p>
            </div>
        )}

            <Sidebar
                sidebarOpen={sidebarOpen}
            />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar
                setSidebarOpen={setSidebarOpen}
                />

                <SummaryCards/>
                
                <div className="dashboard-grid1">
                    <AIRecommendation/>
                    <MarketOverview/>
                </div>

                <div className="dashboard-grid2">
                    <TrendingStocks/>

                    <div className="dashboard-column">
                        <WatchlistPreview/>
                        <LatestNews/>
                    </div>
                    
                </div>

                <Footer/>

                

            </div>
        </div>
  );
}

export default Dashboard;