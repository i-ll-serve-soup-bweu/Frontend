import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledActionButton from './index';

storiesOf('ActionButton', module)
  .add('add', () => <StyledActionButton>+</StyledActionButton>)
;
