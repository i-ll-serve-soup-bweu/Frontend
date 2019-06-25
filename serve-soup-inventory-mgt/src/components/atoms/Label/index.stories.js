import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledLabel from '.';

storiesOf('Label', module)
  .add('default', () => <StyledLabel>Email</StyledLabel>)
;