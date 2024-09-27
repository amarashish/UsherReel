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
    <div className="loginRegisterDialogue">
      <div style={{ display: 'flex', alignSelf: 'flex-start', margin: '10px' }}>
        <img src='https://i.ibb.co/1XDPqtf/usher.png' style={{ height: '35px', width: '35px', margin: '16px 10px 0 10px' }} />
        <h2>Ushereel</h2>
      </div>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <input
            className='inputField'
            placeholder="Username"
            type="text"
            name="username"
            value={registerForm.username}
            onChange={handleRegisterChange}
          />
        </div>
        <div>
          <input
            className='inputField'
            placeholder="Email/Phone no."
            type="email"
            name="email"
            value={registerForm.email}
            onChange={handleRegisterChange}
          />
        </div>
        <div>
          <input
            className='inputField'
            placeholder="Password"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleRegisterChange}
          />
        </div>
        <div>
          <input
            className='inputField'
            placeholder="Confirm Password"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleRegisterChange}
          />
        </div>
        <button className="loginRegisterButton" type="submit">Register</button>
      </form>
      <p>
        Already on Ushereel?{' '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;