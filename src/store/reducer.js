import * as actionTypes from './actions';

const initialState = {
  type: 'iPhone6',
  price: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TYPE:
      return {
        ...state,
        type: action.iPhoneType
      };
    default:
      return state;
  }
};

export default reducer;
