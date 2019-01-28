import React from "react";
import { NavLink } from "react-router-dom";
import "./style/about.css";

const About = props => {
  return (
    <div className="about">
      <h2 className="about_title">About This Page</h2>
      <p className="about_text">
        Fluent work with APIs requires continuous practice. In order to achieve
        this, I decided to use SuperHeroAPI for my next project. This project is
        a one page application, developed using React Router Dom. Users can look
        for a superhero and recieve a considerable amount of data about the
        character's biography, appearance and power statistics. In later
        developments, the possibility to compare two heroes with each other was
        added to the project. For more information about the tools used for
        developing this project, please visit{" "}
        <NavLink
          style={{ textDecoration: "none", color: "#c62828" }}
          to="/credits"
        >
          Credits
        </NavLink>
        .
      </p>
    </div>
  );
};

export default About;
