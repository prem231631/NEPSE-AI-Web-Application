import "../styles/register.css";
import {HiOutlineCpuChip} from "react-icons/hi2";
import {FaArrowRight} from "react-icons/fa6";

function Register() {
    return(
        <div className="register-page">
            {/* left section */}
            <div className="register-left">
                <div classname="register-logo">
                    <div className="logo-box">
                        <HiOutlineCpuChip/>
                    </div>

                    <span className="logo-text">NEPSE AI</span>
                </div>

                <div className="hero-content">
                    <h1>Master the market <br/>with AI precision.</h1>

                    <p>Access institutional-grade technical analysis and AI-driven stock predictions designed for every investor level.</p>
                </div>

                <div className="stats-row">
                    <div className="stat-card">
                        <h4>ACCURACY</h4>
                        <h2>Much Higher</h2>
                        <p>Avg. Daily Prediction Success</p>
                    </div>

                    <div className="stat-card">
                        <h4>LIVE SIGNALS</h4>
                        <h2>Real-Time</h2>
                        <p>Instant Technical Alerts</p>
                    </div>
                </div>

                <div className="prediction-card">
                    <h4>AI PREDICTION: NTC</h4>

                    <div className="prediction-content">
                        <div>
                            <h2>Bullish ↑ 4.2%</h2>
                            <p>Strong support identified at 785.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right section */}
            <div className="register-right">
                <div className="register-form">
                    <h1>Create an account</h1>

                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe"/>

                    <label>Email Address</label>
                    <input type="email" placeholder="name@example.com"/>

                    <div className="password-row">
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="********"/>
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input type="password" placeholder="********"/>
                        </div>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"/>
                        <label>I agree to the Terms of Service and Privacy Policy.</label>
                    </div>

                    <button className="register-btn">Create NEPSE AI Account <FaArrowRight/></button>

                    <p className="login-link">Already have an account? <a href="#">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default Register;