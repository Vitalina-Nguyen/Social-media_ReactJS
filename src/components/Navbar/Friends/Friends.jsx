import React from "react";
import Friend from './Friend/Friend';
import s from "./../Navbar.module.css";


function Friends(props) {

  let friendsElements = props.friends
    .map( (el) => <Friend name = {el.name} 
                          key = {el.id} 
                          id = {el.id} 
                          photo = {el.photo} />)

  return (
    <div className={s.friendsBox}>
      <a>Friends</a>
      <div className={s.friendsLine}>
        {friendsElements}
      </div>
      
    </div>
  );
}

export default Friends;
