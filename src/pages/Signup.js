import React from "react";
import { useState } from "react";
import "../App.css";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    console.log(data);
  };
  return (
    <div className="log">
      <h1 className="signup">Sign Up</h1>
      <form className="sign" onSubmit={handleSubmit}>
        <div className="input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter username"
          />
        </div>
        <div className="input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="terms-cond">
          <input type="checkbox" id="terms" name="terms" value="terms" />
          <label for="terms">I agree to the Terms of Use</label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
