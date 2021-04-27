import React from 'react';
import './TourCards.css';
import TourCard from './TourCard';
import {connect} from 'react-redux';

function TourCards({tours, search, selected}, ...props) {
  const countryFilter = tours.filter((tour) => tour.country === search.country);

  const formFiltered = countryFilter.filter((tour) =>
    selected.some((item) => tour.filters.includes(item))
  );

  const toursResult = !formFiltered.length ? countryFilter : formFiltered;

  return (
    <div className="TourCards">
      {toursResult.map((tour) => (
        <TourCard key={tour.name} {...tour} city={search.city} startDate={search.startDate} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    search: state.search.main,
    selected: state.filters
  };
};

export default connect(mapStateToProps)(TourCards);
