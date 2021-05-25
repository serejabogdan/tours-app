import React, {useEffect} from 'react';
import './TourCards.css';
import TourCard from './TourCard';

import {connect} from 'react-redux';

import {database} from '../../../firebase.config';

import {setTours} from '../../../redux/actions';

function TourCards({tours, search, selected, minPrice, maxPrice, tourName, setTours, ...props}) {
  useEffect(() => {
    const ref = database.ref(`tours/${search.country}`);
    ref.on('value', (snapshot) => {
      const tours = Object.values(snapshot.val());
      setTours(tours);
    });
    return () => {
      ref.off('value');
    };
  }, [search, minPrice, maxPrice, selected]);

  const toursWithMatches = tours.map((tour) => {
    tour.filters = tour.filters.filter((item) => selected.includes(item));
    return tour;
  });
  const mostMatchedFiltersMax = Math.max(...tours.map((tour) => tour.filters.length));
  const resultToursAfterFilters = toursWithMatches
    .filter((tour) => tour.filters.length === mostMatchedFiltersMax)
    .filter((tour) => Number(tour.price) >= Number(minPrice) && Number(tour.price) <= Number(maxPrice))
    .filter((tour) => tour.name.toLowerCase().includes(tourName.toLowerCase()));
  return (
    <div className='TourCards'>
      {resultToursAfterFilters.length
        ? resultToursAfterFilters.map((tour) => <TourCard key={tour.id} tour={tour} search={search} />)
        : 'Немає турів, котрі б задовольняли умову вибірки'}
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

const mapDispatchToProps = {
  setTours
};

export default connect(mapStateToProps, mapDispatchToProps)(TourCards);
