import { Device } from 'types';
import { Action } from '../types';

export const RESOURCE_PATH = 'https://api.restful-api.dev/';
export const DEVICE_INFO_PATH = 'https://react-iphone-case.firebaseio.com/type.json';

export const FETCH_DEVICES_STARTED = 'FETCH_DEVICES_STARTED';
export const FETCH_DEVICES_FULFILLED = 'FETCH_DEVICES_FULFILLED';
export const FETCH_DEVICES_FAILED = 'FETCH_DEVICES_FAILED';

export interface FetchDevicesStartedAction extends Action<typeof FETCH_DEVICES_STARTED> {
    type: typeof FETCH_DEVICES_STARTED;
}

export interface FetchDevicesFulfilledAction
    extends Action<typeof FETCH_DEVICES_FULFILLED> {
    type: typeof FETCH_DEVICES_FULFILLED;
    payload: Device[];
}

export interface FetchDevicesFailedAction extends Action<typeof FETCH_DEVICES_FAILED> {
    type: typeof FETCH_DEVICES_FAILED;
}

export type DevicesAction =
    | FetchDevicesStartedAction
    | FetchDevicesFulfilledAction
    | FetchDevicesFailedAction;
