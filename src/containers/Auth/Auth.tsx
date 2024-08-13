import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Auth.scss';
import { updateObject, checkValidity } from '../../shared/utility';
import { setAuthRedirectPath, startAuth } from 'actions/auth/auth';
import useAuth from 'hooks/use-auth';
import useCaseCreator from 'hooks/use-case-creator';
import { useIsAuthenticated } from 'hooks/use-is-authenticated';
const Auth = () => {
  
  // TODO export
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch<any>();
  const { loading, error, token, authRedirectPath } = useAuth();
  const { creatingCase } = useCaseCreator();
  const isAuthenticated = useIsAuthenticated();
  const onSetAuthRedirectPath = () => {
    dispatch(setAuthRedirectPath('/'));
  }

  useEffect(() => {
    if (!creatingCase && authRedirectPath !== '/') {
      onSetAuthRedirectPath();
    }
  }, []);

  const inputChangeHandler = (event: MouseEvent, controlName: string) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation,
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedControls);
  };

  const onAuth = () => {
    dispatch(startAuth(authForm.email.value, authForm.password.value, isSignup));
  }

  const submitHandler = (event: MouseEvent) => {
    event.preventDefault();
    onAuth();
  };


  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (const key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      elementValue={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event: MouseEvent) => inputChangeHandler(event, formElement.id)}
    />
  ));

  if (loading) {
    form = <Spinner />;
  }

  let errorMessage = null;

  if (error) {
    errorMessage = <p>{error.message}</p>;
  }

  let authRedirect = null;
  
  if (isAuthenticated) {
    authRedirect = <Navigate to={authRedirectPath} />;
  }

  return (
    <div className="auth">
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="success">SUBMIT</Button>
      </form>
      <Button style={{color: 'red'}} clicked={switchAuthModeHandler} btnType="Danger">
        SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}
      </Button>
    </div>
  );
};

export default Auth;
