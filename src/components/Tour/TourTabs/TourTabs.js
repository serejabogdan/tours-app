import React from 'react';
import './TourTabs.css';

import Tabs from '../../../shared/Tabs';

function TourTabs() {
  const services = [
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
      free: ['Парасольки', 'Шезлонги', 'Рушники']
      // paid: []
    },
    {
      title: 'Розваги',
      /* main: [], */
      free: ['Аніматори', 'Дискотека', 'Настільний теніс'],
      paid: ['Сауна', 'Більярд', 'Водний спорт', 'Фітнес клуб']
    }
  ];
  return (
    <Tabs>
      {services.map((service) => {
        const {title, main, free, paid} = service;
        return (
          <div label={title} key={title}>
            {main && (
              <ul className="main__info">
                {main?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {free && (
              <div className="free">
                <h3 className="free__title">Безкоштовно</h3>
                <ul className="free__info">
                  {free?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {paid && (
              <div className="paid">
                <h3 className="paid__title">Платно</h3>
                <ul className="paid__info">
                  {paid?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </Tabs>
  );
}

export default TourTabs;
