import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as Title } from '../zenscribe-title.svg'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom';
import Button from '../components/Button'

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

  const containerStyle = {
    backgroundColor: '#e5e5f7',
    opacity: 0.9,
    backgroundImage: 'radial-gradient(#444cf7 1.1px, #e5e5f7 1.1px)',
    backgroundSize: '22px 22px',
    height: "100vh",
    display: "flex"
  };
  
  const authStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '600px',
    width: '400px',
    padding: '20px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    backgroundColor: 'white'
  };

  const formStyle = {
    width: '100%',
    marginTop: '20px',
  };
  
  const labelStyle = {
    marginBottom: '5px',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
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
    return <Navigate to="/Home/dashboard" />;
  }

  return (
    <div style={containerStyle}>
      <div style={authStyle}>
        <Title style={TitleStyle}/>
        <Logo style={LogoStyle}/>
        <div>
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div>
              <label style={labelStyle} htmlFor="email">Email:</label>
              <input
                style={inputStyle}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="password">Password:</label>
              <input
                style={inputStyle}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={buttonContainerStyle}>
              <Button type="submit">{isLogin ? 'Login' : 'Signup'}</Button>
              <Button onClick={logout}>logout</Button>
            </div>
          </form>
          <Separator/>
          <Button onClick={signInWithGoogle}>Sign in with google</Button>
          
          <p>
            {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
            <Link to="#" onClick={toggleAuthMode}>
              {isLogin ? 'Signup' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
