import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authUserSaga,
    authCheckStateSaga
    } from './auth';
import {
    initTypeInitSaga,
    changeTypeInitSaga
  } from './iPhoneCaseCreator';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield takeEvery(actionTypes.INIT_TYPE_INIT, initTypeInitSaga);
  yield takeEvery(actionTypes.CHANGE_TYPE_INIT, changeTypeInitSaga);
}
