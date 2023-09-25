import React from "react";
import { signOut } from "firebase/auth"
import "../pages/style.scss";
import { auth } from "../firebase"; 
import CurrentUser  from "../pages/Register";


const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">CHAT APP</span>
      <div className="user">
      <img src="{Current.photoURL}" alt="" /> 
        <span>{CurrentUser.displayName}</span>
      </div>
      <button onClick = {() => signOut(auth)}> logout</button>
    </div>
  );
};

export default Navbar;
