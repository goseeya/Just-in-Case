import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return props => {
    const [error, setError] = useState(null);

      // I removed componentWillMount, because this code is executed before jsx is executed
      // for interceptors not to rebuild after wrappg every new elem
      const requestInterceptor = axios.interceptors.request.use(req => {
        //clear errors
      setError(null);
        return req;
      });
      const   responseInterceptor = axios.interceptors.response.use(res => res, err => {
        setError(err);
      });


    useEffect(() => {
      // when component is not required anymore
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
    setError(null);
    }

      return (
        <Aux>
          <Modal
            show={error}
            modalClosed={errorConfirmedHandler}>
            {this.state.error ? error.message : null}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      );
  }
}

export default withErrorHandler;
