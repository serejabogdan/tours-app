import React from 'react';
import SearchBoard from '../../shared/SearchBoard';
import Offer from '../Offer';
import Tour from '../Tour';
import ToursSearch from '../ToursSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBoard />

      {/* <Offer /> */}
      <ToursSearch />
      {/* <Tour /> */}
    </div>
  );
}

export default App;
