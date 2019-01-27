import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeroDescription from "../../common/heroDescription";
import "./style/heroBox.css";

class HeroBox extends Component {
  state = {};
  handleError = event => {
    event.target.src =
      "https://res.cloudinary.com/teepublic/image/private/s--AWVqmQY0--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1511473152/production/designs/2094145_1.jpg";
  };
  render() {
    const { name, fullName, id, image, gender, race } = this.props;
    return (
      <div className="hero_box">
        <div
          className="blur_background"
          style={{ backgroundImage: `url(${image})` }}
        />
        <img
          onError={this.handleError}
          className="box_image"
          alt={name}
          src={image}
        />
        <div className="box_details">
          <ul className="box_info">
            <HeroDescription title="Name" info={name} />
            <HeroDescription title="Full Name" info={fullName} />
            <HeroDescription title="Gender" info={gender} />
            <HeroDescription title="Race" info={race} />
            <button className="box_button">
              <NavLink exact to={`/heroes/${id}`} className="box_link">
                More Info
              </NavLink>
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroBox;
