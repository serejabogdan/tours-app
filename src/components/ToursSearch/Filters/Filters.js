import React from 'react';
import {connect} from 'react-redux';
import './Filters.css';

import {toggleFilter, clearFilters, removeFilter} from '../../../redux/actions';

function Filters({toggleFilter, clearFilters, removeFilter, selected, ...props}) {
  const filters = [
    {
      title: 'Клас отеля',
      body: ['5*', '4*', '3*']
    },
    {
      title: 'Тип харчування',
      body: [
        'Без харчування',
        'Тільки сніданки',
        'Сніданок і вечеря',
        'Сніданок, обід і вечеря',
        'Все включено'
      ]
    },
    {
      title: 'Послуги',
      body: [
        'Безкоштовний Wi-Fi',
        'Розміщення з тваринами',
        'Дитячий басейн',
        'Дитяче меню',
        'Водяні гірки'
      ]
    },
    {
      title: 'Берегова лінія',
      body: ['1-ша лінія', '2-га лінія']
    }
  ];

  return (
    <div className="Filters">
      <div className="Filters__chose chose">
        <div className="chose__header">
          <h3 className="filter__title">Обрані</h3>
          <button className="clear-btn btn" onClick={() => clearFilters('yo')}>
            Витерти
          </button>
        </div>
        <div className="filter-text">
          {!selected.length
            ? 'Нічого не обрано'
            : selected.map((item) => (
                <div
                  className="filter__btn filter-text filter__btn-active"
                  key={item}
                  onClick={() => removeFilter(item)}
                >
                  {item}
                </div>
              ))}
        </div>
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
      {filters.map(({title, body}) => {
        return (
          <div className="filter" key={title}>
            <h3 className="filter__title">{title}</h3>
            {body.map((item) => (
              <div
                className={`filter__btn filter-text ${
                  selected.includes(item) && 'filter__btn-active'
                }`}
                key={item}
                onClick={() => toggleFilter(item)}
              >
                {item}
              </div>
            ))}
          </div>
        );
      })}
      <div className="filter">
        <h3 className="filter__title">Курорт</h3>
        <div className="filter__btn filter-text">Дахаб</div>
        <div className="filter__btn filter-text">Сафара</div>
        <div className="filter__btn filter-text">Хургада</div>
        <div className="filter__btn filter-text">Шарм-ель-Шейх</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selected: state.filters
  };
};

const mapDispatchToProps = {
  toggleFilter,
  clearFilters,
  removeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
