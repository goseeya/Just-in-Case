import { useSelector } from 'react-redux';

import { AppState } from './../reducers';
export const useIsAuthenticated = (): boolean => useSelector((appState: AppState) => appState.auth.token !== null);