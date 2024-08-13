import { AppAction } from 'actions/types';
import { LOAD_CONFIG } from '../actions/action-types';
import loadConfig from './config';
import { JustInCaseContext } from './types';

export const initialState: JustInCaseContext = {
    config: {
        username: '',
        data: {
            purchaseAppPath: '',
            text: { '': '' },
        }
    },
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action: AppAction): JustInCaseContext => {
    switch (action.type) {
        case LOAD_CONFIG: {
            return loadConfig(state, action);
        }

        default:
            return state;
    }
};
