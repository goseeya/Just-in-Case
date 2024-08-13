import { AUTH_FULFILLED, AUTH_STARTED, AUTH_FAILED, AUTH_LOGOUT, SET_AUTH_REDIRECT_PATH, AuthAction } from 'actions/auth/action-types';
import { updateObject } from './../shared/utility';

export interface AuthReducer {
    token: string | null,
    userId: string | null,
    error: any,
    loading: boolean,
    authRedirectPath: string;
}

const initialState: AuthReducer = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

export default (state = initialState, { type, payload }: AuthAction): AuthReducer => {
    switch (type) {
        case AUTH_STARTED:
            return updateObject(state, { error: null, loading: true });
        case AUTH_FULFILLED:
            return updateObject(state, {
                token: payload.idToken,
                userId: payload.userId,
                error: null,
                loading: false,
            });
        case AUTH_FAILED:
            return updateObject(state, {
                error: payload.error,
                loading: false,
            });
        case AUTH_LOGOUT:
            return updateObject(state, {
                token: null,
                userId: null,
            });
        case SET_AUTH_REDIRECT_PATH:
            return updateObject(state, {
                authRedirectPath: payload.path,
            });

        default:
            return state;
    }
};
