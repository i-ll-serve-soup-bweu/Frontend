import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/organisms/LoginForm';
import SignUpForm from './components/organisms/SignUpForm';

function App() {

  return (
    <Router>
      <Route 
        exact
        path='/login'
        component={LoginForm}
      />
      <Route 
        exact
        path='/signup'
        component={SignUpForm}
      />
    </Router>
  );
}

export default App;
