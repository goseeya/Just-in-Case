import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseCaseSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_CASE_SUCCESS,
    orderId: id,
    orderDate: orderData
  };
};

export const purchaseCaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_CASE_FAIL,
    error: error
  };
};

export const purchaseCaseStart = (orderData) => {
  return dispatch => {
    axios.post('/orders.json', orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseCaseSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(purchaseCaseFail(error));
    });
  };
};
