import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeroApi from "../../util/heroApi";

import "./style/heroBar.css";

class HeroBar extends Component {
  state = {
    hero: ""
  };

  componentDidMount = () => {
    HeroApi.search_id(this.props.heroId).then(result => {
      this.setState({
        hero: result.image.url
      });
    });
  };

  render() {
    return (
      <div
        className="hero_bar"
        style={{ backgroundImage: `url("${this.state.hero}")` }}
      >
        <NavLink
          to={`/heroes/${this.props.heroId}`}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "1"
          }}
        />
      </div>
    );
  }
}

export default HeroBar;
