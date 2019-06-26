import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/organisms/LoginForm';
import SignUpForm from './components/organisms/SignUpForm';
import Header from './components/templates/Header';
import InventoryGrid from './components/pages/InventoryGrid';
import InventoryItemDetails from './components/pages/InventoryItemDetails';
import InventoryItemForm from './components/pages/InventoryItemForm';
import CreateKitchenPage from './components/pages/CreateKitchenPage';

function App() {
  return (
    <Router>
      <Header />
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
        component={InventoryItemDetails}
      />

      <PrivateRoute
        exact
        path="/inventory/add-item"
        component={InventoryItemForm}
      />

      <PrivateRoute
        exact
        path="/inventory/:id/edit-item"
        component={InventoryItemForm}
      />

      <PrivateRoute
        exact
        path="/kitchen/create"
        component={CreateKitchenPage}
      />

    </Router>
  );
}

export default App;
