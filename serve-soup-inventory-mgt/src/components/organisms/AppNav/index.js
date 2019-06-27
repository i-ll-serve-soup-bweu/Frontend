import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import pt from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Spin } from 'react-burgers';
import CheeseburgerMenu from 'cheeseburger-menu';

import { doLogOut } from '../../../actions';
import { StyledLogoText, StyledButton } from '../../atoms';
import { Sidebar } from '..';
import Auth from '../../../auth';

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 0 4px rgba(0,0,0,.6);
  padding: 0 5rem;
  align-items: stretch;
  max-width: 100%;
  z-index: 4;

  @media (max-width: 760px) {
    padding: .5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #B0B0B0;
  text-align: center;
  font-size: .8rem;
  border-bottom: 3px solid;
  font-weight: bold;
  &.active {
    color: #79AC48;
    border-bottom: 3px solid;
  }
`;

const StyledAuthNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMiddleNav = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    padding: 1.2rem 3rem;
  }

   @media (max-width: 760px) {
    display: none;
  }
`;

const StyledRightNav = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    display: none;
  }
`;

const MobileSubNav = styled.div`
  display: flex;
  justify-content: center;
  a {
    display: inline-block;
    padding: .5rem;
    font-weight: normal;
    border-bottom: 2px solid;
    border-right: 1px solid;

    &:first-of-type {
      border-left: 1px solid;
    }
  }
  
`;

const StyledSpin = styled(Spin)`
  @media (min-width: 760px) {
    display: none!important;
  }
`;

const AppNav = ({ doLogOut }) => {
  const logOut = () => {
    doLogOut();
    window.location.reload();
  };

  const [hamburgerOpen, setHambugerOpen] = useState(false);

  return (
    <>
      <StyledNavContainer>
        {/* <div /> */}
        <StyledLink
          to="/"
        >
          <StyledLogoText>I&apos;ll Serve Soup</StyledLogoText>
        </StyledLink>

        {
        Auth.isAuthenticated()
          ? (
            <>
              <StyledMiddleNav>
                <StyledNavLink
                  to="/inventory"
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
              <CheeseburgerMenu
                isOpen={hamburgerOpen}
                closeCallback={() => setHambugerOpen(false)}
              >
                <div>
                  <Sidebar mobile />
                </div>
              </CheeseburgerMenu>
              <StyledRightNav>
                <StyledButton tertiary onClick={logOut}>Logout</StyledButton>
              </StyledRightNav>
              <StyledSpin
                onClick={() => setHambugerOpen(!hamburgerOpen)}
                lineSpacing={11}
                borderRadius={4}
                color="#8cbd53"
                active={hamburgerOpen}
              />
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
      {
        Auth.isAuthenticated()
        && (
        <MobileSubNav>
          <StyledNavLink
            to="/inventory"
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
        </MobileSubNav>
        )
      }
    </>
  );
};

export default connect(null, { doLogOut })(AppNav);

AppNav.propTypes = {
  doLogOut: pt.func.isRequired,
};
