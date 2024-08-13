import { Dispatch } from 'redux';

import {
    AuthFailedAction,
    AuthLogoutAction,
    AuthFulfilledAction,
    AUTH_FULFILLED,
    AUTH_STARTED,
    SET_AUTH_REDIRECT_PATH,
    AuthStartedAction,
    AuthSetRedirectPathAction,
    AUTH_FAILED,
    AUTH_LOGOUT,
} from './action-types';
import { AppThunk } from 'actions/types';
import axios from 'axios';

export const authStarted = (): AuthStartedAction => ({
    type: AUTH_STARTED,
});

export const authFulfilled = (idToken: string, userId: string): AuthFulfilledAction => ({
    type: AUTH_FULFILLED,
    payload: {
        idToken,
        userId
    },
});

export const authFailed = (error: string): AuthFailedAction => ({
    type: AUTH_FAILED,
    payload: error,
});

export const authLogout = (): AuthLogoutAction => ({
    type: AUTH_LOGOUT,
});

// export const authCheckTimeout = (): AuthCheckTimeoutAction => ({
//     type: AUTH_CHECK_TIMEOUT,
//     payload: action.expirationTime / 1000
//     yield delay(action.expirationTime / 1000);
//     yield put(actions.logout());
// });

export const setAuthRedirectPath = (path: string): AuthSetRedirectPathAction => ({
    type: SET_AUTH_REDIRECT_PATH,
    payload: path
});

// export const authCheckTimeout = (path: string): AuthSetRedirectPathAction => ({
//     yield delay(action.expirationTime / 1000);
//     yield put(actions.logout());
// });

export const authLogoutStart = () => (dispatch: Dispatch<any>) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('localId');
    dispatch(authLogout());
}

export const startAuth = (email: string, password: string, isSignup: boolean): AppThunk => (dispatch: Dispatch<any>) => {
    dispatch(authStarted());

    const authData = {
        email,
        password,
        returnSecureToken: true,
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9ohc9_-C55qyYg30U0dXxg6nzMwJmvNc';
    if (!isSignup) {
        url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9ohc9_-C55qyYg30U0dXxg6nzMwJmvNc';
    }
        axios.post(url, authData)
            .then((response) => {
                // @ts-ignore TODO
                const expirationDate = new Date(
                    new Date().getTime() + response.data.expiresIn * 1000,
                );
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authFulfilled(response.data.idToken, response.data.localId))

                setTimeout(() => {
                    dispatch(authLogoutStart())
                }, expirationDate / 1000)
            })
            .catch((error) => {
                dispatch(authFailed(error.response.data.error));
            });
};

export const authCheckState = (): AppThunk => (dispatch: Dispatch<any>) => {
    console.log('auth check state')
// TODO axios ...
};
