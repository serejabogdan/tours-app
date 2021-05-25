import React from 'react';
import './TourCard.css';
import {Link} from 'react-router-dom';

function TourCard(props) {
  const {id, name, rate, country, resort, description, price, urls} = props.tour;
  const {city, startDate, endDate} = props.search;

  return (
    <div className='TourCard'>
      <div className='TourCard__img'>
        <Link to={`/tour/${id}`} key={id}>
          <img src={urls && urls[0]} alt='It is a hotel' />
        </Link>
      </div>
      <div className='TourCard__content'>
        <Link className='TourCard__title' to={`/tour/${id}`} key={id}>
          {name}, {rate}
        </Link>
        <div className='TourCard__text TourCard__country'>
          {country}, {resort}
        </div>
        <div className='TourCard__text'>
          З {startDate.toLocaleDateString()} по {endDate.toLocaleDateString()}
        </div>
        <div className='TourCard__text'>Все включено</div>
        <div className='TourCard__text'>Переліт (з м. {city})</div>
        <div className='TourCard__text TourCard__description'>{description}</div>
      </div>
      <div className='TourCard__other'>
        <div className='reviews'>{/* <a href='./index.html'>0 відгуків</a> */}</div>
        <div className='TourCard__other-bottom'>
          <div className='TourCard__price'>
            <span className='price'>{price}</span>
            <span className='currency'> грн</span>
          </div>
          <Link className='TourCard__btn btn' to={`/tour/${id}`}>
            Більше
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
