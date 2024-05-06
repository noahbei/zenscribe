import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, style, type }) => {
  return (
    <button type={type} className="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
