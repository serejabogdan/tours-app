import React, {useEffect, useState} from 'react';
import './OrderCards.css';
import OrderCard from './OrderCard';

import {connect} from 'react-redux';

import {database} from '../../../firebase.config';

import {setTours} from '../../../redux/actions';

function OrderCards(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const ref = database.ref(`orders`);
    ref.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setOrders(data);
        /* setOrders(
          data.map((item) => ({
            ...item,
            search: {...item.search, startDate: new Date(item.search.startDate), endDate: new Date(item.search.endDate)}
          }))
        ); */
      }
    });
    return () => {
      ref.off('value');
    };
  }, []);

  const ordersFilter = orders.filter((order) => order.isActive);

  return (
    <div className='OrderCards'>
      {ordersFilter.length
        ? ordersFilter.map(({id, tour, search, user}, index) => (
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

const mapDispatchToProps = {
  setTours
};

export default connect(null, mapDispatchToProps)(OrderCards);
