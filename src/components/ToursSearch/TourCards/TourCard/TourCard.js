import React from 'react';
import './TourCard.css';
import hotel from '../../../../assets/hotels/fortuna.jpg';

function TourCard() {
  return (
    <div className="TourCard">
      <div className="TourCard__img">
        <a href="./index.html">
          <img src={hotel} alt="It is a hotel" />
        </a>
      </div>
      <div className="TourCard__content">
        <a href="./index.html" className="TourCard__title">
          Fortuna Ssh 4*
        </a>
        <div className="TourCard__text TourCard__country">Египет, Шарм-эль-Шейх</div>
        <div className="TourCard__text">С 08.04 по 15.04 (7 ночей)</div>
        <div className="TourCard__text">Все включено</div>
        <div className="TourCard__text">Проезд включен (из Киева)</div>
        <div className="TourCard__text TourCard__description">
          При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе
          сюрприз и при этом сэкономить деньги!
        </div>
      </div>
      <div className="TourCard__other">
        <div className="reviews">
          <a href="./index.html">0 відгуків</a>
        </div>
        <div className="TourCard__other-bottom">
          <div className="TourCard__price">
            <span className="price">8871</span>
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
