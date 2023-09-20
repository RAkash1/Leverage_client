import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../comp/Nav";
import Kahbab from "../comp/kahbab";
import Edit from "../comp/edit";
import Done from "../assets/check.png";
import circle from "../assets/circle.png";
import add from "../assets/add.png";
import "./dashboard.css";
export default function Dashboard() {
  let Navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("logeduser");
    if (user === null) {
      Navigate("/login");
    }
  }, []);
  return (
    <div>
      <Nav />
      <div className="dashboard">
      <div className="list_div">
        <div className="list_head">
          <h2>My Tasks</h2>
          <Kahbab />
        </div>
        <div className="list_body" style={{ padding: "10px" }}>
          <div className="list_title">
            <img src={add} alt="plus" style={{ height: 40 }} />
            <h3>Add a task</h3>
          </div>
          <ul className="list" style={{ margin: 0, padding: 0 }}>
            <li>
              <div>
                <img src={circle} alt="circle" style={{ height: 40 }} />
                <span>Task 1</span>
              </div>
              <Edit />
            </li>
          </ul>
          <h2 style={{ color: "#288A28", fontWeight: 500 }}>Completed</h2>
          <ul className="list" style={{ margin: 0, padding: 0, color: "#288A28" }}>
            <li>
            <div>
              <img src={Done} alt="done" style={{ height: "32px" }} />
              <span>Task 1</span>
            </div>
            </li>
          </ul>
        </div>
      </div>
      <img src={add} className="add" />
    </div>
    </div>
  );
}
