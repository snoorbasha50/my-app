// import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css"
// import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <Link className="nav-home"  to="/">Home</Link>
        <Link className="nav-home"  to="/About">About</Link>
        <Link className="nav-home"  to="/Books">Books</Link>
        <Link className="nav-home"  to="/Login">Login</Link>
        
      </nav>
    </>
  );
};