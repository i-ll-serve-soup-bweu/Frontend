import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StyledButton from './index';

storiesOf('Button', module)
  .add('default', () => <StyledButton onClick={action('clicked')}>Sign In</StyledButton>)
  .add('primary', () => <StyledButton primary onClick={action('clicked')}>Sign In</StyledButton>)
  .add('secondary', () => <StyledButton secondary onClick={action('clicked')}>Save</StyledButton>)
  .add('tertiary', () => <StyledButton tertiary onClick={action('clicked')}>Save</StyledButton>)
  .add('withoutBorder', () => <StyledButton withoutBorder onClick={action('clicked')}>Sign in</StyledButton>)
  .add('save', () => <StyledButton save onClick={action('clicked')}>Sign in</StyledButton>)
  .add('discard', () => <StyledButton discard onClick={action('clicked')}>Sign in</StyledButton>);
