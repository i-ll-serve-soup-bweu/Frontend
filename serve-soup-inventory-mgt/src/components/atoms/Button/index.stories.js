import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StyledButton from './index';

storiesOf('Button', module)
  .add('primary', () => <StyledButton primary onClick={action('clicked')}>Sign In</StyledButton>)
  .add('secondary', () => <StyledButton secondary onClick={action('clicked')}>Save</StyledButton>)
;
