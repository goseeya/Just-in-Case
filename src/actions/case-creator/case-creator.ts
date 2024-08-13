import {
    SET_TYPE,
    SetTypeAction,
    ModifyTypeAction,
    FetchTypeFailedAction,
    MODIFY_TYPE,
    FETCH_TYPE_FAILED,
} from './action-types';

export const setCaseType = (): SetTypeAction => ({
    type: SET_TYPE,
});

export const modifyType = (type: string): ModifyTypeAction => ({
    type: MODIFY_TYPE,
    payload: type,
});

export const fetchTypeFailed = (): FetchTypeFailedAction => ({
    type: FETCH_TYPE_FAILED,
});
