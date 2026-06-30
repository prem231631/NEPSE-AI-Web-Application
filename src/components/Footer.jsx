import "../styles/footer.css";
import { HiOutlineCpuChip } from "react-icons/hi2";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-top">

                {/* Logo */}

                <div className="footer-logo">

                    <div className="logo-box">
                        <HiOutlineCpuChip />
                    </div>

                    <h2>NEPSE AI</h2>

                </div>

                {/* Company */}

                <div className="footer-links">

                    <h3>Company</h3>

                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Contact</a>

                </div>

                {/* Resources */}

                <div className="footer-links">

                    <h3>Resources</h3>

                    <a href="#">Documentation</a>
                    <a href="#">API</a>
                    <a href="#">Support</a>

                </div>

                {/* Legal */}

                <div className="footer-links">

                    <h3>Legal</h3>

                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 NEPSE AI. All rights reserved.

            </div>

        </footer>
    );
}

export default Footer;