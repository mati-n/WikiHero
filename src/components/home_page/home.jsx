import React, { Component } from "react";
import HeroCategory from "./heroCategory";
import "./style/home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home_container">
          <HeroCategory
            title="marvel"
            heroId={[346, 332, 620, 213, 717, 659]}
            logoUrl={
              "https://www.thecomicsbolt.com/wp-content/uploads/2018/12/marvel-logo-470x310@2x.jpg"
            }
            boxText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            officiis cupiditate, mollitia, dicta neque perspiciatis inventore
            modi sed eum et, qui dolorem adipisci! Illum nisi debitis excepturi"
          />
          <HeroCategory
            title="DC"
            heroId={[561, 70, 644, 720, 491, 265]}
            logoUrl={
              "https://i.pinimg.com/originals/bc/cd/d4/bccdd46d76e7f565448ba54c935b20a9.jpg"
            }
            boxText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            officiis cupiditate, mollitia, dicta neque perspiciatis inventore
            modi sed eum et, qui dolorem adipisci! Illum nisi debitis excepturi"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
