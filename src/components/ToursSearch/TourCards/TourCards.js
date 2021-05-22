import React, {useEffect, useState} from 'react';
import './TourCards.css';
import TourCard from './TourCard';

import {connect} from 'react-redux';

import {database} from '../../../firebase.config';

function TourCards({tours, search, selected, minPrice, maxPrice, tourName, ...props}) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const ref = database.ref(`tours/${search.country}`);
    ref.on('value', (snapshot) => {
      const tours = Object.values(snapshot.val());
      /* console.log(tours);
      console.log(search.country); */
      setState(tours);
    });
    return () => {
      ref.off('value');
    };
  }, [search, minPrice, maxPrice, selected]);

  // const countryFilter = state.filter((tour) => tour.country === search.country);
  const formFiltered = state.filter((tour) => selected.some((item) => tour.filters.includes(item)));
  const toursResult = !formFiltered.length ? state : formFiltered;

  return (
    <div className='TourCards'>
      {
        /* toursResult
        .filter((tour) => Number(tour.price) >= Number(minPrice) && Number(tour.price) <= Number(maxPrice))
        .filter((tour) => selected.some((item) => tour.filters.includes(item)))
        .filter((tour) => tour.name.includes(tourName)) */
        toursResult.map((tour) => (
          <TourCard key={tour.id} tour={tour} search={search} />
        ))
      }
      {console.log(toursResult)}
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
