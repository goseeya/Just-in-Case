import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';

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

export function* authUserSaga(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9ohc9_-C55qyYg30U0dXxg6nzMwJmvNc';
  if (!action.isSignup) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9ohc9_-C55qyYg30U0dXxg6nzMwJmvNc';


  try {

  //not return promise but wait for the promise to resolve
  const response = yield axios.post(url, authData)
  // kind of synchronously cuz we wait for yield response
  const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
  yield localStorage.setItem('token', response.data.idToken);
  yield localStorage.setItem('expirationDate', expirationDate);
  yield localStorage.setItem('userId', response.data.localId);

  yield put(actions.authSuccess(response.data.idToken, response.data.localId));
  yield put(actions.checkAuthTimeout(response.data.expiresIn));
} catch (error) {
  yield put(actions.authFail(error.response.data.error));
}
}
}
