import { combineReducers } from 'redux';

import devices from './devices';
import caseCreator from './case-creator';
import devicesLoader from './loader/devices-loader';
import auth from './auth';
import order from './order';
import config from './config';


export const rootReducer = combineReducers({
    devices,
    caseCreator,
    devicesLoader,
    auth,
    order,
    config,
});

export type AppState = ReturnType<typeof rootReducer>;

export default { rootReducer };
