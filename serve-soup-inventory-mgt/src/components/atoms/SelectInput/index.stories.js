import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectInput from '.';

storiesOf('SelectInput', module)
  .add('default', () => (
    <SelectInput>
      <option>Apples</option>
      <option>Bananas</option>
      <option>Grapes</option>
      <option>Oranges</option>
    </SelectInput>
  ))
  .add('medium', () => (
    <SelectInput medium>
      <option>Apples</option>
      <option>Bananas</option>
      <option>Grapes</option>
      <option>Oranges</option>
    </SelectInput>
  ));
