import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import { LoginPage, SignUpPage, CreateKitchenPage } from './components/pages';
import InventoryGrid from './components/pages/InventoryGridPage';
import InventoryItemDetailForm from './components/organisms/InventoryItemDetailForm';

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
          path={['/', '/inventory']}
          component={InventoryGrid}
        />

        <PrivateRoute
          exact
          path="/inventory/:id"
          component={InventoryItemDetailForm}
        />

        <PrivateRoute
          exact
          path="/inventory/add-item"
          component={InventoryItemDetailForm}
        />

        <PrivateRoute
          exact
          path="/kitchen/create"
          component={CreateKitchenPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
