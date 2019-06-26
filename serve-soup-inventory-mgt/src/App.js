import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/organisms/LoginForm';
import SignUpForm from './components/organisms/SignUpForm';
import Header from './components/templates/Header';
import InventoryGrid from './components/pages/InventoryGridPage';
import InventoryItemDetailForm from './components/organisms/InventoryItemDetailForm';
import CreateKitchenPage from './components/pages/CreateKitchenPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
        <Route
          exact
          path="/signup"
          component={SignUpForm}
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
          path="/inventory/:id/edit-item"
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
