import React from "react";
import "./style/powerBar.css";

const PowerBar = props => {
  const { power: powerPercentage, powerName } = props;
  const power = powerName.charAt(0).toUpperCase() + powerName.slice(1);

  return (
    <div className="power_bar">
      <p>{power}</p>
      <div className="bar">
        <div
          style={{ width: `${powerPercentage}%` }}
          className="progress_bar"
        />
        <small>{powerPercentage}%</small>
      </div>
    </div>
  );
};

export default PowerBar;
