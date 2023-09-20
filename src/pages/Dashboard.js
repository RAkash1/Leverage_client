import React from "react";
import Nav from "../comp/Nav";
import Kahbab from "../comp/kahbab";
import Add from "../comp/add";
import Edit from "../comp/edit";
import Done from "../icons8-check-30.png";
import Circle from "../comp/circle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <div
        className="list_div"
        style={{ border: "1px solid #1C437E", width: "300px" }}
      >
        <div
          className="list_head"
          style={{
            color: "#1C437E",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <h2>My Tasks</h2>
          <span>
            <Kahbab></Kahbab>
          </span>
        </div>
        <div className="list_body" style={{ padding: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              className="add"
              style={{
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                backgroundColor: "#1C437E",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "aliceblue",
              }}
            >
              +
            </div>
            <h3>Add a task</h3>
          </div>
          <ul style={{ margin: 0, padding: 0 }}>
            <li
              style={{
                display: "flex",
                listStyle: "none",
                width: "250px",
                gap: "20px",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Circle />
                <span>Task 1</span>
              </div>
              <Edit/>
            </li>
          </ul>
          <h2 style={{ color: "#288A28", fontWeight: 500 }}>Completed</h2>
          <ul style={{ margin: 0, padding: 0, color: "#288A28" }}>
            <li
              style={{
                display: "flex",
                listStyle: "none",
                width: "200px",
                gap: "20px",
                alignContent: "center",
              }}
            >
              <img
                src={Done}
                alt="done"
                style={{ width: "30px", height: "30px" }}
              />
              <span>Task 1</span>
            </li>
          </ul>
        </div>
      </div>
      <Add />
    </div>
  );
}
