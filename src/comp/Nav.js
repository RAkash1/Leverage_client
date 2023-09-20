import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="nav"
      style={{
        width: "100%",
        backgroundColor: "#1C437E",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="Logo"
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          marginLeft: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
      <img src={logo} style={{height:"70px"}} />
      <span>TASKBOARD</span>
      </div>
      <div className="profile"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "150px",
        }}
      >
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          src="https://marketplace.canva.com/EAFfyNv3EC4/2/0/1600w/canva-orange-black-modern-facebook-profile-picture-17RW-gVJo5k.jpg"
          onClick={() => setShow(!show)}
        />
        <div
          className="drop"
          style={{
            position: "absolute",
            backgroundColor: "#1C437E",
            padding: "20px 0px",
            top: "100%",

            left: 0,
            width: "150px",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              textAlign: "center",
              margin: 0,
              padding: 0,
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "1.25rem",
              gap: "10px",
            }}
          >
            <li><Link to="/" style={{color:"white",textDecoration:"none"}}>Calculator</Link></li>
            <li><Link to="/" style={{color:"white",textDecoration:"none"}}>Wheather</Link></li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
