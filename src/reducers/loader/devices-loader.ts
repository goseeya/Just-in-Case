import {
    DevicesAction,
    FETCH_DEVICES_FAILED,
    FETCH_DEVICES_FULFILLED,
    FETCH_DEVICES_STARTED,
} from '../../actions/devices/action-types';

export interface DevicesLoaderReducer {
    isFetchingDevices: boolean;
    hasFetchedDevices: boolean;
    failedFetchingDevices: boolean;
}

const initialState: DevicesLoaderReducer = {
    isFetchingDevices: false,
    hasFetchedDevices: false,
    failedFetchingDevices: false,
};

export default (state = initialState, { type }: DevicesAction): DevicesLoaderReducer => {
    switch (type) {
        case FETCH_DEVICES_STARTED: {
            return {
                ...state,
                isFetchingDevices: true,
                hasFetchedDevices: false,
                failedFetchingDevices: false,
            };
        }

        case FETCH_DEVICES_FULFILLED: {
            return {
                ...state,
                isFetchingDevices: false,
                hasFetchedDevices: true,
                failedFetchingDevices: false,
            };
        }

        case FETCH_DEVICES_FAILED: {
            return {
                ...state,
                isFetchingDevices: false,
                hasFetchedDevices: false,
                failedFetchingDevices: true,
            };
        }

        default:
            return state;
    }
};
