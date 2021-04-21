import React from 'react';
import './Header.css';

import logo from '../../assets/icons/airplane.svg';

function Header() {
  return (
    <div class="wrapper">
      <header class="header">
        <div class="header__logo">
          <img class="header__icon" src={logo} alt="Travel logo" />
          <span class="header__text">подорож</span>
        </div>
        <nav class="header__nav">
          <a class="header__link active" href="../countries/index.html">
            Гарячі тури
          </a>
          <a class="header__link" href="./index.html">
            Пошук турів
          </a>
          <a class="header__link" href="./index.html">
            Екскурсійні тури
          </a>
        </nav>
        <div class="header__auth auth">
          <a class="header__link" href="./index.html">
            Зареєструватися
          </a>
          <a class="header__link" href="./index.html">
            Увійти
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
