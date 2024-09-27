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
      <div style={{display:'flex', alignSelf:'flex-start', margin:'10px'}}>
        <img src='https://i.ibb.co/1XDPqtf/usher.png' style={{height:'35px', width:'35px', margin:'16px 10px 0 10px'}}/>
        <h2>Ushereel</h2>
        </div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input placeholder="Email/Phone no." style={{ borderRadius: '15px', margin: '10px', padding:'10px 15px' }}
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <input placeholder="Password" style={{ borderRadius: '15px', margin: '10px', padding:'10px 15px' }}
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
          <div style={{padding:'10px', marginRight:'63px'}}>
            <input type="checkbox" id="checkboxId" name="checkboxName" value="checkboxValue" ></input>
            <label for="checkboxId" style={{marginLeft:'10px', fontSize:'15px'}}>Remember me</label>
          </div>
          <p style={{fontSize:'16px'}}>By clicking agree & join or continue you agree to the Ushereel <br /> <a href='' target='_black'>User Agreement.</a> <a href='' target='_black'>Privacy Policy.</a> and <a href='' target='_black'> Cookie Policy</a></p>
        </div>
        <button style={{margin:'10px', borderRadius: '20px', backgroundColor: '#315cfd', color: 'white', padding:'15px 30px', fontSize:'17px'}} type="submit"><b>Agree & Join</b></button>
      </form>
      <div style={{ display: 'flex', margin:'10px', alignItems:'center' }}>
        <hr style={{ width: '15em', border: ' 1.2px solid black' }} />
        <h2>or</h2>
        <hr style={{ width: '15em', border: '1.2px solid black' }} />
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