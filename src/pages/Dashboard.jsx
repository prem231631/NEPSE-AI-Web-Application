import {useState} from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeBanner from "../components/WelcomeBanner";
import SummaryCards from "../components/SummaryCards";
import AIRecommendation from "../components/AIRecommendation";
import MarketOverview from "../components/MarketOverview";
import TrendingStocks from "../components/TrendingStocks";

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
                <SummaryCards/>
                
                <div className="dashboard-grid">
                    <AIRecommendation/>
                    <MarketOverview/>
                </div>

                <TrendingStocks/>
            </div>
        </div>
  );
}

export default Dashboard;