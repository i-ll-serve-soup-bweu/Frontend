import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PrivateRoute from './components/PrivateRoute';
import { Sidebar, InventoryItemForm } from './components/organisms';
import { LoginPage, SignUpPage, CreateKitchenPage } from './components/pages';
import { DashboardTemplate } from './components/templates';
import InventoryGridPage from './components/pages/InventoryGridPage';

const StyledSidebar = styled.div`
  width: 25%;
`;

const StyledDashboardContent = styled.div`
  width: 75%;
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
            </Switch>
          </StyledDashboardContent>
        </DashboardTemplate>
      </Switch>
    </Router>
  );
}

export default App;
