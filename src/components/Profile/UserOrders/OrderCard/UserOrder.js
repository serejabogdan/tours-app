import React from 'react';
import './UserOrder.css';

function UserOrder({id, ...props}) {
  const {name, rate, country, resort, description, price, urls} = props.tour;
  const {city, startDate, endDate} = props.search;

  return (
    <div className='UserOrder'>
      <div className='UserOrder__img'>
        <div>
          <img src={urls && urls[0]} alt='It is a hotel' />
        </div>
      </div>
      <div className='UserOrder__content'>
        <div className='UserOrder__title'>
          {name}, {rate}
        </div>
        <div className='UserOrder__text UserOrder__country'>
          {country}, {resort}
        </div>
        <div className='UserOrder__text'>
          З {new Date(startDate).toLocaleDateString()} по {new Date(endDate).toLocaleDateString()}
        </div>
        <div className='UserOrder__text'>
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
        <div className='UserOrder__text'>Переліт (з м. {city})</div>
      </div>
      <div className='UserOrder__other'>
        <div className='reviews'></div>
        <div className='UserOrder__other-bottom'>
          <div className='UserOrder__price'>
            <span className='price'>{price}</span>
            <span className='currency'> грн</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
