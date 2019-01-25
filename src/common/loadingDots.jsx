import React from "react";
import "./style/loadingDots.css";

const LoadingDots = () => {
  return (
    <React.Fragment>
      <span id="dot_1" className="dot">
        .
      </span>
      <span id="dot_2" className="dot">
        .
      </span>
      <span id="dot_3" className="dot">
        .
      </span>
    </React.Fragment>
  );
};

export default LoadingDots;
