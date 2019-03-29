import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => (
  <div className='search-bar'>
    <i className="fas fa-search"></i>
    <input className='search-input'
      type="text" 
      placeholder='Search for events'
      
    />
  </div>
)

export default Search;