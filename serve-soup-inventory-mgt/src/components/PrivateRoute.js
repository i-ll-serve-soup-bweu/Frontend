import React from 'react';
import pt from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('soupUserToken') ? (
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
