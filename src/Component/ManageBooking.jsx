import React, { useState } from 'react';
import '../Style/ManageBooking.css';

const dummyBookings = [
  { id: 1, customer: 'Alice Johnson', date: '2025-06-05', status: 'Pending' },
  { id: 2, customer: 'Bob Smith', date: '2025-06-06', status: 'Pending' },
  { id: 3, customer: 'Charlie Brown', date: '2025-06-07', status: 'Confirmed' },
];

const ManageBooking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState(dummyBookings);

  const filteredBookings = bookings.filter(booking =>
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updated);
  };

  return (
    <div className="manage-booking-container">
      <h1>Manage Bookings</h1>
      <input
        type="text"
        placeholder="Search customer name"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
              <td>
                {booking.status === 'Pending' && (
                  <>
                    <button className="confirm-btn" onClick={() => updateStatus(booking.id, 'Confirmed')}>Confirm</button>
                    <button className="deny-btn" onClick={() => updateStatus(booking.id, 'Denied')}>Deny</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {filteredBookings.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
