import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuthValue } from './auth-context';

export const PrivateRoute: React.FC<any> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn } = useAuthValue();
  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
