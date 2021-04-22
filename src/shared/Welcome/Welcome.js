import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__hower">
        <div className="welcome__board">
          <h1 className="welcome__title title-h1">Знайдіть тур саме в нас.</h1>
          <span className="welcome__text">Обирайте улюблену країну і збирайте речі.</span>
          <form className="search__form">
            <select className="select" name="city" id="city">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
            <select className="select" name="country" id="country">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
            <input className="start-date input" placeholder="Something" type="text" />
            <input className="end-date input" placeholder="Something" type="text" />
            <select className="select" name="children" id="city">
              <option>Пункт 1</option>
              <option>Пункт 2</option>
            </select>
            <button className="submit-btn btn" type="submit">
              Полетіли
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
