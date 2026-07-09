import "../styles/welcomeBanner.css";
function WelcomeBanner(){
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
                <span className="status-dot"></span>
            
                <p>Market Open</p>
            </div>
        </section>
    );
}

export default WelcomeBanner;