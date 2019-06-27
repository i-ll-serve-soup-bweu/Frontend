import React, { useEffect } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import pt from 'prop-types';
import styled from 'styled-components';

import { doGetKitchen } from '../../../actions';
import { DisplayInventory, AppNav, Sidebar, InventoryItemForm } from '../../organisms';
import { StyledHeading, StyledActionButton, LoaderContainer } from '../../atoms';
import { DashboardTemplate } from '../../templates';

const StyledInventoryGrid = styled.div`
  margin: 0 5rem;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSidebar = styled.div`
  width: 200px;
`;

const StyledDashboardContent = styled.div`
  width: 600px;
`;

function InventoryGrid({
  doGetKitchen, kitchen, loadingKitchen, error, history,
}) {
  useEffect(() => {
    doGetKitchen();
  }, [doGetKitchen]);

  if (loadingKitchen) {
    return (
      <LoaderContainer text="loading kitchen" />
    );
  }

  if (!kitchen) {
    return (
      <Redirect
        to="/kitchen/create"
      />
    );
  }

  return (
    <div>
      <DashboardTemplate>
        <StyledSidebar>
          <Sidebar />
        </StyledSidebar>
        <StyledDashboardContent>
          <Switch>
            <Route
              exact
              path="/inventory"
              component={DisplayInventory}
            />
            <Route
              exact
              path="/inventory/:id"
              component={InventoryItemForm}
            />
            <Route
              exact
              path="/inventory/add-item"
              component={InventoryItemForm}
            />
          </Switch>
        </StyledDashboardContent>
      </DashboardTemplate>
    </div>
    // <div>
    //   <AppNav loggedIn />
    //  <StyledInventoryGrid>
    //    {
    //     error && <p>{error}</p>
    //    }
    //    <StyledHeaderContainer>
    //      <StyledHeading>Inventory</StyledHeading>
    //      <Link to="/inventory/add-item"><StyledActionButton>+</StyledActionButton></Link>
    //    </StyledHeaderContainer>
    //   <DisplayInventory history={history} />
    //  </StyledInventoryGrid>
    // </div>
  );
}

const mapStateToProps = state => ({
  kitchen: state.user.kitchen,
  loadingKitchen: state.user.loadingKitchen,
  error: state.user.error,
});

export default connect(mapStateToProps, { doGetKitchen })(InventoryGrid);

InventoryGrid.defaultProps = {
  kitchen: undefined,
};

InventoryGrid.propTypes = {
  doGetKitchen: pt.func.isRequired,
  kitchen: pt.shape({
    id: pt.number,
    kitchen_name: pt.string,
    location: pt.string,
    description: pt.string,
    km_id: pt.number,
  }),
  loadingKitchen: pt.bool.isRequired,
  error: pt.string.isRequired,
};
