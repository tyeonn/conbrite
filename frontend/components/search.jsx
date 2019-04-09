import React from "react";
import { NavLink } from "react-router-dom";

const Search = () => (
  <div className="search-bar">
    <i className="fas fa-search" />
    <input
      className="search-input"
      type="text"
      placeholder="Search for events"
    />
  </div>
);

export default Search;
