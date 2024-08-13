import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Order from 'components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchOrders } from 'actions/order/orders';
import useAuth from 'hooks/use-auth';
import useOrder from 'hooks/use-order';

const Orders = () => {
  const { userId, token } = useAuth();
  const { loading, orders } = useOrder();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrders(token, userId))
  }, []);


  const content = loading ? <Spinner />
    : (orders && orders.map((order) => (
      <Order key={order.id} type={order.type} price={order.price} />
    )));


  return <div>{content}</div>;
};

export default Orders;
