import React, { useState } from 'react';
import Editlogo from "../assets/edit.png";
function Edit({ initialValue, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
        <div style={{ width:"100vw",height:"100vh",position:"absolute",top:0,left:0,background:" rgba(0,0,0, 0.4)",display:"flex",justifyContent:"center",alignItems:"center" }}>
        <div style={{ width: "350px", height: "250px", padding: "20px",backgroundColor:"white" ,display:"flex",flexDirection:"column",gap:"30px" ,opacity:1}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 25px",
            }}
          >
            <span>delete</span>
            <span onClick={()=>setIsEditing(false)}>close</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span>Task 1</span>
            <input type="text" placeholder="Add d" />
            <span>Add date</span>
            <span>Move to another list</span>
          </div>
        </div>
      </div>
        </div>
      ) : (
        <div>
        <image src={Editlogo} onClick={handleEditClick} alt="edit" style={{height:"30px",width:"30px"}}/>
          <img src={Editlogo} onClick={handleEditClick} alt="edit" style={{height:"30px",width:"30px"}}/>
        </div>
      )}
    </div>
  );
}

export default Edit;
