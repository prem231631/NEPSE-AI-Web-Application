import { useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

import MarketHeader from "../components/Market Analysis/MarketHeader";
import SectorPerformance from "../components/Market Analysis/SectorPerformance";
import MarketHeatmap from "../components/Market Analysis/MarketHeatmap";
import RecentEvents from "../components/Market Analysis/RecentEvents";

import "../styles/dashboard.css";
import "../styles/Market Analysis/marketAnalysis.css";

function MarketAnalysis() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">
      <Sidebar sidebarOpen={sidebarOpen} />

      <div
        className={`dashboard-content ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <DashboardNavbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="market-analysis">
          <MarketHeader />

          <div className="market-middle">
            <div className="market-column">
              <SectorPerformance />

              <MarketHeatmap/>
            </div>
            

            <RecentEvents/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketAnalysis;