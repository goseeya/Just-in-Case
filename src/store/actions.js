import * as actionTypes from './actionTypes';

export const modifyType = ( iType ) => {
  return {
    type: actionTypes.CHANGE_TYPE,
    iPhoneType: iType
  }
}

export const changeType = (iType) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(modifyType(iType));
    // }, 2000);
  }, 0);
  }
};
