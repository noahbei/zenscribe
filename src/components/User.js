import React from 'react';
import { auth } from '../config/firebase';

const User = () => {
  const UserStyle = {
    display: "block",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <div style={UserStyle}>
      <p>Current Account: <span>{auth?.currentUser?.email}</span></p>
    </div>
  );
}

export default User;
