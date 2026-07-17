import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

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

    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Forgot Password</h2>

                <p>Enter your registered email address.</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button className="login-btn">
                        {loading ? "Sending..." : "Send OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;