import React from 'react';
import './OrderCard.css';
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
    <div className='OrderCard'>
      <div className='OrderCard__img'>
        <div>
          <img src={urls && urls[0]} alt='It is a hotel' />
        </div>
      </div>
      <div className='OrderCard__content'>
        <div className='OrderCard__title'>
          {name}, {rate}
        </div>
        <div className='OrderCard__text OrderCard__country'>
          {country}, {resort}
        </div>
        <div className='OrderCard__text'>
          З {new Date(startDate).toLocaleDateString()} по {new Date(endDate).toLocaleDateString()}
        </div>
        <div className='OrderCard__text'>
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
        <div className='OrderCard__text'>Переліт (з м. {city})</div>
        <div className='OrderCard__text OrderCard__description'>
          Клієнт: {props.user.name}, телефон: {props.user.tel}, e-mail: {props.user.email}
        </div>
      </div>
      <div className='OrderCard__other'>
        <div className='reviews'>{/* <a href='./index.html'>0 відгуків</a> */}</div>
        <div className='OrderCard__other-bottom'>
          <div className='OrderCard__price'>
            <span className='price'>{price}</span>
            <span className='currency'> грн</span>
          </div>
          <button className='OrderCard__btn btn' onClick={handleClick}>
            Оброблено
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
