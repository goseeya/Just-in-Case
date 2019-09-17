import * as actionTypes from './actionTypes';

export const modifyType = ( iType ) => {
  const updatedType = iType;
  return {
    type: actionTypes.CHANGE_TYPE,
    iPhoneType: updatedResult
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
