import React from "react";
import "./Slider.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const imgs = [
  { url: "https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_21.jpg" },
  { url: "https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_20.jpg" },
  { url: "https://img.turne.ua/static/hotels/turciya/kemer/h777/orig/booking777_1.jpg" },
];

const settings = {
  easing: "ease",
  indicators: true,
};

function Slider() {
  return (
    <Slide {...settings}>
      {imgs.map(({ url }) => (
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${url})` }}></div>
        </div>
      ))}
    </Slide>
  );
}

export default Slider;
