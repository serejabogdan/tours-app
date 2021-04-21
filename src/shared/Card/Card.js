import React from 'react';
import './Card.css';
import bg from '../../assets/images/bg-home1.jpg';

function Card() {
  return (
    <div class="better-countries__card card">
      <img src={bg} alt="country card" />
      <div class="card__content">
        <span class="card__name">Україна</span>
        <span class="card__price">500 $</span>
      </div>
    </div>
  );
}

export default Card;
