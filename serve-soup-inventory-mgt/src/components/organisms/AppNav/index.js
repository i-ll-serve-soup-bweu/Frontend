import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { StyledLogoText, StyledButton } from '../../atoms';

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 8px 6px -10px black;
  line-height: 2;
  margin: 0 auto 5px auto;
  padding: 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
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

const AppNav = ({ loggedIn }) => (
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
            <StyledNavLink>
              Inventory
            </StyledNavLink>
            <StyledNavLink>
              Orders
            </StyledNavLink>
            <StyledNavLink>
              Donations
            </StyledNavLink>
            <span>|</span>
            <div>profile</div>
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

export default AppNav;
