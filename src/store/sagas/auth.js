import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';

export function* logoutSaga(action) {
  // yield means that these should be executed and we will wait for them to finish
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationTime');
  yield localStorage.removeItem('localId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime / 1000);
  yield put(actions.logout());
}
