import React from 'react';
import './Tour.css';
import slider from '../../assets/hotels/fortuna.jpg';

import TourTabs from './TourTabs';

function Tour(props) {
  const {match} = props;

  return (
    <div className="wrapper">
      <section className="hotel">
        <div className="hotel__titles">
          <h1 className="title-h1">TIVOLI HOTEL & AQUA PARK ( EX :TROPICANA TIVOLI) {match.params.id}</h1>
          <div className="hotel__text">Шарм-эль-Шейх, Египет</div>
        </div>
        <div className="hotel__tour tour">
          <div className="tour__slider slider">
            <img src={slider} alt="It is some" />
          </div>

          <div className="tour__info">
            <div className="tour__info-wrapper">
              <h2 className="tour__title title-h2">Інформація про тур</h2>
              <ul className="tour__info-list list">
                <li>Виїзд 25.04, 7 ночей</li>
                <li>Виліт Киев</li>
                <li>Кімната стандарт</li>
                <li>Все включено</li>
                <li>Все включено</li>
              </ul>
              <div className="tour__added">
                <h4 className="tour__added-title title-h4">Включено</h4>
                <span className="tour__text text">Проезд, проживание, страховка, трансфер</span>
              </div>
              <div className="tour__price-info">
                <div className="price">
                  16 027 <span>грн</span>
                </div>
                <span>тур за 2 взрослых</span>
              </div>
            </div>
            <button className="request-btn btn">Оформити заявку</button>
          </div>
        </div>
      </section>
      <section className="about">
        {/* <h2 className="title-h2" id="about">
          Описание отеля
        </h2>
        <p className="about__text">Небольшой уютный отель для экономичного и спокойного отдыха. Недалеко от отеля расположен район Il Mercato и Старый город.</p>
        <h2 className="title-h2">Об отеле</h2>
        <p className="about__text">
          Открыт в 1998 году, последняя реновация прошла в 2019 году. Отель состоит из комплекса 2-этажных корпусов. Всего 114 номеров: standard room (jacuzzi pool view, макс. 2+1 чел., душ, балкон
          или терраса, есть номера только с оконом, 36 м2). Доп. место - односпальная кровать. Superior room (pool, aquapark view, макс. 3+1 чел, комната поделена на спальную часть и гостиную с
          диваном и креслом без двери (open space), балкон или терраса, душ, 54 м2). Есть Family rooms (реновированные, спальня + гостиная с диваном и кухней с дверью или без двери). К оплате
          принимаются кредитные карты: Visa, MasterCard Размещение с животными: нет
        </p>
        <h2 className="title-h2">Расположение</h2>
        <p className="about__text">20 км от аэропорта, в 6 км от Naama Bay, в 2 км от Старого города, в районе Hadaba, на второй линии.</p>
 */}
        <TourTabs />
      </section>
    </div>
  );
}

export default Tour;
