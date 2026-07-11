import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">
                <h3>NEPSE AI</h3>
                <p>AI-powered stock prediction and market insights for Nepal Stock Exchange.</p>
            </div>

            <div className="footer-bottom">

                <p>© 2026 NEPSE AI. All rights reserved.</p>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;