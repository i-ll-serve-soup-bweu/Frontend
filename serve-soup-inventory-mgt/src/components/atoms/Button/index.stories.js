import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Sign In</Button>)
;