import React, { useState } from 'react';
import '../Style/LoginRegister.css';


function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    address: '',
    telNo: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log('Registering user:', formData);
      // TODO: Connect to registration API
    } else {
      console.log('Logging in:', {
        username: formData.username,
        password: formData.password
      });
      // TODO: Connect to login API
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/Images/logo.png" alt="Company Logo" className="logo" />
        <h2>Real Estate Management System</h2>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
              <select name="gender" required onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
              <input type="tel" name="telNo" placeholder="Telephone Number" required onChange={handleChange} />
            </>
          )}
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>

        {!isRegistering && (
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
        )}

        <p className="toggle-link">
          {isRegistering ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsRegistering(false)}>Login</span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span onClick={() => setIsRegistering(true)}>Register</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default LoginRegister;
