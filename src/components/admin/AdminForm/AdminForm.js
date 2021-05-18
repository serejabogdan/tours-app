import React, { useState } from 'react';
import './AdminForm.css';

import { database, storage } from '../../../firebase.config';

function AdminForm() {
  const [stateAboutService, setStateAboutService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [stateLocationService, setLocationService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [stateTerritoryService, setTerritoryService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [stateBeachService, setBeachService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [stateRoomService, setRoomService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [statePoolsService, setPoolsService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [stateEntertainmentService, setEntertainmentService] = useState({
    main: [],
    free: [],
    paid: []
  });
  const [mainState, setMainState] = useState({ name: 'Sharm Cliff Resort', country: 'Єгипет', resort: 'Шарм-ель-Шейх', description: 'При купівлі турів в готель системи Fortuna туристи розміщуються в одному з готелів зазначеної категорії (3 *, 4 *, 5 *). Скористайтеся чудовою нагодою випробувати долю, приготувати собі сюрприз і при цьому заощадити гроші!', price: '12222', filters: [], urls: [] });
  function somethingDelete(array, item) {
    return array.filter((filter) => filter !== item);
  }

  function hasAttr(item, state) {
    return state.includes(item);
  }
  function toggleAttribute(item, attributeName, serviceState) {
    const [state, setState] = serviceState;
    if (hasAttr(item, state[attributeName])) {
      setState((prevState) => ({ ...prevState, [attributeName]: somethingDelete(prevState[attributeName], item) }));
    } else {
      setState((prevState) => ({ ...prevState, [attributeName]: prevState[attributeName].concat(item) }));
    }
  }
  const filters = [
    {
      title: 'Клас отеля',
      body: ['5*', '4*', '3*']
    },
    {
      title: 'Тип харчування',
      body: ['Без харчування', 'Тільки сніданки', 'Сніданок і вечеря', 'Сніданок, обід і вечеря', 'Все включено']
    },
    {
      title: 'Послуги',
      body: ['Безкоштовний Wi-Fi', 'Розміщення з тваринами', 'Дитячий басейн', 'Дитяче меню', 'Водяні гірки']
    },
    {
      title: 'Берегова лінія',
      body: ['1-ша лінія', '2-га лінія']
    }
  ];
  const services = [
    {
      title: 'Про готель',
      main: ['Пляжний', 'Check-in 14:00', 'Check-out 12:00'],
      free: [],
      paid: [],
      state: [stateAboutService, setStateAboutService]
    },
    {
      title: 'Місцезнаходження',
      main: ['1 лінія (на березі моря)', '2 лінія (до моря треба пройти)'],
      free: [],
      paid: [],
      state: [stateLocationService, setLocationService]
    },
    {
      title: 'Територія',
      main: [],
      free: ['Wi-Fi на території', 'Місця для паркування', 'Пральня / Хімчистка', ' Wi-Fi в лобі'],
      paid: ['Wi-Fi на території', 'Місця для паркування', 'Пральня / Хімчистка', ' Wi-Fi в лобі'],
      state: [stateTerritoryService, setTerritoryService]
    },
    {
      title: 'Пляж',
      main: ['Пісчаний', 'Власний', 'Пісок, Корали'],
      free: ['Парасольки', 'Бар', 'Рушники', 'Шезлонги'],
      paid: ['Парасольки', 'Бар', 'Рушники', 'Шезлонги'],
      state: [stateBeachService, setBeachService]
    },
    {
      title: 'Номера',
      main: [],
      free: ['Кондиціонер', 'Wi-Fi в номері', 'Міні-бар в номері', 'Сейф', 'Фен', 'Праска', 'Обслуговування номера'],
      paid: ['Wi-Fi в номері', 'Міні-бар в номері', 'Сейф', 'Фен', 'Праска', 'Обслуговування номера'],
      state: [stateRoomService, setRoomService]
    },
    {
      title: 'Басейни',
      main: ['Один басейн', 'Два басейни', 'Три басейни'],
      free: ['Парасольки', 'Шезлонги', 'Рушники'],
      paid: ['Парасольки', 'Шезлонги', 'Рушники', 'Басейн з підігрівом'],
      state: [statePoolsService, setPoolsService]
    },
    {
      title: 'Розваги',
      main: [],
      free: ['Аніматори', 'Дискотека', 'Настільний теніс', 'Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб'],
      paid: ['Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб', 'Аніматори', 'Дискотека', 'Настільний теніс'],
      state: [stateEntertainmentService, setEntertainmentService]
    }
  ];

  function servicesComponent(service, title, attributeName) {
    const [serviceState, setServiceState] = service.state;
    if (service[attributeName].length) {
      return (
        <div>
          {title}
          <div className={attributeName}>
            {service[attributeName].map((item) => (
              <div
                key={item}
                className={`filter__btn filter-text ${serviceState[attributeName].includes(item) && 'filter__btn-active'}`}
                onClick={() => {
                  toggleAttribute(item, attributeName, service.state);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  console.log(Object.assign({}, mainState, { services: [stateAboutService, stateLocationService, stateTerritoryService, stateBeachService, stateRoomService, statePoolsService, stateEntertainmentService] }));

  async function handleSubmit(e) {
    e.preventDefault();
    const resultState = Object.assign({}, mainState, { services: [stateAboutService, stateLocationService, stateTerritoryService, stateBeachService, stateRoomService, statePoolsService, stateEntertainmentService] });
    console.log(resultState.country);
    database.ref(resultState.country).push(resultState);
  }

  async function onLoadPictures(e) {
    const files = e.target.files;
    let fileUrls = [];
    for (let file of files) {
      try {
        const url = await storage.ref('Єгипет').child(file.name).getDownloadURL();
        fileUrls.push(url);
      } catch (exception) {
        console.error(exception);
        await storage.ref(`Єгипет/${file.name}`).put(file);
        const url = await storage.ref('Єгипет').child(file.name).getDownloadURL();
        fileUrls.push(url);
      }
    }
    setMainState((prevState) => ({ ...prevState, urls: fileUrls }));
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type='text' placeholder='name' value={mainState.name} onChange={(e) => setMainState((prevState) => ({ ...prevState, name: e.target.value }))} />
        </label>
        <label>
          Фоточки:
          <input type='file' id='file' className='input-block' onChange={onLoadPictures} multiple />
          {/* <button className='btn'>123</button> */}
        </label>
        <label>
          Країни:
          <select className='form__control select' value={mainState.country} onChange={(e) => setMainState((prevState) => ({ ...prevState, country: e.target.value }))}>
            <option value='Єгипет'>Єгипет</option>
            <option value='Турція'>Турція</option>
            <option value='ОАЕ'>ОАЕ</option>
            <option value='Домінікана'>Домінікана</option>
            <option value='Мальдіви'>Мальдіви</option>
            <option value='Греція'>Греція</option>
            <option value='Кіпр'>Кіпр</option>
          </select>
        </label>
        <label>
          Курорт:
          <select className='form__control select' value={mainState.resort} onChange={(e) => setMainState((prevState) => ({ ...prevState, resort: e.target.value }))}>
            <option value='Дахаб'>Дахаб</option>
            <option value='Сафара'>Сафара</option>
            <option value='Хургада'>Хургада</option>
            <option value='Шарм-ель-Шейх'>Шарм-ель-Шейх</option>
          </select>
        </label>
        <label>
          Опис:
          <input type='text' placeholder='Description' value={mainState.description} onChange={(e) => setMainState((prevState) => ({ ...prevState, description: e.target.value }))} />
        </label>
        <label>
          Ціна:
          <input type='text' placeholder='Price' value={mainState.price} onChange={(e) => setMainState((prevState) => ({ ...prevState, price: e.target.value }))} />
        </label>
        <div>
          Фільтри*:
          <div>
            {filters.map(({ title, body }) => {
              return (
                <div className='filter' key={title}>
                  <h3 className='filter__title'>{title}</h3>
                  {body.map((item) => (
                    <div className={`filter__btn filter-text ${mainState.filters.includes(item) && 'filter__btn-active'}`} key={item} onClick={() => toggleAttribute(item, 'filters', [mainState, setMainState])}>
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className='services'>
          Послуги:
          <div>
            {services.map((service) => {
              return (
                <div key={service.title}>
                  <h3 className='filter__title'>{service.title}</h3>
                  {servicesComponent(service, 'Основні:', 'main')}
                  {servicesComponent(service, 'Безкоштовно:', 'free')}
                  {servicesComponent(service, 'Платно:', 'paid')}
                </div>
              );
            })}
          </div>
        </div>
        <div className='submit-block'>
          <button type='submit'>Відправити</button>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;