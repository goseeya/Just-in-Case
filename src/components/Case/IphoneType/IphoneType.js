import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './iphoneType.css';

class IphoneType extends Component {
  render() {
    let type = null;

    switch (this.props.type) {
      case ('iPhone 6/6s'):
        type = <div className={classes.Iphone6}></div>;
        break;
      case ('iPhone 7/7s'):
        type = <div className={classes.Iphone7}></div>;
        break;
      case ('iPhone 8/8s'):
        type = <div className={classes.Iphone8}></div>;
        break;
      case ('iPhone 9/9s'):
        type = <div className={classes.Iphone9}></div>;
        break;
      default:
        type = null;
    }
    return type;
  }
};

IphoneType.propTypes = {
  type: PropTypes.string.isRequired;
}

export default IphoneType;
