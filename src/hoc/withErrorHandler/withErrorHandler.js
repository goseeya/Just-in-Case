import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import useHttpHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpHandler(axios);

    const errorConfirmedHandler = () => {
        console.log('close')
      }

    return (
      <>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
