import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';

// Main Component to Toggle Between Login and Register
const AuthPage = (userType) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginPage toggleForm={toggleForm} />
      ) : (
        <RegisterPage toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
