import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as Title } from '../zenscribe-title.svg'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom';
const Separator = () => (
  <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
    <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
    <div style={{ margin: '0 10px', color: 'black' }}>or</div>
    <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
  </div>
);


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      isLogin ? await signInWithEmailAndPassword(auth, email, password) : await createUserWithEmailAndPassword(auth, email, password);
      setRedirectToHome(true);
    } catch (error) {
      console.error(error)
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      setRedirectToHome(true);
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

  const LogoStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    height: "200px",
    width: "200px"
  }

  const TitleStyle = {
    maxWidth: '800px'
  }

  if (redirectToHome) {
    return <Navigate to="/Home" />;
  }

  return (
    <div style={authPageStyle}>
      <Title style={TitleStyle}/>
      <Logo style={LogoStyle}/>
      <div>
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
        <button onClick={logout}>logout</button>
      </form>
      <Separator/>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      
      <p>
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <Link to="#" onClick={toggleAuthMode}>
          {isLogin ? 'Signup' : 'Login'}
        </Link>
      </p>
      </div>
    </div>
  );
};

export default AuthPage;
