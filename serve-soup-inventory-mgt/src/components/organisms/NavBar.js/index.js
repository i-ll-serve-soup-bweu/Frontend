import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import pt from 'prop-types';

import { doLogOut } from '../../../actions';

function NavBar(props) {
  const logOut = () => {
    props.doLogOut();
    window.location.reload();
  };
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/inventory/add-item">New Inventory Item</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <button type="submit" onClick={logOut}>Logout</button>
    </div>
  );
}

export default connect(null, { doLogOut })(NavBar);

NavBar.propTypes = {
  doLogOut: pt.func.isRequired,
};
