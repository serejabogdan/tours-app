import React from 'react';
import './Admin.css';

import {NavLink, Route, Switch} from 'react-router-dom';
import AddTourForm from '../AddTourForm';
import Orders from '../Orders';

function Admin() {
  return (
    <div>
      <NavLink to='/admin/addtour'>Додати тур</NavLink>
      <NavLink to='/admin/orders'>Заявки</NavLink>
      {/* <NavLink to='/admin/addtour'>Додати тур</NavLink> */}

      <Switch>
        <Route path='/admin/addtour' component={AddTourForm} />
        <Route path='/admin/orders' component={Orders} />
      </Switch>
    </div>
  );
}

export default Admin;
