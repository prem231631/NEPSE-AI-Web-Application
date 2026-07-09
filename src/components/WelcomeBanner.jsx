import "../styles/welcomeBanner.css";
import { getMarketStatus } from "../utils/marketStatus";

function WelcomeBanner(){
    const {marketOpen, marketStatus, marketMessage}= getMarketStatus();

    const hour = new Date().getHours();
    let greeting ="Good Evening";

    if (hour<12){
        greeting = "Good Morning";
    }
    else if (hour<18){
        greeting="Good Afternoon";
    }

    return (
        <section className = "welcome-banner">
            <div className="welcome-text">
                <h1>{greeting}, <span> Name 👋 </span></h1>

                <p>Welcome back to NEPSE AI. Here's today's market summary and AI-powered investment insights.</p>
            </div>

            <div className="market-status">
                <div className="welcome-status">
                    <span className={marketOpen ? "status-open" : "status-closed"}>
                        {marketOpen ? "🟢 Market Open" : "🔴 Market Closed"}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default WelcomeBanner;