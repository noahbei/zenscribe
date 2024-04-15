import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, style }) => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
