import { Dispatch } from 'redux';

import axios from 'axios'

import {
    RESOURCE_PATH,
    FETCH_DEVICES_FAILED,
    FETCH_DEVICES_FULFILLED,
    FETCH_DEVICES_STARTED,
    FetchDevicesFailedAction,
    FetchDevicesFulfilledAction,
    FetchDevicesStartedAction,
} from './action-types';
import { Device } from 'types';
import { AppThunk } from 'actions/types';

export const fetchDevicesStarted = (): FetchDevicesStartedAction => ({
    type: FETCH_DEVICES_STARTED,
});

export const fetchDevicesFulfilled = (devices: Device[]): FetchDevicesFulfilledAction => ({
    type: FETCH_DEVICES_FULFILLED,
    payload: devices,
});

export const fetchDevicesFailed = (): FetchDevicesFailedAction => ({
    type: FETCH_DEVICES_FAILED,
});


export const fetchDevices = (): AppThunk => (dispatch: Dispatch<any>) => {
    dispatch(fetchDevicesStarted());

    axios.get<Device[]>(`${RESOURCE_PATH}/objects`)
        .then((devices) => {
            // @ts-ignore TODO
            dispatch(fetchDevicesFulfilled(devices));
        })
        .catch(() => {
            dispatch(fetchDevicesFailed());
        });
};
