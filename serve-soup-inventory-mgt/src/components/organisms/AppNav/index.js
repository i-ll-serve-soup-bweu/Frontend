import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { StyledLogoText, StyledButton } from '../../atoms';

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: white;
  box-shadow: 0 8px 6px -10px black;
  line-height: 3;
  padding: 0 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #B0B0B0;
  text-align: center;
  font-size: 12px;
  width: 100px;
  font-weight: bold;
  &.active {
    color: #79AC48;
    border-bottom: 3px solid;
  }
`;

const StyledAuthNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const StyledMiddleNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const StyledRightNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
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
          <>
            <StyledMiddleNav>
              <StyledNavLink
                to="/"
              >
                INVENTORY
              </StyledNavLink>
              <StyledNavLink
                to="/orders"
              >
                ORDERS
              </StyledNavLink>
              <StyledNavLink
                to="/donations"
              >
                DONATIONS
              </StyledNavLink>
            </StyledMiddleNav>
            <StyledRightNav>
              <span>|</span>
              <div>profile</div>
            </StyledRightNav>
          </>
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
