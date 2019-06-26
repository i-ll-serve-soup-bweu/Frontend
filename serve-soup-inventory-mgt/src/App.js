import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import { LoginPage, SignUpPage } from './components/pages';
import SignUpForm from './components/organisms/SignUpForm';
import Header from './components/templates/Header';
import InventoryGrid from './components/pages/InventoryGridPage';
import InventoryItemDetails from './components/pages/InventoryDetailPage';
import InventoryItemForm from './components/pages/InventoryItemPage';
import CreateKitchenPage from './components/pages/CreateKitchenPage';

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
