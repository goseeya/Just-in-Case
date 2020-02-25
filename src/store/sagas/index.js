import { takeEvery, all, takeLatest } from 'redux-saga/effects';

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
  import {
    purchaseCaseSaga,
    fetchOrdersSaga
  } from './order';

export function* watchAuth() {
  // yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  // yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  // yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  // yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield all([
   takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
   takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
   takeEvery(actionTypes.AUTH_USER, authUserSaga),
   takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);

}

export function* watchIphoneCase() {
  yield takeEvery(actionTypes.INIT_TYPE_INIT, initTypeInitSaga);
  yield takeEvery(actionTypes.CHANGE_TYPE_INIT, changeTypeInitSaga);
}

export function* watchOrder() {
  // yield takeEvery(actionTypes.PURCHASE_CASE, purchaseCaseSaga);
  yield takeLatest(actionTypes.PURCHASE_CASE, purchaseCaseSaga); //cancels every other execution of purchaseburgerSaga, only executes the latest one
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
