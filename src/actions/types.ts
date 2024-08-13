import { ThunkAction } from 'redux-thunk';
import { DevicesAction } from "./devices/action-types";
import { AppState } from 'reducers';
import { LoadConfigAction } from './common';
import { AuthAction } from './auth/action-types';
import { OrderAction } from './order/action-types';

export type AppAction =
    | DevicesAction
    | AuthAction
    | LoadConfigAction
    | OrderAction;

export interface Action<T> {
    type: T;
    payload?: any;
}

export interface FetchError {
    errorName: string;
    status?: number | null;
    code?: string | null;
    type?: string | null;
    message?: string | null;
    link?: string | null;
    name?: string | null;
    developerMessage?: string | null;
    requestCorrelationId?: {
        value: string | null;
    };
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
