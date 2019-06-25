import React from 'react';

import { storiesOf } from '@storybook/react';

import StyledInput from './index';

storiesOf('Input', module)
  .add('register', () => <StyledInput register />)
  .add('small', () => <StyledInput small />)
  .add('medium', () => <StyledInput medium />)
  .add('large', () => <StyledInput large />)
  .add('checkbox', () => <StyledInput type="checkbox" />)
  .add('radio', () => <StyledInput type="radio" />)
  .add('checkbox disabled', () => <StyledInput type="radio" disabled />)
;
