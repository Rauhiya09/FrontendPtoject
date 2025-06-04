import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';

const Home = () => {
  const buildings = [
  {
    buildId: 'B001',
    buildcode: 'KIJANGWANI',
    buildname: 'Kijangwani Plaza',
    description: 'Mna maduka 300',
    location: 'Kariakoo',
    status: 'Maduka yapo',
    image: '/Images/kijangwani.png'
  },
  {
    buildId: 'B002',
    buildcode: 'TRAIN',
    buildname: 'Jumba La Train',
    description: 'Jengo kubwa la biashara lenye maduka mengi',
    location: 'Mwananyamala',
    status: 'Maduka yamekamilika',
    image: '/Images/train.png'
  },
  {
    buildId: 'B003',
    buildcode: 'MICHENZANI',
    buildname: 'Michenzani Mall',
    description: 'Maduka ya kisasa ya biashara',
    location: 'Michenzani',
    status: 'Yapo kwa matumizi',
    image: '/Images/michenzani.png'
  }
];
return (
    <div className="home-container">
      {/* Search Section */}
      <section className="search-hero">
        <h1 className="search-heading">OUR STORES</h1>
        <div className="search-input-container">
          <input 
            type="text" 
            placeholder="Enter location, building name" 
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </section>

      {/* Properties Section */}
      <section className="properties-section">
        <h2>BUILDINGS</h2>
        <div className="properties-grid">
          {buildings.map((building) => (
  <Link to={`/building/${building.buildId}`} key={building.buildId} className="property-card">
    <div className="property-image-placeholder">
      <img src={building.image} alt={building.buildname} />
    </div>
    <div className="property-info">
      <h3>{building.buildname}</h3>
      <p><strong>Code:</strong> {building.buildcode}</p>
      <p><strong>Description:</strong> {building.description}</p>
      <p><strong>Location:</strong> {building.location}</p>
      <p><strong>Status:</strong> {building.status}</p>
    </div>
  </Link>
))}

        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <h2>Location Map</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=1gpRLmF5MZocuAn_Vm1yZY-6YB6THPg8&ehbc=2E312F&noprof=1" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map Location"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Real Estate Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
