import * as actionTypes from './actionTypes';

export const fetchTypeFailed = () => {
  return {
    type: actionTypes.FETCH_TYPE_FAILED
  };
};


export const initType = () => {
  return {
    type: actionTypes.INIT_TYPE_INIT
  }
};


export const modifyType = ( iType ) => {
  const updatedType = iType;
  return {
    type: actionTypes.CHANGE_TYPE,
    iPhoneType: updatedType
  }
}

export const changeType = (iType) => {
  return {
    type: actionTypes.CHANGE_TYPE_INIT,
    iType: iType
  }
};
