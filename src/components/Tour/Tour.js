import React from 'react';
import './Tour.css';

import slider from '../../assets/hotels/fortuna.jpg';
import TourServices from './TourServices';

function Tour() {
  return (
    <div class="wrapper">
      <section class="hotel">
        <div class="hotel__titles">
          <h1 class="title-h1">TIVOLI HOTEL & AQUA PARK ( EX :TROPICANA TIVOLI)</h1>
          <div class="hotel__text">Шарм-эль-Шейх, Египет</div>
        </div>
        <div class="hotel__tour tour">
          <div class="tour__slider slider">
            <img src={slider} alt="It is some" />
          </div>

          <div class="tour__info">
            <div class="tour__info-wrapper">
              <h2 class="tour__title title-h2">Інформація про тур</h2>
              <ul class="tour__info-list list">
                <li>Виїзд 25.04, 7 ночей</li>
                <li>Виліт Киев</li>
                <li>Кімната стандарт</li>
                <li>Все включено</li>
                <li>Все включено</li>
              </ul>
              <div class="tour__added">
                <h4 class="tour__added-title title-h4">Включено</h4>
                <span class="tour__text text">Проезд, проживание, страховка, трансфер</span>
              </div>
              <div class="tour__price-info">
                <div class="price">
                  16 027 <span>грн</span>
                </div>
                <span>тур за 2 взрослых</span>
              </div>
            </div>
            <button class="request-btn btn">Оформити заявку</button>
          </div>
        </div>
      </section>
      <section class="about">
        <h2 class="title-h2" id="about">
          Описание отеля
        </h2>
        <p class="about__text">Небольшой уютный отель для экономичного и спокойного отдыха. Недалеко от отеля расположен район Il Mercato и Старый город.</p>
        <h2 class="title-h2">Об отеле</h2>
        <p class="about__text">
          Открыт в 1998 году, последняя реновация прошла в 2019 году. Отель состоит из комплекса 2-этажных корпусов. Всего 114 номеров: standard room (jacuzzi pool view, макс. 2+1 чел., душ, балкон
          или терраса, есть номера только с оконом, 36 м2). Доп. место - односпальная кровать. Superior room (pool, aquapark view, макс. 3+1 чел, комната поделена на спальную часть и гостиную с
          диваном и креслом без двери (open space), балкон или терраса, душ, 54 м2). Есть Family rooms (реновированные, спальня + гостиная с диваном и кухней с дверью или без двери). К оплате
          принимаются кредитные карты: Visa, MasterCard Размещение с животными: нет
        </p>
        <h2 class="title-h2">Расположение</h2>
        <p class="about__text">20 км от аэропорта, в 6 км от Naama Bay, в 2 км от Старого города, в районе Hadaba, на второй линии.</p>

        <TourServices />
      </section>
    </div>
  );
}

export default Tour;
