import {useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import "../styles/login.css";

function ResetPassword(){
    const location=useLocation();

    const navigate=useNavigate();

    const [otp,setOtp]=useState("");

    const [password,setPassword]=useState("");

    const email=location.state?.email || "";

    const handleSubmit=async(e)=>{

        e.preventDefault();

        const response=await fetch("http://127.0.0.1:8000/reset-password",{

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

    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Reset Password</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>

                        <input
                            value={email}
                            readOnly
                        />
                    </div>

                    <div className="input-group">
                        <label>OTP</label>

                        <input
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>New Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <button className="login-btn">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;