import { Action } from '../types';

export const AUTH_STARTED = 'AUTH_STARTED';
export const AUTH_FULFILLED = 'AUTH_FULFILLED';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_CHECK_TIMEOUT = 'AUTH_CHECK_TIMEOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

export interface AuthStartedAction extends Action<typeof AUTH_STARTED> {
    type: typeof AUTH_STARTED;
}

export interface AuthCheckTimeoutAction extends Action<typeof AUTH_CHECK_TIMEOUT> {
    type: typeof AUTH_CHECK_TIMEOUT;
}

export interface AuthFulfilledAction extends Action<typeof AUTH_FULFILLED> {
    type: typeof AUTH_FULFILLED;
    payload: {
        idToken: string;
        userId: string;
    };
}

export interface AuthFailedAction extends Action<typeof AUTH_FAILED> {
    type: typeof AUTH_FAILED;
}

export interface AuthLogoutAction extends Action<typeof AUTH_LOGOUT> {
    type: typeof AUTH_LOGOUT;
}

export interface AuthSetRedirectPathAction extends Action<typeof SET_AUTH_REDIRECT_PATH> {
    type: typeof SET_AUTH_REDIRECT_PATH;
}


export type AuthAction =
    | AuthStartedAction
    | AuthFulfilledAction
    | AuthFailedAction
    | AuthLogoutAction
    | AuthSetRedirectPathAction;
