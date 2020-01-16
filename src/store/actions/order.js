import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseCaseSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_CASE_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseCaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_CASE_FAIL,
    error: error
  };
};

export const purchaseCaseStart = () => {
  return {
    type: actionTypes.PURCHASE_CASE_START
  };
};

export const purchaseCase = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseCaseStart());
    axios.post('/orders.json?auth=' + token, orderData)
      .then(response => {
        dispatch(purchaseCaseSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseCaseFail(error));
    });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo=' + userId + '"';
    axios.post('/orders.json?auth=' + queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  }

};
