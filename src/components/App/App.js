import React from 'react';
import './App.css';

import SearchBoard from '../../shared/SearchBoard';
import Offer from '../Offer';
import Tour from '../Tour';
import ToursSearch from '../ToursSearch';

import { Switch, Route, Redirect } from 'react-router-dom';
import AdminForm from '../admin/AdminForm/AdminForm';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Header from '../../shared/Header';

function App() {
  return (
    <div className='App'>
      {/* <AdminForm /> */}
      <Header color={true} />
      <Switch>
        <Route path='/tour/:id' component={Tour} />
        <Route path='/search' component={ToursSearch} />
        <Route path='/tour' component={Tour} />
        <Route path='/hot' component={Offer} />
        <Route path='/register' component={Signup} />
        <Route path='/in' component={Signin} />
        <Redirect to='/hot' />
      </Switch>
    </div>
  );
}

export default App;
