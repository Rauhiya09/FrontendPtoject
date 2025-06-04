import React, { useState } from 'react';
import '../Style/Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name_business: '',
    size_of_space: '',
    type_of_business: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // TODO: Send formData to API
    alert('Booking submitted successfully!');
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Book A Property</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name_business"
            placeholder="Name of Business"
            value={formData.name_business}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="size_of_space"
            placeholder="Size of Space"
            value={formData.size_of_space}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="type_of_business"
            placeholder="Type of Business"
            value={formData.type_of_business}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
