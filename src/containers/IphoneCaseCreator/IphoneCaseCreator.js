import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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

  useEffect(() => {
    props.onInitType();
  }, []);

  const updatePurchaseState = (type) => {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    return purchaseableModels.includes(type);
  }

  const purchaseHandler = () => {
    if (props.isAuthenticated) {
      setPurchasing(true);
    } else {
      props.onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  }

  const purchaseContinueHandler = () => {
    props.onInitPurchase();
    props.history.push('/checkout');
  }

    let orderSummary = null;
    let iPhoneCase = props.error ? <p>Case can't be loaded</p> : <Spinner />;

    if (props.tp) {
      iPhoneCase = (
        <Aux>
          <IphoneCase type={props.tp} />
          <IphoneCaseControls
            typeSelected={props.onTypeChanged}
            checkedType={props.tp}
            ordered={purchaseHandler}
            isAuth={props.isAuthenticated}
            price={props.prc}
            purchaseable={updatePurchaseState(props.tp)}
             />
        </Aux>
      );
      orderSummary = <OrderSummary
        type={props.tp}
        price={props.prc}
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(iphoneCaseCreator, axios)); // we already pass props here
