import React from 'react';
import './Admin.css';

import {NavLink, Route, Switch} from 'react-router-dom';
import AddTourForm from '../AddTourForm';
import OrderCards from '../OrderCards';

function Admin() {
  return (
    <div>
      <NavLink to='/profile/addtour'>Додати тур</NavLink>
      <NavLink to='/profile/orders'>Заявки</NavLink>
      {/* <NavLink to='/admin/addtour'>Додати тур</NavLink> */}

      <Switch>
        <Route path='/profile/addtour' component={AddTourForm} />
        <Route path='/profile/orders' component={OrderCards} />
      </Switch>
    </div>
  );
}

export default Admin;
