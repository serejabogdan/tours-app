import React from 'react';
import './Admin.css';

import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import AddTourForm from '../AddTourForm';
import OrderCards from '../OrderCards';

function Admin() {
  return (
    <div className='admin'>
      <nav className='admin__nav'>
        <NavLink className='admin__link header__link' activeClassName='header__link--active' to='/admin/addtour'>
          Додати тур
        </NavLink>
        <NavLink className='admin__link header__link' activeClassName='header__link--active' to='/admin/orders'>
          Заявки
        </NavLink>
      </nav>
      {/* <NavLink to='/admin/addtour'>Додати тур</NavLink> */}

      <Switch>
        <Route path='/admin/addtour' component={AddTourForm} />
        <Route path='/admin/orders' component={OrderCards} />
        <Redirect to='/admin/orders' />
      </Switch>
    </div>
  );
}

export default Admin;
