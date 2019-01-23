import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
              <span id="dot_1" className="dot">
                .
              </span>
              <span id="dot_2" className="dot">
                .
              </span>
              <span id="dot_3" className="dot">
                .
              </span>
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
