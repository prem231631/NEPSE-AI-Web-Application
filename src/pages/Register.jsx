import { useState } from "react";
import "../styles/register.css";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
function Register() {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {

        setError("");

        if(formData.password !== formData.confirmPassword){
            setError("Passwords do not match.");
            return;
        }

        if(!formData.age || Number(formData.age)<18){
            setError("Please enter a valid age");
            return;
        }

        try{

            setLoading(true);

            const response = await api.post("/signup",{
                name: formData.name,
                age: Number(formData.age),
                email: formData.email,
                password: formData.password
            });

            alert(response.data.message);

            setFormData({
                name: "",
                age: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            navigate("/login");

        }catch(err){

            if(err.response){
                setError(err.response.data.detail);
            }else{
                setError("Unable to connect to server.");
            }

        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="register-page">
            {/* left section */}
            <div className="register-left">
                <div className="register-logo">
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
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        min="18"
                        max="120"
/>

                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div className="password-row">
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="********"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"/>
                        <label>I agree to the Terms of Service and Privacy Policy.</label>
                    </div>

                    {error && (
                        <p
                            style={{
                                color: "#ff4d4f",
                                marginBottom: "15px"
                            }}
                        >
                            {error}
                        </p>
                    )}

                    <button className="register-btn" onClick={handleRegister} disabled={loading}>{loading ? "Creating Account...": "Create NEPSE AI Account"}<FaArrowRight/></button>

                    <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;