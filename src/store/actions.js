export const CHANGE_TYPE = 'CHANGE_TYPE';

export const modifyType = ( iType ) => {
  return {
    type: 'CHANGE_TYPE',
    iPhoneType: iType
  }
}

export const changeType = (iType) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(modifyType(iType));
    }, 2000);
  }
};
