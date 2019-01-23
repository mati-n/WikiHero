import React from "react";
import "./style/heroNav.css";

const HeroNav = props => {
  const { handleClick, value } = props;
  return (
    <li onClick={handleClick} className="hero_nav_item">
      {value}
    </li>
  );
};

export default HeroNav;
