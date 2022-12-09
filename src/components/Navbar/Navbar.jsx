import React from "react";
import { NavLink } from "react-router-dom";
import Friends from './Friends/Friends'
import s from "./Navbar.module.css";

const addActive = () => {
    return ({ isActive }) => (isActive ? s.active : '')
}

function Navbar(props) {
  return (
    <nav className={s.navbar}>
      <ul>
        <li>
            <NavLink to="/profile" className={addActive ()}>Profile</NavLink>
        </li>
        <li>
            <NavLink to="/dialogs" className={addActive()}> Massage </NavLink>
        </li>
        <li>
            <NavLink to="/news" className={addActive()}> News </NavLink>
        </li>
        <li>
            <NavLink to="/music" className={addActive()}> Music </NavLink>
        </li>
        <li>
            <NavLink to="/settings" className={addActive()}> Settings </NavLink>
        </li>
        <li>
            <NavLink to="/searchusers" className={addActive()}> Find Users </NavLink>
        </li>
        <li>
            <Friends friends = {props.state.friends}/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
