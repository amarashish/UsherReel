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
    <div className='loginDialogue'>
      <div style={{alignSelf:'flex-start', margin:'10px'}}>App Name</div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input placeholder="Email/Phone no." style={{ borderRadius: '15px', margin: '10px', padding:'8px' }}
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <input placeholder="Password" style={{ borderRadius: '15px', margin: '10px', padding:'8px' }}
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
          <div style={{padding:'10px'}}>
            <input type="checkbox" id="checkboxId" name="checkboxName" value="checkboxValue" ></input>
            <label for="checkboxId" style={{marginLeft:'10px'}}>Remember me</label>
          </div>
          <p>By clicking agree & join or continue you agree to the Ushereel <br /> <a href='' target='_black'>User Agreement.</a> <a href='' target='_black'>Privacy Policy.</a> and <a href='' target='_black'> Cookie Policy</a></p>
        </div>
        <button style={{ borderRadius: '20px', backgroundColor: 'blue', color: 'black', padding:'15px'}} type="submit"><b>Agree & Join</b></button>
      </form>
      <div style={{ display: 'flex', margin:'10px', alignItems:'center' }}>
        <hr style={{ width: '30rem', border: ' 1.2px solid black' }} />
        <h2>or</h2>
        <hr style={{ width: '30rem', border: '1.2px solid black' }} />
      </div>
      <div>
        <img src='https://i.ibb.co/ZH9XSq0/fb.jpg' style={{height:'50px', widows:'50px', margin:'8px'}} 
        />
        <img src='https://i.ibb.co/nmpP7PD/Google-Symbol.png' style={{height:'50px', widows:'50px', margin:'8px'}} />
        <img src='https://i.ibb.co/80pwHxM/apple.png' style={{height:'50px', widows:'50px', margin:'8px'}} />
      </div>
      <p>
        Already on Ushereel? {' '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          Sign in
        </span>
      </p>
    </div>
  );
};

export default LoginPage;