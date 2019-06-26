import React from 'react';
import { storiesOf } from '@storybook/react';

import StyledRegisterCard from '.';

storiesOf('StyledRegisterCard', module)
  .add('default', () => (
    <StyledRegisterCard>
      <h4>Random stuff here</h4>
    </StyledRegisterCard>
  ))
;