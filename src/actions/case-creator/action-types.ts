import { Action } from '../types';
export const SET_TYPE = 'SET_TYPE';
export const MODIFY_TYPE = 'MODIFY_TYPE';
export const FETCH_TYPE_FAILED = 'FETCH_TYPE_FAILED';

export interface SetTypeAction extends Action<typeof SET_TYPE> {
    type: typeof SET_TYPE;
}

export interface ModifyTypeAction
    extends Action<typeof MODIFY_TYPE> {
    type: typeof MODIFY_TYPE;
    payload: string;
}

export interface FetchTypeFailedAction extends Action<typeof FETCH_TYPE_FAILED> {
    type: typeof FETCH_TYPE_FAILED;
}

export type CaseCreatorAction =
    | SetTypeAction
    | ModifyTypeAction
    | FetchTypeFailedAction;
