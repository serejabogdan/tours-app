import React from 'react';
import './ToursSearch.css';

import TourCards from './TourCards/TourCards';
import Filters from './Filters';

function ToursSearch() {
  return (
    <div className="wrapper">
      <section className="ToursSearch">
        <Filters />
        <TourCards />
      </section>
    </div>
  );
}

export default ToursSearch;
