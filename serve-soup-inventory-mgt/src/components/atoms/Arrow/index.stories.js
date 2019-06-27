import React from 'react';
import { storiesOf } from "@storybook/react";

import Arrow from '.';

storiesOf('Arrow', module)
  .add('right', () => <Arrow right />);
