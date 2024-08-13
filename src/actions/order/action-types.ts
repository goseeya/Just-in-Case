import { Order } from 'types';
import { Action } from '../types';

export const FETCH_ORDERS_STARTED = 'FETCH_ORDERS_STARTED';
export const FETCH_ORDERS_FULFILLED = 'FETCH_ORDERS_FULFILLED';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export const PURCHASE_STARTED = 'PURCHASE_STARTED';
export const PURCHASE_FULFILLED = 'PURCHASE_FULFILLED';
export const PURCHASE_FAILED = 'PURCHASE_FAILED';

export interface FetchOrdersStartedAction extends Action<typeof FETCH_ORDERS_STARTED> {
    type: typeof FETCH_ORDERS_STARTED;
}

export interface FetchOrdersFulfilledAction
    extends Action<typeof FETCH_ORDERS_FULFILLED> {
    type: typeof FETCH_ORDERS_FULFILLED;
    payload: Order[];
}

export interface FetchOrdersFailedAction extends Action<typeof FETCH_ORDERS_FAILED> {
    type: typeof FETCH_ORDERS_FAILED;
}

export interface PurchaseStartedAction extends Action<typeof PURCHASE_STARTED> {
    type: typeof PURCHASE_STARTED;
}

export interface PurchaseFulfilledAction extends Action<typeof PURCHASE_FULFILLED> {
    type: typeof PURCHASE_FULFILLED;
}

export interface PurchaseFailedAction extends Action<typeof PURCHASE_FAILED> {
    type: typeof PURCHASE_FAILED;
}

export type OrderAction =
    | FetchOrdersStartedAction
    | FetchOrdersFulfilledAction
    | FetchOrdersFailedAction
    | PurchaseStartedAction
    | PurchaseFulfilledAction
    | PurchaseFailedAction;
