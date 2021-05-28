import React, {useState} from 'react';
import {connect} from 'react-redux';
import MultiDatepicker from '../MultiDatepicker';
import './Welcome.css';

import {clearFilters, setSearchData, setTours} from '../../redux/actions';
import {useHistory} from 'react-router-dom';

/* function generateEndDate() {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 7));
} */

function Welcome({setSearchData, clearFilters, search, ...props}) {
  const [country, setCountry] = useState(search.country);
  const [city, setCity] = useState(search.city);
  const [startDate, setStartDate] = useState(search.startDate);
  const [endDate, setEndDate] = useState(search.endDate);
  const [adults, setAdults] = useState(search.adults);
  const [children, setChildren] = useState(search.children);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const searchData = {
      country,
      city,
      startDate,
      endDate,
      adults,
      children
    };
    setSearchData(searchData);
    history.push('/search/result');
    localStorage.setItem('search', JSON.stringify(searchData));
  }

  return (
    <section className='welcome'>
      <div className='welcome__hower'>
        <div className='welcome__board'>
          <h1 className='welcome__title title-h1'>Знайдіть тур саме в нас.</h1>
          <span className='welcome__text'>Обирайте улюблену країну і збирайте речі.</span>
          <form onSubmit={handleSubmit}>
            <div className='search__form'>
              <label className='welcome__label'>
                <span>Місто вильоту:</span>
                <select
                  className='form__control select'
                  name='city'
                  id='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value='Київ'>Київ</option>
                  <option value='Дніпро'>Дніпро</option>
                  <option value='Запоріжжя'>Запоріжжя</option>
                  <option value='Львів'>Львів</option>
                  <option value='Харків'>Харків</option>
                </select>
              </label>
              <label className='welcome__label'>
                <span>Країна:</span>
                <select
                  className='form__control select'
                  name='country'
                  id='country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value='Єгипет'>Єгипет</option>
                  <option value='Туреччина'>Туреччина</option>
                  <option value='Домінікана'>Домінікана</option>
                  <option value='Кіпр'>Кіпр</option>
                </select>
              </label>
              <MultiDatepicker
                classNames='form__control'
                startDate={startDate}
                setStartDate={(date) => setStartDate(date)}
                endDate={endDate}
                setEndDate={(date) => setEndDate(date)}
              />

              <label className='welcome__label'>
                <span>Дорослих:</span>
                <select
                  className='form__control select'
                  name='country'
                  id='country'
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </label>
              <label className='welcome__label'>
                <span>Дітей:</span>
                <select
                  className='form__control select'
                  name='country'
                  id='country'
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </label>
              <label>
                <button className='form__control submit-btn btn' type='submit' onClick={clearFilters}>
                  Полетіли
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToState = {setSearchData, setTours, clearFilters};

export default connect(mapStateToProps, mapDispatchToState)(Welcome);
