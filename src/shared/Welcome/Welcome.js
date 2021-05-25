import React, {useState} from 'react';
import {connect} from 'react-redux';
import Datepicker from '../Datepicker';
import './Welcome.css';

import {setSearchData, setTours} from '../../redux/actions';
import {useHistory} from 'react-router-dom';
import {database} from '../../firebase.config';

function generateEndDate() {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 7));
}

function Welcome({setSearchData, ...props}) {
  const [country, setCountry] = useState('Єгипет');
  const [city, setCity] = useState('Київ');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(generateEndDate());

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const searchData = {
      country,
      city,
      startDate,
      endDate
    };
    setSearchData(searchData);
    getTours();
    history.push('/search');
  }

  function getTours() {
    return database.ref(country).on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  return (
    <section className='welcome'>
      <div className='welcome__hower'>
        <div className='welcome__board'>
          <h1 className='welcome__title title-h1'>Знайдіть тур саме в нас.</h1>
          <span className='welcome__text'>Обирайте улюблену країну і збирайте речі.</span>
          <form className='search__form' onSubmit={handleSubmit}>
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
            <Datepicker
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
                // value={country}
                // onChange={(e) => setCountry(e.target.value)}
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
                // value={country}
                // onChange={(e) => setCountry(e.target.value)}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label>
            <label>
              <button className='form__control submit-btn btn' type='submit'>
                Полетіли
              </button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToState = {setSearchData, setTours};

export default connect(null, mapDispatchToState)(Welcome);
