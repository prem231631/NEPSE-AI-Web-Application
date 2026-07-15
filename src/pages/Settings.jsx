import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import AccountSettings from "../components/Settings/AccountSettings";
import api from "../services/api";

import "../styles/settings.css";

function Settings() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setUser(res.data);
        });

    }, []);

    return (
        <div className="dashboard-layout">
            <Sidebar
                sidebarOpen={sidebarOpen}
            />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="settings-page">
                    <h1 className="settings-title">
                        Settings
                    </h1>

                    <AccountSettings user={user}/>
                </div>
            </div>
        </div>
    );
}

export default Settings;