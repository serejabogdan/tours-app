import React, {useEffect} from 'react';
import './App.css';

import SearchBoard from '../../shared/SearchBoard';
import Offer from '../Offer';
import Tour from '../Tour';
import ToursSearch from '../ToursSearch';

import {Switch, Route, Redirect} from 'react-router-dom';
import AddTourForm from '../admin/AddTourForm';

import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Header from '../../shared/Header';

import {connect} from 'react-redux';
import {setCurrentUser} from '../../redux/actions';
import {auth} from '../../firebase.config';
import RequestForm from '../RequestForm';
import Admin from '../admin/Admin';
import Profile from '../Profile';

function App({setCurrentUser}) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className='App wrapper'>
      <Header color={true} />
      <Switch>
        <Route path='/order' component={RequestForm} />
        <Route path='/tour/:id' component={Tour} />
        <Route path='/search' component={SearchBoard} />
        <Route path='/register' component={Signup} />
        <Route path='/in' component={Signin} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />

        <Redirect to='/search/result' />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(null, mapDispatchToProps)(App);
