import React from 'react';
import './SearchBoard.css';
import Header from '../Header';
import Welcome from '../Welcome/';
import {Route, Switch} from 'react-router';
import ToursSearch from '../../components/ToursSearch';

function SearchBoard() {
  return (
    <div className='SearchBoard'>
      <div className='wrapper'>
        {/* <Header color={true} /> */}
        <Welcome />

        <Switch>
          <Route path='/search/result' component={ToursSearch} />
        </Switch>
      </div>
    </div>
  );
}

export default SearchBoard;
