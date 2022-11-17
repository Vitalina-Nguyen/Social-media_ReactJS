import React from "react";
import s from "./../../Navbar.module.css";

function Friend(props) {
  
  return (
    <div className= {s.friendBox}>
      <img src = {props.photo} alt="photo" />
      <div>{props.name}</div>
    </div>
  );
}

export default Friend;
