import React from 'react';
import './ToursSearch.css';

import TourCards from './TourCards/TourCards';

function ToursSearch() {
  return (
    <div className="wrapper">
      <section className="ToursSearch">
        <div className="ToursSearch__filters" id="filters">
          <div className="chose filter">
            <div className="chose__header">
              <h3 className="filter__title small-title">Обрані</h3>
              <button className="clear-btn btn">Витерти</button>
            </div>
            <div className="filter-text">Нічого не обрано</div>
          </div>
          <div className="filter filter__price">
            <h3 className="filter__title">Ціна</h3>
            <div className="price-form">
              <input className="price-input input" type="text" placeholder="0" />
              <span className="filter-text">&nbsp;-&nbsp;</span>
              <input className="price-input input" type="text" placeholder="40000" />
              <span className="filter-text">&nbsp;грн</span>
            </div>
          </div>
          <div className="filter">
            <h3 className="filter__title">Пошук отеля</h3>
            <input className="input" type="text" placeholder="Fortuna Ssh" />
          </div>
          <div className="filter">
            <h3 className="filter__title">Клас отеля</h3>
            <div className="filter__btn filter__btn-active filter-text">5*</div>
            <div className="filter__btn filter-text">4*</div>
            <div className="filter__btn filter-text">3*</div>
          </div>
          <div className="filter">
            <h3 className="filter__title">Тип харчування</h3>

            <div className="filter__btn filter-text">Без харчування</div>
            <div className="filter__btn filter-text">Тільки сніданки</div>
            <div className="filter__btn filter-text">Сніданок і вечеря</div>
            <div className="filter__btn filter-text">Сніданок, обід і вечеря</div>
            <div className="filter__btn filter-text">Все включено</div>
          </div>
          <div className="filter">
            <h3 className="filter__title">Послуги</h3>
            <div className="filter__btn filter-text">Безкоштовний інтернет</div>
            <div className="filter__btn filter-text">Розміщення з тваринами</div>
            <div className="filter__btn filter-text">Дитячий басейн</div>
            <div className="filter__btn filter-text">Дитячий клуб</div>
            <div className="filter__btn filter-text">Дитяче меню</div>
          </div>
          <div className="filter">
            <h3 className="filter__title">Берегова лінія</h3>
            <div className="filter__btn filter-text">1-ша лінія</div>
            <div className="filter__btn filter-text">2-га лінія</div>
          </div>
          <div className="filter">
            <h3 className="filter__title">Курорт</h3>
            <div className="filter__btn filter-text">Дахаб</div>
            <div className="filter__btn filter-text">Сафара</div>
            <div className="filter__btn filter-text">Хургада</div>
            <div className="filter__btn filter-text">Шарм-ель-Шейх</div>
          </div>
        </div>
        <TourCards />
      </section>
    </div>
  );
}

export default ToursSearch;
