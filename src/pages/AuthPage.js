import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  const authPageStyle = {
    marginLeft: "200px",
    padding: "0 20px",
  };

  return (
    <div style={authPageStyle}>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <p>
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <Link to="#" onClick={toggleAuthMode}>
          {isLogin ? 'Signup' : 'Login'}
        </Link>
      </p>
    </div>
  );
};

export default AuthPage;
