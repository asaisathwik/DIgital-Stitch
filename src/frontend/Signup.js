import React, { useState } from 'react';
import './Signup.css'; // For custom styles

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    experience: '',
    location: '',
    workplace: '',
    adminCode: ''
  });

  const [userType, setUserType] = useState('user'); // Default userType is 'user'

  // Function to handle switching between user types
  const handleUserTypeSwitch = (type) => {
    setUserType(type);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log(`Sign Up form submitted for: ${userType}`, formData);
    alert(`Sign Up form submitted for: ${userType}`);

    // After form submission, close the modal
    onClose();
  };

  return (
    <div className="signup-modal">
      <div className="modal-content">
        <h2>Sign Up</h2>

        {/* Buttons to switch between User, Employee, and Admin */}
        <div className="user-type-buttons">
          <button
            className={userType === 'user' ? 'active' : ''}
            onClick={() => handleUserTypeSwitch('user')}
          >
            User
          </button>
          <button
            className={userType === 'employee' ? 'active' : ''}
            onClick={() => handleUserTypeSwitch('employee')}
          >
            Employee
          </button>
          <button
            className={userType === 'admin' ? 'active' : ''}
            onClick={() => handleUserTypeSwitch('admin')}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Common input fields */}
          <div className="input-group">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              placeholder="Enter First Name" 
              value={formData.firstName} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              placeholder="Enter Last Name" 
              value={formData.lastName} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Email" 
              value={formData.email} 
              onChange={handleChange}
              required 
            />
          </div>

          {/* Fields specific to 'employee' */}
          {userType === 'employee' && (
            <>
              <div className="input-group">
                <label>Experience (years)</label>
                <input 
                  type="number" 
                  name="experience" 
                  placeholder="Enter Experience" 
                  value={formData.experience} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Location</label>
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Enter Location" 
                  value={formData.location} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Workplace</label>
                <input 
                  type="text" 
                  name="workplace" 
                  placeholder="Enter Workplace" 
                  value={formData.workplace} 
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* Fields specific to 'admin' */}
          {userType === 'admin' && (
            <div className="input-group">
              <label>Admin Code</label>
              <input 
                type="text" 
                name="adminCode" 
                placeholder="Enter Admin Code" 
                value={formData.adminCode} 
                onChange={handleChange}
              />
            </div>
          )}

          {/* Password fields */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter Password" 
              value={formData.password} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Re-enter Password" 
              value={formData.confirmPassword} 
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        {/* Close button */}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignUp;
