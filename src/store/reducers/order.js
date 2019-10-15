import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false
  });
};

const purchaseCaseStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const purchaseCaseSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    id: action.orderId
  });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const purchaseCaseFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_CASE_START:
      return purchaseCaseStart(state, action);
    case actionTypes.PURCHASE_CASE_SUCCESS:
      return purchaseCaseSuccess(state, action);
    case actionTypes.PURCHASE_CASE_FAIL:
      return purchaseCaseFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
