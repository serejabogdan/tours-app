import React, {useEffect, useState} from 'react';
import './UserOrders.css';
import OrderCard from './OrderCard';

import {connect} from 'react-redux';

import {database} from '../../../firebase.config';

import {setTours} from '../../../redux/actions';

function UserOrders({userAuth, ...props}) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const ref = database.ref(`users/${userAuth.uid}`);
    ref.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        data.orders = Object.values(data.orders);
        console.log(data);
        setUser({
          ...data,
          orders: data.orders.map((order) => ({
            ...order,
            search: {
              ...order.search,
              startDate: new Date(order.search.startDate),
              endDate: new Date(order.search.endDate)
            }
          }))
        });
      }
    });
    return () => {
      ref.off('value');
    };
  }, [userAuth]);

  return (
    <div className='UserOrders'>
      {console.log(user)}
      {user?.orders?.length
        ? user.orders.map(({id, tour, search}, index) => <OrderCard key={index} id={id} tour={tour} search={search} />)
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
