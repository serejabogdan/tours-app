import React from 'react';
import './TourCards.css';
import TourCard from './TourCard';
import {connect} from 'react-redux';

function TourCards({tours, search, selected, minPrice, maxPrice, tourName, ...props}) {
  const countryFilter = tours.filter((tour) => tour.country === search.country);
  const formFiltered = countryFilter.filter((tour) => selected.some((item) => tour.filters.includes(item)));
  const toursResult = !formFiltered.length ? countryFilter : formFiltered;

  return (
    <div className="TourCards">
      {toursResult
        .filter((tour) => tour.price >= Number(minPrice) && tour.price <= Number(maxPrice))
        .filter((tour) => tour.name.includes(tourName))
        .map((tour) => (
          <TourCard key={tour.name} tour={tour} search={search} />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    search: state.search.main,
    selected: state.filters.selected,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    tourName: state.filters.tourName
  };
};

export default connect(mapStateToProps)(TourCards);
