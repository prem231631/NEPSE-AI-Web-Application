import {
  FiTrendingUp,
  FiTarget,
  FiActivity,
  FiStar
} from "react-icons/fi";
import {getMarketStatus} from "../utils/marketStatus";

import "../styles/summaryCards.css";

function SummaryCards() {

    const {marketOpen, marketStatus, marketMessage}=getMarketStatus();
    const cards = [
        {
            icon: <FiTrendingUp />,
            title: "NEPSE Index",
            value: "2,987.42",
            change: "+1.24%"
        },
        {
            icon: <FiTarget />,
            title: "AI Accuracy",
            value: "89%",
            change: "Excellent"
        },
        {
            icon: <FiActivity />,
            title: "Market Status",
            value: marketStatus,
            change: marketMessage
        },
        {
            icon: <FiStar />,
            title: "Watchlist",
            value: "12",
            change: "Stocks"
        }
    ];

    return (
        <section className="summary-cards">
            {cards.map((card, index) => (
                <div className="summary-card" key={index}>
                    <div
                        className={`card-icon ${
                            card.title === "Market Status"
                            ? (marketOpen ? "icon-open" : "icon-closed")
                            : ""
                        }`}
                    >
                    {card.icon}
                    </div>

                    <h4>{card.title}</h4>

                    <h2>{card.value}</h2>

                    <p
                        className={
                            card.title === "Market Status"
                            ? (marketOpen ? "market-open" : "market-closed")
                            : ""
                        }
                    >       
                        {card.change}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default SummaryCards;