import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import './Filters.css';

import {
  toggleFilter,
  clearFilters,
  removeFilter,
  changeMinPrice,
  changeMaxPrice,
  changeTourName,
  setResorts
} from '../../../redux/actions';
import {database} from '../../../firebase.config';

function Filters(
  {
    toggleFilter,
    clearFilters,
    removeFilter,
    changeMinPrice,
    changeMaxPrice,
    changeTourName,
    selected,
    minPrice,
    maxPrice,
    tourName,
    // tours,
    country,
    setResorts,
    resorts
  },
  ...props
) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    database.ref(`filters/filters`).on('value', (snapshot) => {
      const data = snapshot.val();
      setFilters(data);
    });
    database.ref(`filters/resorts/${country}`).on('value', (snapshot) => {
      const resorts = snapshot.val();
      setResorts(resorts);
    });
  }, [country]);

  function filtersRender(array) {
    return array.map((item) => (
      <div
        className={`filter__btn filter-text ${selected.includes(item) && 'filter__btn-active'}`}
        key={item}
        onClick={() => toggleFilter(item)}
      >
        {item}
      </div>
    ));
  }

  function clearFiltersBoard() {
    clearFilters();
    changeMinPrice(0);
    changeMaxPrice(40000);
    changeTourName('');
  }

  return (
    <div className='Filters'>
      <div className='Filters__chose chose'>
        <div className='chose__header'>
          <h3 className='filter__title'>Обрані</h3>
          <button className='clear-btn btn' onClick={clearFiltersBoard}>
            Витерти
          </button>
        </div>
        <div className='filter-text'>
          {!selected.length
            ? 'Нічого не обрано'
            : selected.map((item) => (
                <div
                  className='filter__btn filter-text filter__btn-active'
                  key={item}
                  onClick={() => removeFilter(item)}
                >
                  {item}
                </div>
              ))}
        </div>
      </div>
      <div className='filter filter__price'>
        <h3 className='filter__title'>Ціна</h3>
        <div className='price-form'>
          <input
            className='price-input input'
            type='text'
            placeholder={minPrice}
            value={minPrice}
            onChange={(e) => changeMinPrice(e.target.value)}
          />
          <span className='filter-text'>&nbsp;-&nbsp;</span>
          <input
            className='price-input input'
            type='text'
            placeholder={maxPrice}
            value={maxPrice}
            onChange={(e) => changeMaxPrice(e.target.value)}
          />
          <span className='filter-text'>&nbsp;грн</span>
        </div>
      </div>
      <div className='filter'>
        <h3 className='filter__title'>Пошук отеля</h3>
        <input
          className='input'
          type='text'
          placeholder='Fortuna Ssh'
          value={tourName}
          onChange={(e) => changeTourName(e.target.value)}
        />
      </div>
      {filters &&
        filters.map(({title, body}) => {
          return (
            <div className='filter' key={title}>
              <h3 className='filter__title'>{title}</h3>
              {filtersRender(body)}
            </div>
          );
        })}
      <div className='filter'>
        <h3 className='filter__title'>Курорт</h3>
        {filtersRender(resorts)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selected: state.filters.selected,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    tourName: state.filters.tourName,
    resorts: state.filters.resorts,
    // tours: state.tours,
    country: state.search.main.country
  };
};

const mapDispatchToProps = {
  toggleFilter,
  clearFilters,
  removeFilter,
  changeMinPrice,
  changeMaxPrice,
  changeTourName,
  setResorts
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
