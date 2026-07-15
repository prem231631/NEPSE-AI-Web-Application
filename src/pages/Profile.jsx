import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import api from "../api";

import "../styles/profile.css";

function Profile() {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setUser(res.data);
        })
        .catch(() => {
            localStorage.removeItem("token");
            navigate("/login");
        })
        .finally(() => {
            setLoading(false);
        });

    }, []);

    if (loading) {
        return <h2 style={{color:"white"}}>Loading...</h2>;
    }

    return (
        <div className="dashboard-layout">
            <Sidebar sidebarOpen={sidebarOpen}/>

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar setSidebarOpen={setSidebarOpen}/>

                <div className="profile-card">
                    <div className="profile-avatar">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2>My Profile</h2>

                    <div className="profile-info">
                        <div className="info-group">
                            <label>Full Name</label>

                            <input
                                value={user.name}
                                readOnly
                            />
                        </div>

                        <div className="info-group">
                            <label>Email</label>

                            <input
                                value={user.email}
                                readOnly
                            />
                        </div>

                        <div className="info-group">
                            <label>Age</label>

                            <input
                                value={user.age}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;