import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from '.';

storiesOf('Sidebar', module)
  .add('default', () => (
    <Router>
      <Sidebar />
    </Router>
  ));
