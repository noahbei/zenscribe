import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  const authPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px', // Adjust as needed to fit your design

    padding: '2px',
    //transform: 'scale(1.75)',
    margin: 'auto',
  };

  const Logostyle = {
    width: '250px', // Adjust as needed
    height: '250px', // Adjust as needed
    marginLeft: '45px',
    marginBottom: '1px',
    
  }

  return (
    <div style={authPageStyle}>
      <Logo style ={Logostyle} />
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
