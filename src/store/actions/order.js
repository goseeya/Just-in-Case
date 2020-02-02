import * as actionTypes from './actionTypes';

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
  return {
    type: actionTypes.PURCHASE_CASE,
    orderData: orderData,
    token: token
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
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  };
};
