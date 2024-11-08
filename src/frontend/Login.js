import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword'; // Forgot Password component
import SignUp from './Signup'; // SignUp component
import './Login.css';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('Employee');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="login-container" id='login'>
      <div className="role-selection">
        <button
          className={selectedRole === 'Employee' ? 'active' : ''}
          onClick={() => setSelectedRole('Employee')}
        >
          Employee
        </button>
        <button
          className={selectedRole === 'User' ? 'active' : ''}
          onClick={() => setSelectedRole('User')}
        >
          User
        </button>
        <button
          className={selectedRole === 'Admin' ? 'active' : ''}
          onClick={() => setSelectedRole('Admin')}
        >
          Admin
        </button>
      </div>

      <div className="login-form">
        <h3>{selectedRole} Login</h3>
        <form>
          <div className="input-group">
            <label htmlFor="mobile-email">Mobile Number / Email</label>
            <input type="text" id="mobile-email" placeholder="Enter Number / Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" required />
            <a type="button" className="forgot-password" onClick={toggleForgotPassword}>
              Forgot Password?
            </a>
            <a type="button" onClick={toggleSignUp} className="signup">
              Sign Up
            </a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="helpline">
          Helpline Number: <span>1234567890</span>
        </div>
      </div>

      {showSignUp && <SignUp onClose={toggleSignUp} />} {/* Show SignUp modal */}
      {showForgotPassword && <ForgotPassword onClose={toggleForgotPassword} />} {/* Show Forgot Password modal */}
    </div>
  );
};

export default Login;
