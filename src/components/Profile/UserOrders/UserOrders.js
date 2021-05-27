import React, {useEffect, useState} from 'react';
import './UserOrders.css';
import OrderCard from './OrderCard';

import {connect} from 'react-redux';

import {database} from '../../../firebase.config';

import {setTours} from '../../../redux/actions';

function UserOrders({userAuth, ...props}) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const ref = database.ref(`users/${userAuth.uid}/orders`);
    ref.on('value', (snapshot) => {
      console.log(Object.values(snapshot.val()));
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setOrders(
          data.map((item) => ({
            ...item,
            search: {...item.search, startDate: new Date(item.search.startDate), endDate: new Date(item.search.endDate)}
          }))
        );
      }
    });
    return () => {
      ref.off('value');
    };
  }, []);

  return (
    <div className='UserOrders'>
      {console.log(orders)}
      {orders
        ? orders.map(({id, tour, search, user}, index) => (
            <OrderCard key={index} id={id} tour={tour} user={user} search={search} />
          ))
        : 'Немає замовлень'}
    </div>
  );
}
/* 
const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    search: state.search,
    selected: state.filters.selected,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    tourName: state.filters.tourName
  };
}; */

const mapStateToProps = (state) => {
  return {
    userAuth: state.userAuth.currentUser
  };
};

const mapDispatchToProps = {
  setTours
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
