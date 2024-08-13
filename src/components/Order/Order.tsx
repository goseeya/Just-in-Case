import React from 'react';

import './Order.scss';

interface OrderProps {
  type: string;
  price: number;
}
const Order = ({ type, price }: OrderProps) => (
  <div className="order">
    <p
      style={{
        display: 'inline',
        border: '1px solid #ccc',
        padding: '5px',
      }}
    >
      Type: {type}
    </p>
    <p>
      Price: <strong>USD {price}</strong>
    </p>
  </div>
);

export default Order;
