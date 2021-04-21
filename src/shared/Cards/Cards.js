import React from 'react';
import Card from '../Card';
import './Cards.css';

function Cards({title}) {
  return (
    <section className="cards">
      <div className="wrapper">
        <h2 className="cards__title title-h2 vp-1">{title}</h2>
        <div className="cards__list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Cards;
