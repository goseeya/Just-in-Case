import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { OrderReducer } from '../reducers/order';
const useOrder = (): OrderReducer =>
    useSelector((appState: AppState) => appState.order);

export default useOrder;
