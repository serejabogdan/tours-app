import React, {useState, useEffect} from 'react';
import './Orders.css';

import {database} from '../../../firebase.config';
import TourCard from '../../ToursSearch/TourCards/TourCard';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const ref = database.ref(`orders`);
    try {
      ref.on('value', (snapshot) => {
        const data = Object.values(snapshot.val());

        setOrders(
          data.map((item) => {
            return {
              ...item,
              search: {
                ...item.search,
                startDate: new Date(item.search.startDate),
                endDate: new Date(item.search.endDate)
              }
            };
          })
        );
      });
    } catch (e) {
      console.log(e);
    }
    return () => {
      ref.off('value');
    };
  }, []);

  console.log(orders);
  const activeOrders = orders.filter((order) => order.isActive === true);

  return (
    <div>
      {activeOrders.length &&
        activeOrders.map((order) => <TourCard tour={order.tour} search={order.search} key={order.tour.id} />)}
    </div>
  );
}

export default Orders;
