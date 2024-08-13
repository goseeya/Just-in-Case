import { authLogout } from 'actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authLogout());
  }, []);

  return <Navigate to="/" />;
};

export default Logout;
