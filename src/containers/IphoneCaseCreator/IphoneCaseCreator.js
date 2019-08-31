import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import IphoneCase from '../../components/IphoneCase/IphoneCase';
import IphoneCaseControls from '../../components/IphoneCase/IphoneCaseControls/IphoneCaseControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IphoneCase/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

const IPHONE_TYPE_PRICE = {
  iPhone6: 100,
  iPhone7: 110,
  iPhone8: 120,
  iPhone9: 130
}

class IphoneCaseCreator extends Component {
  state = {
    price: 100,
    purchaseable: true,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount () {
    axios.get('https://react-iphone-case.firebaseio.com/type.json')
      .then(response => {
        Object.filter = (obj, predicate) =>
          Object.keys(obj)
            .filter( key => predicate(obj[key]))
            .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

        let iPhoneType = Object.filter(response.data, type => type);
        let typeToReturn = Object.keys(iPhoneType)[0];
        this.setState({type: typeToReturn});
      })
      .catch(error => {
        this.setState({error: true});
      });
    }

  updatePurchaseState(type) {
    const purchaseableModels = ['iPhone6', 'iPhone7', 'iPhone8'];
    this.setState({ purchaseable: purchaseableModels.includes(type)});
  }

  selectType = (type) => {
    const newPrice = IPHONE_TYPE_PRICE[type];
    this.setState({
      type: type,
      price: newPrice
    })
    this.updatePurchaseState(type);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    queryParams.push(encodeURIComponent('type') + '=' + encodeURIComponent(this.props.tp));
    queryParams.push('price=' + this.state.price);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    let orderSummary = null;
    let iPhoneCase = this.state.error ? <p>Case can't be loaded</p> : <Spinner />;

    if (this.props.tp) {
      iPhoneCase = (
        <Aux>
          <IphoneCase type={this.props.tp} />
          <IphoneCaseControls
            typeSelected={this.props.onTypeChanged}
            checkedType={this.props.tp}
            ordered={this.purchaseHandler}
            price={this.state.price}
            purchaseable={this.state.purchaseable}
             />
        </Aux>
      );
      orderSummary = <OrderSummary
        type={this.props.tp}
        price={this.state.price}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

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
    tp: state.type
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTypeChanged: (iType) => dispatch({type: actionTypes.CHANGE_TYPE, iPhoneType: iType})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(IphoneCaseCreator, axios)); // we already pass props here
