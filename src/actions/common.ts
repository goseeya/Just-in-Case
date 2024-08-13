import { Action } from "./types";
import { LOAD_CONFIG } from './action-types';


export interface LoadConfigAction extends Action<typeof LOAD_CONFIG> {
    type: typeof LOAD_CONFIG;
    payload: {
        config: any;
        localConfigData: any;
        appType: any;
    };
}
export const loadConfig = (config: any): LoadConfigAction => ({
    type: LOAD_CONFIG,
    payload: config,
});