import React from "react";
import "./style.css";


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
          <input type="file" placeHolder="file" />

          <button>Signup</button>
        </form>
        <p>Do you have an account?Login</p>
      </div>
    </div>
  );
}

export default Register;
