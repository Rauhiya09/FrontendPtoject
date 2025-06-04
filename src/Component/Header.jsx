import React from 'react';
import '../Style/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="navbar">
        <div className="left-section">
          <img src="/Images/logo.png" alt="Logo" className="logo-image" />
          <span className="system-name">Real Estate</span>
        </div>

        <div className="center-section">
          <a href="/" className="nav-link">Home</a>
          <a href="/property" className="nav-link">Property</a>
          <a href="/about" className="nav-link">About Us</a>
        </div>

        <div className="right-section">
          <button className="signout-button">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
