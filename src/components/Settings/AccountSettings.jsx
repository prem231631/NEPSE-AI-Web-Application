import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AccountSettings({ user }) {

    const navigate = useNavigate();

    return (
        <div className="settings-card account-card">
            <div className="account-info">
                <div className="account-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>

                <div className="account-details">
                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                    <span>Age : {user.age}</span>
                </div>
            </div>

            <button
                className="settings-btn"
                onClick={() => navigate("/profile")}
            >
                <FiUser />
                Edit Profile
            </button>
        </div>
    );
}

export default AccountSettings;