import { FiStar, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import "../styles/watchlistPreview.css";

function WatchlistPreview() {
    const watchlist = [
        {
            symbol: "NTC",
            company: "Nepal Telecom",
            price: "1,045",
            prediction: "BUY",
            change: "+5.21%",
            positive: true
        },
        {
            symbol: "NABIL",
            company: "Nabil Bank",
            price: "892",
            prediction: "BUY",
            change: "+2.84%",
            positive: true
        },
        {
            symbol: "SHIVM",
            company: "Shivam Cement",
            price: "612",
            prediction: "HOLD",
            change: "-0.42%",
            positive: false
        }
    ];

    return (
        <section className="watchlist-card">
            <div className="watchlist-header">
                <h2>
                    <FiStar />
                    Watchlist
                </h2>

                <button>View All</button>
            </div>

            {watchlist.map((stock, index) => (
                <div className="watch-item" key={index}>
                    <div className="watch-left">
                        <div className="watch-logo">
                            {stock.symbol[0]}
                        </div>

                        <div>
                            <h4>{stock.symbol}</h4>
                            <small>{stock.company}</small>
                        </div>
                    </div>

                    <div className="watch-right">
                        <strong>Rs. {stock.price}</strong>
                        <span className={stock.positive ? "positive" : "negative"}>
                            {stock.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                            {stock.change}
                        </span>

                        <span className={`watch-badge ${stock.prediction.toLowerCase()}`}>
                            {stock.prediction}
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default WatchlistPreview;