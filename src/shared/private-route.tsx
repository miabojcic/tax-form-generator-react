import React from 'react';
import { Redirect, Route } from 'react-router';
import { AuthConsumer } from './auth-context';

export const PrivateRoute: React.FC<any> = ( {component: Component, ...rest }) => {
    return (
  <AuthConsumer>
      {(userAuthState) => (
          <Route {...rest} render={(props) => {
              console.log('render privateRoute', userAuthState.isLoggedIn);
              return (userAuthState.isLoggedIn === true
                  ? <Component {...props} />
                  : <Redirect to='/login' />
          )}} />
      )}
  </AuthConsumer>
)}



