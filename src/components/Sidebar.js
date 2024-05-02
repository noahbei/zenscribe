import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../logo.svg';
import User from "./User";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
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

  const AStyle = {
    display: "inline-block", // Display as inline-block to fit the content
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    border: "none", // Remove button border
    background: "none", // Remove button background
  };

  const NavLinkStyleSelected = {
    display: "block",
    padding: "10px 20px",
    color: "#97C5ED",
    textDecoration: "none",
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
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
      {currentUser ? (
        <div style={AStyle} onClick={logout}>Log Out</div>
      ) : (
        <NavLink to={'/'} style={NavLinkStyle}>Log In</NavLink>
      )}
    </div>
  );
};

export default Sidebar;
