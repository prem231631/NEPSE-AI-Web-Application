import "../styles/testimonials.css";
import {FaStar} from "react-icons/fa";

function Testimonials(){
    return(
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2>What Investors Say</h2>

                <p>Trusted by beginner and experienced investors across Nepal.</p>
            </div>

            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="stars">
                        <FaStar/>
                    </div>

                    <p>NEPSE AI helped me understand stock market trends and make smarter investment decisions.</p>

                    <div className="user">
                        <div className="avatar">RS</div>

                        <div>
                            <h4>Ram Sharma</h4>
                            <span>Beginner Investor</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="stars">
                        <FaStar/>
                    </div>

                    <p>The AI predictions feature and personalized alerts are extremely useful for daily trading.</p>

                    <div className="user">
                        <div className="avatar">SK</div>

                        <div>
                            <h4>Sita Karki</h4>
                            <span>Stock Trader</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="stars">
                        <FaStar/>
                    </div>

                    <p>A professional platform for tracking the Nepal stock market with AI-powered insights.</p>

                    <div className="user">
                        <div className="avatar">HA</div>

                        <div>
                            <h4>Hari Adhikari</h4>
                            <span>Long-term Investor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;