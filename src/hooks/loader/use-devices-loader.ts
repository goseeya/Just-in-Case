import { useSelector } from 'react-redux';

import { AppState } from '../../reducers';
import { DevicesLoaderReducer } from './../../reducers/loader/devices-loader';

const useDevicesLoader = ():DevicesLoaderReducer =>
    useSelector((appState: AppState) => appState.devicesLoader);

export default useDevicesLoader;
