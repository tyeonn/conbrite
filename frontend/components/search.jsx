import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Search = (props) => (
  <div className="search-bar">
    <i className="fas fa-search" />
    <input
      id='search-field'
      className="search-input"
      type="text"
      placeholder="Search for events"
      onKeyUp={handleEnter(props)}
    />
  </div>
);

function handleEnter(props) {
  return e => {
    if(e.keyCode === 13) {
      props.history.push(`/browse/${e.currentTarget.value}`);
      document.getElementById('search-field').value = '';
    }

  }
}

export default withRouter(Search);
