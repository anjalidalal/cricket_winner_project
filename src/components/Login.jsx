import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        closeModal();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
      });
  };

  return (
    <div className="login-popup">
      <div className="login-heading">
        <h3>Login</h3>
      </div>
      <form id="loginform">
        <p className="login-username">
          <label>Email Address*</label>
          <input
            type="text"
            name=""
            className="login-input"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p className="login-password">
          <label>Password*</label>
          <input
            type="password"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            req
            className="login-input"
          />
        </p>
        <p className="login-remember">
          <label>
            <input
              name="rememberme"
              type="checkbox"
              id="rememberme"
              value="forever"
            />{" "}
            Remember Me
          </label>
        </p>
        <button className="login-button" onClick={login}>
          Login
        </button>
        <p className="error">{error}</p>
      </form>
      <p className="single-login-field">
        Don't have an account? <span>Register Now</span>
      </p>
    </div>
  );
};

export default Login;
