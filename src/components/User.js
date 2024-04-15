import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';

const User = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const UserStyle = {
    display: "block",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={UserStyle}>
      {currentUser ? (
        <p>Current Account: <span>{currentUser.email}</span></p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

export default User;
