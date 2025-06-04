import React, { useState } from 'react';
import '../Style/ManageCustomers.css';

const dummyCustomers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
];

const ManageCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState(dummyCustomers);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedList = customers.filter(customer => customer.id !== id);
    setCustomers(updatedList);
  };

  return (
    <div className="manage-customers-container">
      <h1>Manage Customers</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredCustomers.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No customers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomers;
