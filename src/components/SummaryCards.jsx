import {
  FiTrendingUp,
  FiTarget,
  FiActivity,
  FiStar
} from "react-icons/fi";

import "../styles/summaryCards.css";

function SummaryCards() {
    const now = new Date();

    const nepalTime = new Date(
        now.toLocaleString("en-US", {
            timeZone: "Asia/Kathmandu",
        })
    );

    const day = nepalTime.getDay();      // 0 = Sunday, 6 = Saturday
    const hour = nepalTime.getHours();
    const minute = nepalTime.getMinutes();

    const currentMinutes = hour * 60 + minute;

    const marketOpenTime = 11*60;
    const marketCloseTime= 15*60;

    const isWeekday=day >=1 && day <=5;

    let marketOpen = false;
    let marketStatus = "";
    let marketMessage = "";

    if (isWeekday && currentMinutes >= marketOpenTime && currentMinutes < marketCloseTime) {

        marketOpen = true;
        marketStatus = "Open";

        const remaining = marketCloseTime - currentMinutes;

        const h = Math.floor(remaining / 60);
        const m = remaining % 60;

        marketMessage = `Closes in ${h}h ${m}m`;

    } 
    else {

        marketStatus = "Closed";
        let nextOpen = new Date(nepalTime);
        if (isWeekday && currentMinutes < marketOpenTime) {
            nextOpen.setHours(11,0,0,0);
        }
        else {
            nextOpen.setDate(nextOpen.getDate()+1);

            while(nextOpen.getDay()===0 || nextOpen.getDay()===6){
                nextOpen.setDate(nextOpen.getDate()+1);
            }

            nextOpen.setHours(11,0,0,0);
        }

        const diff = nextOpen - nepalTime;

        const totalMinutes = Math.floor(diff/60000);

        const h = Math.floor(totalMinutes/60);

        const m = totalMinutes%60;

        marketMessage = `Opens in ${h}h ${m}m`;

    }

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