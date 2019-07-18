import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './IphoneType.module.css';

class IphoneType extends Component {
  render() {
    let type = null;

    switch (this.props.type) {
      case ('iPhone6'):
        type = <div className={styles.Iphone6}></div>;
        break;
      case ('iPhone7'):
        type = <div className={styles.Iphone7}></div>;
        break;
      case ('iPhone8'):
        type = <div className={styles.Iphone8}></div>;
        break;
      case ('iPhone9'):
        type = <div className={styles.Iphone9}></div>;
        break;
      default:
        type = null;
    }
    return type;
  }
};

IphoneType.propTypes = {
  type: PropTypes.string.isRequired
}

export default IphoneType;
