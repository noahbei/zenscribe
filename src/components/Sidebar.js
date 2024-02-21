import React from "react";

const Sidebar = () => {
  const sidebarStyle = {
    height: "100%",
    width: "200px",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#333",
    paddingTop: "20px",
  };

  const linkStyle = {
    display: "block",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={sidebarStyle}>
      <a href="#" style={linkStyle}>
        Home
      </a>
      <a href="#" style={linkStyle}>
        About
      </a>
      <a href="#" style={linkStyle}>
        Services
      </a>
      <a href="#" style={linkStyle}>
        Contact
      </a>
    </div>
  );
};

export default Sidebar;
