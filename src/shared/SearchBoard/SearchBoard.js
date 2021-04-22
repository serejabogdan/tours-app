import React from 'react';
import './SearchBoard.css';
import Header from '../Header';
import Welcome from '../Welcome/';

function SearchBoard() {
  return (
    <div className="SearchBoard">
      <div className="wrapper">
        <Header color={true} />
        <Welcome />
      </div>
    </div>
  );
}

export default SearchBoard;
