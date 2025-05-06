import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (email) {
      console.log(`Reset password link sent to ${email}`);
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="forgot-password">
      <h1>CrownRealms</h1>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;