import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import useHttpHandler from '../../hooks/http-error-handler';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return props => {
    const [error, clearError] = useHttpHandler(axios);

      return (
        <Aux>
          <Modal
            show={error}
            modalClosed={errorConfirmedHandler}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      );
  }
}

export default withErrorHandler;
