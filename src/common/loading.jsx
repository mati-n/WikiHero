import React from "react";
import "./style/loading.css";
import LoadingDots from "./loadingDots";
const Loading = props => {
  return (
    <div className="loading_container">
      <img
        src="http://www.hero.matinnikookar.ir/search_hero/media/loading_img.png"
        alt="loading..."
        className="loading_img"
      />
      <p className="loading_text">
        Loading <LoadingDots />
      </p>
    </div>
  );
};
// "./media/loading_img.png"
export default Loading;
