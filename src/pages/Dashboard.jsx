import {useState} from "react";
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

                <SummaryCards/>
                
                <div className="dashboard-grid1">
                    <AIRecommendation/>
                    <MarketOverview/>
                </div>

                <div className="dashboard-grid2">
                    <TrendingStocks/>

                    <div classname="dashboard-column">
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