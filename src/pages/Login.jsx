import React, { useState } from "react";
import "./style.scss";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">CHAT APP</span>
        <span className="title">Login</span>
        <form className="user-details" onSubmit={handleSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />

          <button>Signin</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't you have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
