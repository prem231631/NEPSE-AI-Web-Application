import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forgotPassword.css";

function ForgotPassword(){
    const [email,setEmail]=useState("");
    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        setLoading(true);

        try{
            const response=await fetch("http://127.0.0.1:8001/forgot-password",{
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    email
                })
            });

            const data=await response.json();

            if(!response.ok){
                alert(data.detail);
                return;
            }

            alert(data.message);

            navigate("/reset-password",{
                state:{email}
            });

        }catch(err){

            alert("Unable to send OTP.");

        }

        setLoading(false);
    };

    return (
        <div className="forgot-page">
            <div className="forgot-card">

                <div className="forgot-header">
                    <h2>Forgot Password</h2>
                    <p>
                        Enter your registered email address to receive a verification OTP.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="forgot-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button className="forgot-btn">
                        {loading ? "Sending..." : "Send OTP"}
                    </button>
                </form>

                <div className="login-footer">
                    Remember your password?
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                    >
                        Back to Login
                    </a>
                </div>

            </div>
        </div>
    );
}

export default ForgotPassword;