import React, {useEffect, useState} from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import {database} from '../../firebase.config';

import UserOrders from './UserOrders';

function Profile({userAuth, ...props}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: ''
  });
  useEffect(() => {
    const userRef = database.ref(`users/${userAuth.uid}`);
    userRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setUser((state) => ({...state, ...data}));
    });
    return () => {
      userRef.off('value');
    };
  }, [userAuth]);

  return (
    <div className='profile'>
      <div className='profile__info'>
        <h2>Ім'я: {user?.name}</h2>
        <h2>E-mail: {user?.email}</h2>
        <h2>Телефон: {user.tel ? user.tel : 'Не вказано'}</h2>
      </div>
      <div className='profile__tours'>
        <UserOrders />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userAuth: state.userAuth.currentUser
  };
};

export default connect(mapStateToProps)(Profile);
