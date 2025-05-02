import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Account created with:', formData);
    setError('');
    // Additional signup logic
  };

  return (
    <div className="signup">
      <h1>Create Your Account</h1>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;