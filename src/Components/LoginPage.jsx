import React, { useState } from 'react';

// Login Component
const LoginPage = ({ toggleForm }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', loginForm);
    // Add login logic here
  };

  return (
    <div>
      <h2>Login </h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          Register here
        </span>
      </p>
    </div>
  );
};

export default LoginPage;