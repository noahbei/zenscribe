import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../logo.svg';
import User from "./User";

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

  const NavLinkStyle = {
    display: "block",
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
  };

  const NavLinkStyleSelected = {
    display: "block",
    padding: "10px 20px",
    color: "#97C5ED",
    textDecoration: "none",
  };

  return (
    <div style={sidebarStyle}>
      <Logo/>
      <User/>
      <NavLink to={'/Home/dashboard'} style={({ isActive }) => {
              return isActive ? NavLinkStyleSelected : NavLinkStyle;
            }}>
        Dashboard
      </NavLink>
      <NavLink to={'/Home/journal'} style={({ isActive }) => {
              return isActive ? NavLinkStyleSelected : NavLinkStyle;
            }}>
        Journal
      </NavLink>
      <NavLink to={'/Home/contact'} style={({ isActive }) => {
              return isActive ? NavLinkStyleSelected : NavLinkStyle;
            }}>
        Contact
      </NavLink>
      <NavLink to={'/Home/entries'} style={({ isActive }) => {
              return isActive ? NavLinkStyleSelected : NavLinkStyle;
            }}>
        Entries
      </NavLink>
    </div>
  );
};

export default Sidebar;
