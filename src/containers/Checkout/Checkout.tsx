import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
const Checkout = () => {
  const navigate = useNavigate();
  const tp = useSelector((state) => {
    return state.caseCreator.type;
  });
  const purchased = useSelector((state) => state.order.purchased);
  const checkoutCancelledHandler = () => {
    navigate(-1);
  };

  const checkoutContinuedHandler = () => {
    navigate('/checkout/contact-data', { replace: true })
  };

  let summary = <Navigate to="/" />;
  if (tp) {
    const purchasedRedirect = purchased ? <Navigate to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          type={tp}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
      </div>
    );
  }
  return summary;
};
export default Checkout;
