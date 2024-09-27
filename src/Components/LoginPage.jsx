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
    <div className='loginRegisterDialogue'>
      <div style={{ display: 'flex', alignSelf: 'flex-start', margin: '10px' }}>
        <img src='https://i.ibb.co/1XDPqtf/usher.png' style={{ height: '35px', width: '35px', margin: '16px 10px 0 10px' }} />
        <h2>Ushereel</h2>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input className='inputField' placeholder="Email/Phone no."
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <input className='inputField' placeholder="Password"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
          <div style={{ padding: '10px', marginRight: '63px' }}>
            <input type="checkbox" id="checkboxId" name="checkboxName" value="checkboxValue" ></input>
            <label for="checkboxId" style={{ marginLeft: '10px', fontSize: '15px' }}>Remember me</label>
          </div>
          <p style={{ fontSize: '16px' }}>By clicking agree & join or continue you agree to the Ushereel <br /> <a href='.' target='_blank' >User Agreement.</a> <a href='' target='_blank' >Privacy Policy.</a> and <a href='' target='_blank'> Cookie Policy</a></p>
        </div>
        <button className='loginRegisterButton' type="submit"><b>Agree & Join</b></button>
      </form>
      <div style={{ display: 'flex', margin: '10px', alignItems: 'center' }}>
        <hr style={{ width: '15em', border: ' 1.2px solid black' }} />
        <h2>or</h2>
        <hr style={{ width: '15em', border: '1.2px solid black' }} />
      </div>
      <div>
        <img src='https://i.ibb.co/ZH9XSq0/fb.jpg' style={{ height: '50px', widows: '50px', margin: '8px' }}
        />
        <img src='https://i.ibb.co/nmpP7PD/Google-Symbol.png' style={{ height: '50px', widows: '50px', margin: '8px' }} />
        <img src='https://i.ibb.co/80pwHxM/apple.png' style={{ height: '50px', widows: '50px', margin: '8px' }} />
      </div>
      <p>
        New to Ushereel? {' '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          Create an account
        </span>
      </p>
    </div>
  );
};

export default LoginPage;