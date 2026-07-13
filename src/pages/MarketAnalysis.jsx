import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

import MarketHeader from "../components/Market Analysis/MarketHeader";
import SectorPerformance from "../components/Market Analysis/SectorPerformance";
import MarketHeatmap from "../components/Market Analysis/MarketHeatmap";
import RecentEvents from "../components/Market Analysis/RecentEvents";
import MarketTable from "../components/Market Analysis/MarketTable";
import "../styles/dashboard.css";
import "../styles/Market Analysis/marketAnalysis.css";

function MarketAnalysis() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
            // You can store this data in state later
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, []);

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

            <MarketTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketAnalysis;