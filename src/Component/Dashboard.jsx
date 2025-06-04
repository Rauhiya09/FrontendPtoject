// src/Component/Dashboard.js
import React from 'react';
import '../Style/Dashboard.css';

const statItems = [
  { label: 'Customers', count: 120 },
  { label: 'Bookings Made', count: 75 },
  { label: 'Payments', count: 45 },
  { label: 'Buildings', count: 15 },
  { label: 'Properties', count: 35 }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-grid">
        {statItems.map((item, index) => (
          <div key={index} className="dashboard-card">
            <div className="card-count">{item.count}</div>
            <div className="card-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
