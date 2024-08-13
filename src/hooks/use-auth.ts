import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { AuthReducer } from '../reducers/auth';
const useAuth = (): AuthReducer =>
    useSelector((appState: AppState) => appState.auth);

export default useAuth;
