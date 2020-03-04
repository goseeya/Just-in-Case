import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IphoneCase/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import * as actionTypes from '../../store/actions';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

const iphoneCaseCreator = props => {

  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();
  const useSelector = state => {
    return ...
  }

  const tp = useSelector(state => {
    return state.iPhoneCaseCreator.type
  });
  const prc = useSelector(state => state.iPhoneCaseCreator.price);
  const error = useSelector(state => state.iPhoneCaseCreator.error);
  const isAuthenticated = useSelector(state => state.auth.token);


  const onTypeChanged = iType => useCallback(dispatch(actions.changeType(iType)), [dispatch]); // [] when it should rebuild
  const onInitType = () => dispatch(actions.initType());
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));


  useEffect(() => {
    onInitType();
  }, [onInitType]);

  const updatePurchaseState = (type) => {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    return purchaseableModels.includes(type);
  }

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  }

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push('/checkout');
  }

    let orderSummary = null;
    let iPhoneCase = error ? <p>Case can't be loaded</p> : <Spinner />;

    if (tp) {
      iPhoneCase = (
        <Aux>
          <IphoneCase type={tp} />
          <IphoneCaseControls
            typeSelected={onTypeChanged}
            checkedType={tp}
            ordered={purchaseHandler}
            isAuth={isAuthenticated}
            price={prc}
            purchaseable={updatePurchaseState(tp)}
             />
        </Aux>
      );
      orderSummary = <OrderSummary
        type={tp}
        price={prc}
        purchaseCanceled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler} />;
    }

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
        {iPhoneCase}
      </Aux>
    );
}

const mapStateToProps = state => {
  return {
    tp: state.iPhoneCaseCreator.type,
    prc: state.iPhoneCaseCreator.price,
    error: state.iPhoneCaseCreator.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // onTypeChanged: (iType) => dispatch({type: actionTypes.CHANGE_TYPE, iPhoneType: iType})
    // onTypeChanged: (iType) => dispatch(actionCreators.changeType(iType))
    onTypeChanged: (iType) => dispatch(actions.changeType(iType)),
    onInitType: () => dispatch(actions.initType()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default withErrorHandler(iphoneCaseCreator, axios); // we already pass props here
