import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PrivateRoute from './components/PrivateRoute';
import { Sidebar, InventoryItemForm } from './components/organisms';
import { LoginPage, SignUpPage, CreateKitchenPage } from './components/pages';
import { DashboardTemplate } from './components/templates';
import InventoryGridPage from './components/pages/InventoryGridPage';
import Premium from './components/pages/Premium';

const StyledSidebar = styled.div`
  width: 25%;

  @media (max-width: 760px) {
    display: none;
  }
`;

const StyledDashboardContent = styled.div`
  width: 75%;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
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
                component={InventoryGridPage}
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
              <PrivateRoute
                exact
                path="/notifications"
                component={() => <Premium text="Notification" />}
              />
              <PrivateRoute
                exact
                path="/orders"
                component={() => <Premium text="Orders" />}
              />
              <PrivateRoute
                exact
                path="/donations"
                component={() => <Premium text="Donation" />}
              />
            </Switch>
          </StyledDashboardContent>
        </DashboardTemplate>
      </Switch>
    </Router>
  );
}

export default App;
