import { put } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

export function* LogoutSaga(action) {
  // yield means that these should be executed and we will wait for them to finish
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationTime');
  yield localStorage.removeItem('localId');
  yield put({
    type: actionTypes.AUTH_LOGOUT
  });
}
