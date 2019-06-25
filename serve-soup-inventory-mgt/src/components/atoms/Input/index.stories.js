import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Input', module)
  .add('register', () => <Input register />)
  .add('small', () => <Input small />)
  .add('medium', () => <Input medium />)
  .add('large', () => <Input large />)
  .add('checkbox', () => <Input type="checkbox" />)
  .add('radio', () => <Input type="radio" />)
  .add('checkbox disabled', () => <Input type="radio" disabled />)
;