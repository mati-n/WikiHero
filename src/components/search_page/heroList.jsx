import React, { Component } from "react";
import HeroBox from "./heroBox";
import HeroApi from "../../util/heroApi";
import Loading from "./../../common/loading";
import NotFound from "./../../common/notFound";

import "./style/heroList.css";

class HeroList extends Component {
  state = {
    heroes: [],
    loaded: false,
    error: false
  };
  componentWillMount = () => {
    let heroes = [];
    HeroApi.search_name(this.props.match.params.name).then(results => {
      if (results === undefined) {
        this.setState({
          error: true,
          loaded: true
        });
        return null;
      }
      results.map(hero => {
        heroes.push(hero);
      });
      this.setState({
        heroes: heroes,
        loaded: true
      });
    });
  };
  content = () => {
    if (this.state.error) {
      return <NotFound />;
    }
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
  };
  render() {
    return <div> {this.state.loaded ? this.content() : <Loading />} </div>;
  }
}

export default HeroList;
