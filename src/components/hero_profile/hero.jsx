import React, { Component } from "react";
import HeroApi from "../../util/heroApi";
import HeroNav from "./heroNav";
import PowerBar from "./powerBar";
import HeroDescription from "./../../common/heroDescription";
import "./style/hero.css";

class Hero extends Component {
  state = {
    loaded: false,
    biography: "test_show",
    appearance: "test_hide",
    powerstats: "test_hide",
    hero: {}
  };

  handleClick = event => {
    const { biography, appearance, powerstats } = this.state;
    const element = event.target.innerHTML;
    if (element === "Biography") {
      if (biography === "test_hide") {
        this.setState({
          biography: "test_show",
          appearance: "test_hide",
          powerstats: "test_hide"
        });
      }
    } else if (element === "Appearance") {
      if (appearance === "test_hide") {
        this.setState({
          biography: "test_hide",
          appearance: "test_show",
          powerstats: "test_hide"
        });
      }
    } else {
      if (powerstats === "test_hide") {
        this.setState({
          biography: "test_hide",
          appearance: "test_hide",
          powerstats: "test_show"
        });
      }
    }
  };

  componentWillMount() {
    HeroApi.search_id(this.props.match.params.id).then(result => {
      this.setState({
        hero: result,
        loaded: true
      });
    });
  }

  content = () => {
    const { hero, biography, powerstats, appearance } = this.state;
    return (
      <React.Fragment>
        <div className="hero_information">
          <div className="hero_details">
            <ul id="biography" className={biography}>
              {Object.keys(hero.biography).map(bio => {
                if (bio === "aliases")
                  hero.biography[bio] = hero.biography[bio]
                    .splice(0, 3)
                    .map(element => {
                      return " " + element;
                    });
                return (
                  <HeroDescription title={bio} info={hero.biography[bio]} />
                );
              })}
            </ul>
            <ul id="appearance" className={appearance}>
              {Object.keys(hero.appearance).map(appearance => {
                if (appearance === "height" || appearance === "weight")
                  hero.appearance[appearance] = hero.appearance[
                    appearance
                  ].splice(0, 1);
                return (
                  <HeroDescription
                    title={appearance}
                    info={hero.appearance[appearance]}
                  />
                );
              })}
            </ul>
            <div id="powerstats" className={powerstats}>
              {Object.keys(hero.powerstats).map(power => {
                return (
                  <PowerBar
                    key={power}
                    powerName={power}
                    power={hero.powerstats[power]}
                  />
                );
              })}
            </div>
          </div>
          <img className="hero_image" alt={hero.name} src={hero.image.url} />
        </div>
      </React.Fragment>
    );
  };
  render() {
    const { loaded } = this.state;
    const { handleClick } = this;
    return (
      <div className="hero_page">
        <ul className="hero_nav_container">
          <HeroNav handleClick={handleClick} value="Biography" />
          <HeroNav handleClick={handleClick} value="Appearance" />
          <HeroNav handleClick={handleClick} value="Power Stats" />
        </ul>
        {loaded ? this.content() : null}
      </div>
    );
  }
}

export default Hero;
