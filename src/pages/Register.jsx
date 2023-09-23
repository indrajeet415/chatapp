import React from "react";
import "./style.scss";
import ADD from "../img/addAvatar.png"

function Register() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">CHAT APP</span>
        <span className="title">Register</span>
        <form className="user-details">
          <input type="text" placeHolder="Name" />
          <input type="email" placeHolder="email" />
          <input type="password" placeHolder="password" />
          <input style={{display:"none"}} type="file" placeHolder="file" />
          <label htmlfor="file">
            <img src={ADD} alt=" " />
            <span>add an avatar</span>
          </label>
          <button>Signup</button>
        </form>
        <p>Do you have an account?Login</p>
      </div>
    </div>
  );
}

export default Register;
