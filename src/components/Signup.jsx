import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
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
        <h3>Create an account</h3>
      </div>
      <form id="loginform">
        <p className="login-username">
          <label>Email: *</label>
          <input
            type="text"
            name="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p className="login-password">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            required
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <p className="login-password">
          <label>Confirm Password*</label>
          <input
            type="password"
            name=""
            required
            className="login-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </p>
        <button className="login-button" onClick={signup}>
          Register
        </button>
        <p className="error">{error}</p>
      </form>
      <p className="single-login-field">
        Don't have an account? <span>Log in</span>
      </p>
    </div>
  );
};

export default Signup;
