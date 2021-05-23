import React from 'react';
import './Slider.css';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const settings = {
  easing: 'ease',
  indicators: true
};

function Slider(props) {
  const {urls} = props;
  return (
    <Slide {...settings}>
      {urls &&
        urls.map((url) => (
          <div className='each-slide' key={url}>
            <div style={{backgroundImage: `url(${url})`}}></div>
          </div>
        ))}
    </Slide>
  );
}

export default Slider;
