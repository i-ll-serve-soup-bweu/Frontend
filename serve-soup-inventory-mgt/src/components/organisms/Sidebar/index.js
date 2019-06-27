import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';

import { doLogOut } from '../../../actions';
import { StyledButton } from '../../atoms';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #F1F1F1;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9e9;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0;
  padding: 1rem;
  display: flex;
  
  &.active {
    background-color: white !important;
  }

  img {
    width: 1.5rem;
    padding-right: .5rem;
  }
`;

const Sidebar = ({ mobile, doLogOut }) => {
  const logOut = () => {
    doLogOut();
    window.location.reload();
  };
  return (
    <Wrapper>
      <StyledNavLink
        to="/notifications"
        activeClassName="active"
      >
        <img src="https://image.flaticon.com/icons/svg/941/941593.svg" alt="notifications" />
      Notifications
      </StyledNavLink>
      <StyledNavLink
        to="/inventory"
        activeClassName="active"
      >
        <img src="https://image.flaticon.com/icons/svg/321/321769.svg" alt="inventory" />
      Inventory
      </StyledNavLink>
      {
        mobile 
        && <StyledButton tertiary onClick={logOut}>Logout</StyledButton>
      }
    </Wrapper>
  );
};

export default connect(null, { doLogOut })(Sidebar);

Sidebar.propTypes = {
  doLogOut: pt.func.isRequired,
};
