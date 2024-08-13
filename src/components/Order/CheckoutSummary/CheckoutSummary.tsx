import IphoneCase from '../../IphoneCase/IphoneCase';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.scss';

interface CheckoutSummaryProps {
  type: string;
  checkoutCancelled: () => void;
  checkoutContinued: () => void;
}
const CheckoutSummary = ({
  type,
  checkoutCancelled,
  checkoutContinued,
}: CheckoutSummaryProps) => {
  return (
    <div className="checkout-summary">
      <h1>In this case your phone is going to feel really comfortable.</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <IphoneCase type={type} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
