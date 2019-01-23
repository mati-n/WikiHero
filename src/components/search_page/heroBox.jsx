import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeroDescription from "../../common/heroDescription";
import "./style/heroBox.css";

class HeroBox extends Component {
  state = {};
  render() {
    const { name, fullName, id, image, gender, race } = this.props;
    return (
      <div className="hero_box">
        <div
          className="blur_background"
          style={{ backgroundImage: `url(${image})` }}
        />
        <img className="box_image" alt={name} src={image} />
        <div className="box_details">
          <ul className="info_box">
            <HeroDescription title="Name" info={name} />
            <HeroDescription title="Full Name" info={fullName} />
            <HeroDescription title="Gender" info={gender} />
            <HeroDescription title="Race" info={race} />
          </ul>
          <button className="box_button">
            <NavLink exact to={`/heroes/${id}`} className="box_link">
              More Info
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default HeroBox;
