import {useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import "../styles/forgotPassword.css";

function ResetPassword(){
    const location=useLocation();

    const navigate=useNavigate();

    const [otp,setOtp]=useState("");

    const [password,setPassword]=useState("");

    const email=location.state?.email || "";

    const handleSubmit=async(e)=>{

        e.preventDefault();

        const response=await fetch("http://127.0.0.1:8001/reset-password",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                email,

                otp,

                new_password:password

            })

        });

        const data=await response.json();

        if(!response.ok){

            alert(data.detail);

            return;

        }

        alert(data.message);

        navigate("/login");

    };

    return (
        <div className="forgot-page">
            <div className="forgot-card">

                <div className="forgot-header">
                    <h2>Reset Password</h2>
                    <p>
                        Enter the OTP sent to your email and choose a new password.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="forgot-group">
                        <label>Email Address</label>

                        <input
                            value={email}
                            readOnly
                        />
                    </div>

                    <div className="forgot-group">
                        <label>OTP</label>

                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            required
                        />
                    </div>

                    <div className="forgot-group">
                        <label>New Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            required
                        />
                    </div>

                    <button className="forgot-btn">
                        Reset Password
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

export default ResetPassword;