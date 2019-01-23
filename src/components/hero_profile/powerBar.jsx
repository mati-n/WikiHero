import React from "react";
import "./style/powerBar.css";

const PowerBar = props => {
  const { power, powerName } = props;
  return (
    <div className="power_bar">
      <p>{powerName}</p>
      <div className="bar">
        <div style={{ width: `${power}%` }} className="progress_bar" />
        <small>{power}%</small>
      </div>
    </div>
  );
};

export default PowerBar;
