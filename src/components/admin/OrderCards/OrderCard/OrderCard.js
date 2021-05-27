import React from 'react';
import './OrderCard.css';
import {Link} from 'react-router-dom';
import {database} from '../../../../firebase.config';

function OrderCard({id, ...props}) {
  const {name, rate, country, resort, description, price, urls} = props.tour;
  const {city, startDate, endDate} = props.search;

  function handleClick() {
    console.log(id);

    // const key = pushedUrl.getKey();
    database.ref(`orders/${id}`).update({isActive: false});
  }

  return (
    <div className='TourCard'>
      <div className='TourCard__img'>
        <div>
          <img src={urls && urls[0]} alt='It is a hotel' />
        </div>
      </div>
      <div className='TourCard__content'>
        <div className='TourCard__title'>
          {name}, {rate}
        </div>
        <div className='TourCard__text TourCard__country'>
          {country}, {resort}
        </div>
        <div className='TourCard__text'>
          З {startDate.toLocaleDateString()} по {endDate.toLocaleDateString()}
        </div>
        <div className='TourCard__text'>
          {props.tour.filters.find((filter) =>
            [
              'Без харчування',
              'Тільки сніданки',
              'Сніданок і вечеря',
              'Все включено',
              'Сніданок, обід і вечеря'
            ].includes(filter)
          )}
        </div>
        <div className='TourCard__text'>Переліт (з м. {city})</div>
        <div className='TourCard__text TourCard__description'>
          Клієнт: {props.user.name}, телефон: {props.user.tel}, e-mail: {props.user.email}
        </div>
      </div>
      <div className='TourCard__other'>
        <div className='reviews'>{/* <a href='./index.html'>0 відгуків</a> */}</div>
        <div className='TourCard__other-bottom'>
          <div className='TourCard__price'>
            <span className='price'>{price}</span>
            <span className='currency'> грн</span>
          </div>
          <button className='TourCard__btn btn' onClick={handleClick}>
            Оброблено
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
