import React from 'react';
import { storiesOf } from '@storybook/react';

import ActionButton from './index';

storiesOf('ActionButton', module)
  .add('add', () => <ActionButton>+</ActionButton>)
  .add('edit', () => <ActionButton />)
;