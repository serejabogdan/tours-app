import React from 'react';
import './TourCards.css';
import TourCard from './TourCard';
import {connect} from 'react-redux';

function TourCards({tours, search, ...props}) {
  const countryFilter = tours.filter((tour) => tour.country === search.country);
  return (
    <div className="TourCards">
      {countryFilter.map((tour) => (
        <TourCard key={tour.name} {...tour} startDate={search.startDate} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {tours: state.tours, search: state.search.main};
};

export default connect(mapStateToProps)(TourCards);
