import "../../styles/Market Analysis/marketHeatmap.css";

const heatmapData = [
  { symbol: "NABIL", change: "+2.31%", positive: true, size: "large" },
  { symbol: "NTC", change: "+1.12%", positive: true, size: "medium" },
  { symbol: "SHIVM", change: "-0.84%", positive: false, size: "medium" },
  { symbol: "GBIME", change: "+3.24%", positive: true, size: "small" },
  { symbol: "NICA", change: "-1.41%", positive: false, size: "small" },
  { symbol: "HIDCL", change: "+0.72%", positive: true, size: "small" },
  { symbol: "ADBL", change: "+1.08%", positive: true, size: "small" },
  { symbol: "EBL", change: "-0.45%", positive: false, size: "small" },
];

function MarketHeatmap() {
  return (
    <section className="heatmap-card">
        <div className="heatmap-header">
            <h2>Market Heatmap</h2>
            <span>Top Performing Stocks</span>
        </div>

        <div className="heatmap-grid">
            {heatmapData.map((stock) => (
                <div
                    key={stock.symbol}
                    className={`heatmap-box ${stock.size} ${
                        stock.positive ? "positive" : "negative"
                    }`}
                >
                    <h3>{stock.symbol}</h3>
                    <p>{stock.change}</p>
                </div>
            ))}
        </div>
    </section>
  );
}

export default MarketHeatmap;