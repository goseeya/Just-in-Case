import React, { ReactElement } from 'react';
import Button from './../../UI/Button/Button';

interface OrderSummaryProps {
  price: string;
  purchaseCanceled: () => void;
  purchaseContinued: () => void;
  type: ReactElement;
}
const OrderSummary = ({
  type,
  price,
  purchaseCanceled,
  purchaseContinued,
}: OrderSummaryProps) => (
  <>
    <h3>Your Order</h3>
    <p>A case for the model:</p>
    <p style={{ color: 'pink' }}>{type}</p>
    <p>
      <strong>Price: {price}</strong>
    </p>
    <p>Continue to Shopping bag?</p>
    <Button btnType="Danger" clicked={purchaseCanceled}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={purchaseContinued}>
      CONTINUE
    </Button>
  </>
);

export default OrderSummary;
