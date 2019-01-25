import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavBar from "./common/navBar";
import SearchBar from "./common/searchBar";
import NotFound from "./common/notFound";
import Footer from "./common/footer";
import HeroList from "./components/search_page/heroList";
import Hero from "./components/hero_profile/hero";
import Home from "./components/home_page/home";
import HeroApi from "./util/heroApi";

import "./App.css";

class App extends Component {
  state = {
    input: "",
    searchResult: [],
    error: false
  };

  handleChange = event => {
    this.setState({
      input: event.currentTarget.value
    });
    event.preventDefault();
  };
  handleSearch = event => {
    const { input } = this.state;
    let heroes = [];
    HeroApi.search_name(input).then(results => {
      if (results === undefined) {
        console.log("1");
        this.setState({
          error: true
        });
        return null;
      }
      results.map(hero => {
        heroes.push(hero);
      });
      this.setState({
        searchResult: results
      });
    });
    event.preventDefault();
  };

  render() {
    const { handleSearch, handleChange } = this;
    const { input, searchResult } = this.state;
    return (
      <Route
        render={({ location }) => (
          <React.Fragment>
            <NavBar />
            <SearchBar
              handleSearch={handleSearch}
              handleChange={handleChange}
              input={input}
            />
            <div className="app">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      path="/heroes/:id"
                      render={props => (
                        <Hero heroInfo={searchResult} {...props} />
                      )}
                    />
                    <Route
                      path="/search_hero/:name"
                      render={props => (
                        <HeroList heroes={searchResult} {...props} />
                      )}
                    />
                    <Route path="/" exact component={Home} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <Footer />
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
