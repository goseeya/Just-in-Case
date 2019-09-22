import * as actionTypes from '../actions/actionTypes';
import { updateObject }  from './utility';

const initialState = {
  type: '',
  price: 100,
  error: false
};

const IPHONE_TYPE_PRICE = {
  iPhone6: 100,
  iPhone7: 110,
  iPhone8: 120,
  iPhone9: 130
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TYPE:
      // return {
      //   ...state,
      //   type: action.iPhoneType,
      //   price: IPHONE_TYPE_PRICE[action.iPhoneType]
      // };
      return updateObject(state, {
        type: action.iPhoneType,
        price: IPHONE_TYPE_PRICE[action.iPhoneType]
      });
    case actionTypes.MODIFY_TYPE:
      return {
        ...state,
        iPhoneType: action.iPhoneType,
        error: false
      };
    case actionTypes.FETCH_TYPE_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
