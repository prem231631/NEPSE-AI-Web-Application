import {
  FiTrendingUp,
  FiTrendingDown
} from "react-icons/fi";
import "../styles/trendingStocks.css";

function TrendingStocks() {
    const gainers = [
        {
            symbol: "NTC",
            name: "Nepal Telecom",
            price: "1,045",
            change: "+5.21%",
            recommendation: "BUY"
        },
        {
            symbol: "NABIL",
            name: "Nabil Bank",
            price: "892",
            change: "+4.08%",
            recommendation: "BUY"
        },
        {
            symbol: "SHIVM",
            name: "Shivam Cement",
            price: "612",
            change: "+3.42%",
            recommendation: "HOLD"
        }
    ];

    const losers = [
        {
            symbol: "HDL",
            name: "Himalayan Distillery",
            price: "1,890",
            change: "-2.41%",
            recommendation: "SELL"
        },
        {
            symbol: "CHCL",
            name: "Chilime Hydropower",
            price: "498",
            change: "-1.87%",
            recommendation: "HOLD"
        }
    ];

    return (
        <section className="trending-card">
            <div className="trending-header">
                <h2>🔥 Trending Stocks</h2>
            </div>

            <div className="stock-group">
                <h3 className="gainer-title">
                    <FiTrendingUp />
                    Top Gainers
                </h3>

                {gainers.map((stock, index) => (
                    <div className="stock-row" key={index}>
                        <div className="stock-info">
                            <div className="stock-logo">
                                {stock.symbol[0]}
                            </div>

                            <div>
                                <h4>{stock.symbol}</h4>
                                <small>{stock.name}</small>
                            </div>
                        </div>

                        <div className="stock-right">
                            <span className="stock-price">
                                Rs. {stock.price}
                            </span>

                            <span className="positive">
                                {stock.change}
                            </span>

                            <span className={`badge ${stock.recommendation.toLowerCase()}`}>
                                {stock.recommendation}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="stock-group">
                <h3 className="loser-title">
                    <FiTrendingDown />
                    Top Losers
                </h3>

                {losers.map((stock, index) => (
                    <div className="stock-row" key={index}>
                        <div className="stock-info">
                            <div className="stock-logo">
                                {stock.symbol[0]}
                            </div>

                            <div>
                                <h4>{stock.symbol}</h4>
                                <small>{stock.name}</small>
                            </div>
                        </div>

                        <div className="stock-right">
                            <span className="stock-price">
                                Rs. {stock.price}
                            </span>

                            <span className="negative">
                                {stock.change}
                            </span>

                            <span className={`badge ${stock.recommendation.toLowerCase()}`}>
                                {stock.recommendation}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrendingStocks;