import React from 'react';
import { storiesOf } from '@storybook/react';

import DisplayText from '.';

storiesOf('Display Text', module)
  .add('default', () => <DisplayText>Categories</DisplayText>)
  .add('selected', () => <DisplayText selected>Categories</DisplayText>)
;