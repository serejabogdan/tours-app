import React, {useEffect, useState} from 'react';
import './Tour.css';

import TourTabs from './TourTabs';
import Slider from '../../shared/Slider';

import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import RequestForm from '../RequestForm';
import {database} from '../../firebase.config';

function Tour(props) {
  const {match, search} = props;
  const id = match.params.id;
  const [order, setOrder] = useState(false);
  const [tour, setTour] = useState({});

  useEffect(() => {
    const tourRef = database.ref(`tours/${search.country}/${id}`);
    tourRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setTour(data);
    });
    return () => {
      tourRef.off('value');
    };
  }, []);

  /* function getTour() {
    return tours.find((tour) => tour.id === id);
  }
  const tour = getTour();
  const history = useHistory(); */
  /* if (!tour) {
    history.push('/');
    return null;
  } */

  function getTourPrice() {
    if (search.children > 0) {
      return Number(tour.price) * Number(search.adults) * Number(search.children / 2);
    }
    return Number(tour.price) * Number(search.adults);
  }

  function tourNumberOfPeople() {
    if (search.children > 0) {
      return (
        <span>
          тур за {search.adults} дорослих та {search.children} дітей
        </span>
      );
    }
    return <span>тур за {search.adults} дорослих</span>;
  }

  return (
    <div className='wrapper'>
      {!Object.keys(tour).length ? (
        'Завантаження'
      ) : (
        <>
          <section className='hotel'>
            <div className='hotel__titles'>
              <h1 className='title-h1'>
                {tour.name}, {tour.rate}
              </h1>
              <div className='hotel__text'>
                {tour.resort}, {tour.country}
              </div>
            </div>
            <div className='hotel__tour tour'>
              <div className='tour__slider slider'>
                <Slider urls={tour.urls} />
              </div>

              <div className='tour__info'>
                <div className='tour__info-wrapper'>
                  <h2 className='tour__title title-h2'>Інформація про тур</h2>
                  <ul className='tour__info-list list'>
                    <li>
                      Виїзд {search.startDate.toLocaleDateString()},{' '}
                      {search.endDate.getDate() - search.startDate.getDate()} діб
                    </li>
                    <li>Виліт з м. {search.city}</li>
                    <li>Кімната стандарт</li>
                    <li>
                      {tour.filters.find((filter) =>
                        [
                          'Без харчування',
                          'Тільки сніданки',
                          'Сніданок і вечеря',
                          'Все включено',
                          'Сніданок, обід і вечеря'
                        ].includes(filter)
                      )}
                    </li>
                  </ul>
                  <div className='tour__added'>
                    <h4 className='tour__added-title title-h4'>Включено</h4>
                    <span className='tour__text text'>Проїзд, проживання, страховка</span>
                  </div>
                  <div className='tour__price-info'>
                    <div className='price'>
                      {getTourPrice()} <span>грн</span>
                    </div>
                    {tourNumberOfPeople()}
                  </div>
                </div>
                {/* <Link className='request-btn btn' to={`/order`}>
              Оформити заявку
            </Link> */}
                {order && <RequestForm tour={tour} search={search} setOrder={setOrder} />}
                <button className='request-btn btn' onClick={() => setOrder(true)}>
                  Оформити заявку
                </button>
              </div>
            </div>
          </section>
          <section className='about'>
            <TourTabs services={tour.services} />
          </section>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    search: state.search
  };
};

export default connect(mapStateToProps)(Tour);
