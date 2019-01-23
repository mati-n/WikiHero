import React, { Component } from "react";

import "./style/heroCategory.css";
import HeroBar from "./heroBar";

class HeroCategory extends Component {
  state = {
    className: "hero_category"
  };
  handleMouseEnter = () => {
    this.setState({
      className: "hero_category_slideup"
    });
  };
  handleMouseLeave = () => {
    if (this.state.className === "hero_category_slideup") {
      this.setState({
        className: "hero_category_slidedown"
      });
    }
  };
  render() {
    const { boxText, logoUrl, heroId } = this.props;
    return (
      <React.Fragment>
        <div onMouseLeave={this.handleMouseLeave}>
          <div className="hero_bar_container">
            <HeroBar heroId={heroId[0]} />
            <HeroBar heroId={heroId[1]} />
            <HeroBar heroId={heroId[2]} />
            <HeroBar heroId={heroId[3]} />
            <HeroBar heroId={heroId[4]} />
            <HeroBar heroId={heroId[5]} />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${logoUrl})`
          }}
          className={this.state.className}
        >
          <div className="category_bottom">
            <p>{boxText}</p>
            <div onMouseEnter={this.handleMouseEnter} className="arrows">
              <span>^</span>
              <span>^</span>
              <span>^</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeroCategory;
