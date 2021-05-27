import React, {useEffect, useState} from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import {database} from '../../firebase.config';

import Orders from '../admin/Orders';

function Profile({userAuth, ...props}) {
  const [user, setUser] = useState({
    /* name: 'Йолоп',
    email: 'iolop@gmail.com',
    admin: true */
  });
  const [orders, setOrders] = useState({});
  useEffect(() => {
    const userRef = database.ref(`users/${userAuth.uid}`);
    userRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(userAuth);
      setUser(data);
    });
    /* getOrders();
    console.log(orders); */
    return () => {
      userRef.off('value');
    };
  }, [userAuth]);
  /* function renderPersonalInformation() {
    if (user) {
      return 
    }
  } */
  /* function getOrders() {
    if (user.admin) {
      const userRef = database.ref(`orders`);
      userRef.on('value', (snapshot) => {
        const data = Object.values(snapshot.val());
        setOrders(data);
      });
    }
  } */
  return (
    <div className='profile'>
      <div className='profile__info'>
        <h2>
          Ім'я: <span>{user.name}</span>
        </h2>
        <h2>
          <span>E-mail:</span> {user.email}
        </h2>
      </div>
      <div className='profile__tours'>
        <Orders />
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
