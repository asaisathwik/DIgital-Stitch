import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({ onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [step, setStep] = useState(1); // Track which step the user is on
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // Assuming email/phone verification is successful
    console.log('Password reset request for:', emailOrPhone);
    setStep(2); // Move to the next step (password reset)
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Handle password reset logic here
      console.log('Password successfully reset');
      alert('Password successfully reset!');
      onClose(); // Close the modal after success
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <div className="forgot-password-modal">
      <div className="modal-content">
        {step === 1 ? (
          <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmitEmail}>
              <div className="input-group">
                <label htmlFor="email-phone">Enter Email or Phone Number</label>
                <input
                  type="text"
                  id="email-phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Enter Email or Phone"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Set New Password</h2>
            <form onSubmit={handleResetPassword}>
              <div className="input-group">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter Password"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Reset Password</button>
            </form>
          </div>
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
