import { Dispatch } from 'redux';

import axios from 'axios'

import {
    FETCH_ORDERS_STARTED,
    FETCH_ORDERS_FULFILLED,
    FETCH_ORDERS_FAILED,
    PURCHASE_STARTED,
    PURCHASE_FULFILLED,
    PURCHASE_FAILED,
    FetchOrdersStartedAction,
    FetchOrdersFulfilledAction,
    FetchOrdersFailedAction,
    PurchaseStartedAction,
    PurchaseFulfilledAction,
    PurchaseFailedAction
} from './action-types';
import { Order } from 'types';
import { AppThunk } from 'actions/types';

export const fetchOrdersStarted = (): FetchOrdersStartedAction => ({
    type: FETCH_ORDERS_STARTED,
});

export const fetchOrdersFulfilled = (orders: Order[]): FetchOrdersFulfilledAction => ({
    type: FETCH_ORDERS_FULFILLED,
    payload: orders,
});

export const fetchOrdersFailed = (): FetchOrdersFailedAction => ({
    type: FETCH_ORDERS_FAILED,
});

export const purchaseCaseStarted = (): PurchaseStartedAction => ({
    type: PURCHASE_STARTED,
});

export const purchaseCaseFulfilled = (name: string, orderData: any): PurchaseFulfilledAction => ({
    type: PURCHASE_FULFILLED,
    payload: orderData,
});

export const purchaseCaseFailed = (): PurchaseFailedAction => ({
    type: PURCHASE_FAILED,
});
export const purchaseCase = (token: string, orderData: string): AppThunk => (dispatch: Dispatch<any>) => {
    dispatch(purchaseCaseStarted());

    axios.post(
        '/orders.json?auth=' + token,
        orderData,
    )
        .then((response) => {
            const fetchedOrders = [];
            for (let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key],
                    id: key,
                });
            }
            dispatch(purchaseCaseFulfilled(response.data.name, orderData));
        })
        .catch(() => {
            dispatch(purchaseCaseFailed());
        });
};


export const fetchOrders = (token: string, userId: string): AppThunk => (dispatch: Dispatch<any>) => {
    dispatch(fetchOrdersStarted());

    const queryParams =
        '?auth=' +
        token +
        '&orderBy="userId"&equalTo=' +
        userId +
        '"';

    axios.post('/orders.json?auth=' + queryParams)
        .then((response) => {
            const fetchedOrders = [];
            for (let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key],
                    id: key,
                });
            }
            dispatch(fetchOrdersFulfilled(fetchedOrders));
        })
        .catch(() => {
            dispatch(fetchOrdersFailed());
        });
};