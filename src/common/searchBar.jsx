import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoadingDots from "./loadingDots";
import "./style/searchBar.css";

class SearchBar extends Component {
  render() {
    const { handleChange, handleSearch, input } = this.props;
    return (
      <div className="search">
        <form className="search_form">
          <div className="form_container">
            <h2>
              Search any superhero
              <LoadingDots />
            </h2>

            <small>(e.g. Spider-Man)</small>
            <input
              className="search_field"
              onChange={handleChange}
              value={input}
              type="text"
              autoFocus
              placeholder="search..."
            />
            <button className="search_button" onClick={handleSearch}>
              <NavLink
                exact
                to={`/search_hero/${input}`}
                className="search_link"
              >
                Search
              </NavLink>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
