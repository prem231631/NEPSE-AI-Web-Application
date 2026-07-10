import {
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";
import "../styles/marketOverview.css";

function MarketOverview() {
    const market = {
        index: "2,987.42",
        change: "+1.24%",
        open: "2,980.10",
        high: "3,001.25",
        low: "2,970.42",
        volume: "15.4M"
    };

    return (
        <section className="market-card">
            <div className="market-header">
                <div className="market-title">
                    <FiBarChart2 />
                    <h2>Market Overview</h2>
                </div>

                <span className="market-change">
                    <FiTrendingUp />
                    {market.change}
                </span>

            </div>

            <div className="chart-placeholder">
                <span>📈</span>
                <h3>NEPSE Index Chart</h3>
                <p>Live chart will appear here after backend integration.</p>
            </div>

            <div className="market-stats">
                <div>
                    <small>Open</small>
                    <strong>{market.open}</strong>
                </div>

                <div>
                    <small>High</small>
                    <strong>{market.high}</strong>
                </div>

                <div>
                    <small>Low</small>
                    <strong>{market.low}</strong>
                </div>

                <div>
                    <small>Volume</small>
                    <strong>{market.volume}</strong>
                </div>
            </div>
        </section>
    );
}

export default MarketOverview;