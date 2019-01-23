import React from "react";
import "./style/heroDescription.css";

const HeroDescription = props => {
  const { title, info } = props;
  return (
    <li className="info_item">
      <span className="info_tag">
        {title.charAt(0).toUpperCase() + title.slice(1)}:{" "}
      </span>
      {` ${info}`}
    </li>
  );
};

export default HeroDescription;
