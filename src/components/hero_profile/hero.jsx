import React, { Component } from "react";
import HeroApi from "../../util/heroApi";
import HeroNav from "./heroNav";
import PowerBar from "./powerBar";
import HeroDescription from "./../../common/heroDescription";
import Loading from "./../../common/loading";
import NotFound from "../../common/notFound";
import "./style/hero.css";

class Hero extends Component {
  state = {
    loaded: false,
    error: false,
    biography: "visible",
    appearance: "invisible",
    powerstats: "invisible",
    hero: {}
  };
  handleImageError = event => {
    event.target.src =
      "https://res.cloudinary.com/teepublic/image/private/s--AWVqmQY0--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1511473152/production/designs/2094145_1.jpg";
  };
  handleClick = event => {
    const { biography, appearance, powerstats } = this.state;
    const element = event.target.innerHTML;
    if (element === "Biography") {
      if (biography === "invisible") {
        this.setState({
          biography: "visible",
          appearance: "invisible",
          powerstats: "invisible"
        });
      }
    } else if (element === "Appearance") {
      if (appearance === "invisible") {
        this.setState({
          biography: "invisible",
          appearance: "visible",
          powerstats: "invisible"
        });
      }
    } else {
      if (powerstats === "invisible") {
        this.setState({
          biography: "invisible",
          appearance: "invisible",
          powerstats: "visible"
        });
      }
    }
  };
  handleReturn = () => {
    this.props.history.goBack();
  };

  componentWillMount() {
    HeroApi.search_id(this.props.match.params.id).then(result => {
      if (result === undefined) {
        this.setState({
          error: true,
          loaded: true
        });
        return null;
      }
      this.setState({
        hero: result,
        loaded: true
      });
    });
  }

  content = () => {
    const { hero, error, biography, powerstats, appearance } = this.state;
    const { handleClick, handleReturn } = this;
    if (error) {
      return <NotFound />;
    }
    return (
      <React.Fragment>
        <ul className="hero_nav_container">
          <HeroNav handleClick={handleClick} value="Biography" />
          <HeroNav handleClick={handleClick} value="Appearance" />
          <HeroNav handleClick={handleClick} value="Power Stats" />
        </ul>
        <div className="hero">
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
                  <HeroDescription
                    key={bio}
                    title={bio}
                    info={hero.biography[bio]}
                  />
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
                    key={appearance}
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
          <div className="hero_image_container">
            <img
              className="hero_image"
              alt={hero.name}
              src={hero.image.url}
              onError={this.handleImageError}
            />
            <button onClick={handleReturn} className="return_button">
              Back to results
            </button>

            {/* <button
              onClick={() => this.props.heroCompare(hero)}
              className="return_button"
            >
              Add to Compare
            </button> */}
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    const { loaded } = this.state;
    return (
      <div className="hero_page">{loaded ? this.content() : <Loading />}</div>
    );
  }
}

export default Hero;
