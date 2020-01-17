import React, { Component } from 'react';
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

export class IphoneCaseCreator extends Component {
  state = {
    purchasing: false
  }

  componentDidMount () {
    this.props.onInitType();
  }

  updatePurchaseState(type) {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    return purchaseableModels.includes(type);
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({purchasing: true});
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

  render() {
    let orderSummary = null;
    let iPhoneCase = this.props.error ? <p>Case can't be loaded</p> : <Spinner />;

    if (this.props.tp) {
      iPhoneCase = (
        <Aux>
          <IphoneCase type={this.props.tp} />
          <IphoneCaseControls
            typeSelected={this.props.onTypeChanged}
            checkedType={this.props.tp}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
            price={this.props.prc}
            purchaseable={this.updatePurchaseState(this.props.tp)}
             />
        </Aux>
      );
      orderSummary = <OrderSummary
        type={this.props.tp}
        price={this.props.prc}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;
    }

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
      </Modal>
        {iPhoneCase}
      </Aux>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(IphoneCaseCreator, axios)); // we already pass props here
