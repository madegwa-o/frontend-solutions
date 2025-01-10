import React from "react";


const Footer: React.FC = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-logo">
                    <a href="#">Maki Security</a>
                </div>
                <nav className="footer-nav">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#contact">Contact</a>
                    <a href="#">Help</a>
                </nav>
            </div>

            <div className="footer-links">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Sell</a></li>
                        <li><a href="#">Payment Methods</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Maki Security. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;