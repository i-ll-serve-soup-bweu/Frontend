import React from 'react';
import pt from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (Auth.isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    ))
      }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: pt.oneOfType([pt.func, pt.object]).isRequired,
};
