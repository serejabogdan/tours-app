import React from 'react';
import './ToursSearch.css';

import TourCards from './TourCards/TourCards';
import Filters from './Filters';
import Welcome from '../../shared/Welcome';

function ToursSearch() {
  return (
    <div className='wrapper'>
      <Welcome />
      <section className='ToursSearch'>
        <Filters />
        <TourCards />
      </section>
    </div>
  );
}

export default ToursSearch;
