import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledLogoText, StyledButton } from '../../atoms';

const StyledNavContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const AppNav = () => (
  <StyledNavContainer>
    <div></div>
    <Link
      to="/"
    >
      <StyledLogoText>I&apos;ll Serve Soup</StyledLogoText>
    </Link>

    <div>
      <Link
        to="/login"
      >
        <StyledButton withoutBorder>Sign in</StyledButton>
      </Link>
      <Link
        to="/signup"
      >
        <StyledButton primary>Get Started</StyledButton>
      </Link>
    </div>
  </StyledNavContainer>
);

export default AppNav;
