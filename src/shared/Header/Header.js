import React from 'react';
import './Header.css';

import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../utils/auth';

function Header({userAuth}) {
  const LINK_CLASS_NAME = 'header__link';

  const authLinks = [
    {
      name: 'Зареєструватися',
      href: '/register',
      className: LINK_CLASS_NAME
    },
    {
      name: 'Увійти',
      href: '/in',
      className: LINK_CLASS_NAME
    }
  ];

  function renderAuthOrLogout(authLinks, userAuth) {
    if (userAuth) {
      {
        return (
          <>
            <NavLink className='header__link' activeClassName='header__link--active' to='/profile/orders'>
              Профіль
            </NavLink>
            <a href='#' className='header__link' onClick={handleLogOut}>
              Вийти
            </a>
          </>
        );
      }
    } else {
      return authLinks.map(({name, href, className}) => (
        <NavLink className={className} activeClassName='header__link--active' to={href} key={name}>
          {name}
        </NavLink>
      ));
    }
  }

  function handleLogOut(e) {
    e.preventDefault();
    signOut();
  }

  return (
    <header className='header'>
      <div className='header__body'>
        <div className='header__logo'>
          <svg className='header__icon' viewBox='0 -101 713.75189 713' xmlns='http://www.w3.org/2000/svg'>
            <path d='m85.085938 304.40625c-6.144532 2.882812-8.855469 10.140625-6.117188 16.34375l28.066406 60.25c1.378906 3 3.894532 5.335938 6.988282 6.488281 1.355468.492188 2.792968.746094 4.238281.746094 1.808593.015625 3.59375-.371094 5.238281-1.117187l212.054688-99.046876-19.207032 200.824219c-.371094 3.953125 1.152344 7.839844 4.109375 10.480469 9.296875 7.695312 20.882813 12.078125 32.9375 12.472656 3.324219-.003906 6.628907-.421875 9.851563-1.242187 17.214844-4.492188 30.5625-19.832031 39.667968-46.03125l83.449219-247.101563 165.273438-77.09375c48.648437-22.699218 73.71875-68.726562 56.882812-104.652344-9.554687-18.777343-27.855469-31.550781-48.773437-34.054687-23.242188-3.507813-46.996094.148437-68.105469 10.484375l-190.726563 89.433594-205.0625-80.207032c-25.824218-9.726562-46.277343-9.476562-60.621093.878907-12.035157 9.875-18.882813 24.71875-18.589844 40.285156.125 3.949219 2.113281 7.601563 5.363281 9.859375l138.082032 94.921875-79.078126 37.421875-132.601562-33.683594c-5.433594-1.335937-11.089844 1.113282-13.84375 5.988282l-33.050781 59.496093c-1.714844 3.152344-1.984375 6.894531-.738281 10.261719 1.238281 3.371094 3.871093 6.039062 7.226562 7.328125l98.167969 40.542969zm57.121093-248.09375c.734375-5.273438 3.402344-10.074219 7.488281-13.472656 7.113282-5.117188 20.085938-4.367188 37.421876 2.117187l182.617187 71.226563-83.328125 38.917968zm-112.257812 180.117188 21.703125-38.542969 127.605468 31.679687c2.75.695313 5.652344.433594 8.238282-.742187l414.75-193.71875c16.488281-8.132813 35.058594-11.09375 53.261718-8.484375 12.765626 1.175781 24.136719 8.542968 30.4375 19.707031 10.46875 22.457031-10.109374 55.261719-44.914062 71.476563l-143.695312 67.363281 8.734374-25.828125c2.207032-6.644532-1.398437-13.824219-8.042968-16.027344-6.652344-2.203125-13.828125 1.402344-16.03125 8.046875l-102.660156 305.476563c-6.113282 17.34375-13.722657 27.699218-22.203126 29.9375-5.253906 1.011718-10.691406-.019532-15.21875-2.863282l24.949219-261.953125c.652344-6.886719-4.398437-13-11.292969-13.652343-6.886718-.660157-13 4.398437-13.65625 11.285156l-3.863281 40.039062-214.054687 99.789063-17.578125-37.421875 35.167969-16.460938c4.527343-1.996094 7.445312-6.472656 7.445312-11.414062 0-4.945313-2.917969-9.421875-7.445312-11.414063zm0 0' />
          </svg>
          <span className='header__text'>подорож</span>
        </div>
        <div className='header__burger'>
          <span></span>
        </div>
        <nav className='header__nav'>
          <NavLink className={LINK_CLASS_NAME} activeClassName='header__link--active' to='/search/result'>
            Пошук
          </NavLink>
          {renderAuthOrLogout(authLinks, userAuth)}
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {userAuth: state.userAuth.currentUser};
};

export default connect(mapStateToProps)(Header);
