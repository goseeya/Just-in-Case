import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IphoneCase/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import './IphoneCaseCreator.scss';
import { purchaseCaseStarted } from 'actions/order/orders';
import { setAuthRedirectPath } from 'actions';
import { modifyType, setCaseType } from 'actions/case-creator/case-creator';

const IphoneCaseCreator = () => {
  const [purchasing, setPurchasing] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onTypeChanged = (iType: string) => {
    dispatch(modifyType(iType));
    // console.log('onTypeChanged')
    // useCallback(dispatch(actions.changeType(iType)), [dispatch]);

  }
  const onInitType = () => {
    dispatch(setCaseType());
  };

  const onInitPurchase = () => {
    dispatch(purchaseCaseStarted());
  };

  const onSetAuthRedirectPath = (path: string) => {
    dispatch(setAuthRedirectPath(path));
  };

  const tp = useSelector((state) => {
    return state.caseCreator.type;
  });
  const prc = useSelector((state) => state.caseCreator.price);
  const error = useSelector((state) => state.caseCreator.error);
  const isAuthenticated = useSelector((state) => state.auth.token);

  // useEffect(() => {
  //   onInitType();
  // }, [onInitType]);

  const updatePurchaseState = (type: string) => {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    return purchaseableModels.includes(type);
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      navigate('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    navigate('/checkout');
  };

  let orderSummary = null;
  let iPhoneCase = error ? <p className="eror-text">Case can&apos;t be loaded</p> : <Spinner />;
console.log(tp)
  if (tp) {
    iPhoneCase = (
      <div className="case-container">
        <IphoneCase type={tp} />
        <IphoneCaseControls
          typeSelected={onTypeChanged}
          checkedType={tp}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
          price={prc}
          purchaseable={updatePurchaseState(tp)}
        />
      </div>
    );
    orderSummary = (
      <OrderSummary
        type={tp}
        price={prc}
        purchaseCanceled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  // if (loading) {
  //   orderSummary = <Spinner />;
  // }

  return (
    <div className="modal-container">
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {iPhoneCase}
    </div>
  );
};

export default IphoneCaseCreator;

