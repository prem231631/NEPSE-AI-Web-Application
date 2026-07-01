import "../styles/features.css";
import {HiOutlineBellAlert} from "react-icons/hi2";
import { LuBrain } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

function Features(){
    return(
        <section id="features" className="features-selection">
            <div className="features-header">
                <h2>Professional Grade Features</h2>

                <p>Everything you need to navigate the Nepal Stock Exchange.</p>
            </div>

            <div className="feature-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <HiOutlineBellAlert/>
                    </div>

                    <h3>Personalized Alerts</h3>

                    <p>Custom Triggers for price targets, news breakthroughs, and technical signals delivered via push or SMS.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon green">
                        <LuBrain/>
                    </div>

                    <h3>Beginner Insights</h3>

                    <p>Simplified explanations of complex market trends and AI features for immediate investment clarity.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon blue">
                        <BsGraphUpArrow/>
                    </div>

                    <h3>AI Price Prediction</h3>

                    <p>Machine Learning models trained on historical NEPSE data to forecast future price movements.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;