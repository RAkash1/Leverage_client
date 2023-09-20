import React from "react";

export default function Nav() {
  return (
    <div className="nav" style={{backgroundColor:"#1C437E",display:"flex",justifyContent:"space-between",padding:"15px"}}>
      <div className="Logo" style={{
        color:"white",fontSize:"30px",fontWeight:"bold",marginLeft:"20px"
      }}>TASKBOARD</div>
      <div>
        <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src="https://marketplace.canva.com/EAFfyNv3EC4/2/0/1600w/canva-orange-black-modern-facebook-profile-picture-17RW-gVJo5k.jpg"></img>
      </div>
    </div>
  );
}
