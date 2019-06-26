import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppNav from '.';

storiesOf('AppNav', module)
  .add('AppBar', () => (
    <Router>
      <AppNav />
    </Router>
  ));
