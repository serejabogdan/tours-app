import React from 'react';
import OfferCard from './OfferCard';
import './OfferCards.css';

function OfferCards({title}) {
  return (
    <section className="OfferCards">
      <div className="wrapper">
        <h2 className="cards__title vp-1">{title}</h2>
        <div className="OfferCards__list">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </section>
  );
}

export default OfferCards;
