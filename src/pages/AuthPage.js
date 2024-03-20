import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error)
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error)
    }
  };

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  const authPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',

    padding: '2px',
    margin: 'auto',
  };

  const Logostyle = {
    width: '250px', 
    height: '250px',
    marginBottom: '1px',
    
  }

  return (
    <div style={authPageStyle}>
      <Logo style ={Logostyle} />
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <button onClick={logout}>logout</button>
      <p>Current Account: <span>{auth?.currentUser?.email}</span></p>

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
