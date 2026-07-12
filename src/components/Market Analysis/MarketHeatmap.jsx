import "../../styles/Market Analysis/marketHeatmap.css";

const stocks = [
  { symbol: "NABIL", change: 2.31, size: "large" },
  { symbol: "NTC", change: 1.12, size: "medium" },
  { symbol: "SHIVM", change: -0.84, size: "medium" },
  { symbol: "GBIME", change: 3.24, size: "small" },
  { symbol: "NICA", change: -1.41, size: "small" },
  { symbol: "HIDCL", change: 0.72, size: "small" },
  { symbol: "ADBL", change: 1.08, size: "small" },
  { symbol: "EBL", change: -0.45, size: "small" },
];

function MarketHeatmap() {
  return (
    <div className="heatmap-card">
      <div className="heatmap-header">
        <h3>Market Heatmap</h3>
        <span>Top Performing Stocks</span>
      </div>

      <div className="heatmap-grid">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className={`tile ${stock.size} ${
              stock.change >= 0 ? "gain" : "loss"
            }`}
          >
            <h2>{stock.symbol}</h2>

            <p>
              {stock.change > 0 ? "+" : ""}
              {stock.change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketHeatmap;