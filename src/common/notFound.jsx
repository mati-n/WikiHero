import React from "react";
import { NavLink } from "react-router-dom";
import "./style/notFound.css";

const style = {
  color: "#c62828",
  textDecoration: "none"
};
const NotFound = () => {
  return (
    <div className="not_found">
      <h1>404! Not Found...</h1>
      <div className="not_found_content">
        <img
          alt="deadpool image"
          src="https://i.kym-cdn.com/photos/images/facebook/000/652/022/3d9.png"
        />

        <ul className="solutions">
          <p>Sorry! We couldn't find what you need!</p>
          <li>
            Search for a new hero, like{" "}
            <NavLink style={style} to="../heroes/213">
              Deadpool
            </NavLink>{" "}
            !
          </li>
          <li>
            Check Marvel and DC featured characters, right{" "}
            <NavLink style={style} to="../">
              here
            </NavLink>{" "}
            !{" "}
          </li>
          <li>
            Find out{" "}
            <a
              style={style}
              href="http://www.matinnikookar.ir"
              target="_blank"
              rel="noopener noreferrer"
            >
              who
            </a>{" "}
            made this AMAZING project!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
