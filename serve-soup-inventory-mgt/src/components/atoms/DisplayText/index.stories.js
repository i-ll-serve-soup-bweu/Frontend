import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledDisplayText from '.';

storiesOf('Display Text', module)
  .add('default', () => <StyledDisplayText>Categories</StyledDisplayText>)
  .add('selected', () => <StyledDisplayText selected>Categories</StyledDisplayText>)
  .add('primary', () => <StyledDisplayText primary>Categories</StyledDisplayText>)
;
