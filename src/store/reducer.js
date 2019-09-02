import * as actionTypes from './actions';

const initialState = {
  type: 'iPhone6',
  price: 100
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
      return {
        ...state,
        type: action.iPhoneType,
        price: IPHONE_TYPE_PRICE[action.iPhoneType]
      };
    default:
      return state;
  }
};

export default reducer;
