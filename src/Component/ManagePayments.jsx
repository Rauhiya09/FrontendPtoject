// src/Component/ManagePayments.js
import React, { useState } from 'react';
import '../Style/ManagePayments.css';

const dummyPayments = [
  { id: 1, name: 'Alice Johnson', controlNo: 'CN001', status: 'Paid' },
  { id: 2, name: 'Bob Smith', controlNo: 'CN002', status: 'Pending' },
  { id: 3, name: 'Charlie Brown', controlNo: 'CN003', status: 'Not Paid' },
];

const ManagePayments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPayments = dummyPayments.filter(payment =>
    payment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.controlNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-payments-container">
      <h1>Manage Payments</h1>
      <input
        type="text"
        placeholder="Search by name or control number"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="payment-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Control Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment, index) => (
            <tr key={payment.id}>
              <td>{index + 1}</td>
              <td>{payment.name}</td>
              <td>{payment.controlNo}</td>
              <td>
                <span className={`status ${payment.status.toLowerCase().replace(' ', '-')}`}>
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
          {filteredPayments.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No payments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePayments;
