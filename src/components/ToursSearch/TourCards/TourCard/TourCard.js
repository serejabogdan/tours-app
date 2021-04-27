import React from 'react';
import './TourCard.css';
import hotel from '../../../../assets/hotels/fortuna.jpg';

function TourCard(
  {name, country, resort, startDate, endDate, description, price, rate, city},
  ...props
) {
  return (
    <div className="TourCard">
      <div className="TourCard__img">
        <a href="./index.html">
          <img src={hotel} alt="It is a hotel" />
        </a>
      </div>
      <div className="TourCard__content">
        <a href="./index.html" className="TourCard__title">
          {name}, {rate}
        </a>
        <div className="TourCard__text TourCard__country">
          {country}, {resort}
        </div>
        <div className="TourCard__text">
          З {startDate.getDate()}.0{startDate.getMonth()} по {endDate}
        </div>
        <div className="TourCard__text">Все включено</div>
        <div className="TourCard__text">Проезд включен (з м. {city})</div>
        <div className="TourCard__text TourCard__description">{description}</div>
      </div>
      <div className="TourCard__other">
        <div className="reviews">
          <a href="./index.html">0 відгуків</a>
        </div>
        <div className="TourCard__other-bottom">
          <div className="TourCard__price">
            <span className="price">{price}</span>
            <span className="currency">грн</span>
          </div>
          <a href="./index.html" className="TourCard__btn btn">
            Більше
          </a>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
