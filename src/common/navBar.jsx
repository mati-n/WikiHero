import React from "react";
import { NavLink } from "react-router-dom";
import "./style/navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav_list">
        <NavLink to="/" className="nav_logo">
          Wiki<span>Hero</span>
        </NavLink>
        <NavLink to="/" className="nav_item">
          Home
        </NavLink>
        <NavLink to="" className="nav_item">
          Credits
        </NavLink>
        <NavLink to="" className="nav_item">
          About this page
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
