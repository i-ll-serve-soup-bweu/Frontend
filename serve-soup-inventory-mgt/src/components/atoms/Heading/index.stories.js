import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledHeading from './index';

storiesOf('Heading', module)
  .add('primary', () => <StyledHeading primary>Join</StyledHeading>)
  .add('secondary', () => <StyledHeading secondary>Inventory</StyledHeading>)
;
