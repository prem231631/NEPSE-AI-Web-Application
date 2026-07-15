import { FiLock, FiShield, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SecuritySettings() {

    const navigate = useNavigate();

    return (
        <div className="settings-card security-card">
            <div className="card-header">
                <h2>Security</h2>

                <p>Manage your account security.</p>
            </div>

            <div className="security-list">
                <div className="security-item">
                    <div>
                        <FiLock className="security-icon"/>

                        <div>

                            <h4>Change Password</h4>

                            <span>Update your account password.</span>

                        </div>
                    </div>

                    <button
                        className="settings-btn"
                        onClick={() => navigate("/profile")}
                    >
                        Open
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecuritySettings;