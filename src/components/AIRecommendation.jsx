import {
    FiCpu,
    FiTrendingUp,
    FiAlertCircle,
    FiArrowRight
} from "react-icons/fi";

import "../styles/aiRecommendation.css";

function AIRecommendation() {
    const recommendation = {
        company: "NTC",
        action: "BUY",
        confidence: 92,
        risk: "Medium",
        expectedReturn: "+4.8%",
        reason:
            "Strong buying momentum detected. The stock is trading above its moving averages with increasing positive market sentiment."
    };

    return (
        <section className="ai-card">
            <div className="ai-header">
                <div className="title">
                    <FiCpu />
                    <h2>AI Recommendation</h2>
                </div>

                <span className="live-badge">
                    LIVE AI
                </span>
            </div>

            <div className="ai-grid">
                <div className="ai-info">
                    <div className="row">
                        <span>Company</span>
                        <strong>{recommendation.company}</strong>
                    </div>

                    <div className="row">
                        <span>Recommendation</span>
                        <span className="buy">
                            <FiTrendingUp />
                            {recommendation.action}
                        </span>
                    </div>

                    <div className="row">
                        <span>Confidence</span>
                        <strong>{recommendation.confidence}%</strong>
                    </div>

                    <div className="progress">
                        <div
                            className="progress-fill"
                            style={{
                                width:
                                    recommendation.confidence + "%"
                            }}
                        />
                    </div>

                    <div className="row">
                        <span>Risk Level</span>
                        <strong>{recommendation.risk}</strong>
                    </div>

                    <div className="row">
                        <span>Expected Return</span>
                        <strong className="positive">
                            {recommendation.expectedReturn}
                        </strong>
                    </div>
                </div>

                <div className="ai-reason">
                    <div className="reason-title">
                        <FiAlertCircle />
                        AI Reason
                    </div>

                    <p>
                        {recommendation.reason}
                    </p>

                    <button>
                        View Full Prediction
                        <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AIRecommendation;