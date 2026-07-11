import MarketHeader from "../components/Market Analysis/MarketHeader";
import SectorPerformance from "../components/Market Analysis/SectorPerformance";

import "../styles/Market Analysis/marketAnalysis.css";

function MarketAnalysis() {
    return (
        <div className="market-analysis">
            <MarketHeader/>

            <SectorPerformance/>
        </div>
    );
}

export default MarketAnalysis;