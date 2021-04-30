import React from 'react';
import './Slider.css';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider() {
  return (
    <Carousel autoPlay width="100%">
      <div>
        <img alt="" src="https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_21.jpg" />
      </div>
      <div>
        <img alt="" src="https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_20.jpg" />
      </div>
      <div>
        <img alt="" src="https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_1.jpg" />
      </div>
    </Carousel>
  );
}

export default Slider;
