import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';

import { doLogOut, doFilterItem } from '../../../actions';
import { StyledButton, StyledHeading } from '../../atoms';

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

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  
  &:active {
    background-color: white !important;
  }

  img {
    width: 1.5rem;
    padding-right: .5rem;
  }
`;

const Sidebar = ({ mobile, doLogOut, doFilterItem, kitchen }) => {
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
        onClick={() => doFilterItem(kitchen.id)}
      >
        <img src="https://image.flaticon.com/icons/svg/321/321769.svg" alt="inventory" />
      Inventory
      </StyledNavLink>
      <StyledHeading style={{ margin: '2rem' }} secondary>Categories</StyledHeading>
      <StyledLink onClick={() => doFilterItem(kitchen.id, 'Produce')}>Produce</StyledLink>
      <StyledLink onClick={() => doFilterItem(kitchen.id, 'Dry Goods')}>Dry Goods</StyledLink>
      <StyledLink onClick={() => doFilterItem(kitchen.id, 'Dairy')}>Dairy</StyledLink>
      <StyledLink onClick={() => doFilterItem(kitchen.id, 'Canned Goods')}>Canned Goods</StyledLink>
      {
        mobile
        && <StyledButton tertiary onClick={logOut}>Logout</StyledButton>
      }
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  inventory: state.inventory.inventory,
  loadingInventory: state.inventory.loadingInventory,
  error: state.inventory.error,
});

export default connect(mapStateToProps, { doLogOut, doFilterItem })(Sidebar);

Sidebar.propTypes = {
  doLogOut: pt.func.isRequired,
};
