// src/Component/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const items = [
    { name: 'Dashboard', path: '/staff/dashboard' },
    { name: 'Manage Customers', path: '/staff/customers' },
    { name: 'Manage Bookings', path: '/staff/bookings' },
    { name: 'Manage Payments', path: '/staff/payments' },
    { name: 'Manage Properties', path: '/staff/properties' },
    { name: 'Settings', path: '/staff/settings' },
    { name: 'Reports', path: '/staff/reports' },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Staff Menu</h2>
      <ul className="sidebar-menu">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="sidebar-item"
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
