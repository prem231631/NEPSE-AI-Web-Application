import "../styles/hero.css";
import heroImage from "../assets/hero-image.jpeg";
import { useNavigate } from "react-router-dom";

function Hero(){
    const navigate = useNavigate();
    return(
        <section className="hero">
            <div className="hero-badge">NEXT GEN MARKET PREDICTION</div>

            <h1> AI-Powered <span> Stock Prediction</span> <br/> for Smarter Investing</h1>

            <p> Real-time NEPSE market analaysis, AI forecasts,
                risk assessment, and personalized alerts
                for beginner investors.
            </p>

            <div className="hero-buttons">
                <button className="primary-btn" onClick={()=>navigate("Register")}>Get Started/Sign Up</button>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Hero Image"/>
            </div>
        </section>
    );
}

export default Hero;