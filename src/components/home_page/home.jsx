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
            boxText=" Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Thor and the Hulk. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places."
          />
          <HeroCategory
            title="DC"
            heroId={[561, 70, 644, 720, 491, 265]}
            logoUrl={
              "https://i.pinimg.com/originals/bc/cd/d4/bccdd46d76e7f565448ba54c935b20a9.jpg"
            }
            boxText="DC Comics is one of the largest and oldest American comic book companies, and produces material featuring numerous culturally iconic heroic characters including: Superman, Batman, Wonder Woman, The Flash and Aquaman."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
