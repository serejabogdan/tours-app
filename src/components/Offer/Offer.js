import React from 'react';
import './Offer.css';
import OfferCards from './OfferCards';

function Offer() {
  return (
    <div className="Offer">
      <OfferCards title="Кращі країни для відпустки" />
      <OfferCards title="Акції" />
      <OfferCards title="Хіти" />
    </div>
  );
}

export default Offer;
