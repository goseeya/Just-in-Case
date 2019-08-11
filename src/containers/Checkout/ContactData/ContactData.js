import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    alert('You continue!');
    this.setState({ loading: true });
    const order = {
      type: this.props.type,
      price: this.props.price,
      customer: {
        name: 'Gosia Rakowska',
        address: {
          street: 'Rakowska 11/128',
          zipCode: '12345',
          country: 'Holland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
      this.setState({ loading: false });
    });
  }

  render () {
    let form = (
      <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
        <input className={styles.Input} type="email" name="email" placeholder="Your Mail" />
        <input className={styles.Input} type="text" name="steet" placeholder="Street" />
        <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
