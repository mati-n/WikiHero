import React, { Component } from "react";
import "./style/credits.css";

class Credits extends Component {
  render() {
    return (
      <div className="credits">
        <h2>Credits</h2>
        <small>
          A summery of tools which made creating this project, Possible!
        </small>
        <ul className="credit_list">
          <li>
            <a href="http://www.superheroapi.com" target="blank_">
              Superhero API
            </a>
            : For the data required to build this project, I decided to use
            SuperHeroAPI, their service is provided to public and it is free of
            charge.
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/react-router-dom"
              target="blank_"
            >
              React Router
            </a>
            : React Router DOM (RRD) is a useful and popular package in ReactJS.
            In order to make this project a one page application, I had to use
            RRD.
          </li>
          <li>
            <a href="http://fonts.google.com" target="blank_">
              Google Fonts
            </a>
            : I used "Staatliches" font for this project, provided by Google
            Fonts service.
          </li>
          <li>
            <a href="http://www.google.com" target="blank_">
              Images / Icons
            </a>
            : Images and icons used in this project are all found by surfing
            through Google search engine and there were no license on any of
            them.
          </li>
        </ul>
      </div>
    );
  }
}

export default Credits;
