import { updateObject } from 'shared/utility';

import { CaseCreatorAction, FETCH_TYPE_FAILED, MODIFY_TYPE, SET_TYPE } from 'actions/case-creator/action-types';

const IPHONE_TYPE_PRICE = {
    iPhone6: 100,
    iPhone7: 110,
    iPhone8: 120,
    iPhone9: 130,
};
export interface CaseCreatorReducer {
    type: string;
    price: number;
    error: boolean;
    creating: boolean;
}

const initialState: CaseCreatorReducer = {
    type: 'iPhone6',
    price: 100,
    error: false,
    creating: false,
};

export default (state = initialState, { type, payload }: CaseCreatorAction): CaseCreatorReducer => {
    switch (type) {
        case SET_TYPE:
            return updateObject(state, {
                type: 'iPhone6',
                price: IPHONE_TYPE_PRICE[payload],
                creating: true,
            });
        case MODIFY_TYPE:
            return updateObject(state, {
                type: payload,
                price: 100,
                error: false,
                creating: false,
            });
        case FETCH_TYPE_FAILED:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};




