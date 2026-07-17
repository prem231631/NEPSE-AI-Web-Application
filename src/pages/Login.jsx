import "../styles/login.css";
import {HiOutlineCpuChip} from "react-icons/hi2";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import api from "../services/api";
function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        setError("");

        try {
            setLoading(true);
            const response = await api.post("/login", {
                email: formData.email,
                password: formData.password,
            });

            // Save JWT token
            localStorage.setItem(
                "token",
                response.data.access_token
            );

            const user=await api.get("/me", {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            localStorage.setItem("userName", user.data.name);

            navigate("/dashboard", {
                state: {
                    user: user.data,
                    showWelcome: true,
                },
            });

        } catch (err) {
            if (err.response) {
                if (Array.isArray(err.response.data.detail)) {
                    setError(err.response.data.detail[0].msg);
                } else {
                    setError(err.response.data.detail);
                }
            } else {
                setError("Unable to connect to server.");
            }

        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {
        const theme =
            localStorage.getItem("landingTheme") || "dark";

        document.body.classList.remove("dark","light");

        document.body.classList.add(theme);
    }, []);

    

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

                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="login-options">
                        <label><input type="checkbox"/>Remember me</label>

                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button
                        className="login-btn"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
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