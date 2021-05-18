import React, { useState } from 'react';
import './AdminForm.css';

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
  const [mainState, setMainState] = useState({ name: '', country: '', resort: '', description: '', price: '', filters: [] });
  function somethingDelete(array, item) {
    return array.filter((filter) => filter !== item);
  }

  function hasAttr(item, state) {
    return state.includes(item);
  }
  function toggleAttribute(item, attributeName, serviceState) {
    const [state, setState] = serviceState;
    /* if (selected.includes(action.payload)) {
      return { ...state, selected: toggleFilter };
    } else {
      return { ...state, selected: selected.concat([action.payload]) };
    } */
    if (hasAttr(item, state[attributeName])) {
      setState((prevState) => ({ ...prevState, [attributeName]: somethingDelete(prevState[attributeName], item) }));
    } else {
      setState((prevState) => ({ ...prevState, [attributeName]: prevState[attributeName].concat(item) }));
    }
    console.log(state);
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
      title: 'Про отель',
      main: ['Пляжний', 'Check-in 14:00', 'Check-out 12:00'],
      free: [],
      paid: [],
      state: [stateAboutService, setStateAboutService]
    },
    {
      title: 'Місцезнаходження',
      main: ['1 лінія (на березі моря)'],
      free: [],
      paid: [],
      state: [stateLocationService, setLocationService]
    },
    {
      title: 'Територія',
      main: [],
      free: ['Wi-Fi на території', 'Місця для паркування'],
      paid: [],
      state: [stateTerritoryService, setTerritoryService]
    },
    {
      title: 'Пляж',
      main: ['Пісчаний', 'Власний'],
      free: [],
      paid: ['Парасольки', 'Бар', 'Рушники', 'Шезлонги'],
      state: [stateBeachService, setBeachService]
    },
    {
      title: 'Номера',
      main: [],
      free: ['Фен', 'Кондиціонер'],
      paid: ['Wi-Fi в номері', 'Міні-бар в номері', 'Сейф', 'Праска'],
      state: [stateRoomService, setRoomService]
    },
    {
      title: 'Басейни',
      main: [],
      free: ['Парасольки', 'Шезлонги', 'Рушники'],
      paid: [],
      state: [statePoolsService, setPoolsService]
    },
    {
      title: 'Розваги',
      main: [],
      free: ['Аніматори', 'Дискотека', 'Настільний теніс'],
      paid: ['Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб'],
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

  return (
    <div>
      <label>
        Фоточки:
        <input
          type='file'
          id='file'
          className='input-block'
          onChange={(e) => {
            console.log(e.target.files);
          }}
          multiple
        />
      </label>
      <label>
        Ім'я:
        <input type='text' placeholder='name' value={mainState.name} onChange={(e) => setMainState((prevState) => ({ ...prevState, name: e.target.value }))} />
      </label>
      <label>
        Країни:
        <select className='form__control select' onChange={(e) => setMainState((prevState) => ({ ...prevState, country: e.target.value }))}>
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
        <select className='form__control select' /*  onChange={(e) => setMainState((prevState) => ({ ...prevState, name: e.target.value }))} */>
          <option value='Дахаб'>Дахаб</option>
          <option value='Сафара'>Сафара</option>
          <option value='Хургада'>Хургада</option>
          <option value='Шарм-ель-Шейх'>Шарм-ель-Шейх</option>
        </select>
      </label>
      <label>
        Description:
        <input type='text' placeholder='Description' onChange={(e) => setMainState((prevState) => ({ ...prevState, description: e.target.value }))} />
      </label>
      <label>
        Price:
        <input type='text' placeholder='Price' onChange={(e) => setMainState((prevState) => ({ ...prevState, price: e.target.value }))} />
      </label>
      <div>
        Filters*:
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
                <h3>{service.title}</h3>
                {servicesComponent(service, 'Основні:', 'main')}
                {servicesComponent(service, 'Безкоштовно:', 'free')}
                {servicesComponent(service, 'Платно:', 'paid')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
// name: 'Fortuna Ssh',
// country: 'Єгипет',
// resort: 'Шарм-эль-Шейх',
// startDate: '',
// endDate: '',
// description: 'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!',
// price: '16999',
// rate: '5*',
// filters: ['5*', 'Сніданок, обід і вечеря', 'Безкоштовний Wi-Fi', 'Розміщення з тваринами', 'Дитячий басейн', 'Дитяче меню', 'Водяні гірки', '1-ша лінія', 'Шарм-ель-Шейх'],
// services: [
//   {
//     title: 'Про отель',
//     main: ['Пляжний', 'Check-in 14:00', 'Check-out 12:00'],
//     /* free: [],
//       paid: [] */
//   },
//   {
//     title: 'Місцезнаходження',
//     main: ['1 лінія (на березі моря)'],
//     /* free: [],
//       paid: [] */
//   },
//   {
//     title: 'Територія',
//     /* main: [], */
//     free: ['Wi-Fi на території', 'Місця для паркування'],
//     /* paid: [] */
//   },
//   {
//     title: 'Пляж',
//     main: ['Пісчаний', 'Власний'],
//     /* free: [], */
//     paid: ['Парасольки', 'Бар', 'Рушники', 'Шезлонги'],
//   },
//   {
//     title: 'Номера',
//     /* main: [], */
//     free: ['Фен', 'Кондиціонер'],
//     paid: ['Wi-Fi в номері', 'Міні-бар в номері', 'Сейф', 'Праска'],
//   },
//   {
//     title: 'Басейни',
//     /* main: [], */
//     free: ['Парасольки', 'Шезлонги', 'Рушники'],
//     paid: [],
//   },
//   {
//     title: 'Розваги',
//     /* main: [], */
//     free: ['Аніматори', 'Дискотека', 'Настільний теніс'],
//     paid: ['Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб'],
//   },
// ],
