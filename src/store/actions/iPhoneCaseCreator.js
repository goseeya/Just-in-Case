import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const fetchTypeFailed = () => {
  return {
    type: actionTypes.FETCH_TYPE_FAILED
  };
};


export const initType = () => {
  return dispatch => {
    axios.get('https://react-iphone-case.firebaseio.com/type.json')
      .then(response => {
        Object.filter = (obj, predicate) =>
          Object.keys(obj)
            .filter( key => predicate(obj[key]))
            .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

        let iPhoneType = Object.filter(response.data, type => type);
        let typeToReturn = Object.keys(iPhoneType)[0];
        dispatch(modifyType(typeToReturn));
      })
      .catch(error => {
        dispatch(fetchTypeFailed());
      });
  };
};


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
