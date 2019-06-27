import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pt from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { doLogOut } from '../../../actions';
import { StyledLogoText, StyledButton } from '../../atoms';

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 8px 6px -10px black;
  line-height: 2;
  padding: 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  .active {
    color: #79AC48;
  }
`;

const StyledAuthNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const StyledRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const AppNav = ({ loggedIn, doLogOut }) => {
  const logOut = () => {
    doLogOut();
    window.location.reload();
  };

  return (
    <StyledNavContainer>
      {/* <div /> */}
      <StyledLink
        to="/"
      >
        <StyledLogoText>I&apos;ll Serve Soup</StyledLogoText>
      </StyledLink>

      {
      loggedIn
        ? (
          <StyledRightNav>
            <StyledNavLink
              to="/"
            >
              Inventory
            </StyledNavLink>
            <StyledNavLink
              to="/orders"
            >
              Orders
            </StyledNavLink>
            <StyledNavLink
              to="/donations"
            >
              Donations
            </StyledNavLink>
            <span>|</span>
            <StyledButton tertiary onClick={logOut}>Logout</StyledButton>
          </StyledRightNav>
        )
        : (
          <StyledAuthNav>
            <StyledLink
              to="/login"
            >
              <StyledButton withoutBorder>Sign in</StyledButton>
            </StyledLink>
            <StyledLink
              to="/signup"
            >
              <StyledButton tertiary>Get Started</StyledButton>
            </StyledLink>
          </StyledAuthNav>
        )
    }
    </StyledNavContainer>
  );
};

export default connect(null, { doLogOut })(AppNav);

AppNav.defaultProps = {
  loggedIn: undefined,
};

AppNav.propTypes = {
  doLogOut: pt.func.isRequired,
  loggedIn: pt.bool,
};
