import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import api from "../services/api";

import "../styles/profile.css";

function Profile() {

    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [loading, setLoading] = useState(true);

    const [editing, setEditing] = useState(false);

    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [passwordData, setPasswordData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: ""
    });

    const handlePasswordChange = (e) => {

        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handleChangePassword = async () => {
        if(passwordData.new_password !== passwordData.confirm_password){
            alert("Passwords do not match.");
            return;
        }

        try{
            const token = localStorage.getItem("token");

            const res = await api.put(
                "/change-password",
                passwordData,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );

        alert(res.data.message);

        setPasswordData({
            current_password:"",
            new_password:"",
            confirm_password:""
        });

        }catch(err){
            alert(err.response?.data?.detail || "Unable to change password.");
        }
    };

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

            setFormData({
                name: res.data.name,
                email: res.data.email,
                age: res.data.age
            });

        })
        .catch(() => {

            localStorage.removeItem("token");
            navigate("/login");

        })
        .finally(() => {

            setLoading(false);

        });

    }, [navigate]);



    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };



    const handleCancel = () => {

        setFormData({
            name: user.name,
            email: user.email,
            age: user.age
        });

        setEditing(false);

    };



    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await api.put(
                "/profile",
                {
                    name: formData.name,
                    age: Number(formData.age)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setUser(res.data);

            setFormData({
                name: res.data.name,
                email: res.data.email,
                age: res.data.age
            });

            setEditing(false);
            alert("Profile updated successfully.");

        } catch (err) {
            console.log(err);
            alert("Unable to update profile.");
        }

    };



    if (loading) {
        return (
            <h2 style={{ color: "white" }}>
                Loading...
            </h2>
        );
    }

    return (
        <div className="dashboard-layout">
            <Sidebar sidebarOpen={sidebarOpen} />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar setSidebarOpen={setSidebarOpen} />

                <div className="profile-card">
                    <div className="profile-avatar">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2>My Profile</h2>

                    <div className="profile-info">
                        <div className="info-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>

                        <div className="info-group">
                            <label>Email</label>

                            <input
                                type="email"
                                value={formData.email}
                                readOnly
                            />
                        </div>

                        <div className="info-group">
                            <label>Age</label>

                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                    </div>

                    <div className="profile-buttons">
                        {!editing ? (
                            <button
                                className="edit-btn"
                                onClick={() => setEditing(true)}
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    className="save-btn"
                                    onClick={handleSave}
                                >
                                    Save Changes
                                </button>

                                <button
                                    className="cancel-btn"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="password-card">
                    <h2>Change Password</h2>

                    <div className="info-group">
                        <label>Current Password</label>

                        <input
                            type="password"
                            name="current_password"
                            value={passwordData.current_password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="info-group">
                        <label>New Password</label>

                        <input
                            type="password"
                            name="new_password"
                            value={passwordData.new_password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="info-group">
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            name="confirm_password"
                            value={passwordData.confirm_password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="password-btn">
                        <button
                            className="save-btn"
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;