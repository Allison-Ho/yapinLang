import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
  return (
    <div className='search-bar'>
      <div className='search-container'>
        <input type='text' placeholder='Search'></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
      </div>
    </div>
  )
}

export default Searchbar;