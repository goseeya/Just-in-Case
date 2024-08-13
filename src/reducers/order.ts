import { PURCHASE_STARTED, PURCHASE_FULFILLED, PURCHASE_FAILED, FETCH_ORDERS_STARTED, FETCH_ORDERS_FULFILLED, FETCH_ORDERS_FAILED, OrderAction } from 'actions/order/action-types';
import { updateObject } from 'shared/utility';

export interface OrderReducer {
    orders: object[];
    loading: boolean;
    purchased: boolean;
}

const initialState: OrderReducer = {
    orders: [],
    loading: false,
    purchased: false,
};

export default (state = initialState, { type, payload }: OrderAction): OrderReducer => {
    switch (type) {
        case PURCHASE_STARTED:
            return updateObject(state, { error: null, loading: true });
        case PURCHASE_FULFILLED:
            const newOrder = updateObject(payload.orderData, {
                id: payload.orderId,
            });
            return updateObject(state, {
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder),
            });
        case PURCHASE_FAILED:
            return updateObject(state, {
                loading: false,
            });
        case FETCH_ORDERS_STARTED:
            return {
                ...state,
                loading: true,
    };
        case FETCH_ORDERS_FULFILLED:
             return {
                ...state,
                orders: payload,
                loading: false,
    };
        case FETCH_ORDERS_FAILED:
             return updateObject(state, {
                loading: false,
    });
        default:
            return state;
    }
}