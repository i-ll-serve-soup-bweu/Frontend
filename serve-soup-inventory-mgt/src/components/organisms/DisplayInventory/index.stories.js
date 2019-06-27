import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DisplayInventory from '.';

storiesOf('DisplayInventory', module)
  .add('default', () => (
    <Router>
      <DisplayInventory />
    </Router>
  ));
