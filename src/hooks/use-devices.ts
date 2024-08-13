import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { DevicesReducer } from '../reducers/devices';
import { Device } from 'types';

export const useDevicesReducer = (): DevicesReducer => useSelector((appState: AppState) => appState.devices);

export const useDevices = (): Device[] => {
    const { devices } = useDevicesReducer();

    return devices;
};
