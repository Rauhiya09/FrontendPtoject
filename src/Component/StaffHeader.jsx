import React from 'react';
import '../Style/StaffHeader.css';

const StaffHeader = () => {
  return (
  <header className="staff-header">
  <div className="logo">
    <img src="/Images/logo.png" alt="Logo" className="logo-image" />
    <span>Real Estate</span>
  </div>
  <div className="admin">
    <span>Admin: John Doe</span>
    <button>Logout</button>
  </div>
  </header>

  );
};

export default StaffHeader;
