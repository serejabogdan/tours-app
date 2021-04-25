import React, {useState} from 'react';
import {connect} from 'react-redux';
import Datepicker from '../Datepicker';
import './Welcome.css';

import {setSearchData} from '../../redux/actions';
import {useHistory} from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      country,
      city,
      startDate,
      endDate
    };
    setSearchData(searchData);
    history.push('/search');
  };

  return (
    <section className="welcome">
      <div className="welcome__hower">
        <div className="welcome__board">
          <h1 className="welcome__title title-h1">Знайдіть тур саме в нас.</h1>
          <span className="welcome__text">Обирайте улюблену країну і збирайте речі.</span>
          <form className="search__form" onSubmit={handleSubmit}>
            <select
              className="form__control select"
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Єгипет">Єгипет</option>
              <option value="Турція">Турція</option>
              <option value="ОАЕ">ОАЕ</option>
              <option value="Домінікана">Домінікана</option>
              <option value="Мальдіви">Мальдіви</option>
              <option value="Греція">Греція</option>
              <option value="Кіпр">Кіпр</option>
            </select>
            <select
              className="form__control select"
              name="city"
              id="city"
              valye={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Київ">Київ</option>
              <option value="Дніпро">Дніпро</option>
              <option value="Запоріжжя">Запоріжжя</option>
              <option value="Львів">Львів</option>
              <option value="Харків">Харків</option>
            </select>
            <Datepicker
              classNames="form__control"
              startDate={startDate}
              setStartDate={(date) => setStartDate(date)}
              endDate={endDate}
              setEndDate={(date) => setEndDate(date)}
            />
            <button className="form__control submit-btn btn" type="submit">
              Полетіли
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToState = {setSearchData};

export default connect(null, mapDispatchToState)(Welcome);
