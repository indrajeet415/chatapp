import React from "react";
import "./style.scss";


function Login() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">CHAT APP</span>
        <span className="title">Login</span>
        <form className="user-details">
         
          <input type="email" placeHolder="email" />
          <input type="password" placeHolder="password" />
         
          <button>Signin</button>
        </form>
        <p>Don't you have an account?Register</p>
      </div>
    </div>
  );
}

export default Login;
