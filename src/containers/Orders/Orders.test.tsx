import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Orders from './Orders';
import * as actions from '../../store/actions/index';

const mockStore = configureMockStore([thunk]);

jest.mock('../../axios-orders');
jest.mock('../../components/Order/Order', () => () => <div data-testid="order-item" />);
jest.mock('../../components/UI/Spinner/Spinner', () => () => <div data-testid="spinner" />);

describe('Orders Component', () => {
    let store: any;
    let fetchOrdersMock: jest.SpyInstance;

    beforeEach(() => {
        fetchOrdersMock = jest.spyOn(actions, 'fetchOrders');
        store = mockStore({
            order: {
                orders: [
                    { id: '1', type: 'Burger', price: 5.99 },
                    { id: '2', type: 'Pizza', price: 7.99 },
                ],
                loading: false,
            },
            auth: {
                token: 'some-token',
                userId: 'user-id',
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render the Spinner when loading is true', () => {
        store = mockStore({
            order: {
                orders: [],
                loading: true,
            },
            auth: {
                token: 'some-token',
                userId: 'user-id',
            },
        });

        render(
            <Provider store={store}>
                <Orders />
            </Provider>
        );

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    test('should render the orders when loading is false', () => {
        render(
            <Provider store={store}>
                <Orders />
            </Provider>
        );

        const orderItems = screen.getAllByTestId('order-item');
        expect(orderItems.length).toBe(2);
    });

    test('should call onFetchOrders when component mounts', () => {
        render(
            <Provider store={store}>
                <Orders />
            </Provider>
        );

        expect(fetchOrdersMock).toHaveBeenCalledWith('some-token', 'user-id');
        expect(fetchOrdersMock).toHaveBeenCalledTimes(1);
    });
});