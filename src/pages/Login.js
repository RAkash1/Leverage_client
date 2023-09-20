import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    console.log(data);
  };
  return (
    <div className="log">
      <h1 className="signup">Log in!</h1>
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="logterms">
          <div>
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label for="terms">Remember me</label>
          </div>
          <div>
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
