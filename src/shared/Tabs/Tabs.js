import React, {useState} from 'react';
import './Tabs.css';

function Tabs(props) {
  const tour = {
    about: {
      content:
        'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!'
    },
    tabs: [
      {
        title: 'Про отель',
        main: ['Пляжний', 'Check-in 14:00', 'Check-out 12:00']
        /* free: [],
        paid: [] */
      },
      {
        title: 'Місцезнаходження',
        main: ['1 лінія (на березі моря)']
        /* free: [],
        paid: [] */
      },
      {
        title: 'Територія',
        /* main: [], */
        free: ['Wi-Fi на території', 'Місця для паркування']
        /* paid: [] */
      },
      {
        title: 'Пляж',
        main: ['Пісчаний', 'Власний'],
        /* free: [], */
        paid: ['Парасольки', 'Бар', 'Рушники', 'Шезлонги']
      },
      {
        title: 'Номера',
        /* main: [], */
        free: ['Фен', 'Кондиціонер'],
        paid: ['Wi-Fi в номері', 'Міні-бар в номері', 'Сейф', 'Праска']
      },
      {
        title: 'Басейни',
        /* main: [], */
        free: ['Парасольки', 'Шезлонги', 'Рушники'],
        paid: []
      },
      {
        title: 'Розваги',
        /* main: [], */
        free: ['Аніматори', 'Дискотека', 'Настільний теніс'],
        paid: ['Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб']
      }
    ]
  };
  /* const services = {
    links: ['Для дітей', 'Пляж', 'Територія', 'Номер', 'Розваги', 'Діти від 8-ми місяців до трьох років', 'Харчування'],
    content: [{title: 'Для дітей', content: ['Водні горки: 3', 'дитяча дискотека', 'відділ в дитячому басейні для дорослих (2 без підігріву)']}]
  }; */

  const [state, setstate] = useState('');
  console.log(tour);
  return (
    <div className="Tabs">
      {/* <div className="Tabs-links"> */}
      <ul className="services__list list">
        {tour.tabs.map((tab) => {
          return (
            <li key={tab.title}>
              {tab.title}

              <div className="sub-list-wrapper">
                <ul className="sub__list list">{tab.main !== undefined && tab.main.map((item, index) => <li key={index}>{item}</li>)}</ul>
              </div>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
      {/* <div className="Tabs-content"></div> */}
    </div>
  );
}

export default Tabs;
