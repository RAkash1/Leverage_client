import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    let user = localStorage.getItem("logeduser");
    if (user !== null) {
      Navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      username: username,
      password: password,
    };
    let alljson = localStorage.getItem("users");
    if (alljson === null) {
      alljson = "[]";
    }
    let allusers = JSON.parse(alljson);
    let user = allusers.find((user) => {
      return user.username === data.username && user.password === data.password;
    });
    console.log(user);  
    if (user === undefined) {
      alert("user not exist");
      return;
    }
    else{
      localStorage.setItem("logeduser", JSON.stringify(user));
      console.log("user exist");
      Navigate("/");
    }
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
