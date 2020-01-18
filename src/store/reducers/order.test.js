import reducer from './order';
import * as actionTypes from '../actions/actionTypes';

describe('order reducer', () => {
  it('should fetch orders correctly', () => {
    expect(reducer({
      orders: [],
      loading: false,
      purchased: false
    }, {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      orders: ['order1', 'order2']
    })).toEqual({
      orders: ['order1', 'order2'],
      loading: false,
      purchased: false
    })
  });
});
