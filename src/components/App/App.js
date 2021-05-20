import React from 'react';
import './App.css';

import SearchBoard from '../../shared/SearchBoard';
import Offer from '../Offer';
import Tour from '../Tour';
import ToursSearch from '../ToursSearch';

import { Switch, Route, Redirect } from 'react-router-dom';
import AdminForm from '../admin/AdminForm/AdminForm';

function App() {
  return (
    <div className='App'>
      {/* <AdminForm /> */}
      <SearchBoard />
      <Switch>
        <Route path='/tour/:id' component={Tour} />
        <Route path='/search' component={ToursSearch} />
        <Route path='/tour' component={Tour} />
        <Route path='/hot' component={Offer} />
        <Redirect to='/hot' />
      </Switch>
    </div>
  );
}

export default App;
