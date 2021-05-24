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

  const formFiltered = tours.filter((tour) => selected.every((item) => tour.filters.includes(item)));

  return (
    <div className='TourCards'>
      {
        /* toursResult
        .filter((tour) => Number(tour.price) >= Number(minPrice) && Number(tour.price) <= Number(maxPrice))
        .filter((tour) => selected.some((item) => tour.filters.includes(item)))
        .filter((tour) => tour.name.includes(tourName)) */
        formFiltered.length
          ? formFiltered.map((tour) => <TourCard key={tour.id} tour={tour} search={search} />)
          : 'Немає турів, котрі б задовольняли умову вибірки'
      }
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
