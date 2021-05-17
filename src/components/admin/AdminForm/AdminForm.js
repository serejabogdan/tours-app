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
  function hasAttr(item, state) {
    return state.includes(item);
  }
  function addAttr(item, attributeName, serviceState) {
    const [state, setState] = serviceState;
    if (!hasAttr(item, state[attributeName])) {
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
  return (
    <div>
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
      <label>
        Filters:
        <div>
          {filters.map(({ title, body }) => {
            return (
              <div className='filter' key={title}>
                <h3 className='filter__title'>{title}</h3>
                {body.map((item) => (
                  <div className={`filter__btn filter-text ${mainState.filters.includes(item) && 'filter__btn-active'}`} key={item} onClick={() => addAttr(item, 'filters', [mainState, setMainState])}>
                    {item}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </label>
      <label>
        Послуги:
        <div>
          {services.map((service, index) => {
            return (
              <div key={service.title}>
                <h3>{service.title}</h3>
                Основні:
                <div className='main'>
                  {service.main.map((item) => (
                    <div
                      key={item}
                      className={`filter__btn filter-text`}
                      onClick={() => {
                        addAttr(item, 'main', service.state);
                        console.log(service.state[0], index);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                Безкоштовно:
                <div className='free'>
                  {service.free.map((item) => (
                    <div
                      key={item}
                      className={`filter__btn filter-text`}
                      onClick={() => {
                        addAttr(item, 'free', service.state);
                        console.log(service.state[0], index);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                Платно:
                <div className='paid'>
                  {service.paid.map((item) => (
                    <div
                      key={item}
                      className={`filter__btn filter-text`}
                      onClick={() => {
                        addAttr(item, 'paid', service.state);
                        console.log(service.state[0], index);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </label>
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
