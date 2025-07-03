
import React from 'react';
import '../Style/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Real Estate Management System is your trusted partner in managing, booking, and exploring premium properties.</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To provide a seamless platform that bridges customers with available commercial and residential properties using modern GIS mapping and digital contract management.</p>
      </section>

      <section className="features-section">
        <h2>What We Offer</h2>
        <ul>
          <li> Secure customer authentication</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            {/* <img src="/images/team1.jpg" alt="Team member 1" />
            <h4>Fatma Yusuf</h4>
            <p>Founder & System Architect</p> */}
          </div>
          <div className="team-member">
            {/* <img src="/images/team2.jpg" alt="Team member 2" />
            <h4>Ahmed Nassor</h4>
            <p>Lead Developer</p> */}
          </div>
          <div className="team-member">
            {/* <img src="/images/team3.jpg" alt="Team member 3" />
            <h4>Zahara Ali</h4>
            <p>GIS Specialist</p> */}
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Real Estate Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
