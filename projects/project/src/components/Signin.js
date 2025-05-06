import React, { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = () => {
    const { username, password } = formData;

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    console.log('User signed in with:', formData);
    setError('');
    // Additional sign-in logic (e.g., API calls) can be added here
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <div className="language-selector">
        <span role="img" aria-label="Language">🇺🇸</span>
        <button>Change Language</button>
      </div>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p className="error-message">{error}</p>}
      <p>
        Don’t have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;