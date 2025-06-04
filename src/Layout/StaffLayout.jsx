import React from 'react';
import Sidebar from '../Component/Sidebar';
import StaffHeader from '../Component/StaffHeader';
import { Outlet } from 'react-router-dom';
import '../Style/StaffLayout.css';

const StaffLayout = () => {
  return (
    <div className="staff-layout">
      <StaffHeader />
      <div className="staff-body">
        <Sidebar />
        <main className="staff-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StaffLayout;
