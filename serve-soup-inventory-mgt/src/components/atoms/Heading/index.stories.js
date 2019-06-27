import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledHeading from './index';

storiesOf('Heading', module)
  .add('default', () => <StyledHeading default>Join</StyledHeading>)
  .add('primary', () => <StyledHeading primary>Join</StyledHeading>)
  .add('secondary', () => <StyledHeading secondary>Inventory</StyledHeading>)
  .add('tertiary', () => <StyledHeading tertiary>Inventory</StyledHeading>)
  .add('info', () => <StyledHeading info>Inventory</StyledHeading>)
;
