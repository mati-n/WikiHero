import React from "react";
import "./style/loading.css";
import LoadingDots from "./loadingDots";
const Loading = props => {
  return (
    <div className="loading_container">
      <img
        src="./media/loading_img.png"
        alt="loading..."
        className="loading_img"
      />
      <p className="loading_text">
        Loading <LoadingDots />
      </p>
    </div>
  );
};

export default Loading;
