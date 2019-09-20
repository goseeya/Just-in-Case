import * as actionTypes from './actionTypes';

export const modifyType = ( iType ) => {
  const updatedType = iType;
  return {
    type: actionTypes.CHANGE_TYPE,
    iPhoneType: updatedType
  }
}

export const changeType = (iType) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldType = getState().type;
      console.log(oldType);
      dispatch(modifyType(iType));
    // }, 2000);
  }, 0);
  }
};
