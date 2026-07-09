import "../styles/login.css";
import {HiOutlineCpuChip} from "react-icons/hi2";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Login() {
    return(
        <div className="login-page">
            <div className="login-card">
                {/* logo */}
                <div className="login-logo">
                    <div className="login-box">
                        <HiOutlineCpuChip/>
                    </div>

                    <h1>NEPSE AI</h1>
                </div>

                {/* Header */}
                <div className="login-header">
                    <h2>Welcome Back!</h2>

                    <p>Sign in to access your AI-powered stock analysis dashboard.</p>
                </div>

                {/* Form */}
                <form className="login-form">
                    <div className="input-group">
                        <label>Email</label>

                        <input type="email" placeholder="Enter your mail"/>
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input type="password" placeholder="Enter your password"/>
                    </div>

                    <div className="login-options">
                        <label><input type="checkbox"/>Remember me</label>

                        <a href="#"> Forgot password?</a>
                    </div>

                    <button className="login-btn">Sign In</button>
                </form>

                {/* Footer */}
                <div className="login-footer">
                    Don't have an account? <Link to="/register">Create Account</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;