import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  /* width: 200px; */
  height: 100vh;
  background-color: #F1F1F1;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding: 10px 8px;
  
  &.active {
    background-color: white !important;
  }
`;

const Sidebar = () => (
  <Wrapper>
    <StyledNavLink
      to="/notifications"
      activeClassName="active"
    >
      Notifications
    </StyledNavLink>
    <StyledNavLink
      to="/inventory"
      activeClassName="active"
    >
      Inventory
    </StyledNavLink>
  </Wrapper>
);

export default Sidebar;
