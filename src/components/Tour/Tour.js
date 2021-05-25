import React from 'react';
import './Tour.css';
import slider from '../../assets/hotels/fortuna.jpg';

import TourTabs from './TourTabs';
import Slider from '../../shared/Slider';

import {connect} from 'react-redux';

function Tour(props) {
  const {match, tours, search} = props;
  function getTour() {
    return tours.find((tour) => tour.id === match.params.id);
  }
  const tour = getTour();
  return (
    <div className='wrapper'>
      <section className='hotel'>
        <div className='hotel__titles'>
          <h1 className='title-h1'>{tour.name}</h1>
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
                <li>Виїзд {search.startDate.toLocaleDateString()}, 7 ночей</li>
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
                <span className='tour__text text'>Проезд, проживание, страховка, трансфер</span>
              </div>
              <div className='tour__price-info'>
                <div className='price'>
                  {tour.price} <span>грн</span>
                </div>
                <span>тур за 2 дорослих</span>
              </div>
            </div>
            <button className='request-btn btn'>Оформити заявку</button>
          </div>
        </div>
      </section>
      <section className='about'>
        <TourTabs services={tour.services} />
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    search: state.search.main
  };
};

export default connect(mapStateToProps)(Tour);
