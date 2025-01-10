import React from 'react';

const HeroSection: React.FC = () => (
    <section className="hero">
        <div className="container hero-content">
            <h1>Maki Security Consultancy</h1>
            <p>Your Trusted Security Partner 24/7.</p>
            <div className="hero-buttons">
                <button className="btn primary" id="ctaButton">Get Started</button>
                <button className="btn secondary" id="registerButton">Learn More</button>
            </div>
        </div>
    </section>
);

export default HeroSection;
