import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PrivateRoute from './components/PrivateRoute';
import { Sidebar, DisplayInventory, InventoryItemForm } from './components/organisms';
import { LoginPage, SignUpPage, CreateKitchenPage } from './components/pages';
import { DashboardTemplate } from './components/templates';

const StyledSidebar = styled.div`
  width: 200px;
`;

const StyledDashboardContent = styled.div`
  width: 600px;
`;

function App() {
  return (
    <Router>
      <Route
        exact
        path="/login"
        component={LoginPage}
      />
      <Route
        exact
        path="/signup"
        component={SignUpPage}
      />
      <PrivateRoute
        exact
        path="/kitchen/create"
        component={CreateKitchenPage}
      />
      <DashboardTemplate>
        <StyledSidebar>
          <Sidebar />
        </StyledSidebar>
        <StyledDashboardContent>
          <Switch>
            <PrivateRoute
              exact
              path={['/', '/inventory']}
              component={DisplayInventory}
            />
            <PrivateRoute
              exact
              path="/inventory/:id"
              component={InventoryItemForm}
            />
            <PrivateRoute
              exact
              path="/inventory/add-item"
              component={InventoryItemForm}
            />
          </Switch>
        </StyledDashboardContent>
      </DashboardTemplate>
    </Router>
  );
}

export default App;
