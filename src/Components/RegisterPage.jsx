import { useState } from "react";

// Register Component
const RegisterPage = ({ toggleForm }) => {
    const [registerForm, setRegisterForm] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const handleRegisterChange = (e) => {
      setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      console.log('Registering with', registerForm);
      // Add registration logic here
    };
  
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={registerForm.username}
              onChange={handleRegisterChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={registerForm.email}
              onChange={handleRegisterChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={handleRegisterChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
            Login here
          </span>
        </p>
      </div>
    );
  };

  export default RegisterPage;