import React from 'react';
import './Header.css';

import logo from '../../assets/icons/airplane.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__icon" src={logo} alt="Travel logo" />
        <span className="header__text">подорож</span>
      </div>
      <nav className="header__nav">
        <a className="header__link active" href="../countries/index.html">
          Гарячі тури
        </a>
        <a className="header__link" href="./index.html">
          Пошук турів
        </a>
        <a className="header__link" href="./index.html">
          Екскурсійні тури
        </a>
      </nav>
      <div className="header__auth auth">
        <a className="header__link" href="./index.html">
          Зареєструватися
        </a>
        <a className="header__link" href="./index.html">
          Увійти
        </a>
      </div>
    </header>
  );
}

export default Header;
