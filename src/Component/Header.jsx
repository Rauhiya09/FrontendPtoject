import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      {/* Top header: logo and system name */}
      <div className="top-header">
        <img src="/Images/logo.png" alt="Logo" className="logo-image" />
        <span className="system-name">Real Estate Management System</span>
      </div>

      {/* Bottom header: navigation */}
      <nav className="bottom-header">
        <div className="center-section">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/property" className="nav-link">Property</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </div>
        <div className="right-section">
          <Link to="/register">
            <button className="signout-button">Sign In</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
