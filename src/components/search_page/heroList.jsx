import React, { Component } from "react";
import HeroBox from "./heroBox";
import HeroApi from "../../util/heroApi";

import "./style/heroList.css";

class HeroList extends Component {
  state = {
    heroes: []
  };
  componentWillMount = () => {
    let heroes = [];
    HeroApi.search_name(this.props.match.params.name).then(results => {
      results.map(hero => {
        heroes.push(hero);
      });
      this.setState({
        heroes: heroes
      });
    });
  };
  render() {
    let heroes = [];
    this.props.heroes.length === 0
      ? (heroes = this.state.heroes)
      : (heroes = this.props.heroes);
    return (
      <div className="hero_list">
        {heroes.map(hero => {
          return (
            <HeroBox
              key={hero.id}
              id={hero.id}
              name={hero.name}
              fullName={hero.biography["full-name"]}
              image={hero.image.url}
              gender={hero.appearance.gender}
              race={hero.appearance.race}
              {...this.props}
            />
          );
        })}
      </div>
    );
  }
}

export default HeroList;
