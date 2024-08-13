import { Device } from 'types';
import {
    DevicesAction,
    FETCH_DEVICES_FAILED,
    FETCH_DEVICES_FULFILLED,
    FETCH_DEVICES_STARTED,
} from '../actions/devices/action-types';

export interface DevicesReducer {
    devices: Device[];
}

const initialState: DevicesReducer = {
    devices: [],
};

export default (state = initialState, { type, payload }: DevicesAction): DevicesReducer => {
    switch (type) {
        case FETCH_DEVICES_STARTED:
            return {
                ...state,
                devices: [],
            };
        case FETCH_DEVICES_FULFILLED:
            return {
                ...state,
                devices: payload,
            };
        case FETCH_DEVICES_FAILED:
            return {
                ...state,
                devices: [],
            };

        default:
            return state;
    }
};
