import "../styles/marketHeader.css";

function MarketHeader() {
    return (
        <section className="market-header">
            <div className="market-title">
                <h1>Market Overview</h1>
                <p>
                    Real-time exchange status and predictive intelligence
                </p>
            </div>

            <div className="market-summary">
                <div className="index-card">
                    <span>NEPSE INDEX</span>

                    <div className="index-value">
                        2,143.20
                        <small>▲ 1.24%</small>
                    </div>
                </div>

                <div className="market-status open">
                    ● MARKET OPEN
                </div>
            </div>
        </section>
    );
}

export default MarketHeader;