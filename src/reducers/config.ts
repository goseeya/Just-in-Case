import { AppAction } from '../actions/types';
import { JustInCaseContext } from './types';
import nbTranslations from './../config/translations/nbTranslations-config';

const loadConfig = (state: JustInCaseContext, action: AppAction): JustInCaseContext => {
    // const { config } = action.payload;
// TODO transform config text here if needed
    return {
        ...state,
        config: {
            data: {
                text: nbTranslations,
            },
        },
    };
};

export default loadConfig;
