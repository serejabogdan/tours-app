import React from 'react';
import Datepicker from '../Datepicker';
import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__hower">
        <div className="welcome__board">
          <h1 className="welcome__title title-h1">Знайдіть тур саме в нас.</h1>
          <span className="welcome__text">Обирайте улюблену країну і збирайте речі.</span>
          <form className="search__form">
            <select className="form__control select" name="country" id="country">
              <option>Країна</option>
              <option>Єгипет</option>
            </select>
            <select className="form__control select" name="city" id="city">
              <option>Київ</option>
              <option>Дніпро</option>
              <option>Запоріжжя</option>
              <option>Львів</option>
              <option>Харків</option>
            </select>
            <Datepicker classNames="form__control" />
            <select className="form__control select" name="children" id="children">
              <option>Дорослі</option>
              <option>Пункт 2</option>
            </select>
            <button className="form__control submit-btn btn" type="submit">
              Полетіли
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
