import React from "react";
import "./style/loading.css";
import LoadingDots from "./loadingDots";
const Loading = props => {
  return (
    <div className="loading_container">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/3e20a526-a5bc-4c2a-bd7f-88bc981a6870/d5x3dpg-315e59df-c43e-47d1-bc90-e2d49c7fae75.png/v1/fit/w_150,h_150,strp/captain_america_s_shield_by_tinabdesign_d5x3dpg-150.png"
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
