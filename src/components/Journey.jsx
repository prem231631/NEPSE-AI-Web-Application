import "../styles/journey.css";
import phoneImage from "../assets/phone.png";

function Journey(){
    return(
        <section className="journey">
            <div className="journey-left">
                <h2>Your Journey to <br/> Smarter Investing</h2>

                <div className="step">
                    <div className="step-number">1</div>

                    <div>
                        <h3>Create Account</h3>

                        <p>Sign up and personalize your investment profile.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-number">2</div>

                    <div>
                        <h3>Select Favorites</h3>

                        <p>Choose your favorite NEPSE stocks.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="step-number">3</div>

                    <div>
                        <h3>Execute & Analyze</h3>

                        <p>Get AI predictions and market insights.</p>
                    </div>
                </div>
            </div>

            <div className="journey-right">
                <img src={phoneImage} alt="Phone"/>
            </div>
        </section>
    );
}

export default Journey;