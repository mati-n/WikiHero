import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./common/navBar";
import SearchBar from "./common/searchBar";
import HeroList from "./components/search_page/heroList";
import Hero from "./components/hero_profile/hero";
import HeroApi from "./util/heroApi";
import NotFound from "./common/notFound";
import Home from "./components/home_page/home";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    searchResult: []
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
      <React.Fragment>
        <NavBar />
        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          input={input}
        />
        <div className="app">
          <Switch>
            <Route
              path="/heroes/:id"
              render={props => <Hero heroInfo={searchResult} {...props} />}
            />
            <Route
              path="/search_hero/:name"
              render={props => <HeroList heroes={searchResult} {...props} />}
            />
            <Route path="/" exact component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
