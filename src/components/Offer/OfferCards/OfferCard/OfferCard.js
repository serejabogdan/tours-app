import React from 'react';
import './OfferCard.css';
import bg from '../../../../assets/images/bg-home1.jpg';

function OfferCard() {
  return (
    <div className="OfferCard">
      <img src={bg} alt="country OfferCard" />
      <div className="OfferCard__content">
        <span className="OfferCard__name">Україна</span>
        <span className="OfferCard__price">500 $</span>
      </div>
    </div>
  );
}

export default OfferCard;
